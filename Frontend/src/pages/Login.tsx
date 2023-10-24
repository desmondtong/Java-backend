import {
  Box,
  Container,
  Link,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Button from "@mui/material/Button";
import jwtDecode from "jwt-decode";
import React, { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import UserContext from "../context/user";
import useFetch from "../hooks/useFetch";
import { data } from "../interfaces";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const userCtx = useContext(UserContext);
  const fetchData = useFetch();
  const { t } = useTranslation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const res: data = await fetchData("/api/v1/auth/authenticate", "POST", {
      email,
      password,
    });

    if (res.ok) {
      // capture login error msg
      if (res.data.message) return alert(JSON.stringify(res.data.message));

      const decoded: any = jwtDecode(res.data.token);

      // set token and userinfo from decoded claims
      userCtx?.setToken(decoded.token);
      userCtx?.setUserInfo({
        firstName: decoded.firstname,
        lastName: decoded.lastname,
        role: decoded.role,
        email: decoded.sub,
      });

      navigate("/homepage");
    } else {
      alert(JSON.stringify(res.data));
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
              {t("Login")}
            </Typography>
            <TextField
              label={t("Email")}
              variant="outlined"
              sx={{ width: "25%" }}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              label={t("Password")}
              type="password"
              variant="outlined"
              sx={{ width: "25%" }}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              variant="contained"
              color="secondary"
              sx={{ width: "20%" }}
              onClick={handleLogin}
            >
              {t("Login")}
            </Button>
            <Typography
              textAlign="start"
              margin="1rem 0"
              sx={{ fontSize: "12px" }}
            >
              {t("Account")}
              <Link
                onClick={() => {
                  navigate("/register");
                }}
                underline="always"
                sx={{ cursor: "pointer" }}
              >
                {t("Register")}
              </Link>
            </Typography>

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

export default Login;
