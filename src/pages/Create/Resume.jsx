import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Personal from "./Personal";
import Academic from "./Academic";
import General from "./General";
import Results from "./Results";
import useLocalStorage from "hooks/useLocalStorage";
import GatheringData from "pages/Auths/GatheringData";
import UploadingData from "pages/Auths/UploadingData";

import { auth, db } from "../../firebase/config"
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore"
import { collection } from "firebase/firestore"


const steps = ["Personal", "Academic", "General"];

export default function Resume() {


  const [user, loading] = useAuthState(auth)
  // const userid = user.displayName !== null ? `${user?.displayName} | ${user?.uid}` : `${user?.email} | ${user?.uid}`


  // Personal
  const [firstName, setFirstName] = useLocalStorage("firstName", "");
  const [lastName, setLastName] = useLocalStorage("lastName", "");
  const [email, setEmail] = useLocalStorage("email", "");
  const [phone, setPhone] = useLocalStorage("phone", "");
  const [aboutMe, setAboutMe] = useLocalStorage("aboutMe", "");
  const [urlLists, setUrlLists] = useLocalStorage("url", [{ url: "" }]);

  // Acadmic
  const [academicDegree, setAcademicDegree] = useLocalStorage("academicDegree", "");
  const [collage, setCollage] = useLocalStorage("collage", "");
  const [specialist, setSpecialist] = useLocalStorage("specialist", "");
  const [degreeNo, setDegreeNo] = useLocalStorage("degreeNo", "");
  const [degreeNoSelect, setDegreeNoSelect] = useLocalStorage("degreeNoSelect", "");
  const [educationDate, setEducationDate] = useLocalStorage("eduDate", "");
  const [experLists, setExperLists] = useLocalStorage("exper", [
    { titleExper: "", company: "", descExper: "", startDate: "", endDate: "", checkedEndDate: true },
  ]);

  // General
  const [skillLists, setSkillLists] = useLocalStorage("skillLists", [{ titleSkill: "" }]);
  const [courseLists, setCourseLists] = useLocalStorage("courseLists", [
    { titleCourse: "", courseDate: "" },
  ]);



  function getStepContent(step) {

    switch (step) {
      case 0:
        return <Personal {...{ firstName, lastName, email, phone, aboutMe, urlLists, setFirstName, setLastName, setEmail, setPhone, setAboutMe, setUrlLists }} />;
      case 1:
        return <Academic {...{ academicDegree, setAcademicDegree, collage, setCollage, specialist, setSpecialist, degreeNo, setDegreeNo, degreeNoSelect, setDegreeNoSelect, educationDate, setEducationDate, experLists, setExperLists }} />;
      case 2:
        return <General {...{ skillLists, setSkillLists, courseLists, setCourseLists }} />;
      default:
        throw new Error("Unknown step");
    }
  }

  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  if (loading) {
    return (
      <Typography component="h1" variant="h4" align="center">
        Loading...
      </Typography>
    )
  }

  if (user) {
    return (
      <Container maxWidth="sm" sx={{ mb: 4 }}>
        
        {/* <UploadingData {...{
          user, db,
          // setFirstName, setLastName, setEmail, setPhone, setAboutMe, setUrlLists, setAcademicDegree, setCollage, setSpecialist, setDegreeNo, setDegreeNoSelect, setEducationDate, setExperLists, setSkillLists, setCourseLists,

          firstName, lastName, email, phone, aboutMe, urlLists, setFirstName, setLastName, setEmail, setPhone, setAboutMe, setUrlLists,
          academicDegree, setAcademicDegree, collage, setCollage, specialist, setSpecialist, degreeNo, setDegreeNo, degreeNoSelect, setDegreeNoSelect, educationDate, setEducationDate, experLists, setExperLists,
          skillLists, setSkillLists, courseLists, setCourseLists,
        }}/> */}
        <GatheringData {...{
          user, db,
          firstName, lastName, email, phone, aboutMe, urlLists, setFirstName, setLastName, setEmail, setPhone, setAboutMe, setUrlLists,
          academicDegree, setAcademicDegree, collage, setCollage, specialist, setSpecialist, degreeNo, setDegreeNo, degreeNoSelect, setDegreeNoSelect, educationDate, setEducationDate, experLists, setExperLists,
          skillLists, setSkillLists, courseLists, setCourseLists,
          // setFirstName, setLastName, setEmail, setPhone, setAboutMe, setUrlLists, setAcademicDegree, setCollage, setSpecialist, setDegreeNo, setDegreeNoSelect, setEducationDate, setExperLists, setSkillLists, setCourseLists,
        }} />
        <Paper
          variant="outlined"

          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
          <Typography component="h1" variant="h4" align="center">
            Resume
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <Results />
            ) : (
              getStepContent(activeStep)
            )}
            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
              {activeStep !== 0 && (
                <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                  Back
                </Button>
              )}
              {activeStep < steps.length && (
                <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mt: 3, ml: 1 }}
                >
                  Next
                </Button>
              )}
            </Box>
          </React.Fragment>
        </Paper>
      </Container>
    );
  }
}
