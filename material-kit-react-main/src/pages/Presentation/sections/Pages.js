import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
// import MKBadge from "components/MKBadge";
import MKTypography from "components/MKTypography";
import DesignBlocks1 from "./DB";
import DesignBlocksp from "./DBpro";
import DesignBlocks12 from "./DB2";
// import DesignBlocksData from "./data/designBlocksData";
// import DesignBlocks from "./DesignBlocks";
import { Divider } from "@mui/material";
import DefaultReviewCard from "examples/Cards/ReviewCards/DefaultReviewCard";
function PresentationPages() {
  return (
    <div>
    <div style={{ backgroundColor: '#F8F8F8' ,marginTop:"10vh" }}>
    <MKBox component="section" py={10} style={{ backgroundColor: '#F8F8F8' ,marginBottom :"50px"}}>
      <Container >
        <Grid
          container
          item
          xs={12}
          lg={13}
          justifyContent="left"
          sx={{ mx: "auto", textAlign: "left" }}
        >
       
          <MKTypography variant="h2" >Lab Alumni</MKTypography>
          {/* <MKTypography variant="h2" color="info" textGradient mb={2}>
            1,679,477+ web developers
          </MKTypography> */}
          {/* <MKTypography variant="body1" color="text" mb={2}>
            Many Fortune 500 companies, startups, universities and governmental institutions love
            Creative Tim&apos;s products.
          </MKTypography> */}
        </Grid>
        
        <Grid container spacing={3} sx={{ mt: -1 }}>
          <Grid item xs={12} md={6} lg={4}>
          
            <DefaultReviewCard
              name="Lab Students"
             
              review=<div><MKTypography variant="body2" fontWeight="regular" color="secondary" mb={1} pr={2}><ul>
                <li style={{  fontSize: "18px" }}>Priyal Jain</li>
                <li style={{  fontSize: "18px" }}>Nayanita Saha</li>
               
              </ul></MKTypography></div>
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <DefaultReviewCard
            
              name=<div>Undergraduate</div>
              date="1 week ago"
              review=<div><MKTypography variant="body2" fontWeight="regular" color="secondary" mb={1} pr={1}>
              <MKTypography variant="h5" fontWeight="bold" mb={1}>
            Prakriti app development
           
            </MKTypography>
            <MKTypography variant="body2" fontWeight="regular" color="secondary" mb={1} pr={2}>
            <ul>
              <li style={{  fontSize: "18px" }}>Abhishek Raghav</li>
              <li style={{  fontSize: "18px" }}>Abhinav Kashyap</li>
<li style={{  fontSize: "18px" }}>Hriday Kondru</li>
<li style={{  fontSize: "18px" }}>Akriti Gupta</li>
<li style={{  fontSize: "18px" }}>Khushi Parikh</li>
<li style={{  fontSize: "18px" }}>Mohammad Zaid Shamshad</li>
            </ul>
            </MKTypography>
            <MKTypography variant="h5" fontWeight="bold" mb={1}>
            Web development for sensing as service middleware
           
            </MKTypography>
            <MKTypography variant="body2" fontWeight="regular" color="secondary" mb={1} pr={2}>
            <ul>
              <li style={{  fontSize: "18px" }}>Naman Goyal</li>
              <li style={{  fontSize: "18px" }}>Aakash Maheshwari</li>
<li style={{  fontSize: "18px" }}>Vansh Agarwal</li>
            </ul>
            </MKTypography>
            <MKTypography variant="h5" fontWeight="bold" mb={1}>
            IoT device development: bat tracker/wearable/OBU for two-wheeler
           
            </MKTypography>
            <MKTypography variant="body2" fontWeight="regular" color="secondary" mb={1} pr={2}>
            <ul>
              <li style={{  fontSize: "18px" }}>Rachit Agnihotri</li>
              <li style={{  fontSize: "18px" }}>Sneha Gupta</li>
<li style={{  fontSize: "18px" }}>Uppala Giridhar</li>
            </ul>
            </MKTypography>
           </MKTypography></div>
              rating={5}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <DefaultReviewCard
              name=<div>Interns<br />2023</div>
              date="3 weeks ago"
              review=<div>   <MKTypography variant="body2" fontWeight="regular" color="secondary" mb={1} pr={2}><ul>
              <li style={{  fontSize: "18px" }}><a href="https://www.linkedin.com/in/martin-kaushal-7689761bb/?originalSubdomain=in" style={{color :"blue"}}>Martin Kaushal </a>(Thapar Institute) - Android Development</li>
              <li style={{  fontSize: "18px" }}><a href="https://www.linkedin.com/in/arihant-tanwar-778520191/?originalSubdomain=in" style={{color :"blue"}}>Arihant Tanwar</a> (Thapar Institute) - Trajectory Prediction</li>
<li style={{  fontSize: "18px" }}><a href="https://www.linkedin.com/in/pratham-garg-781206249/?originalSubdomain=in" style={{color :"blue"}}>Pratham Garg </a> (Thapar Institute) - Object Recognition</li>
<li style={{  fontSize: "18px" }}><a href="https://www.linkedin.com/in/sheral-singla-b97103232/?originalSubdomain=in" style={{color :"blue"}}>Sheral Singla </a>(Thapar Institute) - HAR</li>
<li style={{  fontSize: "18px" }}><a href="https://www.linkedin.com/in/raghav-garg-b3a0361bb/?originalSubdomain=in" style={{color :"blue"}}>Raghav Garg</a> (Thapar Institute) - Communication Protocol</li>
<li style={{  fontSize: "18px" }}>Ravindra (IIIT Vadodara) - Android Development</li>
<MKTypography variant="h5" fontWeight="bold"  mb={1} pr={2}>2022</MKTypography>
<li style={{  fontSize: "18px" }}><a href="https://www.linkedin.com/in/avijit-das-50960b207/" style={{ color: "blue" }}>Avijit Das </a> (IIT Madras), Smartphone Sensory Data Management</li>
  <li style={{  fontSize: "18px" }}><a href="https://www.linkedin.com/in/yaman-saraswat-75979b1b9/" style={{ color: "blue", fontSize: "18px" }}>Yaman Saraswat </a> (NIT Agartala), Multi Modal Data Analysis</li>
  <li style={{  fontSize: "18px" }}><a href="https://www.linkedin.com/in/saksham-gautam-22b41b203/" style={{ color: "blue", fontSize: "18px" }}>Saksham Gautam </a>  (IIIT Prayagraj), IMU Based Sensing</li>
              </ul> <a href="/sections/attention-catchers/Interns" style={{ fontSize: '18px', float: 'right', color: 'blue' }}>
  See All Details
</a></MKTypography> 
             
 
              
                     
              </div>
              rating={5}
            />
          </Grid>
        </Grid>
        <Divider sx={{ my: 6 }} />
        <Grid container spacing={25} justifyContent="center">
        {/*   <Grid item xs={6} md={4} lg={2}>
            <MKBox component="img" src={appleLogo} alt="Apple" width="100%" opacity={0.6} />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <MKBox component="img" src={facebookLogo} alt="Facebook" width="100%" opacity={0.6} />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <MKBox component="img" src={nasaLogo} alt="Nasa" width="100%" opacity={0.6} />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <MKBox component="img" src={vodafoneLogo} alt="Vodafone" width="100%" opacity={0.6} />
          </Grid> */}
          {/* <Grid item xs={6} md={4} lg={2}>
            <MKBox
              component="img"
              src={digitalOceanLogo}
              alt="DigitalOcean"
              width="100%"
              opacity={0.6}
            />
          </Grid> */}
        </Grid>
      </Container>
    </MKBox>
    <MKBox component="section" py={0.02} style={{ backgroundColor: '#F8F8F8' ,textAlign: 'justify' }}>
  
    
    
    
 
    </MKBox>
    </div>
    <DesignBlocks1></DesignBlocks1>
    <DesignBlocks12></DesignBlocks12>
    <DesignBlocksp></DesignBlocksp>
    
    </div>
  
  );
}
// 2022
// Avijit Das (IIT Madras), Smartphone Sensory Data Management
// Yaman Saraswat (NIT Agartala), Multi Modal Data Analysis
// Saksham Gautam (IIIT Prayagraj), IMU Based Sensing
// Khushbu Bijawat (MBM, Jodhpur), Smartwatch Sensory Data Management
// Anushka Agarwal (RV College Of Engineering), Smartwatch Sensory Data Management

export default PresentationPages;
