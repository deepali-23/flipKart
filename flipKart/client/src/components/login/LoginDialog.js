import { Dialog, Box, TextField, Typography, Button, styled } from "@mui/material";
import { useState } from "react";
const Component = styled(Box)`
  height: 70vh;
  width: 90vh;
`;
const Image = styled(Box)`
  background: #2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 85% no-repeat;
  height: 84%;
  width: 20%;
  padding: 45px 35px;
  & > p,
  & > h5 {
    color: #ffffff;
    font-weight: 600;
  }
`;
const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 25px 35px;
  flex: 1;
  & > div,
  & > button & > p {
    margin-top: 20px;
  }
`;
const LoginButton = styled(Button)`
  text-transform: none;
  background: #fb641b;
  color: #fff;
  height: 48px;
  border-radius: 2px;
`;
const RequestOTP = styled(Button)`
  text-transform: none;
  background: #fff;
  color: #2874f0;
  height: 48px;
  border-radius: 2px;
  box-shadow: 0 2px 4px 0 rgb(0 0 0/20%);
`;
const Text = styled(Typography)`
  font-size: 12px;
  color: #878787;
`;
const CreateAccount = styled(Typography)`
  font-size: 14px;
  text-align: center;
  color: #2875f0;
  font-weight: 600;
  cursor: pointer;
`;

const accountInitialValues = {
  login: {
    view: "login",
    heading: "Login",
    subHeading: "Get access to your Orders, Wishlist and Recommendations",
  },
  signup: {
    view: "signup",
    heading: "Looks, like you're new here!",
  },
};

const signUpInitialValues = {
  firstname: "",
  lastname: "",
  username: "",
  email: "",
  password: "",
  phone: "",
};

const onInputChange = (e) => {
  // setSignup({ ...signup, [e.target.name]: e.target.value });
};
const LoginDialog = ({ open, setOpen }) => {
  const [account, toggleAccount] = useState(accountInitialValues.login);
  const [signup, setSignup] = useState(signUpInitialValues);

  const handleClose = () => {
    setOpen(false);
    toggleAccount(accountInitialValues.login);
  };

  const toggleSignup = () => {
    toggleAccount(accountInitialValues.signup);
  };

  const signUpUser = () => {};
  return (
    <Dialog open={open} onClose={handleClose} PaperProps={{ sx: { maxWidth: "unset" } }}>
      <Component>
        <Box style={{ display: "flex", height: "100%" }}>
          <Image>
            <Typography variant="h5">{account.heading}</Typography>
            <Typography style={{ marginTop: 20 }}>{account.subHeading}</Typography>
          </Image>
          {account.view == "login" ? (
            <Wrapper>
              <TextField variant="standard" label="Enter Email/Mobile Number" />
              <TextField variant="standard" label="Enter Password" />
              <Text>By continuing, you agree to Flipkart's Terms of use and Privacy Policy.</Text>
              <LoginButton>Login</LoginButton>
              <Typography style={{ textAlign: "center" }}>OR</Typography>
              <RequestOTP>Request OTP</RequestOTP>
              <CreateAccount onClick={() => toggleSignup()}>New to Flipkart? Create an account</CreateAccount>
            </Wrapper>
          ) : (
            <Wrapper>
              <TextField variant="standard" label="Enter Firstname" onChange={(e) => onInputChange(e)} name="firstname" />
              <TextField variant="standard" label="Enter Lastname" onChange={(e) => onInputChange(e)} name="lastname" />
              <TextField variant="standard" label="Enter Username" onChange={(e) => onInputChange(e)} name="username" />
              <TextField variant="standard" label="Enter Email" onChange={(e) => onInputChange(e)} name="email" />
              <TextField variant="standard" label="Enter Password" onChange={(e) => onInputChange(e)} name="password" />
              <TextField variant="standard" label="Enter Phone" onChange={(e) => onInputChange(e)} name="phone" />
              <LoginButton onClick={() => signUpUser()}>Continue</LoginButton>
            </Wrapper>
          )}
        </Box>
      </Component>
    </Dialog>
  );
};

export default LoginDialog;
