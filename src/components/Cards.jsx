import React from 'react'

const Cards = ({ image, title, desc, link }) => {
  return (
    <div class="flex justify-center">
      <div
        class="block max-w-sm rounded-lg bg-white shadow-lg ">
        <a data-te-ripple-init data-te-ripple-color="light">
          <img
            class="rounded-t-lg h-60 w-full"
            src={image}
            alt="" />
        </a>
        <div class="p-6">
          <h5
            class="mb-2 text-xl font-medium leading-tight text-neutral-800">
            {title}
          </h5>
          <p class="mb-4 text-base text-neutral-600 ">
            {desc}
          </p>
          <a href={link} target='blank'>
            <button
              type="button"
              href={link}
              className='bg-cyan-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
              Get Started
            </button>
          </a>

        </div>
      </div>
    </div>
  )
}

export default Cards