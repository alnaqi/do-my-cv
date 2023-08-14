import * as React from "react";
import { useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import CKEditor from "../../components/CKEditor/CKEditor"
import {
  Box,
  FormControl,
  FormLabel,
  IconButton,
  InputAdornment,
  Modal,
} from "@mui/material";
import { Add, Help, Remove } from "@mui/icons-material";
import useLocalStorage from "hooks/useLocalStorage";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function Personal() {

  const [firstName, setFirstName] = useLocalStorage("firstName", "");
  const [lastName, setLastName] = useLocalStorage("lastName", "");
  const [email, setEmail] = useLocalStorage("email", "");
  const [phone, setPhone] = useLocalStorage("phone", "");

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [urlLists, setUrlLists] = useLocalStorage("url",[{ url: "" }]);

  // handle input change
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...urlLists];
    list[index][name] = value;
    setUrlLists(list);
  };

  // handle click event of the Remove button
  const handleRemoveClick = (index) => {
    const list = [...urlLists];
    list.splice(index, 1);
    setUrlLists(list);
  };

  // handle click event of the Add button
  const handleAddClick = () => {
    setUrlLists([...urlLists, { url: "" }]);
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Personal Information
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            type="text"
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
            fullWidth
            autoComplete="given-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            type="text"
            value={lastName}
            onChange={e => setLastName(e.target.value)}
            fullWidth
            autoComplete="family-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="email"
            name="email"
            label="Email"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            fullWidth
            autoComplete="email"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="phone"
            name="phone"
            label="Phone"
            type="tel"
            value={phone}
            onChange={e => setPhone(e.target.value)}
            fullWidth
            autoComplete="tel"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl required fullWidth>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <FormLabel>About Me:</FormLabel>
              <IconButton onClick={handleOpen}>
                <Help fontSize="small" />
              </IconButton>
            </Box>
            <CKEditor />
          </FormControl>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Example
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Seeking a challenging career opportunity to fully utilize my
                training and skills, while making a significant contribution to
                the success of the organization
              </Typography>
            </Box>
          </Modal>
        </Grid>
        {urlLists.map((x, i) => {
          return (
            <Grid item xs={12} key={i}>
              <TextField
                id="url"
                name="url"
                label="Link"
                type="url"
                fullWidth
                autoComplete="on"
                variant="standard"
                value={x.url}
                onChange={(e) => handleInputChange(e, i)}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      {urlLists.length !== 1 && (
                        <IconButton onClick={() => handleRemoveClick(i)}>
                          <Remove color="error" />
                        </IconButton>
                      )}
                    </InputAdornment>
                  ),
                }}
              />

              {urlLists.length - 1 === i && urlLists.length + 1 <= 4 && (
                <IconButton onClick={handleAddClick}>
                  <Add color="success" />
                </IconButton>
              )}
            </Grid>
          );
        })}
      </Grid>
    </React.Fragment>
  );
}
