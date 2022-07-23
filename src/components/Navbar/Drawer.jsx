import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  MenuIcon,
 makeStyles
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { HomeRounded } from "@material-ui/icons";
import Hamburger from 'hamburger-react';

const useStyles = makeStyles(()=>({
    link:{
        textDecoration:"none",
        color: "blue",
        fontSize: "20px",
    },
    icon:{
        color: "black"
    }
}));

function DrawerComponent() {
const classes = useStyles();
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
      <Drawer
        open={openDrawer}
        
        onClose={() => setOpenDrawer(false)}
      >
        <List>
         <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/">Home</Link>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/product">Product</Link>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/about">About</Link>
            </ListItemText>
          </ListItem>
          
        </List>
      </Drawer>
      <IconButton  onClick={() => setOpenDrawer(!openDrawer)}>
     <HomeRounded/>

      </IconButton>
    </>
  );
}
export default DrawerComponent;