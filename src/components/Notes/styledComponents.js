// Style your elements here
import styled from 'styled-components'

export const AppContainer = styled.div`
  min-height: 100vh;
  padding: 20px;
`
export const ResponsiveContainer = styled.div`
  width: 90%;
  margin: auto;
  @media screen and (min-width: 768px) {
    width: 80%;
  }
`
export const NotesHeading = styled.h1`
  font-family: 'Bree Serif';
  font-size: 20px;
  font-weight: 600;
  text-align: center;
  color: #4c63b6;
  @media screen and (min-width: 768px) {
    font-size: 32px;
    font-family: 'Bree serif';
  }
`
export const InputContainer = styled.form`
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0px 2px 10px #475569;
`
export const Input = styled.input`
  background-color: transparent;
  border: none;
  outline: none;
  font-family: 'Roboto';
  font-size: 16px;
  color: #334155;
  padding: 10px;
  width: 100%;
`
export const Textarea = styled.textarea`
  background-color: transparent;
  border: none;
  outline: none;
  font-family: 'Roboto';
  font-size: 16px;
  color: #334155;
  padding: 10px;
  width: 100%;
`
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`
export const Button = styled.button`
  color: #d8d8d8;
  background-color: #4c63b6;
  font-family: 'Roboto';
  font-size: 14px;
  border-radius: 10px;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 10px 18px 10px 18px;
`
export const NoNotesViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`
export const NoNotesImage = styled.img`
  width: 10%;
`
export const NoNotesHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 600;
  color: #475569;
`
export const NoNotesContent = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  color: #aab8c8;
`
export const ListContainer = styled.ul`
  padding-left: 0px;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`
