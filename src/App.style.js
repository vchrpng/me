import styled from 'styled-components'

export const Background = styled.div`
  background-image:url(${require('./assets/background.jpg')});
  max-width:100%;
  height:100vh;
  background-position:center;
  overflow:hidden;
  background-repeat: no-repeat;
  background-attachment: fixed;
`