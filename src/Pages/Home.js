import React, { useState } from "react";
import Box from "@mui/material/Box";
import {
  Button,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Header from "../Components/Header";
import Services from "../Components/homepageComponents/Services";
import AnimatedText from "../Components/homepageComponents/TaglineAnimation";
import Footer from "../Components/Footer";
import AppBar2 from "../Components/Appbar2";
import SwipeableTextMobileStepper from "../Components/homepageComponents/SwipeableTextMobileStepper";

function Home() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [showHeader, setShowHeader] = useState(true);



  const gradientStyle = isMobile
    ? {
        position: "relative",
        background:
          "linear-gradient(90deg, rgba(143,177,223,1) 0%, rgba(76,71,227,1) 50%, rgba(0,185,255,1) 100%)",
        width: "100%",
        height: "950px",
      }
    : {
        position: "relative",
        background:
          "linear-gradient(90deg, rgba(143,177,223,1) 0%, rgba(76,71,227,1) 50%, rgba(0,185,255,1) 100%)",
        width: "100%",
        height: "1650px",
      };

  const overlayStyle = {
    position: "absolute",
    top: 0,
    right: "15%",
    width: "25%",
    height: "70vh",
    zIndex: 1,
    backgroundImage:
      "linear-gradient(90deg, rgba(113,158,255,1) 0%, rgba(126,25,214,0.8939950980392157) 100%)",
    clipPath: "polygon(50% 100%, 0% 0%, 100% 0%)",
  };

  const headingStyle = {
    zIndex: 2,
    position: "absolute",
    marginTop: "15%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };



  const handleScroll = () => {
    const scrollY = window.scrollY;

    const threshold=1750

    if (scrollY > threshold && showHeader) {
      // Switch to AppBar2
      setShowHeader(false);
    } 
    else if (scrollY <= threshold && !showHeader) {
      // Switch to Header
      setShowHeader(true);
    }

  };

  // Attach the scroll event listener when the component mounts
  React.useEffect(() => {


    
    window.addEventListener("scroll", handleScroll);

    // Remove the event listener when the component unmounts
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      {showHeader ? (
        <Box className="hero_section" style={gradientStyle}>
          <div id="triangle" style={overlayStyle}></div>
          <Header />

        <div style={headingStyle}>
          <AnimatedText />
        </div>

        <Grid
          container
          position={"absolute"}
          zIndex={2}
          marginTop={"20%"}
          overflow={"hidden"}
          direction="row"
        >
          <Grid
            lg={5}
            sm={5}
            md={5}
            xs={5}
            paddingRight={"1%"}
            marginTop={"13%"}
          >
            <Grid>
              <img
                style={{ width: "100%", borderRadius: "10px" }}
                src="https://i.postimg.cc/6QnhRZ1P/ab8b95b9e14883037297.png"
                alt=""
              />
            </Grid>
            <Grid container marginTop={"1%"}>
              <Grid
                lg={6}
                md={6}
                sm={6}
                xs={6}
                marginTop={"30%"}
                padding={"1%"}
              >
                <img
                  style={{ width: "100%", borderRadius: "10px" }}
                  src="https://i.postimg.cc/T2p93svk/42b50a45c3cfd815e2aa.png"
                  alt=""
                />
              </Grid>
              <Grid lg={6} md={6} sm={6} xs={6} padding={"1%"}>
                <img
                  style={{ width: "100%", borderRadius: "10px" }}
                  src="https://i.postimg.cc/9MTQxVq8/32c264af3b738a0d5a5e.png"
                  alt=""
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid lg={3} md={3} sm={3} xs={3} padding={"1%"}>
            <img
              style={{ width: "100%", borderRadius: "10px" }}
              src="https://i.postimg.cc/gjSF3QBN/90e34daecca082eb9b28.png"
              alt=""
            />
          </Grid>
          <Grid lg={2} md={2} sm={2} xs={2} marginTop={"15%"} padding={"1%"}>
            <Grid>
              <img
                style={{ width: "100%", borderRadius: "10px" }}
                src="https://i.postimg.cc/P5mKk8nT/f3c373924a5075e883cf.png"
                alt=""
              />
            </Grid>
            <Grid marginTop={"2%"}>
              <img
                style={{ width: "100%", borderRadius: "10px" }}
                src="https://i.postimg.cc/vHjHdcLq/b8bd15d096f0557123b1.jpg"
                alt=""
              />
            </Grid>
          </Grid>
          <Grid lg={2} md={2} sm={2} xs={2} marginTop={"25%"} padding={"1%"}>
            <Grid>
              <img
                style={{ height: "250px", borderRadius: "10px" }}
                src="https://i.postimg.cc/sx5ddgV8/4e15fea30ba9d8a14208.png"
                alt=""
              />
            </Grid>
            <Grid marginTop={"2%"}>
              <img
                style={{ width: "100%", borderRadius: "10px" }}
                src="https://i.postimg.cc/Ls5c4T9j/389ff8f9e4d6becae73a.png"
                alt=""
              />
            </Grid>
          </Grid>
          <Box
            m={"auto"}
            alignContent={"center"}
            position={"relative"}
            py={5}
            mt={3}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography variant="h5" textAlign={"center"} color="white">
              Technology that we use:React, nextJs, Nodejs, MongoDB, AWS,
              Digital Ocean, Firebase, Redis
            </Typography>

            <Button
              variant="contained"
              sx={{
                borderRadius: "20px",
                color: "blue",
                background: "white",
                marginTop: "5%",
              }}
            >
              Get Started
            </Button>
          </Box>
        </Grid>
      </Box>
      ) : (
        <AppBar2 />
      )}
             
      <Services />
      <SwipeableTextMobileStepper/>
      <Footer />
    </div>
  );
}

export default Home;
