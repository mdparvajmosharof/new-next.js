import Link from 'next/link'
import React from 'react'

const blogs = () => {

    const blogs = [
        {
          "id": 1,
          "title": "Exploring the Beauty of Nature",
          "description": "In this blog, we delve into the mesmerizing landscapes and untouched wilderness of remote regions. From towering mountains to serene lakes, explore the beauty that nature has to offer."
        },
        {
          "id": 2,
          "title": "The Future of Artificial Intelligence",
          "description": "Artificial intelligence is evolving rapidly, and its potential seems limitless. This blog explores the latest advancements in AI, its current applications, and what the future holds for this groundbreaking technology."
        },
        {
          "id": 3,
          "title": "10 Tips for Effective Time Management",
          "description": "Struggling to manage your time effectively? In this blog, we share practical tips and strategies to help you prioritize tasks, stay organized, and make the most of your day."
        },
        {
          "id": 4,
          "title": "A Beginner's Guide to React.js",
          "description": "React.js is one of the most popular JavaScript libraries for building user interfaces. This blog covers the basics of React, from setting up your first project to understanding key concepts like components and state."
        },
        {
          "id": 5,
          "title": "Healthy Eating Habits for a Balanced Life",
          "description": "Eating healthy doesn't have to be complicated. In this blog, we provide simple and effective tips for adopting healthier eating habits that will lead to a more balanced and nutritious lifestyle."
        }
      ]
      

  return (
    <div className='min-h-screen text-center'>
      Blogs

      <div className='space-y-5 mx-10'>
        {
            blogs.map(blog=> 
                <div key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>{blog.description}</p>
                    <Link href={`/blogs/${blog.id}`}>
            <button className='bg-emerald-700 p-3 rounded-md'>View Details</button>
                    </Link>
                    
                </div>
            )
        }
      </div>
    </div>
  )
}

export default blogs
