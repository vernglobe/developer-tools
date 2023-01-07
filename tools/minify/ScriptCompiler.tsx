import React from 'react'
import { AddJsonBuilder } from './components/AddJsonBuilder'
import { Container } from 'react-bootstrap'
import { TopNavBar } from './TopNavBar'

export const ScriptCompiler = () => {
  return (
    <Container  fluid>
      <TopNavBar>
        <span style={{position:"absolute", color:"rgb(255,200,255)", top:"20px", right: "1%"}}>Welcome to <b>SCRIPT</b>-Compiler page!</span>
      </TopNavBar>
      <AddJsonBuilder/>
    </Container>
  )
}
