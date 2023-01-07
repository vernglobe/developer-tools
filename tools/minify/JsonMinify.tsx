import React from 'react'
import { AddJsonBuilder } from './components/AddJsonBuilder'
import { Container } from 'react-bootstrap'
import { TopNavBar } from './TopNavBar'

export const JsonMinify = () => {
  return (
    <Container  fluid>
      <TopNavBar><span style={{position:"absolute", color:"yellow", top:"20px", right: "1%"}}>Welcome to <b>JSON</b>-Beautify/Minify page!</span></TopNavBar>
      <AddJsonBuilder/>
    </Container>
  )
}
