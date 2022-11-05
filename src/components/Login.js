import React, { useState, useContext } from "react";
import GoogleLogin from "react-google-login";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { TokenContext } from "../context/TokenContext";

const baseURL = process.env.REACT_APP_URL;

const Login = () => {
  const [accessToken, setAccessToken] = useState();
  const { setToken } = useContext(TokenContext);

  function googleResponse(response) {
    googleLogin(response.accessToken);
    // navigate('/home')
  }

  const onSuccess = (response) => {
    // navigate('/home')
    googleResponse(response);
  };

  async function googleLogin(accesstoken) {
    let res = await axios.post(baseURL + "/auth/google/", {
      access_token: accesstoken,
    });
    console.log(res.data);
    setToken(res.data.key);
    if (res.status == 200) {
      window.localStorage.setItem("token", JSON.stringify(res.data.key));
      navigate("/home");
    }

    return res.status;
  }
  const navigate = useNavigate();
  return (
    <div className="container">
      <GoogleLogin
        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
        buttonText="LOGIN WITH GOOGLE"
        scope="openid profile email https://www.googleapis.com/auth/user.birthday.read https://www.googleapis.com/auth/user.gender.read https://www.googleapis.com/auth/youtube https://www.googleapis.com/auth/youtube.force-ssl https://www.googleapis.com/auth/youtube.upload"
        onSuccess={onSuccess}
        onFailure={googleResponse}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
};

export default Login;
