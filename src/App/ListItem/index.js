import React from 'react'
import {
  TableLine,
  DoneIcon,
  UndoneIcon,
  TrashIcon,
  TableContentBox,
  DoneTextContainer,
  TextContainer,
} from './elements'

const ListItem = ({ item, tickHandler, trashHandler }) => (
  <TableLine key={item.id}>
    <td onClick={() => tickHandler(item.id)}>
      {item.done ? <DoneIcon /> : <UndoneIcon />}
    </td>
    <TableContentBox>
      {item.done ? (
        <DoneTextContainer>{item.text}</DoneTextContainer>
      ) : (
        <TextContainer>{item.text}</TextContainer>
      )}
    </TableContentBox>
    <TrashIcon onClick={() => trashHandler(item.id)} />
  </TableLine>
)

export default ListItem
