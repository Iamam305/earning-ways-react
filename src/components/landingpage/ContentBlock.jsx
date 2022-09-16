import React from 'react'

const ContentBlock = ({img,heading, content, direction}) => {
  return (
    <div>
        <div className="py-16 ">  
  <div className="flex flex-col items-center justify-between m-auto px-6 text-gray-600 md:px-12 xl:px-6">
      <div className= {`space-y-6 md:space-y-0 flex ${direction} items-center justify-between md:flex md:gap-6 lg:items-center lg:gap-12`}>
        <div className="w-full md:w-1/2">
          <img src={img} alt="image" loading="lazy" width="" height=""/>
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-4xl font-bold text-cyan-500 mb-4">{heading}</h2>
          <p className="mt-6 text-2xl font-light text-gray-400">{content}</p>
      
        </div>
      </div>
  </div>
</div>
    </div>
  )
}

export default ContentBlock