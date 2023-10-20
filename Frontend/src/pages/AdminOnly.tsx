import { Button, Container, Stack, Typography } from "@mui/material";
import React, { useContext } from "react";
import UserContext from "../context/user";
import { useNavigate } from "react-router-dom";

const AdminOnly: React.FC = () => {
  const userCtx = useContext(UserContext);
  const navigate = useNavigate();

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
          <Typography variant="h3">ADMIN ONLY ACCESS </Typography>
          <Button variant="contained" color="secondary" onClick={handleLogout}>
            Logout
          </Button>
          <Button
            variant="contained"
            color="info"
            onClick={() => history.back()}
          >
            Back
          </Button>
        </Stack>
      </Container>
    </>
  );
};

export default AdminOnly;
