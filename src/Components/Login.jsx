import React, { useRef } from "react";
import { Button, FormControl, Grid, TextField } from "@mui/material";
import "../Components/style.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const country_code = "+91";
  const navigate = useNavigate();
  let inputRef = useRef();

  async function handleSendCode(e) {
    e.preventDefault();
    try { 
      const inputData = { country_code, phone: inputRef.current.value };

      const response = await axios.post(
        "https://staging.fastor.in/v1/pwa/user/register",
        inputData
      );

      if (response.status === 200) {
        navigate("/otp-verification", {
          state: { phone: inputRef.current.value, country_code },
        });
      }
    } catch (err) {}
  }
  return (
    <div>
      <Grid
        sx={{
          height: "100vh",
        }}
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <Grid item className="heading">
          <p>Enter Your Mobile Number</p>
          <p>We will send you the 6 digit verification conde</p>
        </Grid>
        <FormControl>
          <Grid item>
            <TextField
              required
              id="mobile-nummber-input"
              variant="outlined"
              placeholder="Enter Your Phone Number"
              inputRef={inputRef}
              inputProps={{ maxLength: 10 }}
            />
          </Grid>
          <Grid item>
            <Button id="send-code-button" onClick={handleSendCode}>
              Send Code
            </Button>
          </Grid>
        </FormControl>
      </Grid>
    </div>
  );
};

export default Login;
