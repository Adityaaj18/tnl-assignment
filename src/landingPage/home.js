import React, { useState, useContext } from "react";
import { GiArrowCursor, GiMoneyStack } from "react-icons/gi";
import { BsFillPlayFill } from "react-icons/bs";
import GoogleLogin from "react-google-login";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { TokenContext } from "../context/TokenContext";
import { FaStore } from "react-icons/fa";
import { AiFillWallet } from "react-icons/ai";
import { DiGoogleAnalytics } from "react-icons/di";
import {
  BsInstagram,
  BsFacebook,
  BsYoutube,
  BsWhatsapp,
  BsTelegram,
  BsDiscord,
} from "react-icons/bs";
import { HiUserGroup } from "react-icons/hi";
import { GiMagnifyingGlass } from "react-icons/gi";

const baseURL = process.env.REACT_APP_URL;

export default function LandingPage() {
  const navigate = useNavigate();
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
  return (
    <div>
      <div className="preloader">
        <div className="loader">
          <div className="spinner">
            <div className="spinner-container">
              <div className="spinner-rotator">
                <div className="spinner-left">
                  <div className="spinner-circle"></div>
                </div>
                <div className="spinner-right">
                  <div className="spinner-circle"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <header className="header">
        <div className="navbar-area">
          <div className="container">
            <nav className="navbar navbar-expand-lg">
              <a className="navbar-brand" href="index.html">
                <img src={require("../img/logo.png")} alt="Logo" />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="toggler-icon"></span>
                <span className="toggler-icon"></span>
                <span className="toggler-icon"></span>
              </button>

              <div
                className="collapse navbar-collapse sub-menu-bar"
                id="navbarSupportedContent"
              >
                <ul id="nav" className="navbar-nav ms-auto">
                  <li className="nav-item">
                    <a className="page-scroll active" href="#home">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <Link to="/campaigns" className="page-scroll">
                      Marketplace
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/signup" className="page-scroll">
                      Sign Up
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </header>

      <section id="home" className="hero-section">
        <div className="container">
          <div className="row align-items-center position-relative">
            <div className="col-lg-6">
              <div className="hero-content">
                <h1 className="wow fadeInUp" data-wow-delay=".4s">
                  Every View Counts!
                </h1>
                <p className="wow fadeInUp" data-wow-delay=".6s">
                  StreamPala allows YouTube streamers to connect with brands,
                  and, earn for every view on their livestreams! Streamers
                  choose brands they want to partner with, while brands pay for
                  every time someone views their ad!
                </p>
                <GoogleLogin
                  clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                  buttonText="Login with YouTube"
                  scope="openid profile email https://www.googleapis.com/auth/user.birthday.read https://www.googleapis.com/auth/user.gender.read https://www.googleapis.com/auth/youtube https://www.googleapis.com/auth/youtube.force-ssl https://www.googleapis.com/auth/youtube.upload"
                  onSuccess={onSuccess}
                  onFailure={googleResponse}
                  cookiePolicy={"single_host_origin"}
                  className="google-login-btn"
                />
                &nbsp;
                <Link
                  to="/signup"
                  className="main-btn btn-hover wow fadeInUp"
                  data-wow-delay=".6s"
                >
                  Advertiser Sign Up →
                </Link>
                <a href="#features" className="scroll-bottom">
                  <i className="lni lni-arrow-down"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="hero-img wow fadeInUp" data-wow-delay=".5s">
                <img src="assets/img/hero/hero-img.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="feature-section pt-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-8 col-sm-10">
              <div className="single-feature">
                <div className="icon">
                  <FaStore />
                </div>
                <div className="content">
                  <h3>Open Marketplace</h3>
                  <p>
                    All campaigns are visible on an open marketplace, so
                    streamers can choose the brands that resonate with their
                    audience
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-8 col-sm-10">
              <div className="single-feature">
                <div className="icon">
                  <AiFillWallet />
                </div>
                <div className="content">
                  <h3>Safe Wallet</h3>
                  <p>
                    Streamer wallet that captures all earnings and with easy
                    withdrawals, while advertisers keep track of every paisa
                    spent
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-8 col-sm-10">
              <div className="single-feature">
                <div className="icon">
                  <DiGoogleAnalytics />
                </div>
                <div className="content">
                  <h3>Easy Analytics</h3>
                  <p>
                    Get all the data that matters in 1 dashboard, so you can
                    always see how your campaigns are performing
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="about-section pt-150">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6">
              <div className="about-img">
                <img
                  src="assets/img/about/about-1.png"
                  alt=""
                  className="w-100"
                />
                <img
                  src="assets/img/about/about-left-shape.svg"
                  alt=""
                  className="shape shape-1"
                />
                <img
                  src="assets/img/about/left-dots.svg"
                  alt=""
                  className="shape shape-2"
                />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="about-content">
                <div className="section-title mb-30">
                  <h2
                    className="mb-25 wow fadeInUp"
                    data-wow-delay=".2s"
                    style={{ color: "#162447" }}
                  >
                    How It Works
                  </h2>
                  <p
                    className="wow fadeInUp"
                    data-wow-delay=".4s"
                    style={{ lineHeight: "40px" }}
                  >
                    <strong>For Streamers:</strong> <br />
                    1. Simply sign up with your YouTube account, <br />
                    2. Add your StreamPala Magic Link to your OBS <br />
                    3. And choose campaigns you’d like to earn from
                  </p>
                </div>

                <GoogleLogin
                  clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                  buttonText="Login with YouTube"
                  scope="openid profile email https://www.googleapis.com/auth/user.birthday.read https://www.googleapis.com/auth/user.gender.read https://www.googleapis.com/auth/youtube https://www.googleapis.com/auth/youtube.force-ssl https://www.googleapis.com/auth/youtube.upload"
                  onSuccess={onSuccess}
                  onFailure={googleResponse}
                  cookiePolicy={"single_host_origin"}
                  className="google-login-btn-2"
                />

                <div className="section-title mb-3 mt-3">
                  <p
                    className="wow fadeInUp"
                    data-wow-delay=".4s"
                    style={{ lineHeight: "40px" }}
                  >
                    <strong>For Advertisers:</strong> <br />
                    1. Sign up with your work email <br />
                    2. Create your brand profile with relevant details <br />
                    3. Create ad campaigns with their budget and duration
                  </p>
                </div>

                <Link
                  to="/signup"
                  className="main-btn btn-hover wow fadeInUp"
                  data-wow-delay=".6s"
                >
                  Create Advertiser Account →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="about-section pt-150">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6">
              <div className="about-content">
                <div className="section-title mb-30">
                  <h2
                    className="mb-25 wow fadeInUp"
                    data-wow-delay=".2s"
                    style={{ color: "#162447" }}
                  >
                    Highest Payout in the Industry.
                  </h2>
                  <p className="wow fadeInUp" data-wow-delay=".4s">
                    The bulk of advertiser budgets go straight to the wallets of
                    streamers, with StreamPala earning minimal commissions on
                    every campaign.
                  </p>
                </div>
                <ul>
                  <li>Earn up to 100% of advertiser budgets</li>
                  <li>Make up to 50p per view</li>
                  <li>Get more than any other tool that pays-per-view</li>
                </ul>
                <a
                  href="javascript:void(0)"
                  className="main-btn btn-hover border-btn wow fadeInUp"
                  data-wow-delay=".6s"
                >
                  Learn More
                </a>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 order-first order-lg-last">
              <div className="about-img-2">
                <img
                  src="assets/img/about/about-2.png"
                  alt=""
                  className="w-100"
                />
                <img
                  src="assets/img/about/about-right-shape.svg"
                  alt=""
                  className="shape shape-1"
                />
                <img
                  src="assets/img/about/right-dots.svg"
                  alt=""
                  className="shape shape-2"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="why" className="feature-extended-section pt-100">
        <div className="feature-extended-wrapper">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xxl-5 col-xl-6 col-lg-8 col-md-9">
                <div className="section-title text-center mb-60">
                  <h2
                    className="mb-25 wow fadeInUp"
                    data-wow-delay=".2s"
                    style={{ color: "#162447" }}
                  >
                    StreamPala is for Everybody.
                  </h2>
                  <p className="wow fadeInUp text-center" data-wow-delay=".4s">
                    Our easy-to-understand interface makes it possible for
                    livestreamers to start earning from day 1, while advertisers
                    can effortlessly set up ads and reach their audience within
                    minutes!
                  </p>
                </div>
              </div>
            </div>

            <div className="row">
              <h3 style={{ textAlign: "center", color: "#162447" }}>
                For Streamers
              </h3>
              <div className="col-lg-4 col-md-6">
                <div className="single-feature-extended">
                  <div className="icon-last-sec">
                    <GiMoneyStack />
                  </div>
                  <div className="content">
                    <h3>Earn From Your Passion</h3>
                    <p>
                      Earn for every view, irrespective of the size of your
                      subscriber base or streaming history.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="single-feature-extended">
                  <div className="icon-last-sec">
                    <GiArrowCursor />
                  </div>
                  <div className="content">
                    <h3>Choose Your Campaigns</h3>
                    <p>
                      Select any campaign you want to be a part of, and, start
                      or stop any time you like.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="single-feature-extended">
                  <div className="icon-last-sec">
                    <BsFillPlayFill />
                  </div>
                  <div className="content">
                    <h3>Approved by YouTube</h3>
                    <p>
                      StreamPala is approved by YouTube, so your account and
                      audience is always safe.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <h3 style={{ textAlign: "center", color: "#162447" }}>
                For Advertisers
              </h3>
              <div className="col-lg-4 col-md-6">
                <div className="single-feature-extended">
                  <div className="icon-last-sec">
                    <HiUserGroup />
                  </div>
                  <div className="content">
                    <h3>Target Gen-Z</h3>
                    <p>
                      Reach an audience that is hard to reach through
                      traditional media, including social!
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="single-feature-extended">
                  <div className="icon-last-sec">
                    <GiArrowCursor />
                  </div>
                  <div className="content">
                    <h3>Non-interruptive</h3>
                    <p>
                      Your ad appears as a part of the content, and does not
                      ruin the experience like typical ads
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="single-feature-extended">
                  <div className="icon-last-sec">
                    <GiMagnifyingGlass />
                  </div>
                  <div className="content">
                    <h3>Real-time Analytics</h3>
                    <p>
                      Get real-time data on all meaningful metrics in a
                      beautifully visualized dashboard
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="about-section pt-150">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6">
              <div className="about-img">
                <img
                  src="assets/img/about/about-1.png"
                  alt=""
                  className="w-100"
                />
                <img
                  src="assets/img/about/about-left-shape.svg"
                  alt=""
                  className="shape shape-1"
                />
                <img
                  src="assets/img/about/left-dots.svg"
                  alt=""
                  className="shape shape-2"
                />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="about-content">
                <div className="section-title mb-30">
                  <h2
                    className="mb-25 wow fadeInUp"
                    data-wow-delay=".2s"
                    style={{ color: "#162447" }}
                  >
                    Join the Community:
                  </h2>
                  <p
                    className="wow fadeInUp"
                    data-wow-delay=".4s"
                    style={{ lineHeight: "40px" }}
                  >
                    Join our fast-growing community of livestreamers and
                    creators on our Discord for early campaign access, exciting
                    challenges and free giveaways.
                  </p>
                </div>
              </div>
              <div className="">
                <h2
                  className="mb-25 wow fadeInUp"
                  data-wow-delay=".2s"
                  style={{ color: "#162447" }}
                >
                  Follow Us on Social Media:
                </h2>
                <ul id="social-media-handles">
                  <li>
                    <BsDiscord />
                  </li>
                  <li>
                    <BsInstagram />
                  </li>
                  <li>
                    <BsFacebook />
                  </li>
                  <li>
                    <BsYoutube />
                  </li>
                  <li>
                    <BsWhatsapp />
                  </li>
                  <li>
                    <BsTelegram />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="widget-wrapper">
            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="footer-widget">
                  <div className="logo mb-30">
                    <img src={require("../img/logo.png")} alt="logo" />
                  </div>
                  <p
                    className="desc mb-30 text-white"
                    style={{ textAlign: "left" }}
                  >
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    dinonumy eirmod tempor invidunt.
                  </p>
                  <ul className="socials">
                    <li>
                      <a href="jvascript:void(0)">
                        <i className="lni lni-facebook-filled"></i>
                      </a>
                    </li>
                    <li>
                      <a href="jvascript:void(0)">
                        <i className="lni lni-twitter-filled"></i>
                      </a>
                    </li>
                    <li>
                      <a href="jvascript:void(0)">
                        <i className="lni lni-instagram-filled"></i>
                      </a>
                    </li>
                    <li>
                      <a href="jvascript:void(0)">
                        <i className="lni lni-linkedin-original"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-xl-2 col-lg-2 col-md-6">
                <div className="footer-widget">
                  <h3>About Us</h3>
                  <ul className="links">
                    <li>
                      <a href="javascript:void(0)">Home</a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">Feature</a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">About</a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">Testimonials</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-xl-3 col-lg-3 col-md-6">
                <div className="footer-widget">
                  <h3>Features</h3>
                  <ul className="links">
                    <li>
                      <Link to="/legal/platform-terms" target="_blank">
                        Platform Terms
                      </Link>
                    </li>
                    <li>
                      <Link to="/legal/privacy-policy" target="_blank">
                        Privacy policy
                      </Link>
                    </li>
                    <li>
                      <Link to="/legal/terms-of-use" target="_blank">
                        Terms of service
                      </Link>
                    </li>
                    {/* <li>
                      <Link to="/legal/refund-policy" target="_blank">
                        Refund policy
                      </Link>
                    </li> */}
                    <li>
                      <Link to="/legal/advertising-policy" target="_blank">
                        Advertising policy
                      </Link>
                    </li>
                    <li>
                      <Link to="/legal/direct-advertiser-terms" target="_blank">
                        Direct Advertiser policy
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-xl-3 col-lg-3 col-md-6">
                <div className="footer-widget">
                  <h3>Other Products</h3>
                  <ul className="links">
                    <li>
                      <a href="jvascript:void(0)">Accounting Software</a>
                    </li>
                    <li>
                      <a href="jvascript:void(0)">Billing Software</a>
                    </li>
                    <li>
                      <a href="jvascript:void(0)">Booking System</a>
                    </li>
                    <li>
                      <a href="jvascript:void(0)">Tracking System</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <a href="#" className="scroll-top btn-hover">
        <i className="lni lni-chevron-up"></i>
      </a>
    </div>
  );
}
