import React from "react";
import HideAppBar from "./Appbar";
import { Box, Grid, Typography } from "@mui/material";
import Button from '@mui/material/Button';


function Header() {
  return (
    <div>
      <HideAppBar></HideAppBar>
      <Box>
        {/* <Grid container direction={"row"}>
          <Grid item>
            <Typography
              color={"white"}
              fontWeight={"bold"}
              fontFamily={"poppins"}
              variant="h3"
            >
              <span style={{fontSize:'1.5em'}}>B</span>inary Blooms
            </Typography>
          </Grid>
  
          <Grid item><Button variant="text" size="large" style={{ color: 'white' }} >iOS</Button></Grid>
          </Grid> */}
        </Box>
        
    </div>
  );
}

export default Header;
