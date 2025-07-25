import Image from 'next/image';
import React, { JSX } from 'react';

type RichTextChild = {
    text: string;
    bold?: boolean;
    italic?: boolean;
    underline?: boolean;
};

type ParagraphBlock = {
    type: 'paragraph';
    children: RichTextChild[];
};

type HeadingBlock = {
    type: 'heading';
    level: 1 | 2 | 3 | 4 | 5 | 6;
    children: RichTextChild[];
};

type ListItem = {
    type: 'list-item';
    children: RichTextChild[];
};

type ListBlock = {
    type: 'bulleted-list' | 'numbered-list';
    children: ListItem[];
};

type ImageBlock = {
    image: any;
    type: 'image';
    src: string;
    alt?: string;
    caption?: string;
    width?: number;
    height?: number;
};

type RichTextBlock = ParagraphBlock | HeadingBlock | ListBlock | ImageBlock;

interface RichTextRendererProps {
    content: RichTextBlock[];
}

const RichTextRenderer: React.FC<RichTextRendererProps> = ({ content }) => {
    const renderText = (child: RichTextChild) => {
        let textNode: React.ReactNode = child.text;

        if (child.bold || child.italic || child.underline) {
            textNode = (
                <span
                    style={{
                        fontWeight: child.bold ? 'bold' : 'normal',
                        fontStyle: child.italic ? 'italic' : 'normal',
                        textDecoration: child.underline ? 'underline' : 'none',
                    }}
                >
                    {child.text}
                </span>
            );
        }

        return textNode;
    };

    const renderBlock = (block: RichTextBlock, index: number): React.ReactNode => {
        switch (block.type) {
            case 'paragraph':
                return (
                    <p key={index}>
                        {block.children.map((child, idx) => (
                            <React.Fragment key={idx}>{renderText(child)}</React.Fragment>
                        ))}
                    </p>
                );

            case 'heading':
                const HeadingTag = `h${block.level}` as keyof JSX.IntrinsicElements;
                return React.createElement(
                    HeadingTag,
                    { key: index },
                    block.children.map((child, idx) => (
                        <React.Fragment key={idx}>{renderText(child)}</React.Fragment>
                    ))
                );

            case 'bulleted-list':
                return (
                    <ul key={index}>
                        {block.children.map((item, idx) => (
                            <li key={idx}>
                                {item.children.map((child, cidx) => (
                                    <React.Fragment key={cidx}>{renderText(child)}</React.Fragment>
                                ))}
                            </li>
                        ))}
                    </ul>
                );

            case 'numbered-list':
                return (
                    <ol key={index}>
                        {block.children.map((item, idx) => (
                            <li key={idx}>
                                {item.children.map((child, cidx) => (
                                    <React.Fragment key={cidx}>{renderText(child)}</React.Fragment>
                                ))}
                            </li>
                        ))}
                    </ol>
                );

            case 'image':
                return (
                    <div key={index} style={{ margin: '1rem 0' }}>
                        <Image
                            src={block.image.url}
                            alt={block.alt || 'Image'}
                            width={block.width || 600}
                            height={block.height || 400}
                            style={{ maxWidth: '100%', height: 'auto' }}
                        />
                        {block.caption && <p style={{ fontSize: '0.9rem', color: '#666' }}>{block.caption}</p>}
                    </div>
                );

            default:
                return null;
        }
    };

    return <div>{content.map((block, index) => renderBlock(block, index))}</div>;
};

export default RichTextRenderer;
