
import BlogGrid from './BlogGrid'
import { BlogService } from '@/app/services/blog.service'
import { Blog } from '@/sanity.types'


const BlogClient = async() => {

    const blogs = await BlogService.getBlogs(4)
  return (
    <section className='flex flex-col gap-2 p-4 mt-10'>
        <h1 className='text-xl font-bold'>Latest Blog</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4'>
            {
                blogs.map((blog:Blog)=>(
                    <BlogGrid key={blog._id} blog={blog}/>
                ))
            }
        </div>
    </section>
  )
}

export default BlogClient
