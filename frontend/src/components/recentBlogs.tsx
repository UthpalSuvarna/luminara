import fetchRecentBlogs from "@/helpers/getRecentBlogs";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Calendar, User, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export async function RecentBlogs() {
    const blogs = await fetchRecentBlogs();

    return (
        <>
            {blogs.data && blogs.data.map((blog: any) => (
                <Card key={1} className="rounded-none pt-0 overflow-hidden hover:shadow-lg transition-shadow">
                    <Image
                        src={`${blog.Banner?.url}`}
                        alt={blog.Title}
                        className="w-full h-full object-cover"
                        width={500}
                        height={300}
                    />
                    <CardContent className="p-6">
                        <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2" style={{ minHeight: "3em" }}>{blog.Title}</h3>
                        <div className="text-sm text-gray-500 mb-4">
                            <div className="flex items-center gap-1">
                                <User className="h-4 w-4" />
                                Author : {blog.Author}
                            </div>
                            <div className="flex items-center gap-1">
                                <Calendar className="h-4 w-4" />
                                Published on : {new Date(blog.createdAt).toLocaleString('default', { month: 'long', year: 'numeric' })}
                            </div>
                        </div>
                        <div className="flex items-center justify-between">
                            <Button variant="outline" size="sm" asChild >
                                <Link href={`/blog/${blog.slug}`} className="inline-flex items-center gap-1 rounded-none">
                                    Read More <ArrowRight className="h-3 w-3" />
                                </Link>
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            ))}
        </>
    );
}