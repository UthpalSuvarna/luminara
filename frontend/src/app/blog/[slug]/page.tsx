import fetchBlog from "@/helpers/getBlog";
import RichTextRenderer from "./RichTextRenderer";
export default async function Blog({ params }: { params: { slug: string } }) {
    const { slug } = await params;
    const blog = await fetchBlog(slug);
    const content = blog.data[0].Content;
    console.log(content[2])
    return (
        <div>
            <p>{blog.data[0].Title}</p>
            <p>{blog.data[0].createdAt}</p>
            <RichTextRenderer content={blog.data[0].Content} />
        </div>
    );
}