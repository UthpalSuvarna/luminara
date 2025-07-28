import fetchBlog from "@/helpers/getBlog";
import { Calendar, ArrowLeft, User } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"


export default async function Blog({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const blog = await fetchBlog(slug);
    console.log(blog.data[0].Banner.url)
    const content = blog.data[0].Content;

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
                            src={`${process.env.BACKEND_API_ENDPOINT}${blog.data[0].Banner?.url}`}
                            alt="Blog post hero image"
                            fill
                            className="object-cover"
                        />
                    </div>

                    <div className="p-6 md:p-8">

                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                            5 Simple Mindfulness Techniques to Reduce Daily Stress
                        </h1>

                        <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 mb-6">
                            <div className="flex items-center space-x-2">
                                <User className="h-4 w-4" />
                                <span>{blog.data[0].Author}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Calendar className="h-4 w-4 pr-1" />
                                {new Date(blog.data[0].createdAt).toLocaleString('default', { month: 'long', year: 'numeric' })}
                            </div>
                        </div>

                        <div className="prose prose-lg max-w-none">
                            <p>The content goes here</p>
                        </div>


                    </div>
                </article>




            </main>

            <Footer />

        </div>
    );
}
