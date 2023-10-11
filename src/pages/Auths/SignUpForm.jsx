import { useState } from "react";
import { Box, TextField, Typography, Link, Button, Alert } from "@mui/material";
import { useNavigate } from "react-router-dom";

import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../firebase/config";

function SignUpForm({ mobile, handleOnClick, auth, useAuthState, type }) {
  const navigate = useNavigate()

  const [state, setState] = useState({
    name: "",
    email: "",
    password: ""
  });
  const handleChange = evt => {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value
    });
  };
  const [errorMsg, setErrorMsg] = useState(null);
  const [isSubmit, setIsSubmit] = useState(false);

  const handleOnSubmit = evt => {
    evt.preventDefault();
    setIsSubmit(true)

    const { name, email, password } = state;

    createUserWithEmailAndPassword(auth, email, password).then(async (userCredential) => {
      updateProfile(auth.currentUser, {
        displayName: name,
      })
        .then(() => { })
        .catch((error) => {
          setErrorMsg(error.code);
        });

      const user = userCredential.user;
      for (const key in state) {
        setState({
          ...state,
          [key]: ""
        });
      }

      // Add user to Database
      const userId = user ? `${user.uid}` : "anonymous"
      const userRef = doc(db, "Users", userId);
      await setDoc(userRef, {
        Email: user.email,
        CreateDate: new Date(user.metadata.creationTime)
      })

      navigate("/main")
      setIsSubmit(false)
    }).catch((error) => {
      let errorCode = error.code;

      switch (errorCode) {
        case "auth/invalid-email":
          errorCode = "invalid email";
          break;
        case "auth/missing-email":
          errorCode = "missing email";
          break;
        case "auth/weak-password":
          errorCode = "weak password";
          break;
        case "auth/internal-error":
          errorCode = "missing password";
          break;
        case "auth/email-already-in-use":
          errorCode = "email already in use";
          break;
        case "auth/too-many-requests":
          errorCode = "too many requests, please try again later.";
          break;

        default:
          errorCode = "Error";
          break;
      }
      setErrorMsg(errorCode);
      setIsSubmit(false)
    })
  };

  return (
    <Box className="form-container sign-up-container">
      <Box
        component="form"
        onSubmit={handleOnSubmit}
        sx={{
          '& .MuiTextField-root': { m: 1 },
        }}
        noValidate
        autoComplete="off"
      >
        {errorMsg && <Alert className="float" severity="error">{errorMsg}</Alert>}
        <Typography variant="h4" gutterBottom>Create Account</Typography>
        <TextField disabled={type === "signIn"} autoComplete="on" fullWidth size="small" label="Username" type="text" name="name" variant="filled" value={state.name} onChange={handleChange} />
        <TextField disabled={type === "signIn"} autoComplete="email" fullWidth required size="small" label="Email" type="email" name="email" variant="filled" value={state.email} onChange={handleChange} />
        <TextField disabled={type === "signIn"} autoComplete="current-password" fullWidth required size="small" label="Password" type="password" name="password" variant="filled" value={state.password} onChange={handleChange} />

        <Box className="linkes">
          <Typography className="a-auth" variant="body2" color="text.secondary" align="center">
            {mobile && <Link type="button" component="button" color="inherit" onClick={() => handleOnClick("signIn")}>You have account?</Link>}
          </Typography>
        </Box>

        <Button disabled={isSubmit || type === "signIn"} type="submit" variant="contained">Sign Up</Button>
      </Box>
    </Box>
  );
}

export default SignUpForm;
