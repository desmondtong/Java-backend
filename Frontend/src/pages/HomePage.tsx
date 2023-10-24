import { Button, Container, Link, Stack, Typography } from "@mui/material";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../context/user";
import { useTranslation } from "react-i18next";

const HomePage: React.FC = () => {
  const userCtx = useContext(UserContext);
  const navigate = useNavigate();
  const { t } = useTranslation();

  const firstName = userCtx?.userInfo.firstName;
  const lastName = userCtx?.userInfo.lastName;
  const role = userCtx?.userInfo.role;
  const email = userCtx?.userInfo.email;

  const handleLogout = () => {
    // clear token & no longer accessible to homepage
    userCtx?.setToken("");
    navigate("/");
  };
  return (
    <>
      <Container maxWidth="lg">
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={2}
          height="100vh"
        >
          <Typography variant="h3">{`${t(
            "Welcome"
          )}, ${firstName} ${lastName}!`}</Typography>
          <Typography variant="body1">{`${t("Email")}: ${email}`}</Typography>
          <Typography variant="body1">{`${t("Role")}: ${t(
            role?.toUpperCase()!
          )}`}</Typography>
          <Button variant="contained" color="secondary" onClick={handleLogout}>
            {t("Logout")}
          </Button>

          {/* only show button for ADMIN */}
          {role === "ADMIN" && (
            <Button
              variant="contained"
              color="info"
              onClick={() => navigate("/adminonly")}
            >
              {t("AdminAccess")}
            </Button>
          )}

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
      </Container>
    </>
  );
};

export default HomePage;
