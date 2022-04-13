import React from 'react'

const Card = () => {
  return (
    <div className='flex w-screen h-screen'>
        <div className='w-3/4 h-3/5 md:w-2/5 sm:w-11/12 bg-black'>
            <h2 className='uppercase text-white font-bold'>Create and share your photo stories.</h2>
            <p>Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others</p>
            <button>Get an Invite</button>
        </div>
        <div className='w-screen h-screen'>
        <img className='w-full h-3/5' src="https://ice-nas.fra1.digitaloceanspaces.com/development/play/banner1.jpg" alt="banner"></img>
        </div>
    </div>
  )
}

export default Card;