import React from "react";

export default function LandingPage() {
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
            <div className="row align-items-center">
              <div className="col-lg-12">
                <nav className="navbar-lp navbar-expand-lg">
                  <a className="navbar-brand" href="index.html">
                    <img src="assets/img/logo/logo.svg" alt="Logo" />
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
                        <a className="page-scroll" href="#features">
                          Features
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="page-scroll" href="#about">
                          About
                        </a>
                      </li>

                      <li className="nav-item">
                        <a className="page-scroll" href="#why">
                          Why
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="javascript:void(0)">Pricing</a>
                      </li>
                      <li className="nav-item">
                        <a href="javascript:void(0)">Clients</a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section id="home" className="hero-section">
        <div className="container">
          <div className="row align-items-center position-relative">
            <div className="col-lg-6">
              <div className="hero-content">
                <h1 className="wow fadeInUp" data-wow-delay=".4s">
                  Your using free lite version
                </h1>
                <p className="wow fadeInUp" data-wow-delay=".6s">
                  Please, purchase full version to get all sections, features
                  and permission to remove footer credit.
                </p>
                <a
                  href="javascript:void(0)"
                  className="main-btn border-btn btn-hover wow fadeInUp"
                  data-wow-delay=".6s"
                >
                  Purchase Now
                </a>
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
                  <i className="lni lni-bootstrap"></i>
                </div>
                <div className="content">
                  <h3>Bootstrap 5</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-8 col-sm-10">
              <div className="single-feature">
                <div className="icon">
                  <i className="lni lni-layout"></i>
                </div>
                <div className="content">
                  <h3>Clean Design</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-8 col-sm-10">
              <div className="single-feature">
                <div className="icon">
                  <i className="lni lni-coffee-cup"></i>
                </div>
                <div className="content">
                  <h3>Easy to Use</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore
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
                  <h2 className="mb-25 wow fadeInUp" data-wow-delay=".2s">
                    Perfect Solution Thriving Online Business
                  </h2>
                  <p className="wow fadeInUp" data-wow-delay=".4s">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    dinonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                    sea takimata sanctus est Lorem.Lorem ipsum dolor sit amet.
                  </p>
                </div>
                <a
                  href="javascript:void(0)"
                  className="main-btn btn-hover border-btn wow fadeInUp"
                  data-wow-delay=".6s"
                >
                  Discover More
                </a>
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
                  <h2 className="mb-25 wow fadeInUp" data-wow-delay=".2s">
                    Easy to Use with Tons of Awesome Features
                  </h2>
                  <p className="wow fadeInUp" data-wow-delay=".4s">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua.
                  </p>
                </div>
                <ul>
                  <li>Quick Access</li>
                  <li>Easily to Manage</li>
                  <li>24/7 Support</li>
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
                  <h2 className="mb-25 wow fadeInUp" data-wow-delay=".2s">
                    Why Choose SaaSpal
                  </h2>
                  <p className="wow fadeInUp" data-wow-delay=".4s">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore
                  </p>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="single-feature-extended">
                  <div className="icon">
                    <i className="lni lni-display"></i>
                  </div>
                  <div className="content">
                    <h3>SaaS Focused</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="single-feature-extended">
                  <div className="icon">
                    <i className="lni lni-leaf"></i>
                  </div>
                  <div className="content">
                    <h3>Awesome Design</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="single-feature-extended">
                  <div className="icon">
                    <i className="lni lni-grid-alt"></i>
                  </div>
                  <div className="content">
                    <h3>Ready to Use</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="single-feature-extended">
                  <div className="icon">
                    <i className="lni lni-javascript"></i>
                  </div>
                  <div className="content">
                    <h3>Vanilla JS</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="single-feature-extended">
                  <div className="icon">
                    <i className="lni lni-layers"></i>
                  </div>
                  <div className="content">
                    <h3>Essential Sections</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="single-feature-extended">
                  <div className="icon">
                    <i className="lni lni-rocket"></i>
                  </div>
                  <div className="content">
                    <h3>Highly Optimized</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="subscribe-section pt-120">
        <div className="container">
          <div className="subscribe-wrapper img-bg">
            <div className="row align-items-center">
              <div className="col-xl-6 col-lg-7">
                <div className="section-title mb-15">
                  <h2 className="text-white mb-25">Subscribe Our Newsletter</h2>
                  <p className="text-white pr-5">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor
                  </p>
                </div>
              </div>
              <div className="col-xl-6 col-lg-5">
                <form action="#" className="subscribe-form">
                  <input
                    type="email"
                    name="subs-email"
                    id="subs-email"
                    placeholder="Your Email"
                  />
                  <button type="submit" className="main-btn btn-hover">
                    Subscribe
                  </button>
                </form>
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
                    <a href="index.html">
                      <img src="assets/img/logo/logo.svg" alt="" />
                    </a>
                  </div>
                  <p className="desc mb-30 text-white">
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
                      <a href="javascript:void(0)">How it works</a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">Privacy policy</a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">Terms of service</a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">Refund policy</a>
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
