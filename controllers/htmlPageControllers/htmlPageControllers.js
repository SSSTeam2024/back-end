const htmlPageService = require("../../services/htmlPageServices/htmlPageServices");
const fs = require("fs");
const path = require("path");

const createHTMLPage = async (req, res) => {
  try {
    const htmlPage = await htmlPageService.createHTMLPage(req.body);
    res.status(201).json(htmlPage);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const generateHTMLFile = async (req, res) => {
  try {
    const { id } = req.params;
    const htmlPage = await htmlPageService.getHTMLPageById(id);
    if (!htmlPage) {
      return res.status(404).json({ error: "HTMLPage not found" });
    }

    const htmlContent = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
    <!-- Required meta tags -->
    <meta charset="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
    <!-- Bootstrap Min CSS -->
    <link rel="stylesheet" href="assets/css/bootstrap.min.css" />
    <!-- Owl Theme Default Min CSS -->
    <link rel="stylesheet" href="assets/css/owl.theme.default.min.css" />
    <!-- Owl Carousel Min CSS -->
    <link rel="stylesheet" href="assets/css/owl.carousel.min.css" />
    <!-- Owl Magnific Min CSS -->
    <link rel="stylesheet" href="assets/css/magnific-popup.min.css" />
    <!-- Animate Min CSS -->
    <link rel="stylesheet" href="assets/css/animate.min.css" />
    <!-- Boxicons Min CSS -->
    <link rel="stylesheet" href="assets/css/boxicons.min.css" />
    <!-- Flaticon CSS -->
    <link rel="stylesheet" href="assets/css/flaticon.css" />
    <!-- Meanmenu Min CSS -->
    <link rel="stylesheet" href="assets/css/meanmenu.min.css" />
    <!-- Nice Select Min CSS -->
    <link rel="stylesheet" href="assets/css/nice-select.min.css" />
    <!-- Odometer Min CSS-->
    <link rel="stylesheet" href="assets/css/odometer.min.css" />
    <!-- Style CSS -->
    <link rel="stylesheet" href="assets/css/style.css" />
    <!-- Dark CSS -->
    <link rel="stylesheet" href="assets/css/dark.css" />
    <!-- Responsive CSS -->
    <link rel="stylesheet" href="assets/css/responsive.css" />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
    />
    <!-- Favicon -->
    <link rel="icon" type="image/png" href="assets/img/logo.png" />
    <script src="https://polyfill.io/v3/polyfill.min.js?features=default"></script>
    <!-- Css For Map -->
    <link rel="stylesheet" type="text/css" href="assets/css/maps.css" />
    <!-- Map -->
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
      crossorigin="anonymous"
    />

    <!-- Title -->
    <title>${htmlPage.name} | Coach Hire Network</title>

    <style>
      .disabled-tab {
        pointer-events: none;
        color: black !important;
        /* Change color for disabled tabs */
      }

      .nav-link.active {
        /* color: red !important;  */
        background-color: #cd2528 !important;
        color: #ffffff !important;
        /* Change color for active tab  */
      }

      .nav-link:not(.active) {
        color: black !important;
        /* Change color for inactive tabs */
      }
    </style>
  </head>
      <body>
      <div class="preloader">
      <div class="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </div>
        <header class="header-area">
        <div class="top-header header-style-three">
        <div class="container">
          <div class="row">
            <div class="col-lg-3">
              <div class="header-left-content" id="logo-of-site">
                <a href="index.html">
                  <img src="http://localhost:3000/header/${
                    htmlPage.header.logo
                  }" alt="Logo" />
                </a>
              </div>
            </div>
            <div class="col-lg-9">
              <div class="header-right-content">
                <ul>
                  <li>
                    <a href="tel:+${htmlPage.header.phone_value}">
                      <i class="bx bxs-phone-call"></i>
                      <span>${htmlPage.header.phone_label}</span> ${
      htmlPage.header.phone_value
    }
                    </a>
                  </li>
                  <li>
                    <a href="mailto:${htmlPage.header.email_value}">
                      <i class="bx bx-envelope"></i>
                      <span>${htmlPage.header.email_label}</span> ${
      htmlPage.header.email_value
    }
                    </a>
                  </li>
                  <li class="get-quote pl-0" id="get-a-quote">
                    <a class="default-btn active" href="request-quote.html">
                    ${htmlPage.header.button_text}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="prevoz-nav-style prevoz-nav-style-three">
        <div class="navbar-area">
          <!-- Menu For Mobile Device -->
          <div class="mobile-nav" id="mobile-log-of-site">
            <a href="index.html" class="logo">
              <img src="assets/img/logo.png" alt="Logo" />
            </a>
          </div>
          <!-- Menu For Desktop Device -->
          <div class="main-nav">
            <nav class="navbar navbar-expand-md navbar-light">
              <div class="container">
                <a class="navbar-brand" href="index.html">
                  <img src="assets/img/logo.png" alt="Logo" />
                </a>
                <div
                  class="collapse navbar-collapse mean-menu"
                  id="navbarSupportedContent"
                >
                  <ul class="navbar-nav mr-auto">
                  ${htmlPage.menu.items.map(
                    (item) =>
                      `
                    <li class="nav-item">
                    <a href="${item.link}" class="nav-link dropdown-toggle">
                      ${item.label}
                    </a>
                  </li>
                  `
                  )}
                  </ul>
                  <!-- Start Other Option -->
                  <div class="others-option">
                    <button
                      type="button"
                      class="sidebar-menu"
                      data-bs-toggle="modal"
                      data-bs-target="#myModal2"
                    >
                      <i class="flaticon-menu"></i>
                    </button>
                  </div>
                  <!-- End Other Option -->
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
        </header>
<div class="sidebar-modal">
      <div
        class="modal right fade"
        id="myModal2"
        tabindex="-1"
        role="dialog"
        aria-labelledby="myModalLabel2"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <button
                type="button"
                class="close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">
                  <i class="bx bx-x"></i>
                </span>
              </button>
              <h2 class="modal-title" id="myModalLabel2">
                <a href="index.html">
                  <img src="assets/img/logo1.png" alt="Logo" />
                </a>
              </h2>
            </div>
            <div class="modal-body">
              <div class="sidebar-modal-widget">
                <h3 class="title">About Us</h3>
                <p>
                  Coach Hire Network provide coach hire for private, commercial
                  including the public sector. We welcome any group size no
                  matter how small or large. Our fleet ranges from budget
                  vehicle hire to executive and luxury hire. With true national
                  reach, our customers are travelling across the UK in style.
                </p>
              </div>
              <div class="sidebar-modal-widget">
                <h3 class="title">Additional Links</h3>
                <ul>
                  <li>
                    <a href="log-in.html">Services</a>
                  </li>
                  <li>
                    <a href="request-quote.html">Get A Quote</a>
                  </li>
                  <li>
                    <a href="faq.html">Become A Partner</a>
                  </li>
                  <li>
                    <a href="faq.html">FAQ</a>
                  </li>
                </ul>
              </div>
              <div class="sidebar-modal-widget">
                <h3 class="title">Contact Info</h3>
                <ul class="contact-info">
                  <li>
                    <i class="bx bx-location-plus"></i> Address
                    <span
                      >Unit 7 Haywards Industrial Park, Orton Way, Birmingham
                      B35 7BT</span
                    >
                  </li>
                  <li>
                    <i class="bx bx-envelope"></i> Email
                    <a href="mailto:sales@coachhirenetwork.co.uk"
                      >sales@coachhirenetwork.co.uk</a
                    >
                  </li>
                  <li>
                    <i class="bx bxs-phone-call"></i> Phone
                    <a href="tel:+502-464-679">0800 112 3770</a>
                    <a href="tel:+265-497-466">0742 742 3972</a>
                  </li>
                </ul>
              </div>
              <div class="sidebar-modal-widget">
                <h3 class="title">Connect With Us</h3>
                <ul class="social-list">
                  <li>
                    <a
                      href="https://www.facebook.com/BoudenCoachTravel?fref=ts"
                    >
                      <i class="bx bxl-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/BoudenLtd">
                      <i class="bx bxl-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://plus.google.com/u/0/+BoudenCoachTravel">
                      <i class="bx bxl-google-plus"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
        <div class="page-title-area container">
      <div class="page-title-content">
        <div class="row align-items-center">
          <div class="col-lg-6 col-sm-6">
            <h3>${htmlPage.name}</h3>
          </div>
          <div class="col-lg-6 col-sm-6">
            <ul>
              <li>
                <a href="index.html"> Home </a>
              </li>
              <li>${htmlPage.name}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    ${
      htmlPage.quoteForm === "1"
        ? `<section class="track-area pb-100" style="margin-bottom: 150px">
      <div class="container">
        <div class="row">
          <div id="regForm" class="col-lg-12">
            <div class="QuoteTab">
              <div style="display: flex; align-items: center">
                <i
                  class="bx bx-trip"
                  style="margin-right: 2px; font-size: 32px"
                ></i>
                <span style="font-size: 28px"> Trip Details: </span>
              </div>
              <form onsubmit="submitLoginForm(event)">
                <div class="row">
                  <div class="col-lg-5">
                    <div
                      class="row mb-20"
                      style="justify-content: center; margin-top: 20px"
                    >
                      <div class="col-lg-3 col-sm-6 col-md-3">
                        <label class="single-check" style="font-size: 17px">
                          One Way
                          <input
                            type="radio"
                            name="radio"
                            id="hide"
                            value="hide"
                            checked
                          />
                          <span class="checkmark"></span>
                        </label>
                      </div>
                      <div class="col-lg-3 col-sm-6 col-md-3">
                        <label class="single-check" style="font-size: 17px">
                          Return
                          <input type="radio" name="radio" value="show" />
                          <span class="checkmark"></span>
                        </label>
                      </div>
                    </div>
                    <div class="row mb-20">
                      <div class="col-lg-6 col-sm-6">
                        <input
                          type="date"
                          class="form-control"
                          name="pickup_date"
                          id="datePicker"
                        />
                      </div>
                      <div class="col-lg-6 col-sm-6">
                        <input
                          type="time"
                          class="form-control"
                          name="pickup_time"
                          id="timePicker"
                        />
                      </div>
                    </div>
                    <div id="box" style="display: none">
                      <div class="row mb-20">
                        <div class="col-lg-6 col-sm-6">
                          <input
                            type="date"
                            class="form-control"
                            name="return_date"
                            id="returnDatePicker"
                          />
                        </div>
                        <div class="col-lg-6 col-sm-6">
                          <input
                            type="time"
                            class="form-control"
                            name="retun_time"
                            id="returnTimePicker"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="row mb-20">
                      <div class="col-lg-6 col-sm-6">
                        <input
                          id="origin-input"
                          class="form-control"
                          type="text"
                          placeholder="Pickup location"
                          style="margin-top: 10px"
                        />
                      </div>
                      <div class="col-lg-6 col-sm-6">
                        <input
                          id="destination-input"
                          class="form-control"
                          type="text"
                          placeholder="Destination location"
                          style="margin-top: 10px"
                        />
                      </div>
                    </div>
                    <div class="row mb-20">
                      <div class="col-lg-6 col-sm-6">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Name*"
                          id="name"
                          name="name"
                        />
                      </div>
                      <div class="col-lg-6 col-sm-6">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Phone Number*"
                          name="phone"
                          id="phone"
                        />
                      </div>
                    </div>
                    <div class="row mb-20">
                      <div class="col-lg-12">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Email Address*"
                          name="email"
                          id="email"
                        />
                      </div>
                    </div>
                    <div class="row mb-20" id="divDistDur">
                      <div class="col-lg-6" id="distanceForm"></div>
                      <div class="col-lg-6" id="durationForm"></div>
                    </div>
                  </div>
                  <div class="col-lg-7">
                    <div id="map"></div>
                  </div>
                  <div class="customButtons">
                    <button
                      type="submit"
                      id="nextBtn"
                      onclick="nextPrev(1)"
                      class="customBtn"
                    >
                      Next
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div class="QuoteTab">
              <div style="display: flex; align-items: center">
                <i
                  class="bx bx-bus-school"
                  style="margin-right: 2px; font-size: 32px"
                ></i>
                <span style="font-size: 28px"> Vehicle Preferences:</span>
              </div>
              <form>
                <div class="row" style="margin-top: 20px">
                  <div class="col-lg-6">
                    <div class="row" style="margin-bottom: 10px">
                      <div class="col-6">
                        <h6>Number of passengers</h6>
                      </div>
                      <div class="col-6">
                        <input
                          type="number"
                          onInput="showCurrentValue(event)"
                          class="customSecondTag"
                          min="1"
                        />
                      </div>
                    </div>
                    <div class="row" style="margin-bottom: 10px">
                      <div class="col-6">
                        <h6>Vehicle Type</h6>
                      </div>
                      <div class="col-6">
                        <select id="vehicleType" class="customSecondTag">
                          <option value="">Select</option>
                        </select>
                      </div>
                    </div>
                    <div class="row" style="margin-bottom: 10px">
                      <div class="col-6">
                        <h6>Luggage details</h6>
                      </div>
                      <div class="col-6">
                        <div class="form-group">
                          <select id="luggage" class="customSecondTag">
                            <option value="">Select</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div class="row" style="margin-bottom: 10px">
                      <div class="col-6">
                        <h6>Journey type</h6>
                      </div>
                      <div class="col-6">
                        <div class="form-group">
                          <select id="journeys" class="customSecondTag">
                            <option value="">Journeys</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="row" style="margin-bottom: 10px">
                      <div class="col-lg-12">
                        <div class="form-group">
                          <textarea
                            class="form-control"
                            rows="2"
                            placeholder="Notes"
                            id="notes"
                            name="notes"
                          ></textarea>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-12">
                        <div class="form-group">
                          <select id="sources">
                            <option value="1">How did you hear of us?</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="customButtons">
                    <button
                      type="button"
                      id="prevBtn"
                      onclick="nextPrev(-1)"
                      class="customBtn"
                    >
                      Previous
                    </button>
                    <button
                      type="button"
                      id="nextBtn"
                      onclick="nextPrev(1)"
                      class="customBtn"
                    >
                      Next
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div class="QuoteTab">
              <div style="display: flex; align-items: center">
                <i
                  class="bx bx-file-find"
                  style="margin-right: 2px; font-size: 32px"
                ></i>
                <span style="font-size: 28px"> Review and Submit:</span>
              </div>
              <form onsubmit="submitQuoteForm(event)">
                <div
                  class="row"
                  style="
                    margin-top: 20px;
                    display: flex;
                    justify-content: center;
                  "
                >
                  <h5 style="margin-left: 50px">
                    Here is a review of your quote requirements
                  </h5>
                  <table style="margin-left: 100px">
                    <tr>
                      <td>
                        <h6>Name</h6>
                      </td>
                      <td>
                        <p id="name_visitor"></p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h6>Mobile number</h6>
                      </td>
                      <td>
                        <p id="phone_visitor"></p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h6>Email</h6>
                      </td>
                      <td>
                        <p id="email_visitor"></p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h6>Duration</h6>
                      </td>
                      <td>
                        <p id="duration"></p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h6>Distance</h6>
                      </td>
                      <td>
                        <div style="display: flex; align-items: center">
                          <span id="distance"></span><span>&nbsp;miles</span>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h6>Collection Data</h6>
                      </td>
                      <td>
                        <div style="display: flex; align-items: center">
                          <span id="pickup"></span
                          >&nbsp;<strong>at</strong>&nbsp;<span id="go"></span>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h6>Destination Data</h6>
                      </td>
                      <td>
                        <div style="display: flex; align-items: center">
                          <span id="dest"></span
                          >&nbsp;<strong>at</strong>&nbsp;<span
                            id="returnDate"
                          ></span>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h6>Number of passengers</h6>
                      </td>
                      <td>
                        <div class="align-items-center">
                          <p id="pax"></p>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h6>Vehicle type</h6>
                      </td>
                      <td>
                        <div class="align-items-center">
                          <p id="vt"></p>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h6>Luggage details</h6>
                      </td>
                      <td>
                        <div class="align-items-center">
                          <p id="lgg"></p>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h6>Journey type</h6>
                      </td>
                      <td>
                        <div class="align-items-center">
                          <p id="journey"></p>
                        </div>
                      </td>
                    </tr>
                  </table>
                </div>
                <div
                  style="
                    display: flex;
                    align-items: center;
                    justify-content: flex-start;
                  "
                >
                  <button
                    type="button"
                    id="prevBtn"
                    onclick="nextPrev(-1)"
                    class="customBtn"
                  >
                    Previous
                  </button>
                  <button
                    type="submit"
                    id="nextBtn"
                    onclick="nextPrev(1)"
                    class="customBtn"
                    data-toggle="modal"
                    data-target="#alertModal"
                  >
                    Confirm
                  </button>
                </div>
              </form>
            </div>
            <!-- Circles which indicates the steps of the form: -->
            <div
              style="
                text-align: center;
                margin-top: 100px;
                margin-bottom: -200px;
              "
            >
              <span class="step"></span>
              <span class="step"></span>
              <span class="step"></span>
            </div>
          </div>
        </div>
      </div>
    </section> `
        : ""
    }
    <div id="content-container">
      <div id="div1"></div>
      <div id="div2"></div>
      <div id="div3"></div>
    </div>
        <footer
      class="footer-top-area pt-70 pb-70"
      style="background-color: #cd2528"
    >
      <div class="container">
        <div class="row">
            ${htmlPage.footerList.map(
              (footer) =>
                `
            <div class="col-lg-3 col-md-6">
            <div class="single-widget">
            <h3>${footer.name}</h3>
            <ul>
            ${footer.items.map(
              (item) =>
                `
              <li><a href="${item.link}">${item.name}</a></li>
              `
            )} 
              </ul>
               </div>
               </div>
            `
            )}
        </div>
      </div>
    </footer>

        <footer class="footer-bottom-area fun-blue-bg">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-5">
            <div class="single-widget-bottom">
              <ul>
                <li>
                  <a href="${htmlPage.socialMedia.termsAndConditions.link}">${
      htmlPage.socialMedia.termsAndConditions.name
    }</a>
                </li>
                <li>
                  <a href="${htmlPage.socialMedia.privacyPolicy.link}"
                    >${htmlPage.socialMedia.privacyPolicy.name}</a
                  >
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="single-widget-bottom">
              <p>
                <i class="bx bx-copyright"></i> 2024 ${
                  htmlPage.socialMedia.siteName
                }.
                Designed By
                <a href="https://https://sss.com.tn/" target="_blank">3S</a>
              </p>
            </div>
          </div>
          <div class="col-lg-3">
            <div class="single-widget-bottom">
              <ul class="social-link">
                  <li>
                    <a href="${htmlPage.socialMedia.socialLinks.x.link}">
                      <i class="bx bxl-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="${htmlPage.socialMedia.socialLinks.facebook.link}">
                      <i class="bx bxl-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="${
                      htmlPage.socialMedia.socialLinks.googlePlus.link
                    }">
                      <i class="bx bxl-twitter"></i>
                    </a>
                  </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>

        <div class="go-top">
      <i class="bx bx-chevrons-up bx-fade-up"></i>
      <i class="bx bx-chevrons-up bx-fade-up"></i>
    </div>

        <!-- Jquery Min JS -->
    <script src="assets/js/jquery.min.js"></script>
    <!-- Bootstrap Bundle Min JS -->
    <script src="assets/js/bootstrap.bundle.min.js"></script>
    <!-- Meanmenu Min JS -->
    <script src="assets/js/meanmenu.min.js"></script>
    <!-- Wow Min JS -->
    <script src="assets/js/wow.min.js"></script>
    <!-- Owl Carousel Min JS -->
    <script src="assets/js/owl.carousel.min.js"></script>
    <!-- Owl Magnific Min JS -->
    <script src="assets/js/magnific-popup.min.js"></script>
    <!-- Nice Select Min JS -->
    <script src="assets/js/nice-select.min.js"></script>
    <!-- Appear JS -->
    <script src="assets/js/appear.min.js"></script>
    <!-- Odometer JS -->
    <script src="assets/js/odometer.min.js"></script>
    <!-- jarallax Min JS -->
    <script src="assets/js/jarallax.min.js"></script>
    <!-- Form Ajaxchimp Min JS -->
    <script src="assets/js/ajaxchimp.min.js"></script>
    <!-- Form Validator Min JS -->
    <script src="assets/js/form-validator.min.js"></script>
    <!-- Contact JS -->
    <script src="assets/js/contact-form-script.js"></script>
    <!-- Custom JS -->
    <script src="assets/js/custom.js"></script>
    <!-- Map -->
    <script
      src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBbORSZJBXcqDnY6BbMx_JSP0l_9HLQSkw&callback=initMap&libraries=places&v=weekly"
      defer
    ></script>

    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"
      integrity="sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    ></script>
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    <!-- Main JS -->
    <script src="assets/js/main.js"></script>
    <!-- Header JS -->
    <script src="assets/js/header.js"></script>
    <script src="assets/js/top-menu.js"></script>
    <script src="assets/js/footer-list.js"></script>
    <script src="assets/js/footer-social.js"></script>
    <script src="assets/js/loadComponents.js"></script>
      </body>
      </html>
    `;

    // Specify external folder
    const folderPath = path.join("/var/www/client");
    // const folderPath = path.join(
    //   "C:/Users/HP/Desktop/3s Coach Hire Network/website"
    // );
    const sanitizedLink = htmlPage.link.replace(/\s+/g, "-");
    console.log("sanitizedLink", sanitizedLink);
    const filePath = path.join(folderPath, `${sanitizedLink}.html`);
    console.log("filePath", filePath);
    // Ensure folder exists
    if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath, { recursive: true });
    }

    // Write the HTML file
    fs.writeFileSync(filePath, htmlContent);

    res.status(200).json({ message: `HTML file generated at ${filePath}` });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createHTMLPage,
  generateHTMLFile,
};
