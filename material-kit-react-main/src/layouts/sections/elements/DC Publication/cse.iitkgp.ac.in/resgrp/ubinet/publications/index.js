import React from 'react';

function App() {
  return (
    <div>
      <div className="about-us bg-gray-200">
        {/* Navbar Transparent */}
        <nav className="navbar navbar-expand-lg position-absolute top-0 z-index-3 w-100 shadow-none my-3 navbar-transparent">
          <div className="container">
            <a className="navbar-brand text-white" href="../index.html" rel="tooltip" title="Designed and Coded by Creative Tim" data-placement="bottom" target="_blank">
              <b>UbiSys@CSE,IITJ</b>
            </a>
            <button className="navbar-toggler shadow-none ms-2" type="button" data-bs-toggle="collapse" data-bs-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon mt-2">
                <span className="navbar-toggler-bar bar1"></span>
                <span className="navbar-toggler-bar bar2"></span>
                <span className="navbar-toggler-bar bar3"></span>
              </span>
            </button>
            <div className="collapse navbar-collapse w-100 pt-3 pb-2 py-lg-0 ms-lg-12 ps-lg-5" id="navigation">
              <ul className="navbar-nav navbar-nav-hover ms-auto">
                <li className="nav-item dropdown dropdown-hover mx-2 ms-lg-6">
                  <a className="nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center" href="../index.html">
                    <i className="material-icons opacity-6 me-2 text-md">dashboard</i>
                    Home
                  </a>
                </li>
                <li className="nav-item dropdown dropdown-hover mx-2">
                  <a className="nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center" href="./index.html">
                    <i className="material-icons opacity-6 me-2 text-md">view_day</i>
                    Publications
                  </a>
                </li>
                <li className="nav-item dropdown dropdown-hover mx-2">
                  <a className="nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center" id="dropdownMenuDocs" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="material-icons opacity-6 me-2 text-md">article</i>
                    Research Areas
                    <img src="../assets/img/down-arrow-white.svg" alt="down-arrow" className="arrow ms-2 d-lg-block d-none" />
                    <img src="../assets/img/down-arrow-dark.svg" alt="down-arrow" className="arrow ms-2 d-lg-none d-block" />
                  </a>
                  {/* Rest of the code */}
                </li>
                <li className="nav-item dropdown dropdown-hover mx-2">
                  <a className="nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center" href="../pages/projects.html">
                    <i className="fa fa-handshake me-1"></i>
                    Sponsored Projects
                  </a>
                </li>
                
              </ul>
            </div>
          </div>
        </nav>
        {/* End Navbar */}
        {/* Header Section */}
        <header className="bg-gradient-dark">
          <div className="page-header min-vh-50" style={{ backgroundImage: "url('https://iitj.ac.in/plasma2022/images/iitjcampus.jpg')" }}>
            <span className="mask bg-gradient-dark opacity-6"></span>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8 text-center mx-auto my-auto">
                  <h1 className="text-white">UbiSys Research Group</h1>
                  {/* Additional content within the header can be added here */}
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
      {/* <script src="../assets/js/core/popper.min.js" type="text/javascript"></script>
      <script src="../assets/js/core/bootstrap.min.js" type="text/javascript"></script>
    <script src="../assets/js/plugins/perfect-scrollbar.min.js"></script>
    <script src="../assets/js/plugins/countup.min.js"></script>
    <script src="../assets/js/plugins/parallax.min.js"></script>
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDTTfWur0PDbZWPr7Pmq8K3jiDp0_xUziI"></script>
    <script src="../assets/js/material-kit.min.js?v=3.0.2" type="text/javascript"></script>


    <script src="../assets/js/plugins/jquery-3.6.0.min.js"></script>
    <script src="../assets/js/plugins/isotope.pkgd.min.js"></script> */}
    
    

      {/* Rest of the code */}
    </div>

  );
}

export default App;
