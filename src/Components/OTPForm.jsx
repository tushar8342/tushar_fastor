import React, { useState } from "react";
import { Button, FormControl, Grid } from "@mui/material";
import { MuiOtpInput } from "mui-one-time-password-input";
import "../Components/style.css";
import { useLocation, useNavigate } from "react-router-dom";

import axios from "axios";

const OTPForm = () => {
  const [otp, setOtp] = useState("");
  const { state } = useLocation();
  const navigate = useNavigate();


  const handleChange = (newValue) => {
    setOtp(newValue);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (otp.length === 6) {
        const input = {
          phone: state.phone,
          dial_code: state.country_code,
          otp: otp,
        };
        const res = await axios.post(
          "https://staging.fastor.in/v1/pwa/user/login",
          input
        );
        console.log("res:", res);

        if (res.status === 200) {
          navigate("/restaurant-lists");
        } else {
        }
      } else {

      }
    } catch (err) {
    }
  };

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
        <Grid item className="heading otp-verification">
          <p>OTP Verification</p>
          <p>Enter the verification code we just sent on your Mobile Number.</p>
        </Grid>
        <FormControl>
          <Grid item className="otp-input">
            <MuiOtpInput
              value={otp}
              length={6}
              type="number"
              onChange={handleChange}
            />
          </Grid>
          <Grid container display="flex">
            <Grid item xs={12} className="verify-button">
              <Button fullWidth id="send-code-button" onClick={handleSubmit}>
                Verify
              </Button>
            </Grid>
          </Grid>
        </FormControl>

        <Grid item className="resend">
          <p>
            Didn’t received code? <span>Resend</span>
          </p>
        </Grid>
      </Grid>
    </div>
  );
};

export default OTPForm;
