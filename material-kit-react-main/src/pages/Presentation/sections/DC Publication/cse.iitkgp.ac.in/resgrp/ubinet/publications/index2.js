import React from 'react';
// import $ from 'jquery';





function Solve() {
  
  return (<div>
    <div className="about-us bg-gray-200">
      <nav className="navbar navbar-expand-lg position-absolute top-0 z-index-3 w-100 shadow-none my-3 navbar-transparent">
        <div className="container">
          <a
            className="navbar-brand text-white"
            href="../index.html"
            rel="tooltip noreferrer"
            title="Designed and Coded by Creative Tim"
            data-placement="bottom"
            target="_blank"
          >
            <b>UbiSys@CSE,IITJ</b>
          </a>

          <button
            className="navbar-toggler shadow-none ms-2"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navigation"
            aria-controls="navigation"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon mt-2">
              <span className="navbar-toggler-bar bar1"></span>
              <span className="navbar-toggler-bar bar2"></span>
              <span className="navbar-toggler-bar bar3"></span>
            </span>
          </button>
          <div className="collapse navbar-collapse w-100 pt-3 pb-2 py-lg-0 ms-lg-12 ps-lg-5" id="navigation" />
          <ul className="navbar-nav navbar-nav-hover ms-auto" />
          <li className="nav-item dropdown dropdown-hover mx-2 ms-lg-6" />
          <a className="nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center" href="../index.html" />
          <i className="material-icons opacity-6 me-2 text-md">dashboard</i>
          Home
          <img src="assets/img/down-arrow-white.svg" alt="down-arrow" className="arrow ms-2 d-lg-block d-none" />
          <img src="assets/img/down-arrow-dark.svg" alt="down-arrow" className="arrow ms-2 d-lg-none d-block" />


          <li className="nav-item dropdown dropdown-hover mx-2" />
          <a className="nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center" href="./index.html" />
          <i className="material-icons opacity-6 me-2 text-md">view_day</i>
          Publications
          <img src="assets/img/down-arrow-white.svg" alt="down-arrow" className="arrow ms-2 d-lg-block d-none" />
          <img src="assets/img/down-arrow-dark.svg" alt="down-arrow" className="arrow ms-2 d-lg-none d-block" />


          <li className="nav-item dropdown dropdown-hover mx-2" />
          <a className="nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center" id="dropdownMenuDocs" data-bs-toggle="dropdown" aria-expanded="false" >
            <i className="material-icons opacity-6 me-2 text-md">article</i>
            Research Areas
            <img src="../assets/img/down-arrow-white.svg" alt="down-arrow" className="arrow ms-2 d-lg-block d-none" />
            <img src="../assets/img/down-arrow-dark.svg" alt="down-arrow" className="arrow ms-2 d-lg-none d-block" />
          </a>
          <ul className="dropdown-menu dropdown-menu-animation dropdown-menu-end dropdown-md dropdown-md-responsive mt-0 mt-lg-3 p-3 border-radius-lg" aria-labelledby="dropdownMenuDocs" />
          <div className="d-none d-lg-block">
            <ul className="list-group">
              <li className="nav-item list-group-item border-0 p-0">
                <a className="dropdown-item py-2 ps-3 border-radius-md" href="../pages/research_sensing.html">
                  <h6 className="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">Sensing</h6>
                  <span className="text-sm">Smartphones, Wearables, Sensors</span>
                </a>
              </li>
              <li className="nav-item list-group-item border-0 p-0">
                <a className="dropdown-item py-2 ps-3 border-radius-md" href="../pages/research_hci.html">
                  <h6 className="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">Computer Human Interaction</h6>
                  <span className="text-sm">Assistive Systems, Human Machine Interfacing</span>
                </a>
              </li>
              <li className="nav-item list-group-item border-0 p-0">
                <a className="dropdown-item py-2 ps-3 border-radius-md" href="../pages/research_ds.html">
                  <h6 className="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">Distributed Systems</h6>
                  <span className="text-sm">Cloud, Edge, Blockchains</span>
                </a>
              </li>
              <li className="nav-item list-group-item border-0 p-0">
                <a className="dropdown-item py-2 ps-3 border-radius-md" href="../pages/research_network.html">
                  <h6 className="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">Networking</h6>
                  <span className="text-sm">Protocols, Quality, Applications</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="row d-lg-none">
            <div className="col-md-12 g-0">
              <a className="dropdown-item py-2 ps-3 border-radius-md" href="../pages/research_sensing.html">
                <h6 className="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">Sensing</h6>
                <span className="text-sm">Smartphones, Wearables, Sensors</span>
              </a>
              <a className="dropdown-item py-2 ps-3 border-radius-md" href="../pages/research_hci.html">
                <h6 className="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">Computer Human Interaction</h6>
                <span className="text-sm">Assistive Systems, Human Machine Interfacing</span>
              </a>
              <a className="dropdown-item py-2 ps-3 border-radius-md" href="../pages/research_ds.html">
                <h6 className="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">Distributed Systems</h6>
                <span className="text-sm">Cloud, Edge, Blockchains</span>
              </a>
              <a className="dropdown-item py-2 ps-3 border-radius-md" href="../pages/research_network.html">
                <h6 className="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">Networking</h6>
                <span className="text-sm">Protocols, Quality, Applications</span>
              </a>
            </div>
          </div>


          <li className="nav-item dropdown dropdown-hover mx-2">
            <a className="nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center" href="../pages/projects.html">
              <i className="fa fa-handshake me-1"></i>
              Sponsored Projects
              <img src="assets/img/down-arrow-white.svg" alt="down-arrow" className="arrow ms-2 d-lg-block d-none" />
              <img src="assets/img/down-arrow-dark.svg" alt="down-arrow" className="arrow ms-2 d-lg-none d-block" />
            </a>
          </li>

        </div>
      </nav>
      
      {/* <!-- End Navbar --> */}
      {/* <!-- -------- START HEADER 7 w/ text and video ------- --> */}
      <header className="bg-gradient-dark">
      <div className="page-header min-vh-50" style={{ backgroundImage: 'url("https://iitj.ac.in/plasma2022/images/iitjcampus.jpg")' }}>
          <span className="mask bg-gradient-dark opacity-6"></span>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center mx-auto my-auto">
                <h1 className="text-white">UbiSys Research Group</h1>
                <p className="lead mb-4 text-white opacity-8">We’re constantly trying to push the boundaries of sensing and systems research. Come along if you share the same ambition.</p>
                <button className="btn bg-white text-dark">Research Highlights</button>
                <h6 className="text-white mb-2 mt-5">Follow us on</h6>
                <div className="d-flex justify-content-center">
                  <a href="#"><i className="fab fa-facebook text-lg text-white me-4"></i></a>
                  <a href="#"><i className="fab fa-instagram text-lg text-white me-4"></i></a>
                  <a href="#"><i className="fab fa-twitter text-lg text-white me-4"></i></a>
                  <a href="#"><i className="fab fa-google-plus text-lg text-white"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* <!-- -------- END HEADER 7 w/ text and video ------- --> */}
      <div className="card card-body shadow-xl mx-3 mx-md-4 mt-n6">
        {/* <!-- Section with four info areas left & one card right with image and waves --> */}
        <section className="py-7">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-12">
                <div className="portfolio-page section">
                  <div className="container">
                    <div className="portfolio">
                      <div className="row">
                        <div className="col-sm-12">
                          <div className="filtering-button">
                            <a className="btn btn-primary" data-filter="*"> All Publications</a>
                            <a className="btn btn-secondary" data-filter=".cat1">Journal</a>
                            <a className="btn btn-secondary" data-filter=".cat2">Conference (Full)</a>
                            <a className="btn btn-secondary" data-filter=".cat3">Conference (Poster)</a>
                            <a className="btn btn-secondary" data-filter=".cat4">Workshop</a>
                            <a className="btn btn-secondary" data-filter=".cat5">Network</a>
                            <a className="btn btn-secondary" data-filter=".cat6">HCI</a>
                            <a className="btn btn-secondary" data-filter=".cat7">Distributed Systems</a>
                            <a className="btn btn-secondary" data-filter=".cat8">Sensing</a>
                          </div>
                        </div>
                      </div>
                      <div className="service-area section">
                        <div className="container">
                          <div className="grid pub-list">
                            <ol>
                              <div className="grid-item cat1 cat7">
                                <li>
                                  The Ubiquitous Systems (UbiSys) research lab, led by Dr. Suchetana Chakraborty, focuses on many areas of ubiquitous computing including novel user interface technology, health sensing, activity recognition{' '}
                                  <em>{"GRIDS: Personalized Guideline Recommendations while Driving Through a New City"}</em>,{' '}
                                  <b>ACM Transactions on Recommender Systems</b> (Accepted: April 17, 2023){' '}
                                  <a href="https://doi.org/10.1145/3609337" target="_blank" rel="noreferrer">Paper</a>,{' '}
                                  <a href="https://youtu.be/-W7_TCLYRx4" target="_blank" rel="noreferrer">Teaser Video</a>,{' '}
                                  <a href="https://github.com/SugandhPargal/GRIDS" target="_blank" rel="noreferrer">Source Code and Partial Data</a>
                                </li>
                              </div>
                              <div className="grid-item cat2 cat5">
                                <li> low-power sensing, and energy sensing by applying expertise in sensing, signal processing, embedded systems, circuits, and human-computer interaction.,
                                  <b>EWSN 2023</b> <a href="https://arxiv.org/abs/2301.03722" target="_blank" rel="noreferrer">Pre-print</a>, <a href="https://github.com/arghasen10/fedput-implement" target="_blank" rel="noreferrer">Source Code</a></li><br />
                              </div>
                              <div className="grid-item cat1 cat7">
                                <li>Example 2,
                                  <b>IEEE Transactions on Services Computing</b> (Accepted: April 17, 2023) <a href="https://doi.org/10.1109/TSC.2023.3270921" target="_blank" rel="noreferrer">Early Access</a></li><br />
                              </div>
                              <div className="grid-item cat2 cat8">
                                <li>
                                  Example 3{' '}
                                  <em>{"Acconotate: Exploiting Acoustic Changes for Automatic Annotation of Inertial Data"}</em>,{' '}
                                  <b>DCOSS-IoT 2023</b>,{' '}
                                  <a href="https://github.com/stilllearningsoumya/acconotate" target="_blank" rel="noreferrer">Source Code and Partial Dataset</a>,{' '}
                                  <a href="https://docs.google.com/presentation/d/1UUBJHT5jJccThNckkkOYgTZKo4d11a3WikLp2Y09kzk/edit?usp=sharing" target="_blank" rel="noreferrer">Presentation Slides</a>
                                </li>
                              </div>
                              <div className="grid-item cat1 cat5">
        <li>
          EXample 4{' '}
          <em>{"Improving UE Energy Efficiency through Network-aware Video Streaming over 5G"}</em>,{' '}
          <b>IEEE Transactions on Network and Service Management</b>{' '}
          (Accepted: February 03, 2023){' '}
          <a href="https://ieeexplore.ieee.org/document/10056411" target="_blank" rel="noreferrer">Early Access</a>
        </li>
      </div>

      <div className="grid-item cat2 cat6 cat8">
        <li>
          Example 5{' '}
          <em>{"Exploring Earables to Monitor Temporal Lack of Focus during Online Meetings to Identify Onset of Neurological Disorders"}</em>,{' '}
          <b>IEEE/ACM CHASE 2023</b>{' '}
          <a href="https://youtu.be/mwRE614BxU8" target="_blank" rel="noreferrer">Video teaser</a>
        </li>
      </div>

      <div className="grid-item cat2 cat6 cat8">
        <li>
          Example 6{' '}
          <em>{"ExpresSense: Exploring a Standalone Smartphone to Sense Engagement of Users from Facial Expressions Using Acoustic Sensing"}</em>,{' '}
          <b>ACM CHI 2023</b>{' '}
          <a href="https://github.com/Pragma-cpu/ExpresSense" target="_blank" rel="noreferrer">Source Code and Dataset</a>,{' '}
          <a href="https://arxiv.org/pdf/2301.06762.pdf" target="_blank" rel="noreferrer">Pre-print</a>,{' '}
          <a href="https://www.youtube.com/watch?v=p5IqMn4Q7FM" target="_blank" rel="noreferrer">Video teaser</a>
        </li>
      </div>

      <div className="grid-item cat2 cat8">
        <li>
          Argha Sen, Avijit Mandal, Prasenjit Karmakar, Anirban Das, Sandip Chakraborty:{' '}
          <em>{"mmDrive: mmWave Sensing for Live Monitoring and On-Device Inference of Dangerous Driving"}</em>,{' '}
          <b>IEEE PerCom 2023</b>{' '}
          <a href="https://github.com/arghasen10/mmdrive" target="_blank" rel="noreferrer">Source Code and Dataset</a>,{' '}
          <a href="https://youtu.be/Pf5jx1EHGWE" target="_blank" rel="noreferrer">Video teaser</a>
        </li>
      </div>

      <div className="grid-item cat2 cat8">
        <li>
          Example 7{' '}
          <em>{"DriCon: On-device Just-in-Time Context Characterization for Unexpected Driving Events"}</em>,{' '}
          <b>IEEE PerCom 2023</b>,{' '}
          <a href="https://github.com/debasree08/DriCon" target="_blank" rel="noreferrer">Source Code and Dataset</a>,{' '}
          <a href="https://youtu.be/r9KtejjXpPw" target="_blank" rel="noreferrer">Video teaser</a>
        </li>
      </div>        <div className="grid-item cat2 cat7">
        <li>
          Example 8{' '}
          <em>{"DisProTrack: Distributed Provenance Tracking over Serverless Applications"}</em>,{' '}
          <b>IEEE INFOCOM 2023</b>,{' '}
          <a href="https://github.com/usatpath01/DisProTrack" target="_blank" rel="noreferrer">Source Code</a>
        </li>
      </div>

      <div className="grid-item cat3 cat6 cat8">
        <li>
          Example 9{' '}
          <em>{"enVolve+: Inertial Sensing to Reinforce Involvement of Silent Listeners during an Online Interaction"}</em>,{' '}
          <b>COMSNETS 2023</b>
        </li>
      </div>

      <div className="grid-item cat3 cat6 cat8">
        <li>
          Example 10{' '}
          <em>{"FreeSteer: A Smartphone Application for Detecting Anxiety in Novice Drivers through Smart Glasses"}</em>,{' '}
          <b>COMSNETS 2023</b>
        </li>
      </div>

      <div className="grid-item cat3 cat6 cat8">
        <li>
          Vijay Kumar Singh, Pragma Kar, Ayush Madhan-Sohini, Madhav Rangaiah, Sandip Chakraborty, Mukulika Maity:{' '}
          <em>{"Monitoring Engagement in Online classNamees Through WiFi CSI"}</em>,{' '}
          <b>COMSNETS 2023</b>
        </li>
      </div>

      <div className="grid-item cat1 cat6 cat8">
        <li>
          Exaple 11 Soumyajit Chatterjee, Abhijit Roy, Santanu Mandal, Subrata Nandi, Sandip Chakraborty, Mousumi Saha, Sujoy Saha:{' '}
          <em>{"AQuaMoHo: Localized Low-Cost Outdoor Air Quality Sensing over a Thermo-Hygrometer"}</em>,{' '}
          <b>ACM Transactions on Sensor Networks</b>, Accepted: December 15, 2022,{' '}
          <a href="https://arxiv.org/abs/2204.11484" target="_blank" rel="noreferrer">Preprint</a>
        </li>
      </div>

      <div className="grid-item cat2 cat8">
        <li>
          Example 12{' '}
          <em>{"mmAssist: Passive Monitoring of Driver's Attentiveness Using mmWave Sensors"}</em>,{' '}
          <b>COMSNETS 2023</b>,{' '}
          <a href="https://github.com/arghasen10/mmAssist" target="_blank" rel="noreferrer">Source Code</a>
        </li>
      </div>

      <div className="grid-item cat2 cat7">
        <li>
          Example 13{' '}
          <em>{"Private Certifier Interaction"}</em>,{' '}
          <b>NDSS 2023</b>,{' '}
          <a href="https://eprint.iacr.org/2022/1302" target="_blank" rel="noreferrer">Preprint</a>,{' '}
          <a href="https://github.com/ghoshbishakh/pci" target="_blank" rel="noreferrer">Source Code</a>
        </li>
      </div>

      <div className="grid-item cat1 cat2 cat6 cat8">
        <li>
          Pragma Kar, Samiran Chattopadhyay, Sandip Chakraborty:{' '}
          <em>{"Bifurcating Cognitive Attention from Visual Concentration: Utilizing Cooperative Audiovisual Sensing for Demarcating Inattentive Online Meeting Participants"}</em>,{' '}
          <b>ACM CSCW 2022 (PACM-HCI V6, CSCW2)</b>
        </li>
      </div>                 <div className="grid-item cat1 cat6 cat8">
        <li>
          Ratna Mandal, Prasenjit Karmakar, Soumyajit Chatterjee, Debleen Das Spandan, Shouvit Pradhan, Sujoy Saha, Sandip Chakraborty, Subrata Nandi:{' '}
          <em>{"Exploiting Multi-modal Contextual Sensing for City-bus’s Stay Location Characterization: Towards Sub-60 Seconds Accurate Arrival Time Prediction"}</em>,{' '}
          <b>ACM Transactions on Internet of Things</b>, Volume 4, Issue 1, February 2023,{' '}
          <a href="https://github.com/prasenjit52282/BuStop" target="_blank" rel="noreferrer">Source Code</a>
        </li>
      </div>

      <div className="grid-item cat2 cat6 cat8">
        <li>
          Snigdha Das, Sandip Chakraborty, Bivas Mitra:{' '}
          <em>{"I Cannot See Students Focusing on My Presentation; Are They Following Me? Continuous Monitoring of Student Engagement through 'Stungage'"}</em>,{' '}
          <b>ACM UMAP 2022</b>,{' '}
          <a href="https://github.com/skysnigdha/StudentEngagement" target="_blank" rel="noreferrer">Source Code</a>,{' '}
          <a href="https://youtu.be/b2-Bp_0P1mI" target="_blank" rel="noreferrer">Demo Video</a>,{' '}
          <a href="https://github.com/ConsultantFoodie/BrotherEye" target="_blank" rel="noreferrer">Chrome Extension</a>
        </li>
      </div>

      <div className="grid-item cat2 cat8">
        <li>
          Example 14{' '}
          <em>{"AmicroN: Framework for Generating Micro-Activity Annotations for Human Activity Recognition"}</em>,{' '}
          <b>IEEE SmartComp 2022 (Short Paper)</b>
        </li>
      </div>

      <div className="grid-item cat4 cat6 cat8">
        <li>
          Sugandh Pargal, Soumyajit Chatterjee, Utkarsh Sinha, Bivas Mitra and Sandip Chakraborty:{' '}
          <em>{"My Mobile Knows that I am Driving! In-Vehicle (Relative) Blind Localization of a Smartphone"}</em>,{' '}
          <b>IEEE MUST 2022 (in conjunction with IEEE MDM 2022)</b>
        </li>
      </div>

      <div className="grid-item cat2 cat6 cat8">
        <li>
          Example 15{' '}
          <em>{"DriBe: On-road Mobile Telemetry for Locality-neutral Driving Behavior Annotation"}</em>,{' '}
          <b>IEEE MDM 2022</b>
        </li>
      </div>

      <div className="grid-item cat1 cat6 cat8">
        <li>
          Rohit Verma, Sugandh Pargal, Debasree Das, Tanusree Parbat, Sai Shankar, Bivas Mitra, Sandip Chakraborty:{' '}
          <em>{"Impact of Driving Behavior on Commuter’s Comfort during Cab Rides: Towards a New Perspective of Driver Rating"}</em>,{' '}
          <b>ACM Transactions on Intelligent Systems and Technology</b>, Accepted: February 28, 2022
        </li>
      </div>

      <div className="grid-item cat3 cat8">
        <li>
          Example 16{' '}
          <em>{"Demo Abstract: Understanding Internal Structure Of Hollow Objects Using Acoustics"}</em>,{' '}
          <b>ACM/IEEE IPSN 2022 (Demo)</b>
        </li>
      </div>

      <div className="grid-item cat3 cat8">
        <li>
          Soumyajit Chatterjee, Arun Singh, Bivas Mitra, Sandip Chakraborty:{' '}
          <em>{"Realistic Multiuser, Multimodal (IMU, Acoustic) HAR Data Generation through Single User Data Augmentation"}</em>,{' '}
          <b>ACM/IEEE IPSN 2022 (Posters)</b>
        </li>
      </div>                    <div className="grid-item cat3 cat5">
        <li>
          Argha Sen, Sashank Bonda, Jay Jayatheerthan, Sandip Chakraborty:{' '}
          <em>{"An ns3-based Energy Module for 5G mmWave Base Stations"}</em>,{' '}
          <b>IEEE INFOCOM 2022 (Poster)</b>,{' '}
          <a href="https://github.com/arghasen10/mmwave-energy" target="_blank" rel="noreferrer">Source Code</a>
        </li>
      </div>

      <div className="grid-item cat2 cat7">
        <li>
          Bishakh Ghosh, Dhinakaran Vinayagamurthy, Venkatraman Ramakrishna, Krishnasuri Narayanam, Sandip Chakraborty:{' '}
          <em>{"Privacy-Preserving Negotiation of Common Trust Anchors Across Blockchain Networks"}</em>,{' '}
          <b>IEEE ICBC 2022 (Short Paper)</b>
        </li>
      </div>

      <div className="grid-item cat2 cat7">
        <li>
          Example 17{' '}
          <em>{"Proof of Federated Training: Accountable Cross-Network Model Training and Inference"}</em>,{' '}
          <b>IEEE ICBC 2022</b>
        </li>
      </div>

      <div className="grid-item cat3 cat6 cat8">
        <li>
          Example 18{' '}
          <em>{"Who is Using the Phone within the Car? Blind Device Localization in a Car with Unimodal Acoustic Signature"}</em>,{' '}
          <b>ACM HotMobile 2022 (Posters)</b>
        </li>
      </div>

      <div className="grid-item cat4 cat6 cat8">
        <li>
          Example 19{' '}
          <em>{"Why Slammed the Brakes On? Auto-annotating Driving Behaviors from Adaptive Causal Modeling"}</em>,{' '}
          <b>IEEE PerVehicle 2022 (in conjunction with IEEE PerCom 2022)</b>
        </li>
      </div>

      <div className="grid-item cat2 cat6 cat8">
        <li>
          Example 20 Nirmalya Roy, Bivas Mitra, Sandip Chakraborty:{' '}
          <em>{"CogAx: Early Assessment of Cognitive and Functional Impairment from Accelerometry"}</em>,{' '}
          <b>IEEE PerCom 2022</b>
        </li>
      </div>

      <div className="grid-item cat2 cat6 cat8">
        <li>
          Example 21 Bivas Mitra:{' '}
          <em>{"SmartWatch for Wall Writing: Real-time Transcription of Wall Writing from Inertial Sensing"}</em>,{' '}
          <b>COMSNETS 2022</b>
        </li>
      </div>

      <div className="grid-item cat2 cat6 cat8">
        <li>
          Ratna Mandal, Nitin Agarwal, Saikat Kumar Dey, Sujoy Saha, Subrata Nandi, Sandip Chakraborty:{' '}
          <em>{"GPS Crowdsensing for Public Stoppage Planning of City Buses: A Perspective of Developing Economies"}</em>,{' '}
          <b>COMSNETS 2022</b>
        </li>
      </div>

      <div className="grid-item cat1 cat7">
        <li>
          Sourav Kanti Addya, Anurag Satpathy, Bishakh Ghosh, Sandip Chakraborty, Soumya K Ghosh, Sajal Das:{' '}
          <em>{"CoMCLOUD: Virtual Machine Coalition for Multi-Tier Applications over Multi-Cloud Environments"}</em>,{' '}
          <b>IEEE Transactions on Cloud Computing,</b> Accepted: October 09, 2021
        </li>
      </div>

      <div className="grid-item cat3 cat6">
        <li>
          Example 22: <em>{"Quantifying Students' Involvement during Virtual classNamerooms: A Meeting Wrapper for the Teachers"}</em>,{' '}
          <b>India-HCI 2021</b>
        </li>
      </div>

      <div className="grid-item cat2 cat6 cat8">
        <li>
          Praveen Kumar Sharma, Prasenjit Karmakar, Soumyajit Chatterjee, Abhijit Roy, Santanu Mandal, Subrata Nandi, Sandip Chakraborty, Sujoy Saha:{' '}
          <em>{"Can I Go for a Roof Walk Today? Know Your Housing's Air Quality from a Thermo-Hygrometer"}</em>,{' '}
          <b>ACM BuildSys 2021</b>
        </li>
      </div>

      <div className="grid-item cat2 cat6">
        <li>
          Pragma Kar, Krishna Misra, Sudipro Ghosh, Sandip Chakraborty, Samiran Chattopadhyay:{' '}
          <em>{"Nosype: A Novel Nose-tip Tracking-based Text Entry System for Smartphone Users with Clinical Disabilities for Touch-based Typing"}</em>,{' '}
          <b>ACM MobileHCI 2021</b>
        </li>
      </div>

      <div className="grid-item cat4 cat5 cat7">
        <li>
          Somanath Tripathy, Mayank Agarwal, Sandip Chakraborty:{' '}
          <em>{"Beyond Uber and Lyft: A Decentralized Cab Consortium over Blockchains"}</em>,{' '}
          <b>ACM BSCI 2021 (ACM AsiaCCS 2021 Workshop)</b>
        </li>
      </div>

      <div className="grid-item cat2 cat7">
        <li>
          Bishakh Chandra Ghosh, Venkataraman Ramakrishna, Chander Govindarajan, Dushyant Behl, Dileban Karunamoorthy, Ermyas Abebe, Sandip Chakraborty:
          <em>{"Decentralized Cross-Network Identity Management for Blockchain Interoperation"}</em>,{' '}
          <b>IEEE ICBC 2021</b>
        </li>
      </div>

      <div className="grid-item cat3 cat5">
        <li>
          Example 23{' '}
          <em>{"An ns3-based Energy Module of 5G NR User Equipments for Millimeter wave Networks"}</em>,{' '}
          <b>IEEE INFOCOM 2021 Posters</b>
        </li>
      </div>
      <div className="grid-item cat2 cat5">
        <li>
          Lovish Chopra, Sarthak Chakraborty, Abhijit Mondal, Sandip Chakraborty:
          <em>{"PARIMA: Viewport Adaptive 360-Degree Video Streaming"}</em>,{' '}
          <b>The Web Conference (Erstwhile WWW) 2021</b>
        </li>
      </div>

      <div className="grid-item cat3 cat8">
        <li>
          Soumyajit Chatterjee, Bivas Mitra, Sandip Chakraborty:
          <em>{"Non-intrusive Continuous User Identification from Activity Acoustic Signatures"}</em>,{' '}
          <b>IEEE PerCom 2021 Work in Progress (WiP)</b>
        </li>
      </div>

      <div className="grid-item cat3 cat6">
        <li>
          Pragma Kar, Krishna Misra, Sudipro Ghosh, Sandip Chakraborty, Samiran Chattopadhyay:
          <em>{"Exploratory analysis of nose-gesture for smartphone-aided typing for users with clinical conditions"}</em>,{' '}
          <b>IEEE PerCom 2021 Work in Progress (WiP)</b>
        </li>
      </div>

      <div className="grid-item cat2 cat7">
        <li>
          Bishakh Chandra Ghosh, Tanay Bhartia, Sourav Kanti Addya, Sandip Chakraborty:
          <em>{"Leveraging Public-Private Blockchain Interoperability for Closed Consortium Interfacing"}</em>,{' '}
          <b>IEEE INFOCOM 2021</b>
        </li>
      </div>

      <div className="grid-item cat2 cat6 cat8">
        <li>
          Munshi Yusuf Alam, Harshit Anurag, Md. Shahrukh Imam, Sujoy Saha, Mousumi Saha, Subrata Nandi, Sandip Chakraborty:
          <em>{"Urban Safety as a Service During Bike Navigation: My Smartphone Can Monitor My Street-Lights"}</em>,{' '}
          <b>IEEE SmartComp 2020</b>
        </li>
      </div>

      <div className="grid-item cat3 cat8">
        <li>
          Ratna Mandal, Prasenjit Karmakar, Abhijit Roy, Arpan Saha, Soumyajit Chatterjee, Sujoy Saha, Sandip Chakraborty, Subrata Nandi:
          <em>{"BusPOI: Context-Aware Stay Location Characterization from Intra-city Bus Mobility Data and Smartphone Crowdsensing"}</em>,{' '}
          <b>ACM SIGSPATIAL 2020 Posters</b>
        </li>
      </div>

      <div className="grid-item cat2 cat6 cat8">
        <li>
          Soumyajit Chatterjee, Avijoy Chakma, Aryya Gangopadhyay, Nirmalya Roy, Bivas Mitra, Sandip Chakraborty:
          <em>{"LASO: Exploiting Locomotive and Acoustic Signatures over the Edge to Annotate IMU Data for Human Activity Recognition"}</em>,{' '}
          <b>ACM ICMI 2020</b>
        </li>
      </div>

      <div className="grid-item cat3 cat6 cat8">
        <li>
          Example 24{' '}
          <em>{"Note-on-Watch: Live Scribing from Board-works to className-notes"}</em>,{' '}
          <b>ACM MobileHCI LBR 2020</b>
        </li>
      </div>                                <div className="grid-item cat3 cat5 cat6">
                                                                                                                                                                                                                <li>
                                                                                                                                                                                                                  Example 26{' '}
                                                                                                                                                                                                                  <em>{"Disaster Strikes! Internet Blackout! What’s the Fate of Crisis Mapping?"}</em>,{' '}
                                                                                                                                                                                                                  <b>ACM MobileHCI 2020</b>
                                                                                                                                                                                                                </li><br />
                                                                                                                                                                                                              </div>
                                                                                                                                                                                                              <div className="grid-item cat2 cat6">
      <li>
        Example 26{' '}
        <em>{"Disaster Strikes! Internet Blackout! What’s the Fate of Crisis Mapping?"}</em>,{' '}
        <b>ACM MobileHCI 2020</b>
      </li>
    </div>
                                                                                                                                                                                                                  <div className="grid-item cat3 cat7">
                                                                                                                                                                                                                    <li>
                                                                                                                                                                                                                      Example 27{' '}
                                                                                                                                                                                                                      <em>{"System Call Interception for Serverless Isolation"}</em>,{' '}
                                                                                                                                                                                                                      <b>ACM SIGCOMM 2020 Posters</b>
                                                                                                                                                                                                                    </li></div>
                                                                                                                                                                                                                  <div className="grid-item cat1 cat5 cat7">
                                                                                                                                                                                                                    <li>Subhrendu Chattopadhyay, Soumyajit Chatterjee, Sukumar Nandi, Sandip Chakraborty: <em>{"Aloe: Fault-Tolerant Network Management and Orchestration Framework for IoT Applications"}</em>, <b>IEEE Transactions on Network and Service Management</b>,
                                                                                                                                                                                                                      17(4): 2396-2409 (2020)</li><br />
                                                                                                                                                                                                                  </div>
                                                                                                                                                                                                                  <div className="grid-item cat1 cat2 cat6">
                                                                                                                                                                                                                    <li>Pragma Kar, Samiran Chattopadhyay, Sandip Chakraborty: <em>Gestatten: Estimation of User s Attention in Mobile MOOCs From Eye Gaze and Gaze Gesture Tracking</em>, <b>Proc. ACM Hum. Comput. Interact. 4 (EICS)</b>:
                                                                                                                                                                                                                      72:1-72:32 (2020)</li><br />
                                                                                                                                                                                                                  </div>
                                                                                                                                                                                                                  <div className="grid-item cat1 cat8">
                                                                                                                                                                                                                    <li>Munshi Yusuf Alam, Akash Nandi, Abhay Kumar, Sujoy Saha, Mousumi Saha, Subrata Nandi, Sandip Chakraborty: <em>Crowdsourcing from the True crowd: Device, vehicle, road-surface and driving independent road profiling from smartphone sensors.</em>,
                                                                                                                                                                                                                      <b>Pervasive and Mobile Computing, Elsevier</b> 61: 101103 (2020)</li><br />
                                                                                                                                                                                                                  </div>
                                                                                                                                                                                                                  <div className="grid-item cat3 cat5 cat8">
                                                                                                                                                                                                                    <li>Utkalika Satapathy, Soumyajit Chatterjee, Sandip Chakraborty: <em>SilentInformer: A Framework for Information Dispersion Using Inaudible Acoustic Signals.</em>, <b>COMSNETS 2020</b>: 543-546</li><br />
                                                                                                                                                                                                                  </div>
                                                                                                                                                                                                                  <div className="grid-item cat3 cat7">
                                                                                                                                                                                                                    <li>Example 28 <em>Caching Techniques to Improve Latency in Serverless Architectures.</em>,
                                                                                                                                                                                                                      <b>COMSNETS 2020</b>: 666-669</li><br />
                                                                                                                                                                                                                  </div>
                                                                                                                                                                                                                {/* <div className="grid-item cat2 cat8">
                                                                                                                                                                                                                  <li>        Soumyajit Chatterjee, Adrija Bhowmik, Arun Singh, Surjya Ghosh, Bivas Mitra, Sandip Chakraborty: <em>{"Detecting Mobility Context over Smartphones using Typing and Smartphone Engagement Patterns."}<em>, <b>IEEE PerCom 2020</b>: 1-8</li>
                                                                                                                                                                                                                  </div> */}
                                                                                                                                                                                                                      <div className="grid-item cat1 cat6">
                                                                                                                                                                                                                        <li>Partha Sarathi Paul, Bishakh Chandra Ghosh, Hridoy Sankar Dutta, Kingshuk De, Arka Prava Basu, Prithviraj Pramanik, Sujoy Saha, Sandip Chakraborty, Niloy Ganguly, Subrata Nandi: <em>{"CRIMP: Here crisis mapping goes offline."}</em>,
                                                                                                                                                                                                                          <b>Elsevier Journal of Network and Computer Applications</b>, 146 (2019)</li><br />
                                                                                                                                                                                                                      </div>
                                                                                                                                                                                                                      <div className="grid-item cat1 cat8">
                                                                                                                                                                                                                        <li>Example 28 <em>GroupSense: A Lightweight Framework for Group Identification.</em>, <b>IEEE Transactions on Mobile Computing</b>, 18(12):
                                                                                                                                                                                                                          2856-2870 (2019)</li><br />
                                                                                                                                                                                                                      </div>
                                                                                                                                                                                                                    </ol>
                                                                                                                                                                                                                  </div>
                                                                                                                                                                                                              </div>
                                                                                                                                                                                                          </div>
                                                                                                                                                                                                      </div>
                                                                                                                                                                                                      <div className="row">
                                                                                                                                                                                                        <div className="col-sm-12">
                                                                                                                                                                                                          <div className="load-more-btn text-center">
                                                                                                                                                                                                            <a href="https://dblp.org/pid/28/9571.html" className="primary-btn" target="_blank" rel="noreferrer">See all Publications</a>
                                                                                                                                                                                                          </div>
                                                                                                                                                                                                        </div>
                                                                                                                                                                                                      </div>
                                                                                                                                                                                                  </div>
                                                                                                                                                                                              </div>
                                                                                                                                                                                          </div>
                                                                                                                                                                                      </div>
                                                                                                                                                                                  </div>
                                                                                                                                                                                </section>

                                                                                                                                                                                {/* <!-- -------- END PRE-FOOTER 1 w/ SUBSCRIBE BUTTON AND IMAGE ------- --> */}
                                                                                                                                                                              </div>
                                                                                                                                                                              <footer className="footer pt-5 mt-5">
                                                                                                                                                                                <div className="container">
                                                                                                                                                                                  <div className=" row">
                                                                                                                                                                                    <div className="col-md-3 mb-4 ms-auto">
                                                                                                                                                                                      <div>
                                                                                                                                                                                        <a href="https://www.creative-tim.com/product/material-kit">
                                                                                                                                                                                          <img src="../assets/img/logo-ct-dark.png" className="mb-3 footer-logo" alt="main_logo" />
                                                                                                                                                                                        </a>
                                                                                                                                                                                        <h6 className="font-weight-bolder mb-4">Material Kit2</h6>
                                                                                                                                                                                      </div>
                                                                                                                                                                                      <div>
                                                                                                                                                                                        <ul className="d-flex flex-row ms-n3 nav">
                                                                                                                                                                                          <li className="nav-item">
                                                                                                                                                                                            <a className="nav-link pe-1" href="https://www.facebook.com/CreativeTim" target="_blank" rel="noreferrer">
                                                                                                                                                                                              <i className="fab fa-facebook text-lg opacity-8"></i>
                                                                                                                                                                                            </a>
                                                                                                                                                                                          </li>
                                                                                                                                                                                          <li className="nav-item">
                                                                                                                                                                                            <a className="nav-link pe-1" href="https://twitter.com/creativetim" target="_blank" rel="noreferrer">
                                                                                                                                                                                              <i className="fab fa-twitter text-lg opacity-8"></i>
                                                                                                                                                                                            </a>
                                                                                                                                                                                          </li>
                                                                                                                                                                                          <li className="nav-item">
                                                                                                                                                                                            <a className="nav-link pe-1" href="https://dribbble.com/creativetim" target="_blank" rel="noreferrer">
                                                                                                                                                                                              <i className="fab fa-dribbble text-lg opacity-8"></i>
                                                                                                                                                                                            </a>
                                                                                                                                                                                          </li>
                                                                                                                                                                                          <li className="nav-item">
                                                                                                                                                                                            <a className="nav-link pe-1" href="https://github.com/creativetimofficial" target="_blank" rel="noreferrer">
                                                                                                                                                                                              <i className="fab fa-github text-lg opacity-8"></i>
                                                                                                                                                                                            </a>
                                                                                                                                                                                          </li>
                                                                                                                                                                                          <li className="nav-item">
                                                                                                                                                                                            <a className="nav-link pe-1" href="https://www.youtube.com/channel/UCVyTG4sCw-rOvB9oHkzZD1w" target="_blank" rel="noreferrer">
                                                                                                                                                                                              <i className="fab fa-youtube text-lg opacity-8"></i>
                                                                                                                                                                                            </a>
                                                                                                                                                                                          </li>
                                                                                                                                                                                        </ul>
                                                                                                                                                                                      </div>
                                                                                                                                                                                    </div>
                                                                                                                                                                                    <div className="col-md-2 col-sm-6 col-6 mb-4">
                                                                                                                                                                                      <div>
                                                                                                                                                                                        <h6 className="text-sm">Company</h6>
                                                                                                                                                                                        <ul className="flex-column ms-n3 nav">
                                                                                                                                                                                          <li className="nav-item">
                                                                                                                                                                                            <a className="nav-link" href="https://www.creative-tim.com/presentation" target="_blank" rel="noreferrer">
                                                                                                                                                                                              About Us
                                                                                                                                                                                            </a>
                                                                                                                                                                                          </li>
                                                                                                                                                                                          <li className="nav-item">
                                                                                                                                                                                            <a className="nav-link" href="https://www.creative-tim.com/templates/free" target="_blank" rel="noreferrer">
                                                                                                                                                                                              Freebies
                                                                                                                                                                                            </a>
                                                                                                                                                                                          </li>
                                                                                                                                                                                          <li className="nav-item">
                                                                                                                                                                                            <a className="nav-link" href="https://www.creative-tim.com/templates/premium" target="_blank" rel="noreferrer">
                                                                                                                                                                                              Premium Tools
                                                                                                                                                                                            </a>
                                                                                                                                                                                          </li>
                                                                                                                                                                                          <li className="nav-item">
                                                                                                                                                                                            <a className="nav-link" href="https://www.creative-tim.com/blog" target="_blank" rel="noreferrer">
                                                                                                                                                                                              Blog
                                                                                                                                                                                            </a>
                                                                                                                                                                                          </li>
                                                                                                                                                                                        </ul>
                                                                                                                                                                                      </div>
                                                                                                                                                                                    </div>
                                                                                                                                                                                    <div className="col-md-2 col-sm-6 col-6 mb-4">
                                                                                                                                                                                      <div>
                                                                                                                                                                                        <h6 className="text-sm">Resources</h6>
                                                                                                                                                                                        <ul className="flex-column ms-n3 nav">
                                                                                                                                                                                          <li className="nav-item">
                                                                                                                                                                                            <a className="nav-link" href="https://iradesign.io/" target="_blank" rel="noreferrer">
                                                                                                                                                                                              Illustrations
                                                                                                                                                                                            </a>
                                                                                                                                                                                          </li>
                                                                                                                                                                                          <li className="nav-item">
                                                                                                                                                                                            <a className="nav-link" href="https://www.creative-tim.com/bits" target="_blank" rel="noreferrer">
                                                                                                                                                                                              Bits & Snippets
                                                                                                                                                                                            </a>
                                                                                                                                                                                          </li>
                                                                                                                                                                                          <li className="nav-item">
                                                                                                                                                                                            <a className="nav-link" href="https://www.creative-tim.com/affiliates/new" target="_blank" rel="noreferrer">
                                                                                                                                                                                              Affiliate Program
                                                                                                                                                                                            </a>
                                                                                                                                                                                          </li>
                                                                                                                                                                                        </ul>
                                                                                                                                                                                      </div>
                                                                                                                                                                                    </div>
                                                                                                                                                                                    <div className="col-md-2 col-sm-6 col-6 mb-4">
                                                                                                                                                                                      <div>
                                                                                                                                                                                        <h6 className="text-sm">Help & Support</h6>
                                                                                                                                                                                        <ul className="flex-column ms-n3 nav">
                                                                                                                                                                                          <li className="nav-item">
                                                                                                                                                                                            <a className="nav-link" href="https://www.creative-tim.com/contact-us" target="_blank" rel="noreferrer">
                                                                                                                                                                                              Contact Us
                                                                                                                                                                                            </a>
                                                                                                                                                                                          </li>
                                                                                                                                                                                          <li className="nav-item">
                                                                                                                                                                                            <a className="nav-link" href="https://www.creative-tim.com/knowledge-center" target="_blank" rel="noreferrer">
                                                                                                                                                                                              Knowledge Center
                                                                                                                                                                                            </a>
                                                                                                                                                                                          </li>
                                                                                                                                                                                          <li className="nav-item">
                                                                                                                                                                                            <a className="nav-link" href="https://services.creative-tim.com/?ref=ct-mk2-footer" target="_blank" rel="noreferrer">
                                                                                                                                                                                              Custom Development
                                                                                                                                                                                            </a>
                                                                                                                                                                                          </li>
                                                                                                                                                                                          <li className="nav-item">
                                                                                                                                                                                            <a className="nav-link" href="https://www.creative-tim.com/sponsorships" target="_blank" rel="noreferrer">
                                                                                                                                                                                              Sponsorships
                                                                                                                                                                                            </a>
                                                                                                                                                                                          </li>
                                                                                                                                                                                        </ul>
                                                                                                                                                                                      </div>
                                                                                                                                                                                    </div>
                                                                                                                                                                                    <div className="col-md-2 col-sm-6 col-6 mb-4 me-auto">
                                                                                                                                                                                      <div>
                                                                                                                                                                                        <h6 className="text-sm">Legal</h6>
                                                                                                                                                                                        <ul className="flex-column ms-n3 nav">
                                                                                                                                                                                          <li className="nav-item">
                                                                                                                                                                                            <a className="nav-link" href="https://www.creative-tim.com/knowledge-center/terms-of-service" target="_blank" rel="noreferrer">
                                                                                                                                                                                              Terms & Conditions
                                                                                                                                                                                            </a>
                                                                                                                                                                                          </li>
                                                                                                                                                                                          <li className="nav-item">
                                                                                                                                                                                            <a className="nav-link" href="https://www.creative-tim.com/knowledge-center/privacy-policy" target="_blank" rel="noreferrer">
                                                                                                                                                                                              Privacy Policy
                                                                                                                                                                                            </a>
                                                                                                                                                                                          </li>
                                                                                                                                                                                          <li className="nav-item">
                                                                                                                                                                                            <a className="nav-link" href="https://www.creative-tim.com/license" target="_blank" rel="noreferrer">

                                                                                                                                                                                              Licenses (EULA)
                                                                                                                                                                                            </a>
                                                                                                                                                                                          </li>
                                                                                                                                                                                        </ul>
                                                                                                                                                                                      </div>
                                                                                                                                                                                    </div>
                                                                                                                                                                                    <div className="col-12">
                                                                                                                                                                                      <div className="text-center">
                                                                                                                                                                                        <p className="text-dark my-4 text-sm font-weight-normal">
                                                                                                                                                                                          All rights reserved. Copyright ©
                                                                                                                                                                                          <script>
                                                                                                                                                                                            document.write(new Date().getFullYear())
                                                                                                                                                                                          </script> by UbiNet@CSE,IITKGP.
                                                                                                                                                                                        </p>
                                                                                                                                                                                      </div>
                                                                                                                                                                                    </div>
                                                                                                                                                                                  </div>
                                                                                                                                                                                </div>
                                                                                                                                                                              </footer>
                                                                                                                                                                              {/* <!--   Core JS Files   -->
                                                                          
    <script src="../assets/js/core/popper.min.js" type="text/javascript"></script>
    <script src="../assets/js/core/bootstrap.min.js" type="text/javascript"></script>
    <script src="../assets/js/plugins/perfect-scrollbar.min.js"></script>
    <!--  Plugin for TypedJS, full documentation here: https://github.com/inorganik/CountUp.js -->
    <script src="../assets/js/plugins/countup.min.js"></script>
    <!--  Plugin for Parallax, full documentation here: https://github.com/wagerfield/parallax  -->
    <script src="../assets/js/plugins/parallax.min.js"></script>
    <!-- Control Center for Material UI Kit: parallax effects, scripts for the example pages etc -->
    <!--  Google Maps Plugin    -->
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDTTfWur0PDbZWPr7Pmq8K3jiDp0_xUziI"></script>
    <script src="../assets/js/material-kit.min.js?v=3.0.2" type="text/javascript"></script>


    <script src="../assets/js/plugins/jquery-3.6.0.min.js"></script>
    <script src="../assets/js/plugins/isotope.pkgd.min.js"></script>

    <script>
        // get the element to animate
        var element = document.getElementById('count-stats');
        var elementHeight = element.clientHeight;

        // listen for scroll event and call animate function

        document.addEventListener('scroll', animate);

        // check if element is in view
        function inView() {
            // get window height
            var windowHeight = window.innerHeight;
            // get number of pixels that the document is scrolled
            var scrollY = window.scrollY || window.pageYOffset;
            // get current scroll position (distance from the top of the page to the bottom of the current viewport)
            var scrollPosition = scrollY + windowHeight;
            // get element position (distance from the top of the page to the bottom of the element)
            var elementPosition = element.getBoundingClientRect().top + scrollY + elementHeight;

            // is scroll position greater than element position? (is element in view?)
            if (scrollPosition > elementPosition) {
                return true;
            }

            return false;
        }

        var animateComplete = true;
        // animate element when it is in view
        function animate() {

            // is element in view?
            if (inView()) {
                if (animateComplete) {
                    if (document.getElementById('state1')) {
                        const countUp = new CountUp('state1', document.getElementById("state1").getAttribute("countTo"));
                        if (!countUp.error) {
                            countUp.start();
                        } else {
                            console.error(countUp.error);
                        }
                    }
                    if (document.getElementById('state2')) {
                        const countUp1 = new CountUp('state2', document.getElementById("state2").getAttribute("countTo"));
                        if (!countUp1.error) {
                            countUp1.start();
                        } else {
                            console.error(countUp1.error);
                        }
                    }
                    if (document.getElementById('state3')) {
                        const countUp2 = new CountUp('state3', document.getElementById("state3").getAttribute("countTo"));
                        if (!countUp2.error) {
                            countUp2.start();
                        } else {
                            console.error(countUp2.error);
                        };
                    }
                    animateComplete = false;
                }
            }
        }

        if (document.getElementById('typed')) {
            var typed = new Typed("#typed", {
                stringsElement: '#typed-strings',
                typeSpeed: 90,
                backSpeed: 90,
                backDelay: 200,
                startDelay: 500,
                loop: true
            });
        }
    </script>
    <script>
        if (document.getElementsByclassNameName('page-header')) {
            window.onscroll = debounce(function() {
                var scrollPosition = window.pageYOffset;
                var bgParallax = document.querySelector('.page-header');
                var oVal = (window.scrollY / 3);
                bgParallax.style.transform = 'translate3d(0,' + oVal + 'px,0)';
            }, 6);
        }
    </script>
    <script>
        var $grid = $('.grid').isotope({
            // set itemSelector so .grid-sizer is not used in layout
            itemSelector: '.grid-item',
            percentPosition: true,
            animationOptions: {
                duration: 500,
                easing: 'zoom-in'
            },
            masonry: {
                // use element for option
                columnWidth: '.grid-item'
            },
            transitionDuration: '.9s'
        })

        $('.filtering-button').on('click', 'a', function() {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({
                filter: filterValue
            });
        });
        $('.filtering-button').on('click', 'a', function() {
            $('.filtering-button a').removeclassName('btn-primary');
            $('.filtering-button a').addclassName('btn-secondary');
            $(this).addclassName('btn-primary');
            $(this).removeclassName('btn-secondary');
        });
    </script> */}
                                                                                                                                                                          </div>
                                                                                                                                                                      </div>

                                                                                                                                                                      );
}

export default Solve;
