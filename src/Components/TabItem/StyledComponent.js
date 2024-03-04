import styled from 'styled-components'

export const ListItem = styled.li`
  list-style: none;
`

export const TabButton = styled.button`
  border: solid black 2px;
  color: black;
  background-color: ${props => (props.changeColor ? 'red' : 'white')};
  border-radius: 10px;
`
