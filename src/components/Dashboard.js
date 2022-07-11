import React from "react";
import { Box, Container, Grid } from "@mui/material";
import GridComponent from "./GridComponent";
import PeopleIcon from "@mui/icons-material/PeopleOutlined";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import MoneyIcon from "@mui/icons-material/Money";
import SellIcon from "@mui/icons-material/Sell";
import Typography from "@mui/material/Typography";

function Dashboard() {
  return (
    <div>
      <Typography
        variant="h5"
        noWrap
        component="div"
        sx={{ p: 2, maxWidth: 1 / 1, align: "center" }}
      >
        Overview
      </Typography>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 2,
        }}
      >
        <Container maxWidth={false}>
          <Grid container spacing={3}>
            {[
              {
                title: "TOTAL CUSTOMERS",
                value: 16,
                icon: <PeopleIcon />,
                upDown: "up",
                change: 16,
                color: "primary.main",
              },
              {
                title: "TOTAL PROFIT",
                value: 23,
                icon: <AttachMoneyIcon />,
                upDown: "up",
                change: 25,
                color: "success.main",
              },
              {
                title: "BUDGET",
                value: 24,
                icon: <MoneyIcon />,
                upDown: "down",
                change: 12,
                color: "error.main",
              },
              {
                title: "TOTAL SALES",
                value: 20,
                icon: <SellIcon />,
                upDown: "down",
                change: 5,
                color: "action",
              },
            ].map((card) => (
              <Grid item lg={3} sm={6} xl={3} xs={12}>
                <GridComponent card={card} color={null} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
      <Typography
        variant="h5"
        noWrap
        component="div"
        sx={{ p: 2, maxWidth: 1 / 1, align: "center" }}
      >
        Colors
      </Typography>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 2,
        }}
      >
        <Container maxWidth={false}>
          <Grid container spacing={3}>
            {["primary.main", 'secondary.main', "success.main", "error.main", "action.main", 'disabled.main',  ].map(
              (color) => (
                <Grid item xl={2} lg={3}  md={4} sm={6} xs={12}>
                  <GridComponent color={color} />
                </Grid>
              )
            )}
          </Grid>
        </Container>
      </Box>
    </div>
  );
}

export default Dashboard;
