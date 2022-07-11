import React from "react";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import MoneyIcon from "@mui/icons-material/Money";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import PeopleIcon from "@mui/icons-material/PeopleOutlined";
import BrushIcon from '@mui/icons-material/Brush';

function GridComponent({ card, color }) {
  return (
    <Card sx={{ height: "100%" }}>
      {color !== null ? (
        <CardContent>
          <Grid container spacing={3} sx={{ justifyContent: "space-between" }}>
            <Grid item>
              <Typography color="textSecondary" gutterBottom variant="overline">
                {color.replace('.main','')}
              </Typography>
            </Grid>
            <Grid item>
              <Avatar
                sx={{
                  backgroundColor: color,
                  height: 35,
                  width: 35,
                }}
              ><BrushIcon/>
              </Avatar>
            </Grid>
          </Grid>
        </CardContent>
      ) : (
        <CardContent>
          <Grid container spacing={3} sx={{ justifyContent: "space-between" }}>
            <Grid item>
              <Typography color="textSecondary" gutterBottom variant="overline">
                {card.title}
              </Typography>
              <Typography color="textPrimary" variant="h4">
                ${card.value} K
              </Typography>
            </Grid>
            <Grid item>
              <Avatar
                sx={{
                  backgroundColor: card.color,
                  height: 56,
                  width: 56,
                }}
              >
                {card.icon}
              </Avatar>
            </Grid>
          </Grid>
          <Box
            sx={{
              alignItems: "center",
              display: "flex",
              pt: 2,
            }}
          >
            {card.upDown === "up" ? (
              <ArrowUpwardIcon color="success" />
            ) : (
              <ArrowDownwardIcon color="error" />
            )}
            <Typography
              variant="body2"
              sx={{
                mr: 1,
              }}
            >
              {card.change}%
            </Typography>
            <Typography color="textSecondary" variant="caption">
              Since last month
            </Typography>
          </Box>
        </CardContent>
      )}
    </Card>
  );
}

export default GridComponent;
