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
import MKAlert from "components/MKAlert";


const styles = {
  background: `url("https://iitj.ac.in/techscape/vol04/issue01/sliderimg/19_2807223.jpg")`,
  backgroundSize: 'cover',
  // backgroundAttachment: 'fixed',
  color: 'white', // Text color
 
  filter: 'brightness(0.7)',
};


// colr are light dark secondary
function SimpleAlerts1() {
  return (
    <MKBox component="section" py={6} sx={styles}>
   
      <Container>
        <Grid container item xs={12} lg={10} mx="auto">
          <Grid item xs={12}>
            <MKAlert color="light">[Publication] <a href="https://chughgarvit.github.io/" style={{ color: 'dodgerblue' }}>Garvit</a> received an acceptance for a full paper at{' '}
                      <a href="https://chase23.sigbed.org/Home.html" style={{ color: 'dodgerblue' }}>IEEE/ACM CHASE 2023! </a></MKAlert>
          </Grid>
          <Grid item xs={12}>
            <MKAlert color="light">Ananya was selected and attended the SERB-sponsored high-end workshop on AI and Data Science for Industrial Applications at CSIR-CMERI.</MKAlert>
          </Grid>
          <Grid item xs={12}>
            <MKAlert color="light">Garvit received a Travel Grant from COMSNETS! to attend the 15th International Conference on COMmunication Systems & NETworkS from 3rd to 9th January 2023.</MKAlert>
          </Grid>
          <Grid item xs={12}>
            <MKAlert color="light">[Publication] Garvit presented one Poster and one Demo at <a href="https://www.comsnets.org/" style={{ color: 'dodgerblue' }}>COMSNETS!</a> 

</MKAlert>
          </Grid>
          <Grid item xs={12}>
            <MKAlert color="light">[Publication] <a href="https://chughgarvit.github.io/" style={{ color: 'dodgerblue' }}>Garvit</a> presented one Poster and one Demo at COMSNETS!
</MKAlert>
          </Grid>
          <Grid item xs={12}>
            <MKAlert color="light">The very first version of PoC for bat tracker and smartwatch have been developed.</MKAlert>
          </Grid>
          <Grid item xs={12}>
            <MKAlert color="light">CRG grant from SERB got approved</MKAlert>
          </Grid>
          <Grid item xs={12}>
            <MKAlert color="light"><a href="https://chughgarvit.github.io/" style={{ color: 'dodgerblue' }}>Garvit</a> received outstanding TA Award.</MKAlert>
            <MKAlert color="light">[APP] Prakriti App v2.1 to be released soon</MKAlert>
            <MKAlert color="light">3-D printed smart home and ambient sensing lab to come up soon!</MKAlert>
            <MKAlert color="light"><a href="https://chughgarvit.github.io/" style={{ color: 'dodgerblue' }}>Garvit   </a>   received a Grant to attend EarComp 2022 by Nokia Bell Labs.</MKAlert>
            <MKAlert color="light">[Publication] <a href="https://chughgarvit.github.io/" style={{ color: 'dodgerblue' }}>Garvit</a> received a paper acceptance in EarComp 2022.</MKAlert>
            <MKAlert color="light"><a href="https://chughgarvit.github.io/" style={{ color: 'dodgerblue' }}>Garvit</a> secured 2nd position at the<a href="https://iitjsc.acm.org/pages/activities/ideathon.html" style={{ color: 'dodgerblue' }}>iS3: iDeathon on Sustainable Smart Systems</a>  organised by ACM Student Chapter IIT Jodhpur.</MKAlert>
          </Grid>
        </Grid>
      </Container>
     
    </MKBox>
  );
}

export default SimpleAlerts1;
