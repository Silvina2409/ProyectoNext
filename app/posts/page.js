import React from 'react'
import Link from 'next/link'

export const metadata = {
    title: "Furniture Tienda",
    description: "Venta de muebles"
  
  }
  

const getPosts = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/",

    )
    if(!response.ok){
        throw new Error ("fallo")
    }
    return response.json()
}

const Posts = async () => {
   
    const posts= await getPosts()
    return (
    <div className='container m-auto mt-6'>
        <h1> Posts</h1>
        <hr/>
        <ul>
            {
                posts.map((post) => (
                    <li className='my-4 list-disc' key={post.id}>
                    <Link href= {`/posts/${post.id}`}>
                    
                        {post.title}
                     </Link>
                    </li>
                 
                ))
            }
        </ul>

    </div>
  )
}

export default Posts