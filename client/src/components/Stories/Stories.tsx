import React from "react";
import { Stories as stories } from "../../types/new.type";
import Title from "../Title";
import {
  HashtagIcon,
  HeartIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/solid";
import { ClockIcon } from "@heroicons/react/24/outline";
import { truncate } from "lodash";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import {Pagination, Navigation} from "swiper";
export default function Stories(props: stories) {
  return (
    <>
      <div className="nike-container mb-11">
        <Title title={props.title} />
        <div className="mt-7 ">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            navigation={true}
            modules={[Navigation]}
            breakpoints={{
              550: {
                slidesPerView: 2,
              },
              991:{
                slidesPerView: 3,
              },
              1200:{
                slidesPerView: 4,
              }
            }}
          >
            {props.news.map((val, i) => (
              <SwiperSlide key={i} >
                <div className="relative grid items-center gap-4 pb-5 rounded-lg shadow shadow-slate-200 ring-1 ring-slate-200 border-2">
                  <div className="flex items-center justify-center">
                    <img
                      src={val.img}
                      alt={`img/story/${i}`}
                      className="w-full h-auto object-cover shadow-md shadow-slate-200 rounded-tl-lg rounded-tr-lg"
                    />
                  </div>
                  <div className="flex items-center justify-between w-full px-4">
                    <div className="flex items-center gap-0.5">
                      <HeartIcon className="icon-style text-red-500 w-5 h-5" />
                      <span className="text-xs font-bold">{val.like}</span>
                    </div>
                    <div className="flex items-center gap-0.5">
                      <ClockIcon className="icon-style w-4 h-4 text-black" />
                      <span className="text-xs font-bold">{val.time}</span>
                    </div>
                    <div className="flex items-center gap-0.5">
                      <HashtagIcon className="icon-style text-blue-600" />
                      <span className="text-xs font-bold text-blue-600">
                        {val.by}
                      </span>
                    </div>
                  </div>
                  <div className="grid items-center justify-items-start px-4">
                    <h1 className="text-base font-semibold lg:text-sm">
                      {val.title}
                    </h1>
                    <p className="line-clamp-3 w-full text-sm lg:text-xs">
                      {/* {truncate(val.text, { length: 120 })} */}
                      {val.text}
                    </p>
                  </div>
                  <div className="flex items-center justify-center px-4 w-full">
                    <a
                      href={val.url}
                      target="_blank"
                      role={"button"}
                      className="w-full bg-gradient-to-b from-slate-900 to-black shadow-md shadow-black text-center text-slate-100 py-1.5 button-theme"
                    >
                      {val.btn}
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
}
