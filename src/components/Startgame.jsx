import React from 'react'
import styled from "styled-components"
import { Button } from '../styled/Button'
const Startgame = ({toggle}) => {
  return (
    <Container>
      <div>
      <img src="\images\dices 1.png" alt="dic image" />
      </div>
      <div className='content'>
        <h1>Diec Game</h1>
        <Button onClick={toggle}>play now</Button>
      </div>
    </Container>
  )
}

export default Startgame

const Container =styled.div`
  max-width: 1180px;
  display: flex;
  margin:  0 auto ;
  height: 100vh;
  align-items: center;
  .content{
    h1{
      font-size: 96px;
      white-space: nowrap;
    }
  }

`;





