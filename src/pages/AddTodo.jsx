import React from 'react'
import {Button, Grid, TextField} from '@mui/material';

export default function AddTodo(props) {

    const [tf, setTf] = React.useState({id:"", title:"", done:false});
    const onChangeHandler = (e) => {
        setTf({
            // ...tf
            // ,id:"ID"
            // ,title:e.target.value
            id:"ID"
            ,title:e.target.value
            ,done:false
        });
        console.log(e);
    };
    const onClickHandler = () => {
        props.addItem(tf);
        setTf({id:"", title:"", done:false});
    };
    const onKeyHandler = (e) => {
        if (e.key === 'Enter') {
            props.addItem(tf);
            setTf({id:"", title:"", done:false});
        }
    }
  return (
    <>
    <Grid container style={{marginTop: 20}}>
        <Grid xs={11} md={11} item style={{paddingRight: 16}}>
            <TextField placeholder="Add Todo here" fullWidth value={tf.title} onChange={onChangeHandler} onKeyDown={onKeyHandler}/>
        </Grid>
        <Grid xs={1} md={1} item>
            <Button fullWidth style={{height: '100%'}} color="secondary" variant="outlined" onClick={onClickHandler}>
                +
            </Button>
        </Grid>
    </Grid>
    </>
  )
}
