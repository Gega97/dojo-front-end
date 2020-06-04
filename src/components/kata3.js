import React, { useState, useEffect } from "react";
import clsx from "clsx";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import Avatar from "@material-ui/core/Avatar";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import NotificationsIcon from "@material-ui/icons/Notifications";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  title: {
    flexGrow: 1,
  },
  logo: {
    width: "120px",
    height: "40px",
  },
  profileAvatar: {
    margin: "auto",
  },
  searchIcon: {
    marginRight: theme.spacing(1),
  },
  notification: {
    marginRight: theme.spacing(2),
  },
  avatar: {
    marginRight: theme.spacing(2),
  },
  input: {
    marginRight: theme.spacing(10),
  },
  inputRoot: {
    color: "inherit",
    backgroundColor: fade(theme.palette.primary.light, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.primary.light, 0.25),
    },
  },
}));

const Navbar = (props) => {
  const classes = useStyles();
  let content = (
    <AppBar
      position="absolute"
      className={clsx(classes.appBar)}
      color="primary"
    >
      <Toolbar className={classes.toolbar}>
        <img src={""} alt="" className={classes.logo}></img>
        <Typography
          component="h1"
          variant="h6"
          color="inherit"
          noWrap
          className={classes.title}
        >
          Dojo | React{" "}
        </Typography>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <div className={classes.input}>
          <InputBase
            placeholder="Buscar..."
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ "aria-label": "search" }}
          />
        </div>
        <div className={classes.notification}>
          <IconButton aria-label="show 17 new notifications" color="inherit">
            <Badge badgeContent={17} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
        </div>
        <div className={classes.avatar}>
          <Avatar />
        </div>

        <IconButton color="inherit">
          <ExitToAppIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
  return content;
};
export default Navbar;
