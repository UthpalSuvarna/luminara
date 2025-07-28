async function fetchBlog(slug: string) {
    const reqOptions = {
        headers: {
            Authorization: `Bearer ${process.env.BACKEND_API_TOKEN}`
        },
        next: {
            revalidate: 3600 // everyhour
        }
    };

    const response = await fetch(`${process.env.BACKEND_API_ENDPOINT}/api/blogs?populate=*&filters[slug][$eq]=${slug}`, reqOptions);
    if (!response.ok) {
        throw new Error(`Failed to fetch blogs: ${response.statusText}`);
    }

    const jsonResponse = await response.json();
    return jsonResponse;
}

export default fetchBlog;