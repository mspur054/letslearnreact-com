import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import CameraIcon from "@material-ui/icons/PhotoCamera";

const AppBarComponent = props => {
  const { appBar, icon } = props.classes;
  return (
    <AppBar position="static" className={appBar}>
      <Toolbar>
        <CameraIcon className={icon} />
        <Typography variant="h6" color="inherit" noWrap>
          Album layout
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default AppBarComponent;
