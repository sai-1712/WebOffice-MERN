import React from 'react'

export default function Pagewrapper(props) {
  return (
    <>
      <div className= {props.activeClass ? "page-wrapper active" : "page-wrapper"}>
            <div className="content container-fluid">
              {props.children}
            </div>
      </div>
    </>
  )
}
