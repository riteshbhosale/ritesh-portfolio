import React from "react";
import { Box, Button, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <>
      <Stack spacing={2}>
        <Box>
          <h1 style={{ textAlign: "center", fontSize: "160px" }}>Oops!</h1>
          <h2 style={{ textAlign: "center", fontSize: "32px" }}>
            404 - Page Not Found
          </h2>
          <p style={{ textAlign: "center", fontSize: "24px" }}>
            The page you are looking for might have been removed or is
            temporarily unavailable.
          </p>
        </Box>
        <Box display={"flex"} justifyContent={"center"}>
          <Button variant="contained" onClick={() => navigate("/")}>
            Go To Home
          </Button>
        </Box>
      </Stack>
    </>
  );
};

export default PageNotFound;
