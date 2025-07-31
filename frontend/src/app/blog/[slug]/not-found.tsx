import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 flex flex-col">
            <Header />
            <main className="flex-grow flex flex-col items-center justify-center text-center px-4">
                <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
                <p className="text-xl text-gray-600 mb-8">Blog post not found.</p>
                <Link href="/blog" className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Blog
                </Link>
            </main>
            <Footer />
        </div>
    );
}
