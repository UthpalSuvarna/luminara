const fetchBlogs = async () => {
    const reqOptions = {
        headers: {
            Authorization: `Bearer ${process.env.BACKEND_API_TOKEN}`
        },
        next: {
            revalidate: 3600 // every hour
        }
    };

    try {
        const request = await fetch(`${process.env.BACKEND_API_ENDPOINT}/api/blogs?populate=*`, reqOptions);
        const response = await request.json();
        return response;
    } catch (error) {
        console.error("Error fetching blogs:", error);
        return {}; // Return an empty object or array depending on your requirements
    }
}

export default fetchBlogs;