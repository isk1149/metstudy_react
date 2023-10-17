import React from 'react'
import {Container, Grid, Typography, TextField, Button} from "@mui/material";
import {signin} from "../common/apiService";

export default function Login() {

    const handleSubmit = event => {
        event.preventDefault();
        const data = new FormData(event.target);
        const email = data.get("email");
        const password = data.get("password");
        signin({email:email, password:password});
    };

  return (
    <Container component="main" maxWidth="xs" style={{marginTop: "8%"}}>
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography component="h1" variant="h5">
                    로그인
                </Typography>
            </Grid>
        </Grid>
        <form noValidate onSubmit={handleSubmit}>
            {" "}
            {/* submit 버튼을 누르면 handleSubmit이 실행됨*/}
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="email"
                        label="이메일주소"
                        name="email"
                        autoComplete="email"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="password"
                        label="패스워드"
                        type="password"
                        name="password"
                        autoComplete="current-password"
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button type="submit" fullWidth variant="contained" color="primary">
                        로그인
                    </Button>
                </Grid>
            </Grid>
        </form>
    </Container>
  )
}

