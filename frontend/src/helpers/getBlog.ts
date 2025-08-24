import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import { Blog } from '@/types/blog';

const blogsDirectory = path.join(process.cwd(), 'blogs');

export const getBlog = async (slug: string): Promise<Blog> => {
  const fullPath = path.join(blogsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    slug,
    contentHtml,
    ...(matterResult.data as { title: string; author: string; date: string }),
  };
};
