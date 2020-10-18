import React from "react";
import {Avatar} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  large: {
    width: theme.spacing(27),
    height: theme.spacing(27),
    alignItems: 'center',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    border: '1px solid grey',
    top: '23px'
  },
}));

const ProfilePic = () => {
  const classes = useStyles();

  return(
    <div className={classes.root}>
      <Avatar
        className={classes.large}
        alt="Anushka Bhardwaj"
        src="https://user-images.githubusercontent.com/40923324/96367933-58dec000-116e-11eb-85d1-f5ca6b4e9eff.jpeg"
      />
    </div>
  )
}

export default ProfilePic;
