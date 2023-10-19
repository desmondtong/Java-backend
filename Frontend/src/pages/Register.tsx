import React, { useState, useRef } from "react";
// import useFetch from "../hooks/useFetch";
import {
  Container,
  Typography,
  Box,
  TextField,
  Button,
  Stack,
  MenuItem,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const Register: React.FC = (props) => {
  //   const fetchData = useFetch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const roleRef = useRef<HTMLInputElement>();

  const [isInvalid, setIsInvalid] = useState(false);

  const navigate = useNavigate();

  const roles = ["USER", "ADMIN"];

  const registerUser = async () => {
    // const res = await fetchData("/auth/register", "PUT", {
    //   email: email,
    //   password: password,
    //   location: [
    //     {
    //       district,
    //       postal_code: zip,
    //     },
    //   ],
    // });
    // if (res.ok) {
    //   console.log(res.data);
    //   props.setUserInfo(res.data.createdUser);
    //   navigate("/profile-setup");
    // } else {
    //   alert(JSON.stringify(res.data));
    //   console.log(res.data);
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
              Register for an account
            </Typography>

            <TextField
              label="Email"
              variant="outlined"
              sx={{ width: "25%" }}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
              sx={{ width: "25%" }}
              onChange={(e) => setPassword(e.target.value)}
              helperText={isInvalid && "Invalid zip code"}
            />
            <TextField
              select
              id="outlined-basic"
              label="Role"
              variant="outlined"
              sx={{ width: "25%" }}
              defaultValue=""
              inputRef={roleRef}
            >
              {roles.map((item, idx) => (
                <MenuItem key={idx} value={item}>
                  {item}
                </MenuItem>
              ))}
            </TextField>

            <Button
              variant="contained"
              color="secondary"
              sx={{ width: "20%" }}
              onClick={registerUser}
            >
              Register
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              sx={{ width: "20%" }}
              onClick={() => {
                navigate("/login");
              }}
            >
              Cancel
            </Button>
          </Stack>
          {/* </Stack> */}
        </Box>
      </Container>
    </>
  );
};

export default Register;
