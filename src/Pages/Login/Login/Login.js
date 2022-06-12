import { Button, Typography, TextField } from "@mui/material";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Box from "@mui/material/Box";
import useAuth from "../../../Hooks/useAuth";
import Modal from "@mui/material/Modal";
import Checkbox from "@mui/material/Checkbox";
import Alert from "@mui/material/Alert";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const Login = ({ open, close }) => {
  const [isLogin, setIsLogin] = useState(false);
  // useEffect(() => {
  //   if (authError) {
  //     alert(authError);
  //   }
  // }, [authError]);
  const toggleLogIn = (e) => {
    setIsLogin(e.target.checked);
  };

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

  const {
    user,
    loginUser,
    isLoading,
    authError,
    signInUsingGoogle,
    registerUser,
  } = useAuth();

  const location = useLocation();
  const history = useHistory();
  const [loginData, setlogindata] = useState({});
  const [registerData, setRegisterData] = useState({});
  // console.log(registerData.name, registerData.password, registerData.password2);
  // LOGIN MATERIALS
  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newloginData = { ...loginData };
    newloginData[field] = value;
    setlogindata(newloginData);
  };
  const loginFormSubmitHandle = (e) => {
    loginUser(loginData.email, loginData.password, location, history);
    e.preventDefault();
  };

  const handleGoogleSignIn = () => {
    signInUsingGoogle(location, history);
  };
  // REGISTRATION MATERIALS
  const registrationHandleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newRegisterData = { ...registerData };
    newRegisterData[field] = value;
    setRegisterData(newRegisterData);

    // console.log(field, value);
  };
  const registrationFormSubmit = (e) => {
    if (registerData.password !== registerData.password2) {
      alert("Password did not match");
      return;
    }
    registerUser(
      registerData.email,
      registerData.password,
      registerData.name,
      history,
      location
    );
    // console.log(loginData.email, loginData.password);
    e.preventDefault();
    console.log(authError);
  };

  return (
    <>
      <Modal
        open={open}
        onClose={close}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <>
          (
          <Box sx={style}>
            {isLogin ? (
              <>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Welcome!Please Login
                </Typography>
                <button
                  onClick={{ close: "false" }}
                  style={{ background: "red" }}
                >
                  Close
                </button>
                <form onSubmit={loginFormSubmitHandle}>
                  <TextField
                    style={{ width: "75%", marginBottom: "15px" }}
                    id="standard-basic"
                    label="Your Email"
                    name="email"
                    type="email"
                    onBlur={handleOnChange}
                    variant="standard"
                  />
                  <TextField
                    style={{ width: "75%", marginBottom: "15px" }}
                    id="standard-basic"
                    label="Your Password"
                    name="password"
                    type="password"
                    onBlur={handleOnChange}
                    variant="standard"
                  />
                  <br />

                  <Button
                    variant="contained"
                    style={{ width: "75%", marginTop: "5px" }}
                    type="submit"
                  >
                    Login
                  </Button>
                </form>
                <br />
                {authError && <Alert severity="error">{authError}</Alert>}
                <Button variant="contained" onClick={handleGoogleSignIn}>
                  Google SignIn
                </Button>
              </>
            ) : (
              <>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Welcome!Please Register!
                </Typography>

                <button
                  onClick={{ close: "false" }}
                  style={{ background: "red" }}
                >
                  Close
                </button>
                <form onSubmit={registrationFormSubmit}>
                  <TextField
                    style={{ width: "75%", marginBottom: "15px" }}
                    id="standard-basic"
                    label="Your Name"
                    name="name"
                    onBlur={registrationHandleOnBlur}
                    variant="standard"
                  />
                  <TextField
                    style={{ width: "75%", marginBottom: "15px" }}
                    id="standard-basic"
                    label="Your Email"
                    name="email"
                    type="email"
                    onBlur={registrationHandleOnBlur}
                    variant="standard"
                  />
                  <TextField
                    style={{ width: "75%", marginBottom: "15px" }}
                    id="standard-basic"
                    label="Your Password"
                    name="password"
                    type="password"
                    onBlur={registrationHandleOnBlur}
                    variant="standard"
                  />
                  <TextField
                    style={{ width: "75%", marginBottom: "15px" }}
                    id="standard-basic"
                    label="Re-write Your Password"
                    name="password2"
                    type="password"
                    onBlur={registrationHandleOnBlur}
                    variant="standard"
                  />{" "}
                  <br />
                  <Button
                    variant="contained"
                    style={{ width: "75%", marginTop: "5px" }}
                    type="submit"
                  >
                    Register
                  </Button>
                </form>
                {authError && <Alert severity="error">{authError}</Alert>}

                <br />
                <Button variant="contained" onClick={handleGoogleSignIn}>
                  Google SignIn
                </Button>
              </>
            )}
            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <Checkbox onChange={toggleLogIn} {...label} />
              {isLogin ? (
                <Typography>New User?Please Register!</Typography>
              ) : (
                <Typography>Already Registered?Please Login!</Typography>
              )}
            </div>
            {user.email && (
              <Alert severity="success">User Created Successfully</Alert>
            )}
          </Box>
          )
        </>
      </Modal>
    </>
  );
};

export default Login;
