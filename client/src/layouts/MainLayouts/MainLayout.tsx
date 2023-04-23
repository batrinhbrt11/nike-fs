import React from 'react'
import NavBar from '../../components/NavBar'
interface Props {
  children?: React.ReactNode
}
export default function MainLayout({ children }: Props) {
  return (
    <div>
      <NavBar />
      <div>
        {children}
      </div>
    </div>
  )
}
