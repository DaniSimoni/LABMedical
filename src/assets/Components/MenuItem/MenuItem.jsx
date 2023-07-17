import React from 'react'
import { Container } from './MenuItem.style'

const MenuItem = ({ Icon, Text }) => {
  return (
    <Container>
      <Icon />
      {Text}
    </Container>
  )
}

export default MenuItem