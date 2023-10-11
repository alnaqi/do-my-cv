import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { Add, Remove } from "@mui/icons-material";

export default function Academic({academicDegree ,setAcademicDegree ,collage ,setCollage ,specialist ,setSpecialist ,degreeNo ,setDegreeNo ,degreeNoSelect ,setDegreeNoSelect ,educationDate ,setEducationDate ,experLists ,setExperLists}) {
  

  // handle input change
  const handleInputChange = (e, index) => {
    const { name, value, checked } = e.target;
    const list = [...experLists];
    list[index][name] = name === "checkedEndDate" ? checked : value;
    setExperLists(list);
  };

  // handle click event of the Remove button
  const handleRemoveClick = (index) => {
    const list = [...experLists];
    list.splice(index, 1);
    setExperLists(list);
  };

  // handle click event of the Add button
  const handleAddClick = () => {
    setExperLists([
      ...experLists,
      { titleExper: "", company: "", descExper: "", startDate: "", endDate: "", checkedEndDate: true },
    ]);
  };


  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Academic Information
      </Typography>
      <Grid container spacing={5}>
        <Grid item xs={12}>
          <FormControl
            sx={{ mt: 2 }}
          >
            <FormLabel>
              <b>EDUCATION:</b>
            </FormLabel>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <FormControl variant="standard" sx={{ width: "100%" }}>
                  <InputLabel id="academic-select-label">
                    Academic Degree
                  </InputLabel>
                  <Select
                    labelId="academic-select-label"
                    id="academic-select"
                    fullWidth
                    value={academicDegree}
                    onChange={e => setAcademicDegree(e.target.value)}
                    autoWidth
                    label="AcademicDegree"
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value="bachelor's degree">bachelor's degree</MenuItem>
                    <MenuItem value="diploma">diploma</MenuItem>
                    <MenuItem value="high school">high school</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  required
                  id="collageName"
                  name="collageName"
                  label="Collage"
                  type="text"
                  fullWidth
                  value={collage}
                  onChange={e => setCollage(e.target.value)}
                  autoComplete="no"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  required
                  id="specialist"
                  name="specialist"
                  label="Specialist"
                  type="text"
                  fullWidth
                  value={specialist}
                  onChange={e => setSpecialist(e.target.value)}
                  autoComplete="no"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <FormControl required fullWidth>
                  <FormLabel>Education Date</FormLabel>
                  <TextField
                    required
                    id="eduDate"
                    name="eduDate"
                    type="month"
                    fullWidth
                    autoComplete="no"
                    variant="outlined"
                    value={educationDate}
                    onChange={(e) => setEducationDate(e.target.value)}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={6} md={6}>
                <FormControl variant="standard" sx={{ width: "100%" }}>
                  <InputLabel id="type-select-label">
                    Type
                  </InputLabel>
                  <Select
                    labelId="type-select-label"
                    id="type-select"
                    fullWidth
                    value={degreeNoSelect}
                    onChange={e => setDegreeNoSelect(e.target.value)}
                    autoWidth
                    label="DegreeType"
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={5}>5 out 5</MenuItem>
                    <MenuItem value={4}>4 out 4</MenuItem>
                    <MenuItem value={100}>100%</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={6} md={6}>
                <TextField
                  required
                  disabled={degreeNoSelect === "" ? true : false}
                  id="degree"
                  name="degree"
                  label="Degree"
                  type="number"
                  value={degreeNo}
                  onChange={e => setDegreeNo(e.target.value)}
                  InputProps={{ inputProps: { min: 0, max: degreeNo } }}
                  fullWidth
                  autoComplete="no"
                  variant="standard"
                />
              </Grid>
            </Grid>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl
            sx={{ mt: 2 }}
          >
            <FormLabel>
              <b>EXPERIENCE:</b>
            </FormLabel>
            <Grid
              container
              spacing={3}
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              {experLists.map((x, i) => {
                return (
                  <Grid key={i} item xs={12} md={12}>
                    <Grid container spacing={3} alignItems="center">
                      <Grid item xs={10} md={11}>
                        <Grid component="form" container spacing={3}>
                          <Grid item xs={12} md={6}>
                            <TextField
                              required
                              id={`titleExper${i}`}
                              name="titleExper"
                              label="Title"
                              type="text"
                              fullWidth
                              autoComplete="no"
                              variant="standard"
                              value={x.titleExper}
                              onChange={(e) => handleInputChange(e, i)}
                            />
                          </Grid>

                          <Grid item xs={12} md={6}>
                            <TextField
                              required
                              id={`company${i}`}
                              name="company"
                              label="Company"
                              type="text"
                              fullWidth
                              autoComplete="no"
                              variant="standard"
                              value={x.company}
                              onChange={(e) => handleInputChange(e, i)}
                            />
                          </Grid>
                          <Grid item xs={12} md={12}>
                            <TextField
                              fullWidth
                              placeholder="Description"
                              id={`descExper${i}`}
                              name="descExper"
                              value={x.descExper}
                              onChange={(e) => handleInputChange(e, i)}
                              label="Description"
                              multiline
                              maxRows={4}
                            />
                          </Grid>

                          <Grid item xs={12} md={6}>
                            <FormControl required fullWidth>
                              <FormLabel htmlFor={`startDate${i}`}>Start Date</FormLabel>
                              <TextField
                                required
                                id={`startDate${i}`}
                                name="startDate"
                                type="month"
                                autoComplete="no"
                                variant="outlined"
                                value={x.startDate}
                                onChange={(e) => handleInputChange(e, i)}
                              />
                            </FormControl>
                          </Grid>
                          <Grid item xs={12} md={6}>
                            <FormControl fullWidth required>
                              <FormLabel htmlFor={`checkedEndDate${i}`}>End Date</FormLabel>
                              <Box sx={{ display: 'flex' }}>
                                <FormControlLabel
                                  control={<Checkbox
                                    id={`checkedEndDate${i}`}
                                    name="checkedEndDate"
                                    checked={x.checkedEndDate}
                                    onChange={e => handleInputChange(e, i)}
                                  />}
                                  label={x.checkedEndDate ? "Current" : ""}
                                />
                                <TextField
                                  disabled={x.checkedEndDate}
                                  required
                                  id={`endDate${i}`}
                                  name="endDate"
                                  type="month"
                                  autoComplete="no"
                                  variant="outlined"
                                  value={x.endDate}
                                  onChange={(e) => handleInputChange(e, i)}
                                />
                              </Box>
                            </FormControl>
                          </Grid>
                        </Grid>
                      </Grid>

                      {
                        <Grid item xs={2} md={1}>
                          <IconButton onClick={() => handleRemoveClick(i)}>
                            <Remove color="error" />
                          </IconButton>
                        </Grid>
                      }
                    </Grid>
                  </Grid>
                );
              })}
              {experLists.length + 1 <= 4 && (
                <Grid item xs={12} md={12}>
                  <IconButton onClick={handleAddClick}>
                    <Add color="success" />
                  </IconButton>
                </Grid>
              )}
            </Grid>
          </FormControl>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
