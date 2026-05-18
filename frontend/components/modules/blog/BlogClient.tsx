
import BlogGrid from './BlogGrid'
import { BlogService } from '@/app/services/blog.service'
import { Blog } from '@/sanity.types'

interface BlogClientProps{
    title?:string
}

const BlogClient:React.FC<BlogClientProps> = async({title}) => {

    const blogs = await BlogService.getBlogs(4)
  return (
    <section className='flex flex-col gap-6 p-4 mt-8'>
        <h1 className='text-xl font-bold'>{title ? title : "Latest Blog"}</h1>
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
