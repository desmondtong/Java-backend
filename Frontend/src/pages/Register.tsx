import {
    Box,
    Button,
    Container,
    MenuItem,
    Stack,
    TextField,
    Typography,
} from "@mui/material";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../context/user";
import useFetch from "../hooks/useFetch";
import { data } from "../interfaces";

const Register: React.FC = () => {
  const fetchData = useFetch();
  const navigate = useNavigate();
  const userCtx = useContext(UserContext);

  const [firstname, setFirstname] = useState<string>("");
  const [lastname, setLastname] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [role, setRole] = useState<string>("");

  const [isInvalid, setIsInvalid] = useState(false);

  const roles = ["USER", "ADMIN"];

  const registerUser = async () => {
    const res: data = await fetchData("/api/v1/auth/register", "POST", {
      firstname,
      lastname,
      email,
      password,
      role,
    });

    if (res.ok) {
      userCtx?.setToken(res.data.token);
    //   navigate("/homepage");
    } else {
      alert(JSON.stringify(res.data));
      console.log(res.data);
    }
  };

  return (
    <>
      <Container maxWidth="lg">
        {JSON.stringify(userCtx?.token)}
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
              label="First Name"
              variant="outlined"
              sx={{ width: "25%" }}
              onChange={(e) => setFirstname(e.target.value)}
            />
            <TextField
              label="Last Name"
              variant="outlined"
              sx={{ width: "25%" }}
              onChange={(e) => setLastname(e.target.value)}
            />
            <TextField
              label="Email"
              variant="outlined"
              sx={{ width: "25%" }}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              label="Password"
              variant="outlined"
              sx={{ width: "25%" }}
              onChange={(e) => setPassword(e.target.value)}
              helperText={isInvalid && "Invalid zip code"}
            />
            <TextField
              select
              label="Role"
              variant="outlined"
              sx={{ width: "25%" }}
              defaultValue=""
              onChange={(e) => setRole(e.target.value)}
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
                navigate("/");
              }}
            >
              Cancel
            </Button>
          </Stack>
        </Box>
      </Container>
    </>
  );
};

export default Register;
