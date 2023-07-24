// Write your code here
import {ListItem, ListItemHeading, ListItemContent} from './styledComponents'

const NoteItem = props => {
  const {notesDetails} = props
  const {title, note} = notesDetails

  return (
    <ListItem>
      <ListItemHeading>{title}</ListItemHeading>
      <ListItemContent>{note}</ListItemContent>
    </ListItem>
  )
}
export default NoteItem
