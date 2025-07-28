"use client";
import { BlocksRenderer, type BlocksContent } from '@strapi/blocks-react-renderer';

import Link from "next/link";
import { format } from 'path';

export default function ContentRenderer({ content }: { content: any }) {
    return (
        <div className="prose prose-lg max-w-none">
            <BlocksRenderer
                content={content}
                blocks={{
                    paragraph: ({ children }) => <p className="leading-7 [&:not(:first-child)]:mt-6">{children}</p>,
                    heading: ({ children, level }) => {
                        switch (level) {
                            case 1:
                                return <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-balance">{children}</h1>;
                            case 2:
                                return <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0">{children}</h2>;
                            case 3:
                                return <h3 className='scroll-m-20 text-2xl font-semibold tracking-tight'>{children}</h3>;
                            case 4:
                                return <h4 className='scroll-m-20 text-xl font-semibold tracking-tight'>{children}</h4>;
                            case 5:
                                return <h5 className='scroll-m-20 text-lg font-semibold tracking-tight'>{children}</h5>;
                            case 6:
                                return <h6 className='scroll-m-20 text-base font-semibold tracking-tight'>{children}</h6>;
                            default:
                                return <p className='leading-7 [&:not(:first-child)]:mt-6'>{children}</p>;
                        }
                    },
                    link: ({ children, url }) => <Link href={url} className=' text-blue-400'>{children}</Link>,
                    list: ({ children, format }) =>
                        format === 'ordered' ? (
                            <ol className="list-decimal pl-5">{children}</ol>
                        ) : (
                            <ul className="list-disc pl-5">{children}</ul>
                        )

                }}
                modifiers={{
                    bold: ({ children }) => <span className=' font-black'>{children}</span>,
                    italic: ({ children }) => <span className="italic">{children}</span>,
                }}
            />
        </div>
    );
}