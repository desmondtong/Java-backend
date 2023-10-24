import {
  Box,
  Button,
  Container,
  MenuItem,
  Stack,
  TextField,
  Typography,
  Link,
} from "@mui/material";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../context/user";
import useFetch from "../hooks/useFetch";
import { data } from "../interfaces";
import { useTranslation } from "react-i18next";

const Register: React.FC = () => {
  const fetchData = useFetch();
  const navigate = useNavigate();
  const userCtx = useContext(UserContext);
  const { t } = useTranslation();

  const [firstname, setFirstname] = useState<string>("");
  const [lastname, setLastname] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [role, setRole] = useState<string>("");

  const roles = [t("USER"), t("ADMIN")];

  const registerUser = async () => {
    const res: data = await fetchData("/api/v1/auth/register", "POST", {
      firstname,
      lastname,
      email,
      password,
      role,
    });

    if (res.ok) {
      // capture login error msg
      if (!firstname || !lastname || !email || !password || !role) {
        return alert("Please fill up all field!");
      } else if (res.data.message)
        return alert(JSON.stringify(res.data.message));

      // set token and userinfo from registered info
      userCtx?.setToken(res.data.token);
      userCtx?.setUserInfo({
        firstName: firstname,
        lastName: lastname,
        role: role,
      });

      navigate("/homepage");
    } else {
      alert(JSON.stringify(res.data));
      console.log(res.data);
    }
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
              {t("RegisterAcc")}
            </Typography>

            <TextField
              required
              label={t("FirstName")}
              variant="outlined"
              sx={{ width: "25%" }}
              onChange={(e) => setFirstname(e.target.value)}
            />
            <TextField
              required
              label={t("LastName")}
              variant="outlined"
              sx={{ width: "25%" }}
              onChange={(e) => setLastname(e.target.value)}
            />
            <TextField
              required
              label={t("Email")}
              variant="outlined"
              sx={{ width: "25%" }}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              required
              label={t("Password")}
              variant="outlined"
              sx={{ width: "25%" }}
              onChange={(e) => setPassword(e.target.value)}
            />
            <TextField
              required
              select
              label={t("Role")}
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
              {t("Register")}
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              sx={{ width: "20%" }}
              onClick={() => {
                navigate("/");
              }}
            >
              {t("Cancel")}
            </Button>

            {/* choose language */}
            <Typography
              component={Stack}
              direction="row"
              spacing={1}
              fontSize="12px"
            >
              <Link
                onClick={userCtx?.handleChangeLanguage}
                underline="always"
                sx={{ cursor: "pointer" }}
              >
                {t("EN")}
              </Link>
              <Typography variant="body2">|</Typography>
              <Link
                onClick={userCtx?.handleChangeLanguage}
                underline="always"
                sx={{ cursor: "pointer" }}
              >
                {t("CH")}
              </Link>
            </Typography>
          </Stack>
        </Box>
      </Container>
    </>
  );
};

export default Register;
