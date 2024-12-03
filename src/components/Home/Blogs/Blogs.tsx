import SectionHeading from '@/components/Helper/SectionHeading'
import { blogs } from '@/data/data'
import React from 'react'
import BlogsCard from './BlogsCard'

const Blogs = () => {
    return (
        <div className='pt-6 pb-6 bg-gray-100'>
            <div className='w-[80%] mx-auto'>
                <SectionHeading heading='Check Out Our Blogs' />
                <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-16 gap-6 items-center'>
                    {blogs.map((blog, i) => (
                        <div key={blog.id}
                            data-aos="zoom-out"
                            data-aos-delay={`${i * 150}`}
                            data-aos-anchor-placement="top-center"
                        >
                            <BlogsCard blog={blog} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Blogs