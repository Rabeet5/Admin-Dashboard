import { useState } from "react";
import { Button, TextField, Typography, Box } from "@mui/material";
import { SignupUser } from "./firebaseMethod";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import Login from "./login";

function Signup() {

  const navigate = useNavigate()
  const [user, SetUser] = useState({})

  let CreateUser = () => {
    SignupUser(user)
      .then((res) => {
        console.log(res,
          'User Created Successfully')
          navigate('/dashboard/*')
      })
      .catch((err) => {
        console.log(err, alert(err))
      })

  }

  return <>
    <Box
      sx={{ height: "100vh" }}
      className="d-flex justify-content-center align-items-center "
    >

      <Box>
        <Typography variant="h3">Signup</Typography>
        <Box className="p-2">
          <TextField
            onChange={(e) => SetUser({ ...user, userName: e.target.value })}
            variant="standard"
            label="Username"
          />
        </Box>
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
            onClick={CreateUser}
          >
            Signup
          </Button>
        </Box>
        <Box className="p-2 m-2 text-center" >
          <Button
            
            onClick={()=>{
              navigate('/login')
            }}
            variant='outlined'
          >
            Login</Button>
        </Box>
      </Box>
    </Box>

    <Routes>
      <Route path="/login" element={<Login />} />
    </Routes>
  </>


}
export default Signup;