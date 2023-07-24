// Style your elements here
import styled from 'styled-components'

export const ListItem = styled.li`
  list-style-type: none;
  border-radius: 8px;
  margin-right: 15px;
  margin-bottom: 15px;
  width: 100%;
  border: 1px solid #d8d8d8;
  padding: 10px;
  @media screen and (min-width: 768px) {
    width: 25%;
  }
`
export const ListItemHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 22px;
  font-weight: 600;
  color: #475569;
`
export const ListItemContent = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  color: #aab8c8;
`
