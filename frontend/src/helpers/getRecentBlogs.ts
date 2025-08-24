import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const blogsDirectory = path.join(process.cwd(), 'blogs');

type BlogData = {
    slug: string;
    date: string;
    [key: string]: any;
};

export const getRecentBlogs = () => {
    const fileNames = fs.readdirSync(blogsDirectory);
    const allBlogsData: BlogData[] = fileNames.map((fileName) => {
        const slug = fileName.replace(/\.md$/, '');
        const fullPath = path.join(blogsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const matterResult = matter(fileContents);

        return {
            slug,
            ...matterResult.data,
        } as BlogData;
    });

    const sortedBlogs = allBlogsData.sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return dateB.getTime() - dateA.getTime();
    });

    return sortedBlogs.slice(0, 3);
};


export default getRecentBlogs;