import React from 'react'
import { Item as ItemInteface } from '../../types/items.type'
import { StarIcon, ShoppingBagIcon } from "@heroicons/react/24/solid";
type ItemProps = {
    ifExists:boolean,
    item: ItemInteface
}
export default function Item(props: ItemProps) {
  return (
    <>
    <div
      className={`relative bg-gradient-to-b ${props.item.color} ${props.item.shadow} grid items-center ${
        props.ifExists ? "justify-items-start" : "justify-items-center"
      } rounded-xl py-4 px-5 transition-all duration-700 ease-in-out w-full hover:scale-105`}
    >
      <div
        className={`grid items-center ${
            props.ifExists ? "justify-items-start" : "justify-items-center"
        }`}
      >
        <h1 className="text-slate-200 text-xl lg:text-lg md:text-base font-medium filter drop-shadow">
          {props.item.title}
        </h1>
        <p className="text-slate-200 filter drop-shadow text-base md:text-sm font-normal">
          {props.item.text}
        </p>

        <div className="flex items-center justify-between w-28 my-2">
          <div className="flex items-center bg-white/80  px-1 rounded blur-effect-theme">
            <h1 className="text-black text-sm font-medium">${props.item.price}</h1>
          </div>
          <div className="flex items-center gap-1">
            <StarIcon className="icon-style w-5 h-5 md:w-4 md:h-4" />
            <h1 className="md:text-sm font-normal text-slate-100">
              {props.item.rating}
            </h1>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            className="bg-white/90 blur-effect-theme button-theme p-0.5 shadow shadow-sky-200"
          
          >
            <ShoppingBagIcon className="icon-style text-slate-900" />
          </button>
          <button
            type="button"
            className="bg-white/90 blur-effect-theme button-theme px-2 py-1 shadow shadow-sky-200 text-sm text-black"
            
          >
            {props.item.btn}
          </button>
        </div>
      </div>
      <div
        className={`flex items-center ${
            props.ifExists ? "absolute top-5 right-1" : "justify-center"
        }`}
      >
        <img
          src={props.item.img}
          alt={`img/item-img/${props.item.id}`}
          className={`transitions-theme hover:-rotate-12 ${
            props.ifExists
              ? "h-auto w-64 lg:w-56 md:w-48 -rotate-[35deg]"
              : "h-36 w-64"
          }`}
        />
      </div>
    </div>
  </>
  )
}
