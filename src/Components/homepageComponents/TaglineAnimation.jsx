import { motion, useAnimation } from "framer-motion";
import { Typography, useMediaQuery, useTheme} from "@mui/material"

 const AnimatedText = () => {

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const controls = useAnimation();

  const variants = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    },
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren"
      }
    }
  };

  const letterVariants = {
    hidden: {
      opacity: 0,
      y: 50
    },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  const onScroll = () => {
    if (true) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  };

  return (
    <div>
      <div>
    <motion.div
      animate={controls}
      initial="hidden"
      variants={variants}
      onViewportEnter={onScroll}
    >
      <Typography variant={isMobile?'h5':'h2'} color="white" sx={isMobile ? {fontFamily:'Poppins !important'}:{fontFamily:'Poppins !important',fontWeight:600}}> 
        <motion.span style={{fontSize:'1.3em'}} variants={letterVariants}>B</motion.span>
        <motion.span variants={letterVariants}>l</motion.span>
        <motion.span variants={letterVariants}>o</motion.span>
        <motion.span variants={letterVariants}>o</motion.span>
        <motion.span variants={letterVariants}>m</motion.span>
        <motion.span variants={letterVariants}>&nbsp;</motion.span>
        <motion.span variants={letterVariants}>f</motion.span>
        <motion.span variants={letterVariants}>r</motion.span>
        <motion.span variants={letterVariants}>o</motion.span>
        <motion.span variants={letterVariants}>m</motion.span>
        <motion.span variants={letterVariants}>&nbsp;</motion.span>
        <motion.span variants={letterVariants}>a</motion.span>
        <motion.span variants={letterVariants}>n</motion.span>
        <motion.span variants={letterVariants}>&nbsp;</motion.span>
        <motion.span variants={letterVariants}>i</motion.span>
        <motion.span variants={letterVariants}>d</motion.span>
        <motion.span variants={letterVariants}>e</motion.span>
        <motion.span variants={letterVariants}>a</motion.span>
        <motion.span variants={letterVariants}>!</motion.span>
       </Typography>
    </motion.div>
  </div>
  
  
    </div>
  );

}

export default AnimatedText