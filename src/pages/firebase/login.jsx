import { Button, TextField, Typography, Box } from "@mui/material";
import { useState } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { LoginUser, } from "./firebaseMethod";
import Signup from "./signup";
import { Link } from "@mui/material";

function Login() {

  const [user, SetUser] = useState({});
  const navigate = useNavigate();
  const [loader, SetLoader] = useState(false)




  let Login = () => {
    
    LoginUser(user).then((res) => {
      SetLoader(true)
      console.log(res,
        alert('User logged In'))
      navigate('/dashboard/*')
    })
      .catch((err) => {
        SetLoader(false)
        console.log(err,
          alert('this User Does not exist'))
      })

  }



  return <>


    <Box
      sx={{ height: "100vh" }}
      className="d-flex justify-content-center align-items-center "
    >
      <Box>
        <Typography variant="h3">Login</Typography>
        <Box className="p-2">
          <TextField
            onChange={(e) => SetUser({ ...user, email: e.target.value, })}
            variant="standard"
            label="Email"
          />
        </Box>
        <Box className="p-2">
          <TextField
            onChange={(e) => SetUser({ ...user, password: e.target.value })}
            variant="standard"
            label="Password"
          />
        </Box>
        <Box className="p-2 text-center">
          <Button variant="contained"
            onClick={Login}

          >
            Login
          </Button>
          <Box>
            <Button
                className="p-2 text-center m-3"
                onClick={() => {
                navigate('/signup')}}
                variant='outlined' >Signup </Button>
          </Box>


        </Box>
      </Box>
    </Box>
    <Routes>
      <Route path="/signup" element={<Signup />} />
    </Routes>
  </>
}

export default Login;