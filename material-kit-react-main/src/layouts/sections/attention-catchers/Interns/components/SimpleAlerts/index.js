/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
// import MKAlert from "components/MKAlert";
import MKTypography from "components/MKTypography";

const styles = {
  background: `url("https://iitj.ac.in/techscape/vol04/issue01/sliderimg/19_2807223.jpg")`,
  backgroundSize: 'cover',
  color: 'white',
  filter: 'brightness(0.7)',
  textAlign: 'justify', // Add this line to justify align the text
};


// colr are light dark secondary
function SimpleAlerts09() {
  return (
    <MKBox component="section" py={6} sx={styles}>

      <Container>
        <Grid container item xs={12} lg={10} mx="auto">
          <div><MKTypography variant="h4" fontWeight="bold" mb={1} pr={43}>
            Lab Students
          </MKTypography></div>
          <div><MKTypography variant="body2" fontWeight="regular" color="secondary" mb={1} pr={50}>
            <ul>
              <li style={{ fontSize: "18px" }}>Priyal Jain</li>
              <li style={{ fontSize: "18px" }}>Nayanita Saha</li>
            </ul></MKTypography></div>

          <div><MKTypography variant="h4" fontWeight="bold" mb={1} pr={43}>
            Undergraduate
          </MKTypography></div>
          <div> <MKTypography variant="h5" fontWeight="bold" mb={1}>
            Prakriti app development

          </MKTypography>
            <div><MKTypography variant="body2" fontWeight="regular" color="secondary" mb={1} pr={30}>
              <ul>
                <li style={{ fontSize: "18px" }}>Abhishek Raghav</li>
                <li style={{ fontSize: "18px" }}>Abhinav Kashyap</li>
                <li style={{ fontSize: "18px" }}>Hriday Kondru</li>
                <li style={{ fontSize: "18px" }}>Akriti Gupta</li>
                <li style={{ fontSize: "18px" }}>Khushi Parikh</li>
                <li style={{ fontSize: "18px" }}>Mohammad Zaid Shamshad</li>
              </ul>
            </MKTypography></div></div>
          <MKTypography variant="h5" fontWeight="bold" mb={1} pr={50}>
            Web development for sensing as service middleware

          </MKTypography>
          <MKTypography variant="body2" fontWeight="regular" color="secondary" mb={1} pr={2}>
            <ul>
              <li style={{ fontSize: "18px" }}>Naman Goyal</li>
              <li style={{ fontSize: "18px" }}>Aakash Maheshwari</li>
              <li style={{ fontSize: "18px" }}>Vansh Agarwal</li>
            </ul>
          </MKTypography>
          <MKTypography variant="h5" fontWeight="bold" mb={1} pr={40}>
            IoT device development: bat tracker/wearable/OBU for two-wheeler

          </MKTypography>
          <MKTypography variant="body2" fontWeight="regular" color="secondary" mb={1} pr={2}>
            <ul>
              <li style={{ fontSize: "18px" }}>Rachit Agnihotri</li>
              <li style={{ fontSize: "18px" }}>Sneha Gupta</li>
              <li style={{ fontSize: "18px" }}>Uppala Giridhar</li>
            </ul>
          </MKTypography>
          <MKTypography variant="h5" fontWeight="bold" mb={1} pr={80}>
            Multimodal data analysis for HAR

          </MKTypography>
          <MKTypography variant="body2" fontWeight="regular" color="secondary" mb={1} pr={2}>
            <ul>
              <li style={{ fontSize: "18px" }}>Shubh Goyal</li>
              <li style={{ fontSize: "18px" }}>Sukriti Goyal</li>
              <li style={{ fontSize: "18px" }}>Ashish Cherukuri</li>
              <li style={{ fontSize: "18px" }}>Kartik Choudhary</li>
            </ul>
          </MKTypography>
          <MKTypography variant="h5" fontWeight="bold" mb={1} pr={100}>
            Wargaming UX/UI

          </MKTypography>
          <MKTypography variant="body2" fontWeight="regular" color="secondary" mb={1} pr={2}>
            <ul>
              <li style={{ fontSize: "18px" }}>Rankireddy Sai Mani Akarsh</li>
              <li style={{ fontSize: "18px" }}>Shivam Kumar</li>
            </ul>
          </MKTypography>





          <MKTypography variant="h4" fontWeight="bold" mb={1} pr={100}>
            <div style={{ textAlign: "left" }}>Interns 2023</div>
          </MKTypography>

          <MKTypography variant="body2" fontWeight="regular" color="secondary" mb={1} pr={30}>
            <ul>
              <li style={{ fontSize: "18px" }}><a href="https://www.linkedin.com/in/martin-kaushal-7689761bb/?originalSubdomain=in" style={{ color: "blue" }}>Martin Kaushal </a>(Thapar Institute) - Android Development</li>
              <li style={{ fontSize: "18px" }}><a href="https://www.linkedin.com/in/arihant-tanwar-778520191/?originalSubdomain=in" style={{ color: "blue" }}>Arihant Tanwar</a> (Thapar Institute) - Trajectory Prediction</li>
              <li style={{ fontSize: "18px" }}><a href="https://www.linkedin.com/in/pratham-garg-781206249/?originalSubdomain=in" style={{ color: "blue" }}>Pratham Garg </a> (Thapar Institute) - Object Recognition</li>
              <li style={{ fontSize: "18px" }}><a href="https://www.linkedin.com/in/sheral-singla-b97103232/?originalSubdomain=in" style={{ color: "blue" }}>Sheral Singla </a>(Thapar Institute) - HAR</li>
              <li style={{ fontSize: "18px" }}><a href="https://www.linkedin.com/in/raghav-garg-b3a0361bb/?originalSubdomain=in" style={{ color: "blue" }}>Raghav Garg</a> (Thapar Institute) - Communication Protocol</li>
              <li style={{ fontSize: "18px" }}>Ravindra (IIIT Vadodara) - Android Development</li>
              <li style={{ fontSize: "18px" }}>Tanmay Bajaj (IIT Roorkee) - Sensing as a Service</li>
              <li style={{ fontSize: "18px" }}>Swarup Kumar Mondal (Heritage Institute of Technology) - HAR</li>
              <li style={{ fontSize: "18px" }}>Azhar Khan (IIT Jodhpur) - Embedded Systems</li>
              <li style={{ fontSize: "18px" }}><a href="https://www.linkedin.com/in/raghav-garg-b3a0361bb/?originalSubdomain=in" style={{ color: "blue" }}>Kartik Chhipa</a> (IIT Jodhpur) - Sensing as a Service</li>
              <li style={{ fontSize: "18px" }}>Ankur Kumar Shukla (IIIT Vadodara) - HAR</li>
              <li style={{ fontSize: "18px" }}>Jaysukh (IIT Jodhpur) - Android Development</li>
              <li style={{ fontSize: "18px" }}>Naman Labhsetwar (Pune Institute of Computer Technology) - Wifi Sensing and ML</li>
              <li style={{ fontSize: "18px" }}>Aditya Deshpande (Pune Institute of Computer Technology) - Wifi Sensing and ML</li>
            </ul>
          </MKTypography>
          <MKTypography variant="h4" fontWeight="bold" mb={1}>
            Interns 2022
          </MKTypography>
          <MKTypography variant="body2" fontWeight="regular" color="secondary" mb={1} pr={30}>

            <ul>
              <li style={{ fontSize: "18px" }}><a href="https://www.linkedin.com/in/avijit-das-50960b207/" style={{ color: "blue" }}>Avijit Das </a> (IIT Madras), Smartphone Sensory Data Management</li>
              <li style={{ fontSize: "18px" }}><a href="https://www.linkedin.com/in/yaman-saraswat-75979b1b9/" style={{ color: "blue", fontSize: "18px" }}>Yaman Saraswat </a> (NIT Agartala), Multi Modal Data Analysis</li>
              <li style={{ fontSize: "18px" }}><a href="https://www.linkedin.com/in/saksham-gautam-22b41b203/" style={{ color: "blue", fontSize: "18px" }}>Saksham Gautam </a>  (IIIT Prayagraj), IMU Based Sensing</li>
              <li style={{ fontSize: "18px" }}><a href="https://www.linkedin.com/in/khushbu-bijawat-27b4a11b3/" style={{ color: "blue", fontSize: "18px" }}>Khushbu Bijawat</a> (MBM, Jodhpur), Smartwatch Sensory Data Management</li>
              <li style={{ fontSize: "18px" }}><a href="https://www.linkedin.com/in/anushkaagarwal24/" style={{ color: "blue", fontSize: "18px" }}>Anushka Agarwal</a> (RV College Of Engineering), Smartwatch Sensory Data Management</li>

              {/* <a href="/sections/attention-catchers/SA" src="www.google.com" style={{ fontSize: '18px', textAlign: 'right' }}> See All Details </a> */}

            </ul>
          </MKTypography>
        </Grid>
      </Container>

    </MKBox>
  );
}

export default SimpleAlerts09;
