import React from 'react'
import { TopbarWrapper } from './TopbarStyles'

export const Topbar = ({ children }: any) => {
  return (
    <React.Fragment>
      <TopbarWrapper>
        {children}
      </TopbarWrapper>
    </React.Fragment>
  )
}
