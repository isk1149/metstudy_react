import React from 'react'
import { ListItem, InputBase, Checkbox, ListItemText, ListItemSecondaryAction } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutlined';

export default function Todo(props) {
    //const [key, setKey] = React.useState(props.key);
    const [item, setItem] = React.useState(props.item);
    const [readOnly, setReadOnly] = React.useState(true);
  
    // const onDeleteClickHandler = () => {
    //   props.deleteItem(id);
    // };

    const onEditClickHandler = () => {
      setReadOnly(false);
    };

    const onEditKeyDownHandler = (e) => {
      if(e.key === 'Enter')
        setReadOnly(true);
    };

  return (
    <>
    <ListItem>
      <Checkbox checked={item.done} onClick={()=>{setItem({...item, done:!item.done})}}/>
      <ListItemText>
        <InputBase inputProps={{"aria-label": "naked", readOnly:readOnly}}
        type="text"
        id={item.id}
        value={item.title}
        multiline={true}
        fullWidth={true} 
        onClick={onEditClickHandler}
        onKeyDown={onEditKeyDownHandler}
        />
      </ListItemText>
      <ListItemSecondaryAction>
        {/* <IconButton onClick={onDeleteClickHandler}>
          <DeleteOutlineIcon></DeleteOutlineIcon>
        </IconButton> */}
        <IconButton onClick={() => {console.log(item.id); props.deleteItem(item.id);}}>
          <DeleteOutlineIcon/>
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
    </>
  )
}
