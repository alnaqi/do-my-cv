import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import {
  FormControl,
  FormLabel,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import { Add, Remove } from "@mui/icons-material";
import useLocalStorage from "hooks/useLocalStorage";

export default function General() {
  const [courseLists, setCourseLists] = useLocalStorage("courseLists", [
    { titleCourse: "", courseDate: "" },
  ]);

  // handle input change
  const handleCourseChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...courseLists];
    list[index][name] = value;
    setCourseLists(list);
  };

  // handle click event of the Remove button
  const handleRemoveCourse = (index) => {
    const list = [...courseLists];
    list.splice(index, 1);
    setCourseLists(list);
  };

  // handle click event of the Add button
  const handleAddCourse = () => {
    setCourseLists([...courseLists, { titleCourse: "", courseDate: "" }]);
  };

  const [skillLists, setSkillLists] = useLocalStorage("skillLists", [{ titleSkill: "" }]);

  // handle input change
  const handleSkillChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...skillLists];
    list[index][name] = value;
    setSkillLists(list);
  };

  // handle click event of the Remove button
  const handleRemoveSkill = (index) => {
    const list = [...skillLists];
    list.splice(index, 1);
    setSkillLists(list);
  };

  // handle click event of the Add button
  const handleAddSkill = () => {
    setSkillLists([...skillLists, { titleSkill: "" }]);
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        General Information
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <FormControl sx={{ mt: 2 }}>
            <FormLabel>
              <b>COURSE:</b>
            </FormLabel>
            <Grid
              container
              spacing={3}
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              {courseLists.map((x, i) => {
                return (
                  <Grid key={i} item xs={12}>
                    <Grid container spacing={3} alignItems="center">
                      <Grid item xs={10} md={11}>
                        <Grid container spacing={3}>
                          <Grid item xs={12}>
                            <TextField
                              required
                              id="titleCourse"
                              name="titleCourse"
                              label="Title"
                              type="text"
                              fullWidth
                              autoComplete="no"
                              variant="standard"
                              value={x.titleCourse}
                              onChange={(e) => handleCourseChange(e, i)}
                            />
                          </Grid>

                          <Grid item xs={12}>
                            <FormControl required fullWidth>
                              <FormLabel>Course Date</FormLabel>
                              <TextField
                                required
                                id="courseDate"
                                name="courseDate"
                                type="month"
                                fullWidth
                                autoComplete="no"
                                variant="outlined"
                                value={x.courseDate}
                                onChange={(e) => handleCourseChange(e, i)}
                              />
                            </FormControl>
                          </Grid>
                        </Grid>
                      </Grid>

                      <Grid item xs={2} md={1}>
                        <IconButton onClick={() => handleRemoveCourse(i)}>
                          <Remove color="error" />
                        </IconButton>
                      </Grid>
                    </Grid>
                  </Grid>
                );
              })}
              {courseLists.length + 1 <= 4 && (
                <Grid item xs={12} md={12}>
                  <IconButton onClick={handleAddCourse}>
                    <Add color="success" />
                  </IconButton>
                </Grid>
              )}
            </Grid>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl
            fullWidth
            sx={{ mt: 2 }} // p: 2,  , border: "1px solid #00000070", borderRadius: "5px"
          >
            <FormLabel>
              <b>Skill:</b>
            </FormLabel>
            <Grid container spacing={3}>
              {skillLists.map((x, i) => {
                return (
                  <Grid item xs={12} key={i}>
                    <TextField
                      id="titleSkill"
                      name="titleSkill"
                      label="Skill"
                      type="text"
                      fullWidth
                      autoComplete="on"
                      variant="standard"
                      value={x.titleSkill}
                      onChange={(e) => handleSkillChange(e, i)}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            {skillLists.length !== 1 && (
                              <IconButton onClick={() => handleRemoveSkill(i)}>
                                <Remove color="error" />
                              </IconButton>
                            )}
                          </InputAdornment>
                        ),
                      }}
                    />

                    {skillLists.length - 1 === i &&
                      skillLists.length + 1 <= 6 && (
                        <IconButton onClick={handleAddSkill}>
                          <Add color="success" />
                        </IconButton>
                      )}
                  </Grid>
                );
              })}
            </Grid>
          </FormControl>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
