import './App.css';
import Todo from './pages/Todo';
import AddTodo from './pages/AddTodo';
import React from 'react';
import {Container, List, Paper, Grid, Button, AppBar, Toolbar, Typography} from '@mui/material';
import { API_BASE_URL } from './common/api-config';
import {call, signout} from "./common/apiService";

function App() {

  let navigationBar = (
    <AppBar position="static">
      <Toolbar>
        <Grid justifyContent="space-between" container>
          <Grid item>
            <Typography variant="h6">
              오늘의 할일
            </Typography>
          </Grid>
          <Grid item>
            <Button color="inherit" raised onClick={signout}>
              로그아웃
            </Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );

  const [loading, setLoding] = React.useState(true);

  const logingPage = <h1>로딩중...</h1>;

  const [list, setList] = React.useState(
    [
      {id: "1", name: "", done: true, title: "title1"}
      , {id: "2", name: "", done: false, title: "title2"}
      , {id: "3", name: "", done: true, title: "title3"}
    ]
  );

  const addItem = (item) => {
    console.log("item", item)

    call("/todo", "POST", item).then((response) => {setList(response.data);});

    // const requestOptions = {
    //   method: "POST",
    //   headers: {"Content-Type": "application/json"},
    //   body: JSON.stringify(item)
    // };
    // fetch(API_BASE_URL+"/todo", requestOptions)
    // .then((response) => response.json())
    // .then(
    //   (response) => {
    //     setList(response.data);
    //   },
    //   (error) => {

    //   }
    // )
  };

  const deleteItem = (id) => {

    call(`/todo/${id}`, "DELETE", null).then((response) => {setList(response.data);});

    // const requestOptions = {
    //   method: "DELETE",
    //   headers: {"Content-Type": "application/json"},
    // };
    // fetch(API_BASE_URL + "/todo/" + id, requestOptions)
    // .then((response) => response.json())
    // .then(
    //   (response) => {
    //     console.log(response);
    //     setList(response.data);
    //   },
    //   (error) => {

    //   }
    // )
  };

  const todoList = () => {

    call("/todo", "GET", null).then((response) => {
      setList(response.data);
      setLoding(false);
    });

    // const requestOptions = {
    //   method: "GET",
    //   headers: {"Content-Type": "application/json"} 
    // };

    // fetch(API_BASE_URL+"/todo", requestOptions)
    // .then((response) => response.json())
    // .then(
    //   (response) => {
    //     setList(response.data);
    //   },
    //   (error) => {

    //   }
    // )
  };

  React.useEffect(()=>{
    todoList();
  }, []); //최초 화면 로딩시 동작

  //React.useEffect(()=>{}, {list}); //list의 값이 바뀌면 함수가 호출

  return (
    <>
    <div className='App'>
      {navigationBar}
      {!loading && ( 
      <Container maxWidth="md">
        <AddTodo addItem={addItem}/>
        <Paper style={{margin: 16}}>
          <List>
          {list.map(item => (
            <div className="App">
              <Todo key={item.id} item={item} deleteItem={deleteItem}/>
            </div>
            ))
          }
          </List>
        </Paper>
      </Container> )}
      {loading && (logingPage)
      }
    </div>
    </>
  );
}

export default App;
