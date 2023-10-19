import { Box, Typography } from '@mui/material'
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import App from './App'

export default function AppRouter() {

    const copyRight = <Typography variant='body2' color="textSecondary" align="center">
        {"copyright @ "} metlife, {new Date().getFullYear()} {"."}
    </Typography>
  return (
    <div>
        <Router>
            <div>
                <Routes>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/" element={<App/>}/>
                    <Route path="/signup" element={<SignUp/>}/>
                    
                </Routes>
            </div>
            <Box mt={5}>
                {copyRight}
            </Box>
        </Router>
    </div>
  )
}
