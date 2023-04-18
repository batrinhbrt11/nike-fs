import React from 'react'
import {ListItems } from '../../types/items.type'
import Item from '../Item'
import Title from '../Title'

type SaleType = {
  title:string
  items: ListItems,
  ifExists:boolean,
}

export default function PopularSale(props:SaleType) {
  return (
    <>
    <div className='nike-container mt-10'>
      <Title title={props.title} />
      <div className={`grid items-center justify-items-center gap-7 lg:gap-5 mt-7 ${props.ifExists ? 'grid-cols-3 xl:grid-cols-2 sm:grid-cols-1' : 'grid-cols-4 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'}`}>
        {props.items?.map((item, i) => (
          <Item key={i} ifExists={props.ifExists} item={item} />
        ))}
      </div>
    </div>
 </>
  )
}
