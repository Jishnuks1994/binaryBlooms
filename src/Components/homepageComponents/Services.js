import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import React, { useEffect } from "react";
import FloatingActionButtonZoom from "./FloatingActionButtonZoom";
import { motion, useAnimation } from "framer-motion";


function Services() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ opacity: 1, y: 0 });
  }, [controls]);

  return (
    <div>
      <Box>
        
        <Typography variant="h3" textAlign={"center"} mt={5}>
          Our Services
        </Typography>
      </Box>
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "3%",
        }}
      >
        <FloatingActionButtonZoom />

        <Box>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Grid
              container
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              direction={"row"}
            >
              <Grid
                p={5}
                item
                xs={12}
                sm={12}
                md={6}
                lg={6}
                xl={6}
                component={motion.div}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <img
                  width={"100%"}
                  src="https://i.postimg.cc/N0ScQvMH/64e5de11811d72e03bc71dbd-react-native.png"
                  alt="react_native"
                />
              </Grid>
              <Grid
                p={5}
                item
                xs={12}
                sm={12}
                md={6}
                lg={6}
                xl={6}
                display={"flex"}
                direction={"column"}
                justifyContent="center"
                alignItems="center"
                component={motion.div}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <Typography mb={3} alignItems={"center"} variant="h2">
                  iOS and Android{" "}
                </Typography>
                <Typography sx={{ fontFamily: "Poppins" }} variant="h5">
                  Elevating user experiences seamlessly on both Android and iOS
                  platforms, our cutting-edge mobile apps crafted with React
                  Native redefine excellence in cross-platform development,
                  delighting our customers worldwide.
                </Typography>
              </Grid>
            </Grid>
          </motion.div>

          <Grid
            container
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            direction={isMobile ? "row-reverse" : "row"}
          >
            <Grid
              p={5}
              item
              xs={12}
              sm={12}
              md={6}
              lg={6}
              xl={6}
              display={"flex"}
              direction={"column"}
              justifyContent="center"
              alignItems="center"
            >
              <Typography mb={3} alignItems={"center"} variant="h2">
                Web Scrapping{" "}
              </Typography>
              <Typography sx={{ fontFamily: "Poppins" }} variant="h5">
                Unlock the power of efficient web scraping with React Puppeteer
                - the perfect synergy of React.js and Puppeteer, offering a
                seamless solution for extracting valuable data from the web with
                precision and ease.
              </Typography>
            </Grid>

            <Grid p={5} item xs={12} sm={12} md={6} lg={6} xl={6}>
              <img
                width={"100%"}
                src="https://i.postimg.cc/VspBcGmb/Puppeteer.jpg"
                alt="react_native"
              />
            </Grid>
          </Grid>

          <Grid
            container
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            direction={"row"}
          >
            <Grid p={5} item xs={12} sm={12} md={6} lg={6} xl={6}>
              <img
                width={"100%"}
                src="https://i.postimg.cc/3JqCt1Jn/automation-office-worker-concept-with-3d-rendering-cute-robot-work-with-computer-notebook-isolated-w.jpg"
                alt="react_native"
              />
            </Grid>
            <Grid
              p={5}
              item
              xs={12}
              sm={12}
              md={6}
              lg={6}
              xl={6}
              display={"flex"}
              direction={"column"}
              justifyContent="center"
              alignItems="center"
            >
              <Typography mb={3} alignItems={"center"} variant="h2">
                Automation
              </Typography>
              <Typography sx={{ fontFamily: "Poppins" }} variant="h5">
                Elevate your automation capabilities with a dynamic synergy of
                Automation Anywhere and Puppeteer, seamlessly integrating
                enterprise-level RPA solutions with web scraping precision,
                providing an unparalleled automation experience for increased
                efficiency and streamlined workflows.
              </Typography>
            </Grid>
          </Grid>

          <Grid
            container
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            direction={"row"}
          >
            <Grid
              p={5}
              item
              xs={12}
              sm={12}
              md={6}
              lg={6}
              xl={6}
              display={"flex"}
              direction={"column"}
              justifyContent="center"
              alignItems="center"
            >
              <Typography mb={3} alignItems={"center"} variant="h2">
                Devops
              </Typography>
              <Typography sx={{ fontFamily: "Poppins" }} variant="h5">
                Empower your development and operations teams with our
                cutting-edge DevOps solutions, fostering collaboration,
                automating workflows, and accelerating software delivery,
                ensuring your business stays agile and competitive in the
                ever-evolving digital landscape.
              </Typography>
            </Grid>
            <Grid p={5} item xs={12} sm={12} md={6} lg={6} xl={6}>
              <img
                width={"100%"}
                src="https://i.postimg.cc/26786C53/Dev-Ops-lifecycle-capabilities-1024x621.jpg"
                alt="react_native"
              />
            </Grid>
          </Grid>

          <Grid
            container
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            direction={"row"}
          >
            <Grid p={5} item xs={12} sm={12} md={6} lg={6} xl={6}>
              <img
                width={"100%"}
                src="https://i.postimg.cc/gJxb9d6f/pigmmccjl6qwyjkcb5kc.jpg"
                alt=""
              />
            </Grid>
            <Grid
              p={5}
              item
              xs={12}
              sm={12}
              md={6}
              lg={6}
              xl={6}
              display={"flex"}
              direction={"column"}
              justifyContent="center"
              alignItems="center"
            >
              <Typography
                mb={3}
                alignItems={"center"}
                justifyContent={"center"}
                variant="h2"
              >
                Serverside Development
              </Typography>
              <Typography sx={{ fontFamily: "Poppins" }} variant="h5">
                Transform your server-side development experience with our
                robust stack featuring Python Django for a secure and scalable
                backend, PostgreSQL for robust database management, and Node.js
                for high-performance server-side JavaScript, ensuring a seamless
                and efficient development process for your web applications.
              </Typography>
            </Grid>
          </Grid>

          <Grid
            container
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            direction={"row"}
          >
            <Grid
              p={5}
              item
              xs={12}
              sm={12}
              md={6}
              lg={6}
              xl={6}
              display={"flex"}
              direction={"column"}
              justifyContent="center"
              alignItems="center"
            >
              <Typography
                mb={3}
                alignItems={"center"}
                justifyContent={"center"}
                variant="h2"
              >
                Chatbot Development
              </Typography>
              <Typography sx={{ fontFamily: "Poppins" }} variant="h5">
                Elevate your conversational experiences with our chatbot
                development using Google Dialogflow and Tidio. Seamlessly
                integrate intelligent natural language processing with
                user-friendly interfaces, providing a dynamic and engaging
                platform for interactive customer interactions and efficient
                communication.
              </Typography>
            </Grid>
            <Grid p={5} item xs={12} sm={12} md={6} lg={6} xl={6}>
              <img
                width={"100%"}
                src="https://i.postimg.cc/8PNDc88r/cover.png"
                alt=""
              />
            </Grid>
          </Grid>

          <Grid
            container
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            direction={"row"}
          >
            <Grid p={5} item xs={12} sm={12} md={6} lg={6} xl={6}>
              <img
                width={"100%"}
                src="https://i.postimg.cc/kG5cYX6b/04accec7-f452-4850-a426-940a3266b772-cover.png"
                alt=""
              />
            </Grid>
            <Grid
              p={5}
              item
              xs={12}
              sm={12}
              md={6}
              lg={6}
              xl={6}
              display={"flex"}
              direction={"column"}
              justifyContent="center"
              alignItems="center"
            >
              <Typography
                mb={3}
                alignItems={"center"}
                justifyContent={"center"}
                variant="h2"
              >
                UI UX Design
              </Typography>
              <Typography sx={{ fontFamily: "Poppins" }} variant="h5">
                Craft visually stunning and user-centric digital experiences
                with our UI/UX design expertise using Figma. From wireframing to
                high-fidelity prototypes, we bring your ideas to life, ensuring
                a seamless collaboration between design and development for a
                truly captivating user journey
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </div>
  );
}

export default Services;
