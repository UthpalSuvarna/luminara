const fetchBlogs = async () => {
    const reqOptions = {
        headers: {
            Authorization: `Bearer ${process.env.BACKEND_API_TOKEN}`
        },
        next: {
            revalidate: 3600 // every hour
        }
    };

    const request = await fetch(`${process.env.BACKEND_API_ENDPOINT}/api/blogs?populate=*`, reqOptions);
    const respone = await request.json();

    return respone;

}

export default fetchBlogs;