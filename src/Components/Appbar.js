import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Slide from "@mui/material/Slide";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import useMediaQuery from "@mui/material/useMediaQuery";
import { styled } from "@mui/system";
import BrandName from "./homepageComponents/Brandname";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from'react';

function HideOnScroll(props) {

 

  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 150,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

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

export default function HideAppBar(props) {

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
      <HideOnScroll {...props}>
        <AppBar
          sx={{
            background: "transparent",
            boxShadow: "none",
          }}
        >
          <Toolbar>
            {matches && (
              <IconButton
                color="inherit"
                aria-label="menu"
              >
                <MenuIcon />
              </IconButton>
            )}

            {/* <Typography
              variant="h3"
              component="div"
              color={"white"}
              fontWeight={"bold"}
              fontFamily={"poppins"}
              sx={{
                display: {
                  xs: "none",
                  sm: "block",
                  fontWeight: 500,
                  fontSize:"40px"
                  
                },
              }}
            >
              <span style={{ fontSize: "1.2em" }}>B</span>inary Blooms
            </Typography> */}
            <BrandName/>
            {/* <Box sx={{ marginLeft: "auto" }}>
            <GlassButton
                aria-controls="ios-menu"
                aria-haspopup="true"
              >
                <b>iOS</b>
              </GlassButton>

            </Box> */}

            <Box sx={{ marginLeft: "auto" }}>
            <GlassButton
                aria-controls="ios-menu"
                aria-haspopup="true"
                // onMouseEnter={handleMenuClick} 
                // onMouseLeave={handleMenuClose}
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

              <Button sx={{color:'#0468d7',background:'white', ':hover':{background:'white'},borderRadius:'20px',px:4}}  >Login</Button>

            </Box>
           
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
      <Container></Container>
    </React.Fragment>
  );
}
