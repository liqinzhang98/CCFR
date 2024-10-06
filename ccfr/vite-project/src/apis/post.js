export async function createPost(description){
    const formData = new FormData();
    //Strapi Format
    formData.append("data", JSON.stringify({ description }));

    await fetch("/api/posts",{
        method: "POST",
        body: formData,
        headers: {
            Authorization: 'Bearer ${getJwtToken()}',
        },
    });
}
