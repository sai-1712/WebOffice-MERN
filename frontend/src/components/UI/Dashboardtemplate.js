import React, { useState } from 'react'
import Header from "./Header"
import Navigation from "./Navigation"
import Pagewrapper from './Pagewrapper'
import "../../public/assests/Dashboardtemplate.css"

export default function Dashboardtemplate(props) {

    const [NavActive, setNavActive] = useState(false)
    const ToggleHandler = () => {
        setNavActive((pre) => {
            return !pre;
        })
    }

  return (
    <React.Fragment>
        <Header onToggle={ToggleHandler} />
        <Navigation activeClass = {NavActive}/>
        <Pagewrapper activeClass = {NavActive}>
          {props.children}
        </Pagewrapper>
    </React.Fragment>
  )
}
