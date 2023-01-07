import React from 'react'
import { Container } from 'react-bootstrap'
import { AddCssBuilder } from './components/AddCssBuilder'
import { TopNavBar } from './TopNavBar'

export const CssMinify = () => {

  return (
    <Container  fluid>
      <TopNavBar>
        <span style={{position:"absolute", color:"orange", top:"20px", right: "1%"}}>Welcome to <b>CSS</b>-Beautify/Minify page!</span>
      </TopNavBar>
      <AddCssBuilder/>
    </Container>
  )
}
