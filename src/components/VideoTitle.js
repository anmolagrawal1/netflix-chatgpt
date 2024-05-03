import React from 'react'

const VideoTitle = ({title , overview}) => {
  return (
    <div className='w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black'>
        <h1 className='text-6xl font-bold'>
            {title}
        </h1>
        <p className='text-lg w-5/12 py-6'>
            {overview}
        </p>
        <div>
        <button className='bg-white text-black text-xl py-4 px-12 rounded-lg hover:bg-opacity-50'>▶️ Play</button>
        <button className='bg-gray-500 text-white text-xl py-4 px-14 mx-3 bg-opacity-50 rounded-lg hover:bg-opacity-90'>☮︎ More Info</button>
        </div>

    </div>
  )
}

export default VideoTitle