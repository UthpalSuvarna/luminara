const fetchRecentBlogs = async () => {
    const reqOptions = {
        headers: {
            Authorization: `Bearer ${process.env.BACKEND_API_TOKEN}`
        },
        next: {
            revalidate: 3600 // every hour
        }
    };

    const request = await fetch(`${process.env.BACKEND_API_ENDPOINT}/api/blogs?populate=*&pagination[limit]=3&sort[0]=createdAt:desc`, reqOptions);
    const response = await request.json();

    return response;
}

export default fetchRecentBlogs;