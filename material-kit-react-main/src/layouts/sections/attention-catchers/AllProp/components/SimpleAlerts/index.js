import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKAlert from "components/MKAlert";
import MKTypography from "components/MKTypography";

const styles = {
  background: `url("https://iitj.ac.in/techscape/vol04/issue01/sliderimg/19_2807223.jpg")`,
  backgroundSize: 'cover',
  // backgroundAttachment: 'fixed',
  color: 'white', // Text color
 
  filter: 'brightness(0.7)',
};


// colr are light dark secondary
function SimpleAlerts12() {
  return (
    <MKBox component="section" py={6} sx={styles}>
   
      <Container>
        <Grid container item xs={12} lg={10} mx="auto">
          <Grid item xs={12}>
            <MKAlert color="light"><a href="https://chughgarvit.github.io/" style={{ color: 'dodgerblue' }}>Garvit</a> received outstanding TA Award.</MKAlert>
            <MKAlert color="light">[APP] Prakriti App v2.1 to be released soon</MKAlert>
            <MKAlert color="light">3-D printed smart home and ambient sensing lab to come up soon!</MKAlert>
            <MKAlert color="light"><a href="https://chughgarvit.github.io/" style={{ color: 'dodgerblue' }}>Garvit   </a>   received a Grant to attend EarComp 2022 by Nokia Bell Labs.</MKAlert>
            <MKAlert color="light">[Publication] <a href="https://chughgarvit.github.io/" style={{ color: 'dodgerblue' }}>Garvit</a> received a paper acceptance in EarComp 2022.</MKAlert>
            <MKAlert color="light"><a href="https://chughgarvit.github.io/" style={{ color: 'dodgerblue' }}>Garvit</a> secured 2nd position at the<a href="https://iitjsc.acm.org/pages/activities/ideathon.html" style={{ color: 'dodgerblue' }}>iS3: iDeathon on Sustainable Smart Systems</a>  organised by ACM Student Chapter IIT Jodhpur.</MKAlert>
            <MKTypography variant="h5" fontWeight="bold" mb={1}>
            Interns
            </MKTypography>
            <MKTypography variant="h6" fontWeight="bold" mb={1}>
            2023
            </MKTypography>
            <MKTypography variant="body2" fontWeight="regular" color="secondary" mb={1} pr={2}>
            <ul>
              <li style={{  fontSize: "18px" }}><a href="https://www.linkedin.com/in/martin-kaushal-7689761bb/?originalSubdomain=in" style={{color :"blue"}}>Martin Kaushal </a>(Thapar Institute) - Android Development</li>
              <li style={{  fontSize: "18px" }}><a href="https://www.linkedin.com/in/arihant-tanwar-778520191/?originalSubdomain=in" style={{color :"blue"}}>Arihant Tanwar</a> (Thapar Institute) - Trajectory Prediction</li>
<li style={{  fontSize: "18px" }}><a href="https://www.linkedin.com/in/pratham-garg-781206249/?originalSubdomain=in" style={{color :"blue"}}>Pratham Garg </a> (Thapar Institute) - Object Recognition</li>
<li style={{  fontSize: "18px" }}><a href="https://www.linkedin.com/in/sheral-singla-b97103232/?originalSubdomain=in" style={{color :"blue"}}>Sheral Singla </a>(Thapar Institute) - HAR</li>
<li style={{  fontSize: "18px" }}><a href="https://www.linkedin.com/in/raghav-garg-b3a0361bb/?originalSubdomain=in" style={{color :"blue"}}>Raghav Garg</a> (Thapar Institute) - Communication Protocol</li>
<li style={{  fontSize: "18px" }}>Ravindra (IIIT Vadodara) - Android Development</li>
<li style={{  fontSize: "18px" }}>Tanmay Bajaj (IIT Roorkee) - Sensing as a Service</li>
<li style={{  fontSize: "18px" }}>Swarup Kumar Mondal (Heritage Institute of Technology) - HAR</li>
<li style={{  fontSize: "18px" }}>Azhar Khan (IIT Jodhpur) - Embedded Systems</li>
<li style={{  fontSize: "18px" }}><a href="https://www.linkedin.com/in/raghav-garg-b3a0361bb/?originalSubdomain=in" style={{color :"blue"}}>Kartik Chhipa</a> (IIT Jodhpur) - Sensing as a Service</li>
<li style={{  fontSize: "18px" }}>Ankur Kumar Shukla (IIIT Vadodara) - HAR</li>
<li style={{  fontSize: "18px" }}>Jaysukh (IIT Jodhpur) - Android Development</li>
<li style={{  fontSize: "18px" }}>Naman Labhsetwar (Pune Institute of Computer Technology) - Wifi Sensing and ML</li>
<li style={{  fontSize: "18px" }}>Aditya Deshpande (Pune Institute of Computer Technology) - Wifi Sensing and ML</li>
            </ul>
            </MKTypography>
            <MKTypography variant="h6" fontWeight="bold" mb={1}>
            2022
            </MKTypography>
            <MKTypography variant="body2" fontWeight="regular" color="secondary" mb={1} pr={2}>
            <ul>
            <ul>
  <li style={{  fontSize: "18px" }}><a href="https://www.linkedin.com/in/avijit-das-50960b207/" style={{ color: "blue" }}>Avijit Das </a> (IIT Madras), Smartphone Sensory Data Management</li>
  <li style={{  fontSize: "18px" }}><a href="https://www.linkedin.com/in/yaman-saraswat-75979b1b9/" style={{ color: "blue", fontSize: "18px" }}>Yaman Saraswat </a> (NIT Agartala), Multi Modal Data Analysis</li>
  <li style={{  fontSize: "18px" }}><a href="https://www.linkedin.com/in/saksham-gautam-22b41b203/" style={{ color: "blue", fontSize: "18px" }}>Saksham Gautam </a>  (IIIT Prayagraj), IMU Based Sensing</li>
  <li style={{  fontSize: "18px" }}><a href="https://www.linkedin.com/in/khushbu-bijawat-27b4a11b3/" style={{ color: "blue", fontSize: "18px" }}>Khushbu Bijawat</a> (MBM, Jodhpur), Smartwatch Sensory Data Management</li>
  <li style={{  fontSize: "18px" }}><a href="https://www.linkedin.com/in/anushkaagarwal24/" style={{ color: "blue", fontSize: "18px" }}>Anushka Agarwal</a> (RV College Of Engineering), Smartwatch Sensory Data Management</li>
</ul>
<a href="/sections/attention-catchers/SA" src="www.google.com" style={{ fontSize: '18px', textAlign: 'right' }}> See All Details </a>

            </ul>
            </MKTypography>
          </Grid>
        </Grid>
      </Container>
     
    </MKBox>
  );
}

export default SimpleAlerts12;
