import { CardProps } from '@/types'
import React from 'react'

const Card = ({image,title,subtext}:CardProps) => {
  return (
    <div className="bg-slate-50 text-black border-[2px] shadow-3xl rounded-3xl sm:w-[30svw] w-[200svw] h-[40svh] ">
        <img className='mx-52 my-8 invert' src={image} alt="" />
        <h3 className='text-3xl text-center font-extrabold mx-14'>{title}</h3>
        <p className='mt-16 text-center mx-12'>{subtext}</p>
    </div>
  )
}

export default Card