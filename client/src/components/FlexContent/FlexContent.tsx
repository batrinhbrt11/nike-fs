import React from 'react'
import { highlight } from '../../data/data'
import { FlexContent as content } from '../../types/flexcontent.type'

type FlexContentType = {
  content: content,
  ifExists:boolean
}
export default function FlexContent(props:FlexContentType) {
  return (
    <>
    <div className={`mt-10 flex items-center justify-between lg:flex-col lg:justify-center nike-container ${props.ifExists ? 'flex-row-reverse' : 'flex-row'}`}>
      <div className='max-w-lg lg:max-w-none w-full md:text-center grid items-center lg:justify-items-center'>
        <h1 className='text-4xl sm:text-3xl font-bold text-gradient'>{props.content.heading}</h1>
        <h1 className='text-5xl lg:text-4xl md:text-3xl sm:text-2xl font-bold text-slate-900 filter drop-shadow-lg'>{props.content.title}</h1>
        <p className='xl:text-sm my-4 text-slate-900'>{props.content.text}</p>
        <a href={props.content.url} className="flex items-center" target={"_blank"} role="button">
          <button type='button' className='button-theme bg-slate-900 shadow-slate-900 text-slate-100 py-1.5'>{props.content.btn}</button>
        </a>
      </div>
      <div className='flex items-center justify-center max-w-xl relative lg:max-w-none w-full mt-10'>
        <img
          src={props.content.img}
          alt={`img/${props.content.heading}`}
          className={`w-auto object-fill transitions-theme ${props.ifExists ? 'h-60 lg:h-56 md:h-52 sm:h-44 xsm:h-36 rotate-6 hover:-rotate-12' : 'h-72 lg:h-64 md:h-60 sm:h-48 xsm:h-40 rotate-[19deg] hover:rotate-12'}`}
        />
      </div>
    </div>
 </>
  )
}
