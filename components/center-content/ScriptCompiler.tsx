import React from 'react'
import { AddJsonBuilder } from '../parts/AddJsonBuilder'
import { TopNavBar } from './TopNavBar'

export const ScriptCompiler = () => {
  return (
    <div>
      <span style={{position:"absolute", color:"rgb(255,200,255)", top:"20px", right: "1%"}}>Welcome to <b>SCRIPT</b>-Compiler page!</span>
      <AddJsonBuilder/>
    </div>
  )
}
