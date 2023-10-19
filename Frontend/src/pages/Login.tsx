import React, { useContext, useState } from "react";
// import useFetch from "../hooks/useFetch";
import {
  Container,
  Typography,
  Box,
  TextField,
  Link,
  Stack,
} from "@mui/material";
import Button from "@mui/material/Button";
// import UserContext from "../context/user";
import { useNavigate } from "react-router-dom";
// import jwtDecode from "jwt-decode";

const SignIn: React.FC = (props) => {
  const navigate = useNavigate();
  //   const userCtx = useContext(UserContext);
  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");
  //   const fetchData = useFetch();
  const handleLogin = async () => {
    // const res = await fetchData("/auth/login", "POST", { email, password });
    // if (res.ok) {
    //   userCtx.setAccessToken(res.data.access);
    //   localStorage.setItem("accessToken", JSON.stringify(res.data.access));
    //   const decoded = jwtDecode(res.data.access);
    //   userCtx.setUserId(decoded.id);
    //   localStorage.setItem("userId", JSON.stringify(decoded.id));
    //   navigate(`/profile/${decoded.id}`);
    // } else {
    //   alert(JSON.stringify(res.data));
    // }
  };

  return (
    <>
      <Container maxWidth="lg">
        <Box>
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={2}
            height="100vh"
          >
            <Typography variant="h5" textAlign="start" margin="2rem 0">
              Login
            </Typography>
            <TextField
              label="Email"
              variant="outlined"
              sx={{ width: "25%" }}
              // onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              sx={{ width: "25%" }}
              // onChange={(e) => setPassword(e.target.value)}
            />

            <Button variant="contained" color="secondary" onClick={handleLogin}>
              Login
            </Button>

            <Typography
              // variant="subtitle"
              textAlign="start"
              margin="1rem 0"
              sx={{ fontSize: "12px" }}
            >
              {`Don't have an account? `}
              <Link
                onClick={() => {
                  navigate("/register");
                }}
                underline="always"
                sx={{ cursor: "pointer" }}
              >
                Register
              </Link>
            </Typography>
          </Stack>
        </Box>
      </Container>
    </>
  );
};

export default SignIn;
