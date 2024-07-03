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
// import Divider from "@mui/material/Divider";
// Material Kit 2 React components
import MKBox from "components/MKBox";
import logo from "./logo.png";
// Material Kit 2 React examples
import DefaultCounterCard from "examples/Cards/CounterCards/DefaultCounterCard";


function Counters() {
  return (
    <MKBox component="section" py={1}>
      <Container>
        <Grid container item xs={40} lg={30} sx={{ mx: "auto" }}>
          <Grid item xs={12} md={3}>
            {/* Left Column with Image */}
            <img src={logo} alt="UbiSys Image" style={{ width: "16vw", height: "16vw", marginBottom: "-2vw" }} />
            <DefaultCounterCard
              head={<div><div style={{ marginTop: '50px' }}></div>UbiSys</div>}
              style={{ marginTop: '-10px' }}
            />
          </Grid>
          <Grid item xs={12} md={9} sx={{ textAlign: "justify" }}>
            {/* Right Column */}
            <DefaultCounterCard
              description="The Ubiquitous Systems (UbiSys) research lab, led by Dr. Suchetana Chakraborty, focuses on many areas of ubiquitous computing including novel user interface technology, health sensing, activity recognition, low-power sensing, and energy sensing by applying expertise in sensing, signal processing, embedded systems, circuits, and human-computer interaction.

The UbiSys lab consists of an interdisciplinary team of investigators that tackle challenging research problems both from building the enabling hardware and software systems to the deployment and evaluation of these technologies in real-world settings, especially around health. We collaborate very closely with IIT Professors in the Department of Computer Science & Engineering, and the Interdisciplinary department at the Indian Institute of Technology Jodhpur. In addition, we have close collaborations with many other institutions such as UMBC, IIT Kharagpur, IIT Bombay."
              style={{ fontSize: "18px" }}
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Counters;