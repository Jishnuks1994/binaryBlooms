import React from 'react'
import { Grid, Typography, Link, Divider, Box } from '@mui/material';
import { YouTube, Twitter, GitHub, Instagram, WhatsApp, LinkedIn } from '@mui/icons-material';

function Footer() {
  return (
    <div>
         <div >
      <Box sx={{background:'#d8d8d8'}} mt={3} p={3} >
        <Grid container spacing={3}>
          <Grid item lg={6}>
            <Typography variant="h3" sx={{fontFamily:'Poppins'}}>Binary Blooms</Typography>
          </Grid>
          <Grid item lg={3}>
            <div>
              <Typography variant="h6">About Binary Blooms</Typography>
              <Link href="#" underline="hover" color="textSecondary">
                Careers
              </Link>
              <br />
              <Link href="#" underline="hover" color="textSecondary">
                News
              </Link>
              <br />
              <Link href="#" underline="hover" color="textSecondary">
                Brand
              </Link>
              <br />
              <Link href="#" underline="hover" color="textSecondary">
                Culture
              </Link>
              <br />
            </div>
          </Grid>
          <Grid item lg={3}>
            <div>
              <Typography variant="h6">Multi-Platform</Typography>
              <Link href="#" underline="hover" color="textSecondary">
                Mobile
              </Link>
              <br />
              <Link href="#" underline="hover" color="textSecondary">
                Web
              </Link>
              <br />
              <Link href="#" underline="hover" color="textSecondary">
                Desktop
              </Link>
              <br />
              <Link href="#" underline="hover" color="textSecondary">
                Embedded
              </Link>
              <br />
              <Link href="#" underline="hover" color="textSecondary">
                iOS
              </Link>
              <br />
            </div>
          </Grid>
        </Grid>

        <Box my={2}>
          <YouTube sx={{ fontSize: '2xl', color: 'grey', marginRight: 2 }} />
          <Twitter sx={{ fontSize: '2xl', color: 'grey', marginRight: 2 }} />
          <GitHub sx={{ fontSize: '2xl', color: 'grey', marginRight: 2 }} />
          <Instagram sx={{ fontSize: '2xl', color: 'grey', marginRight: 2 }} />
          <WhatsApp sx={{ fontSize: '2xl', color: 'grey', marginRight: 2 }} />
          <LinkedIn sx={{ fontSize: '2xl', color: 'grey', marginRight: 2 }} />
        </Box>
        <Divider />
        <div>
          <Grid container mt={2} justifyContent="space-between" alignItems="center">
            <Grid item lg={9} md={12} sm={12}>
              <Typography textAlign="center" >
                Except as otherwise noted, this work is licensed under a Creative Commons Attribution 4.0 International
                License, and code samples are licensed under the BSD License.
              </Typography>
            </Grid>
            <Grid item>
              <Link href="#" underline="hover" color="textSecondary" sx={{ marginRight: 3 }}>
                Terms
              </Link>
              <Link href="#" underline="hover" color="textSecondary" sx={{ marginRight: 3 }}>
                Privacy
              </Link>
              <Link href="#" underline="hover" color="textSecondary" sx={{ marginRight: 3 }}>
                Security
              </Link>
            </Grid>
          </Grid>
        </div>
      </Box>
    </div>
    </div>
  )
}

export default Footer