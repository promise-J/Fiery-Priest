import { Box, Stack, useTheme } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import Logo from "../../assets/Images/logo.ico";

const DashboardLayout = () => {
  const theme = useTheme();
  console.log(theme, "the theme");
  return (
    <>
      <Box
        sx={{
          backgroundColor: theme.palette.background.paper,
          height: "100vh",
          boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
          width: 100,
        }}
      >
        <Stack>
          <Box
            sx={{
              backgroundColor: theme.palette.primary.main,
              height: 64,
              width: 64,
              borderRadius: 2.5,
            }}
          >
            <img src={Logo} alt={"logo imag"} />
          </Box>
        </Stack>
      </Box>
      <Outlet />
    </>
  );
};

export default DashboardLayout;
