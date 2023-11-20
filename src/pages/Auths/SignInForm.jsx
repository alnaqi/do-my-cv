import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Box, TextField, Typography, Link, Button, Alert } from "@mui/material";
import LoadingButton from '@mui/lab/LoadingButton';

import { signInWithEmailAndPassword } from "firebase/auth";

function SignInForm({ mobile, handleOnClick, auth, type }) {
  const navigate = useNavigate()

  const [state, setState] = useState({
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

    const { email, password } = state;
    signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
      const user = userCredential.user;
      for (const key in state) {
        setState({
          ...state,
          [key]: ""
        });
      }
      navigate("/main")
      setIsSubmit(false)
    }).catch((error) => {
      let errorCode = error.code;

      switch (errorCode) {
        case "auth/user-not-found":
          errorCode = "user not found";
          break;
        case "auth/wrong-password":
          errorCode = "wrong password";
          break;
        case "auth/invalid-email":
          errorCode = "invalid email";
          break;
        case "auth/missing-email":
          errorCode = "missing email";
          break;
        case "auth/internal-error":
          errorCode = "missing password";
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
    <Box className="form-container sign-in-container">
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
        <Typography variant="h4" gutterBottom>Sign in</Typography>
        <TextField disabled={type === "signUp"} required fullWidth size="small" label="Email" type="email" name="email" variant="filled" value={state.email} onChange={handleChange} autoComplete="on" />
        <TextField disabled={type === "signUp"} required fullWidth size="small" label="Password" type="password" name="password" variant="filled" value={state.password} onChange={handleChange} />

        <Box className="linkes">
          {/* <Typography className="a-auth" variant="body2" color="text.secondary" align="center">
            <Link disabled={type === "signUp"} type="button" component="button" color="inherit">Forgot your password?</Link>
          </Typography> */}

          <Typography className="a-auth" variant="body2" color="text.secondary" align="center">
            {mobile && <Link type="button" component="button" color="inherit" onClick={() => handleOnClick("signUp")}>You do not have account?</Link>}
          </Typography>
        </Box>

        {!isSubmit ?
          <Button disabled={isSubmit || (type === "signUp")} type="submit" variant="contained">Sign In</Button>
          :
          <LoadingButton loading variant="contained">
            Submit
          </LoadingButton>}
      </Box>
    </Box>
  );
}

export default SignInForm;
