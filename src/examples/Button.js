import styled from 'styled-components'

const color = 'blue'

const Button = styled.button`
  border: 1px solid blue;
  color: ${color};
  background: ${({ color }) => color};
  /* font-size: 1rem; */
  font-size: ${({ big }) => (big ? '2rem' : '1rem')};
  padding: 0.5rem;
  margin: 1rem;
`

export default Button
