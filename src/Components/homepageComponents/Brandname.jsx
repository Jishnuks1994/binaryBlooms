import { motion, useAnimation } from "framer-motion";
import { Typography, useMediaQuery,
    useTheme,} from "@mui/material"

 const BrandName = () => {
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
    <motion.div
      animate={controls}
      initial="hidden"
      variants={variants}
      onViewportEnter={onScroll}
    >
      <Typography sx={isMobile ? {fontFamily:'Poppins',fontSize:'15px'}:{fontFamily:'Poppins',fontSize:'30px'}} variant="h2" color="white">
        <motion.span style={{fontSize:'1.2em'}} variants={letterVariants}>B</motion.span>
        <motion.span variants={letterVariants}>i</motion.span>
        <motion.span variants={letterVariants}>n</motion.span>
        <motion.span variants={letterVariants}>a</motion.span>
        <motion.span variants={letterVariants}>r</motion.span>
        <motion.span variants={letterVariants}>y</motion.span>
        <motion.span variants={letterVariants}>&nbsp;</motion.span>
        <motion.span variants={letterVariants}>b</motion.span>
        <motion.span variants={letterVariants}>l</motion.span>
        <motion.span variants={letterVariants}>o</motion.span>
        <motion.span variants={letterVariants}>o</motion.span>
        <motion.span variants={letterVariants}>m</motion.span>
        <motion.span variants={letterVariants}>s</motion.span>
       </Typography>
    </motion.div>
  );

}

export default BrandName