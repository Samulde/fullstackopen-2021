const dummy = (blogs) => 1

const totalLikes = (blogs) => {
    
    const sumLikes = (sum, blog) => sum + blog.likes

    return blogs.length === 0
        ? 0
        : blogs.reduce(sumLikes, 0)
}

const favouriteBlog = (blogs) => {

    let currentMax = 0;
    let currentIndex = 0;

    blogs.forEach( (blog, index) => {
        if (blog.likes > currentMax) {
            currentMax = blog.likes;
            currentIndex = index;
        };
    })
    
    const favBlogObject = {
        title: blogs[currentIndex].title,
        author: blogs[currentIndex].author,
        likes: blogs[currentIndex].likes
    }

    console.log(favBlogObject)

    return favBlogObject
}

module.exports = {
    dummy,
    totalLikes,
    favouriteBlog
}