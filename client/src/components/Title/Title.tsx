import React from 'react'
type TitleType = {
    title:string
}
export default function Title(props : TitleType) {
  return (
    <>
    <div className='grid items-center'>
      <h1 className='text-5xl lg:text-4xl md:text-3xl font-bold text-slate-900 filter
       drop-shadow-lg'>{props.title}</h1>
    </div>
 </>
  )
}
