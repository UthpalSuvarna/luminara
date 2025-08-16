import fetchBlog from "@/helpers/getBlog";
import { Calendar, ArrowLeft, User } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import ContentRenderer from "./ContentRenderer";
import NotFound from "./not-found";

export default async function Blog({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;


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
                            src='/img1.jpg'
                            alt="Blog post hero image"
                            fill
                            className="object-cover"
                        />
                    </div>

                    <div className="p-6 md:p-8">

                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                            Blog Post Title
                        </h1>

                        <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 mb-6">
                            <div className="flex items-center space-x-2">
                                <User className="h-4 w-4" />
                                <span>Author</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Calendar className="h-4 w-4 pr-1" />
                                Date
                            </div>
                        </div>

                        <div className="prose prose-lg max-w-none">
                            content
                        </div>


                    </div>
                </article>




            </main>

            <Footer />

        </div>
    );
}
