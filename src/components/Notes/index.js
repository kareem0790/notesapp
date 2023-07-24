// Write your code here
import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'

import NoteItem from '../NoteItem'

import {
  AppContainer,
  ResponsiveContainer,
  NotesHeading,
  InputContainer,
  Input,
  Textarea,
  ButtonContainer,
  Button,
  NoNotesViewContainer,
  NoNotesImage,
  NoNotesHeading,
  NoNotesContent,
  ListContainer,
} from './styledComponents'

const Notes = () => {
  const [title, setTitle] = useState('')
  const [note, setTextarea] = useState('')
  const [notesList, setNotesList] = useState([])
  const onChangeTitle = event => {
    setTitle(event.target.value)
  }
  const onChangeTextarea = event => {
    setTextarea(event.target.value)
  }

  const onAddNote = event => {
    event.preventDefault()
    const newNote = {
      id: uuidv4(),
      title,
      note,
    }
    setNotesList(prevState => [...prevState, newNote])
    setTitle('')
    setTextarea('')
  }

  return (
    <AppContainer>
      <ResponsiveContainer>
        <NotesHeading>Notes</NotesHeading>
        <InputContainer onSubmit={onAddNote}>
          <Input
            type="text"
            value={title}
            onChange={onChangeTitle}
            placeholder="Title"
          />
          <Textarea
            rows="6"
            placeholder="Take a Note..."
            value={note}
            onChange={onChangeTextarea}
          />

          <ButtonContainer>
            <Button type="submit">Add</Button>
          </ButtonContainer>
        </InputContainer>

        {notesList.length === 0 ? (
          <NoNotesViewContainer>
            <NoNotesImage
              src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
              alt="notes empty"
            />
            <NoNotesHeading>No Notes Yet</NoNotesHeading>
            <NoNotesContent>Notes you add will appear here</NoNotesContent>
          </NoNotesViewContainer>
        ) : (
          <ListContainer>
            {notesList.map(eachNote => (
              <NoteItem key={eachNote.id} notesDetails={eachNote} />
            ))}
          </ListContainer>
        )}
      </ResponsiveContainer>
    </AppContainer>
  )
}

export default Notes
