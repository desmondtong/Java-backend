import { Button, Container, Stack, Typography } from "@mui/material";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../context/user";

const HomePage: React.FC = () => {
  const userCtx = useContext(UserContext);
  const navigate = useNavigate();

  const firstName = userCtx?.userInfo.firstName;
  const lastName = userCtx?.userInfo.lastName;
  const role = userCtx?.userInfo.role;

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
          <Typography variant="h3">{`Welcome, ${firstName} ${lastName}!`}</Typography>
          <Typography variant="body1">{`Role: ${role}`}</Typography>
          <Button variant="contained" color="secondary" onClick={handleLogout}>
            Logout
          </Button>

          {/* only show button for ADMIN */}
          {role === "ADMIN" && (
            <Button
              variant="contained"
              color="info"
              onClick={() => navigate("/adminonly")}
            >
              ADMIN ONLY ACCESS ⛔️
            </Button>
          )}
        </Stack>
      </Container>
    </>
  );
};

export default HomePage;
