import React from 'react'
import "./Home.css"
import Feed from '../../components/Feed/Feed'
import NavigationBar from '../../components/NavigationBar/NavigationBar'
import Sidebar from '../../components/Sidebar/Sidebar'
import Adbar from '../../components/Adbar/Adbar'

export default function Home() {
  return (
    <div>
        <NavigationBar/>
        <div className='bodyContainer'>
            <Sidebar/>
            <Feed/>
            <Adbar/>
        </div>
    </div>
  )
}
