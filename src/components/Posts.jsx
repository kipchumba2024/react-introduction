import React from 'react'

export default function Posts({posts}) {
  return (
    <div className='container mx-auto grid grid-cols-3'>
    {
      posts.map((post, index)=>(
        <div key={index} className={`${post.id==4? "border-gray-900":"border-red-800"} border mx-2 bg-gray-100 `}>
          <div className='h-[200px] overflow-hidden'>
            <img src={post.img} className=' w-full' />
          </div>
          <h5 className='font-bold'>{post.title}</h5>
          <p className=''>{post.description}</p>
        </div>
      ))
    }
  </div>
  )
}
