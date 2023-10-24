import { Button, Container, Stack, Typography } from "@mui/material";
import React, { useContext } from "react";
import UserContext from "../context/user";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const AdminOnly: React.FC = () => {
  const userCtx = useContext(UserContext);
  const navigate = useNavigate();
  const { t } = useTranslation();

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
          <Typography variant="h3">{t("AdminAccess")} </Typography>
          <Button variant="contained" color="secondary" onClick={handleLogout}>
            {t("Logout")}
          </Button>
          <Button
            variant="contained"
            color="info"
            onClick={() => history.back()}
          >
            {t("Back")}
          </Button>
        </Stack>
      </Container>
    </>
  );
};

export default AdminOnly;
