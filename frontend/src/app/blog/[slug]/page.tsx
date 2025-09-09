import { getBlog } from "@/helpers/getBlog";
import { Calendar, ArrowLeft, User } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import NotFound from "./not-found";
import { Blog } from "@/types/blog";
import { Metadata } from "next";


type PageProps = {
    params: Promise<{ slug: string }>;
};


export async function generateMetadata({
    params,
}: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const blog: Blog = await getBlog(slug);
    return {
        title: blog.title,
    };
}

export default async function BlogPage({
    params,
}: PageProps) {
    const { slug } = await params;
    const blog: Blog = await getBlog(slug);

    if (!blog) {
        return <NotFound />;
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
            <Header />
            <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="mb-6">
                    <Link href="/blog" className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Blog
                    </Link>
                </div>

                <article className="bg-white rounded-none shadow-sm overflow-hidden">
                    <div className="relative w-full aspect-[16/9]">
                        <Image
                            src={`/thumbnails/${blog.slug}.png`}
                            alt={`Hero image for ${blog.title}`}
                            fill
                            className="object-cover"
                        />
                    </div>

                    <div className="p-6 md:p-8 [&>*]:mb-4">

                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                            {blog.title}
                        </h1>

                        <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600">
                            <div className="flex items-center space-x-2">
                                <User className="h-4 w-4" />
                                <span>{blog.author}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Calendar className="h-4 w-4 pr-1" />
                                {new Date(blog?.date).toLocaleDateString()}
                            </div>
                        </div>

                        <div className="prose prose-lg max-w-none space-y-4" dangerouslySetInnerHTML={{ __html: blog.contentHtml }} />

                    </div>
                </article>




            </main>

            <Footer />

        </div>
    );
}