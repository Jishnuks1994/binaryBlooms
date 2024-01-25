import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';


const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  
  {
    label: 'kick of call to understand project requirement',
    imgPath:
      'https://i.postimg.cc/htLgWwLp/Kickoff-meeting.png',
  },
  {
    label: 'tat and cost estimation',
    imgPath:
      'https://i.postimg.cc/Y0F24SFw/project-cost-estimation-2.jpg',
  },
  {
    label: 'project documentation',
    imgPath:
      'https://i.postimg.cc/xTYVGgDm/Project-Documentation-2.jpg',
  },
  // {
  //   label: 'Story Board',
  //   imgPath:
  //     'https://i.postimg.cc/Zn2fVDL1/621e3d5b7e251a74835b0907-619cef5c40cb89d19533f5a8-6076f3f1884c3c2ea7e1b770-template-vignette-Storybo.png',
  // },
  // {
  //   label: 'Sprint Planning with Jira agile project management',
  //   imgPath:
  //     'https://i.postimg.cc/T1M0bWY6/word-image-1.png',
  // },
];

function SwipeableTextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    
        
    <Box sx={{  flexGrow: 1,  display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'  }} >
      <Typography my={3}  color={'primary'} variant='h2'> Our Project Handling Methods</Typography> 
      <Paper
      mb={3}
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 50,
          pl: 2,
          bgcolor: 'background.default',
        }}
      >
        
        <Typography variant='h3' mb={5} >{images[activeStep].label}</Typography>
      </Paper>
      <AutoPlaySwipeableViews 
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
        
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: 400,
                  display: 'block',
                  overflow: 'hidden',
                  width: '100%',
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>
  );
}

export default SwipeableTextMobileStepper;
