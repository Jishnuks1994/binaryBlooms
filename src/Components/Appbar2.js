import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import useMediaQuery from "@mui/material/useMediaQuery";
import { styled } from "@mui/system";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from'react';


const GlassButton = styled(Button)(({ theme }) => ({
  color: 'white',
  borderRadius: '20px',
  padding: theme.spacing(0, 2),
  transition: 'transform 0.3s ease',
  '&:hover': {
    background: 'rgba(255, 255, 255, 0.2)',
    backdropFilter: 'blur(10px)',
    boxShadow: '0 8px 12px rgba(0, 0, 0, 0.2)',
    transform: 'scale(1.1)',
  },
}));

export default function AppBar2() {

  const matches = useMediaQuery("(max-width:600px)");
  const [anchorEl, setAnchorEl] = useState(null);


  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };


  return (
    <React.Fragment>
      <CssBaseline />
    
        <AppBar
       
          sx={{
            background: "white",
            boxShadow: "0px 2px 4px -1px rgba(0,0,0,0.1), 0px 4px 5px 0px rgba(0,0,0,0.06), 0px 1px 10px 0px rgba(0,0,0,0.04)",
            height:'12%',
          }}
        >
          <Toolbar>
            {matches && (
              <IconButton
                color="dark"
                aria-label="menu"
              >
                <MenuIcon />
              </IconButton>
            )}

            <Typography
              variant="h3"
              component="div"
              color={"black"}
              fontWeight={"bold"}
              fontFamily={"poppins"}
              sx={{
                display: {
                  xs: "none",
                  sm: "block",
                  fontWeight: 500,
                  fontSize:"40px",
                  color:'#4a4a4a'
                  
                },
              }}
            >
              <span style={{ fontSize: "1.2em" }}>B</span>inary Blooms
            </Typography>
           
            <Box sx={{ marginLeft: "auto" }}>
            <GlassButton
                aria-controls="ios-menu"
                aria-haspopup="true"
                sx={{color:'#4a4a4a',":hover":{color:'#0468d7'}}}
                onClick={handleMenuClick}
              >
                <b>iOS</b>
              </GlassButton>

              <Menu
             sx={{width:'300px'}}
        id="ios-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        {/* Add your menu items here */}
        <MenuItem onClick={handleMenuClose}>Item 1</MenuItem>
        <MenuItem onClick={handleMenuClose}>Item 2</MenuItem>
        <MenuItem onClick={handleMenuClose}>Item 3</MenuItem>
      </Menu>

            </Box>

            <Box sx={{ marginLeft: "1%" }}>
              <GlassButton
                color="inherit"
                aria-controls="android-menu"
                aria-haspopup="true"
                sx={{color:'#4a4a4a',":hover":{color:'#0468d7'}}}
                onClick={handleMenuClick}
              >
                <b>Android</b>
              </GlassButton>

              <Menu
             sx={{width:'300px'}}
        id="android-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        {/* Add your menu items here */}
        <MenuItem onClick={handleMenuClose}>Item 1</MenuItem>
        <MenuItem onClick={handleMenuClose}>Item 2</MenuItem>
        <MenuItem onClick={handleMenuClose}>Item 3</MenuItem>
      </Menu>
            </Box>

            <Box sx={{ marginLeft: "1%" }}>
              <GlassButton
                aria-controls="web-menu"
                aria-haspopup="true"
                sx={{color:'#4a4a4a',":hover":{color:'#0468d7'}}}
                onClick={handleMenuClick}

              >
                <b>Web</b>
              </GlassButton>

              <Menu
             sx={{width:'300px'}}
        id="web-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        {/* Add your menu items here */}
        <MenuItem onClick={handleMenuClose}>Item 1</MenuItem>
        <MenuItem onClick={handleMenuClose}>Item 2</MenuItem>
        <MenuItem onClick={handleMenuClose}>Item 3</MenuItem>
      </Menu>
            </Box>
            <Box ml={'5%'}>

              <Button sx={{background:'#0468d7', color:'white',borderRadius:'20px',px:4, ":hover":{background:'#0468d7'},}}  >Login</Button>

            </Box>
           
          </Toolbar>
        </AppBar>
      
      <Toolbar />
      <Container></Container>
    </React.Fragment>
  );
}
