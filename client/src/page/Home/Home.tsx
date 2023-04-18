import React from 'react'
import FlexContent from '../../components/FlexContent'
import Hero from '../../components/Hero'
import PopularSale from '../../components/PopularSale'
import Stories from '../../components/Stories'
import { popularsales, toprateslaes, highlight, sneaker,story } from '../../data/data'

export default function Home() {
  return (
    <main>
        <Hero />
        <PopularSale title={popularsales.title}  items={popularsales.items} ifExists/>
        <FlexContent content={highlight} ifExists />
        <PopularSale title={toprateslaes.title} items={toprateslaes.items} ifExists={false}/>
        <FlexContent content={sneaker} ifExists={false}/>
        <Stories title={story.title} news={story.news}/>
    </main>
  )
}
