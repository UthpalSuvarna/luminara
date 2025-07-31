import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ArrowLeft, Calendar, User } from "lucide-react";
import Link from "next/link";

export default function Loading() {
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

                <article className="bg-white rounded-none shadow-sm overflow-hidden animate-pulse">
                    <div className="relative w-full aspect-[16/9] bg-gray-200">
                        {/* Skeleton for Image */}
                    </div>

                    <div className="p-6 md:p-8">
                        {/* Skeleton for Title */}
                        <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>

                        <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 mb-6">
                            {/* Skeleton for Author */}
                            <div className="flex items-center space-x-2">
                                <User className="h-4 w-4 text-gray-300" />
                                <div className="h-4 bg-gray-200 rounded w-24"></div>
                            </div>
                            {/* Skeleton for Date */}
                            <div className="flex items-center space-x-2">
                                <Calendar className="h-4 w-4 text-gray-300" />
                                <div className="h-4 bg-gray-200 rounded w-20"></div>
                            </div>
                        </div>

                        {/* Skeleton for Content */}
                        <div className="space-y-4 mt-6">
                            <div className="h-4 bg-gray-200 rounded"></div>
                            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                            <div className="h-4 bg-gray-200 rounded"></div>
                            <div className="h-4 bg-gray-200 rounded w-4/6"></div>
                            <div className="h-4 bg-gray-200 rounded"></div>
                            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                        </div>
                    </div>
                </article>
            </main>
            <Footer />
        </div>
    );
}
