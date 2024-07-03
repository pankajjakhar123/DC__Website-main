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
import Icon from "@mui/material/Icon";
import img from "./mam.jpeg";
import FilledInfoCard from "examples/Cards/InfoCards/FilledInfoCard";
// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import DefaultCounterCard from "examples/Cards/CounterCards/DefaultCounterCard";
function BuiltByDevelopers() {
  // const bgImage =
  //   "https://raw.githubusercontent.comcreativetimofficial/public-assets/master/soft-ui-design-system/assets/img/desktop.jpg";


  // const greyTextColor = {
  //   color: 'grey',
  //   textDecoration: 'none',
  // };

  // const blueLinkStyle = {
  //   color: 'blue',
  //   textDecoration: 'none',
  // };
  return (
    <div style={{ marginTop: "18vh" ,backgroundColor: '#F8F8F8'  ,marginLeft :"-5vw", marginRight :"-5vw" , marginBottom :"16vh"}} >
     
    <MKBox
      display="flex"
      alignItems="center"
      borderRadius="xl"
      my={1}
      py={6}
      style={{ backgroundColor: '#F8F8F8' }}
    >
    
    
      <Container sx={{ marginTop: "20px" , marginBottom :"40px" }}>
         {/* <Grid container spacing={-2} sx={{mt :{xs:0,md:6}}} > */}

         <MKTypography variant="h2">
         <section id="MeetTeam">Meet the Team</section></MKTypography>
         <div style={{marginBottom :"50px"}}></div>
        <Grid container item xs={12} lg={11} sx={{ ml: { xs: 1, lg: 6 } , marginTop: '1px' }}>
        
        <Grid item xs={12} lg={4.5}>
        
        <MKTypography variant="p" color="grey" style={{ marginLeft: '-10px' , fontFamily : 'Roboto, sans-serif' }}>
        
            <img
                src={img}
                style={{
                    borderRadius: '5%', 
                    marginLeft:"15px",
                    width: '240px',     
                    height: '300px',   
                }}
                alt="Profile"
            />
             <MKTypography
            component="a"
            href="https://sites.google.com/site/suchetana0116/home"
            target="_blank"
            rel="noreferrer"
            variant="body2"
            color="white"
            fontWeight="regular"
            sx={{
              display: "flex",
              alignItems: "center",

              "& .material-icons-round": {
                fontSize: "1.125rem",
                transform: `translateX(3px)`,
                transition: "transform 0.2s cubic-bezier(0.34, 1.61, 0.7, 1.3)",
              },

              "&:hover .material-icons-round, &:focus .material-icons-round": {
                transform: `translateX(6px)`,
              },
            }}
          >      
       <h1 style={{ cursor: 'pointer' }}>
  <span 
    style={{ 
      color: 'grey',
      textDecoration: 'none',
    }}
    onMouseOver={(e) => e.target.style.textDecoration = 'underline blue'} // Set underline color to blue on mouse over
    onMouseOut={(e) => e.target.style.textDecoration = 'none'} // Remove underline on mouse out
  >
    Suchetana Chakraborty
  </span>
</h1>
 <Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon>
 
          </MKTypography>
          <h2>Assistant Professor</h2>
          <MKTypography
            component="a"
            href="https://cse.iitj.ac.in/"
            target="_blank"
            rel="noreferrer"
            variant="body2"
            color="white"
            fontWeight="regular"
            sx={{
              display: "flex",
              alignItems: "center",

              "& .material-icons-round": {
                fontSize: "1.125rem",
                transform: `translateX(3px)`,
                transition: "transform 0.2s cubic-bezier(0.34, 1.61, 0.7, 1.3)",
              },

              "&:hover .material-icons-round, &:focus .material-icons-round": {
                transform: `translateX(6px)`,
              },
            }}
          ><p style={{ cursor: 'pointer' }}>
 <span 
    style={{ 
      color: 'grey',
      textDecoration: 'none',
    }}
    onMouseOver={(e) => e.target.style.textDecoration = 'underline blue'} // Set underline color to blue on mouse over
    onMouseOut={(e) => e.target.style.textDecoration = 'none'} // Remove underline on mouse out
  >
      Indian Institute of Technology, Jodhpur
  </span><br />
  <a
  href="https://www.linkedin.com/in/suchetana/"
  target="_blank"
  rel="noopener noreferrer"
  style={{
    marginLeft: '10px',
    textDecoration: 'none', 
    transition: 'transform 0.2s',
    display: 'inline-block', 
  }}
  onMouseOver={(e) => {
    e.currentTarget.style.transform = 'scale(1.2)'; 
  }}
  onMouseOut={(e) => {
    e.currentTarget.style.transform = 'scale(1)'; 
  }}
>
  <i
    className="fab fa-linkedin"
    style={{
      color: 'grey',
      fontSize: '33px',
      verticalAlign: 'middle', 
      display: 'inline-block', 
    }}
  ></i>
</a>
<a
  href="https://scholar.google.co.in/citations?hl=en&user=sLnKodYAAAAJ"
  target="_blank"
  rel="noopener noreferrer"
  style={{
    marginLeft: '10px',
    textDecoration: 'none', 
    transition: 'transform 0.2s',
    display: 'inline-block', 
  }}
  onMouseOver={(e) => {
    e.currentTarget.style.transform = 'scale(1.2)'; 
  }}
  onMouseOut={(e) => {
    e.currentTarget.style.transform = 'scale(1)'; 
  }}
>
  <i
    className="fa fa-graduation-cap"
    style={{
      color: 'grey',
      fontSize: '33px',
      verticalAlign: 'middle', 
      display: 'inline-block', 
    }}
  ></i>
</a>
<a
  href="https://www.researchgate.net/profile/Suchetana-Chakraborty"
  target="_blank"
  rel="noopener noreferrer"
  style={{
    marginLeft: '10px',
    textDecoration: 'none', 
    transition: 'transform 0.2s',
    display: 'inline-block', 
  }}
  onMouseOver={(e) => {
    e.currentTarget.style.transform = 'scale(1.2)'; 
  }}
  onMouseOut={(e) => {
    e.currentTarget.style.transform = 'scale(1)'; 
  }}
>
  <i
    className="fab fa-researchgate"
    style={{
      color: 'grey',
      fontSize: '33px',
      verticalAlign: 'middle', 
      display: 'inline-block', 
    }}
  ></i>
</a>
<a
  href="https://sites.google.com/site/suchetana0116/contact"
  target="_blank"
  rel="noopener noreferrer"
  style={{
    marginLeft: '10px',
    textDecoration: 'none', 
    transition: 'transform 0.2s',
    display: 'inline-block', 
  }}
  onMouseOver={(e) => {
    e.currentTarget.style.transform = 'scale(1.2)'; 
  }}
  onMouseOut={(e) => {
    e.currentTarget.style.transform = 'scale(1)'; 
  }}
>
  <i
    className="fas fa-address-book"
    style={{
      color: 'grey',
      fontSize: '33px',
      verticalAlign: 'middle', 
      display: 'inline-block', 
    }}
  ></i>
</a>
<a
  href="https://orcid.org/0000-0001-9856-0687"
  target="_blank"
  rel="noopener noreferrer"
  style={{
    marginLeft: '10px',
    textDecoration: 'none', 
    transition: 'transform 0.2s',
    display: 'inline-block', 
  }}
  onMouseOver={(e) => {
    e.currentTarget.style.transform = 'scale(1.2)'; 
  }}
  onMouseOut={(e) => {
    e.currentTarget.style.transform = 'scale(1)'; 
  }}
>
  <i
    className="fas fa-id-badge"
    style={{
      color: 'grey',
      fontSize: '33px',
      verticalAlign: 'middle', 
      display: 'inline-block', 
    }}
  ></i>
</a>
<a
  href="https://dblp.org/pid/52/10123.html"
  target="_blank"
  rel="noopener noreferrer"
  style={{
    marginLeft: '10px',
    textDecoration: 'none', 
    transition: 'transform 0.2s',
    display: 'inline-block', 
  }}
  onMouseOver={(e) => {
    e.currentTarget.style.transform = 'scale(1.2)'; 
  }}
  onMouseOut={(e) => {
    e.currentTarget.style.transform = 'scale(1)'; 
  }}
>
  <i
    className="fas fa-database"
    style={{
      color: 'grey',
      fontSize: '33px',
      verticalAlign: 'middle', 
      display: 'inline-block', 
    }}
  ></i>
</a>


</p>   
           </MKTypography>
          



        </MKTypography>
        </Grid>
        <Grid item xs={12} lg={7.5}>
        <MKTypography variant="p" color="grey" style={{ marginLeft: '1px', fontFamily: 'Roboto, sans-serif' }}>
        <span 
    style={{ 
      color: 'grey',
      textDecoration: 'none',
      fontWeight: 'bold',
      fontSize : '29px',
      marginLeft: '14px',
      marginBottom: '-10px'
    }}
  >
    PI
  </span>
  
 
      <DefaultCounterCard description=<div style={{fontSize : '18px' , textAlign: 'justify' }}>
     I am an Assistant Professor in the Department of <a href="https://cse.iitj.ac.in/"  style={{ color: 'blue' }}>Computer Science and Engineering</a>,
     <a href="https://www.iitj.ac.in/" style={{color : 'blue'}}> Indian Institute of Technology, Jodhpur </a>Since December 2020. My research interests are broadly in the domains of Ubiquitous Computing, IoT and Edge Computing, Wireless sensor and mobile ad hoc networks, Distributed Systems and Smart city applications. To know more about the work, please explore <a href="https://sites.google.com/site/suchetana0116/research" style={{color: 'blue'}}>this page</a>. I am one of the founding members of UbiSys Research Group, in the department and actively involved in interdisciplinary research through <a href="https://iitj.ac.in/shc/" style={{color : 'blue'}}>IDRP - Smart Healthcare</a>, <a href="https://iitj.ac.in/iot/" style={{color:'blue'}}>IDRP - IoT & Applications</a> and<a href="https://iitj.ac.in/CETSD/" style={{color : 'blue'}}> Centre of Emerging Technologies for Sustainable Development (CETSD)</a>. Currently, I am working as an Area Editor of Ad Hoc Networks journal, Elsevier. Also I am involved in organizing many conferences including IEEE ANTS 2021 (as Tutorial Co-chair), IEEE LCN 2021, 2022, 2023 (as TPC member), COMSNETS 2022, 2023 (as TPC member), ICDCN 2023 (as Workshop Co-chair) to name a few. </div>
      >    </DefaultCounterCard>  </MKTypography></Grid>
        </Grid>
        <br></br>
        <Grid container spacing={3}>
            <Grid item xs={20} lg={6}>
              <FilledInfoCard
                variant="gradient"
                color="info"
                icon="flag"
                title=<h3>Few ongoing research efforts</h3>
                description=<div><ul>
                  <li >Understanding user behavior through inertial sensing</li>
                  <li >Task offloading and microservices management in MEC</li>
                  <li >Decentralized trust computation and reputation system in IoT and CPS</li>
                  <li >Context aware data sourcing from extreme edge</li>
                  <li >Situation-awareness in Connected and Autonomous vehicles</li>
                  <li >IoT intervention in wild habitat monitoring</li>
                  <li >Sensing as a service middleware for applications of human sensing</li>
                </ul></div>
               
              />
            </Grid>
            <Grid item xs={12} lg={6}>
              <FilledInfoCard
                color="info"
                icon=<i className="fas fa-book" style={{ marginRight: '5px' }}></i>
                title=<h3>Education</h3>
                description=<div>
               <ul>
               <i className="fas fa-graduation-cap" style={{ display: 'inline', marginRight: '5px' }}></i>
<h4 style={{ display: 'inline' }}>PhD in Computer Science and Engineering, 2014</h4>


<p>Indian Institute of Technology Guwahati | India</p>
<i className="fas fa-graduation-cap" style={{ display: 'inline', marginRight: '5px' }}></i>
<h4 style={{ display: 'inline' }}>MTech in Computer Science and Engineering, 2011</h4>

<p>Indian Institute of Technology Guwahati | India</p>

<i className="fas fa-graduation-cap" style={{ display: 'inline', marginRight: '5px' }}></i>
<h4 style={{ display: 'inline' }}>
BTech in Computer Science and Engineering, 2009</h4>

<p>West Bengal University of Technology | India</p></ul></div>
                
              />
              
            </Grid>
            {/* <Grid item xs={12} lg={4}>
              <FilledInfoCard
                color="info"
                icon="apps"
                title="Components"
                description="Material Kit is giving you a lot of pre-made components, that will help you to build UI's faster."
                action={{
                  type: "external",
                  route: "https://www.creative-tim.com/learning-lab/react/alerts/material-kit/",
                  label: "Read more",
                }}
              />
            </Grid> */}
          </Grid>      </Container>
        
    </MKBox>
    
    </div>
  );
}

export default BuiltByDevelopers;
