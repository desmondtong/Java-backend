import React, { useState } from "react";
// import useFetch from "../hooks/useFetch";
import {
  Container,
  Typography,
  Box,
  TextField,
  Button,
  Stack,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
// import DistrictEnums from "../enums/districtEnums";

const Register: React.FC = (props) => {
  //   const fetchData = useFetch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [zip, setZip] = useState("");
  const [district, setDistrict] = useState("");

  const [isInvalid, setIsInvalid] = useState(false);

  const navigate = useNavigate();

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
              type="password"
              sx={{ width: "25%" }}
              onChange={(e) => setPassword(e.target.value)}
            />

            <TextField
              error={isInvalid}
              id="outlined-basic"
              label="Zip Code"
              variant="outlined"
              sx={{ width: "25%" }}
              helperText={isInvalid && "Invalid zip code"}
            />
            {/* <Stack
              direction="row"
              spacing={2}
              justifyContent="space-between"
              width="25%"
            > */}
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
