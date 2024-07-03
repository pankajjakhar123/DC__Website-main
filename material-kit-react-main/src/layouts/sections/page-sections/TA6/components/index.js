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
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

// Images
// import bgImage from "assets/images/bg-coworking.jpeg";

function HeaderOne6() {
  return (
    <MKBox component="header" position="relative" height="100%">
      <MKBox component="nav" position="absolute" top="0.5rem" width="100%">
        <Container>
          <Grid container flexDirection="row" alignItems="center">
            <MKTypography
              component={Link}
              href="#"
              variant="button"
              color="white"
              fontWeight="regular"
              py={0.8125}
              mr={2}
            >
              
            </MKTypography>
            <MKButton
              variant="outlined"
              color="white"
              sx={{ display: { xs: "block", lg: "none" }, ml: "auto" }}
            >
              <MKBox component="i" color="white" className="fas fa-bars" />
            </MKButton>
            <MKBox
              component="ul"
              display={{ xs: "none", lg: "flex" }}
              p={0}
              my={0}
              mx="auto"
              sx={{ listStyle: "none" }}
            >
              <MKBox component="li">
                <MKTypography
                  component={Link}
                  href="#"
                  variant="button"
                  color="white"
                  fontWeight="regular"
                  p={1}
                  onClick={(e) => e.preventDefault()}
                >
                  
                </MKTypography>
                
              </MKBox>
              <MKBox component="li">
                <MKTypography
                  component={Link}
                  href="#"
                  variant="button"
                  color="white"
                  fontWeight="regular"
                  p={1}
                  onClick={(e) => e.preventDefault()}
                >
                
                </MKTypography>
              </MKBox>
              <MKBox component="li">
                <MKTypography
                  component={Link}
                  href="#"
                  variant="button"
                  color="white"
                  fontWeight="regular"
                  p={1}
                  onClick={(e) => e.preventDefault()}
                > 
                </MKTypography>
                <a style={{color : "white"}}href="https://www.linkedin.com/in/akhilbhatia18/" target="_blank" rel="noopener noreferrer">
       
      </a>
              </MKBox>
            </MKBox>
           
            <MKBox
              component="ul"
              display={{ xs: "none", lg: "flex" }}
              p={0}
              m={0}
              sx={{ listStyle: "none" }}
            >
              <MKBox component="li">
                <MKTypography
                  component={Link}
                  href="#"
                  variant="button"
                  p={1}
                  onClick={(e) => e.preventDefault()}
                >
                  <MKBox component="i" color="white" className="fab fa-twitter" />
                </MKTypography>
              </MKBox>
              <MKBox component="li">
                <MKTypography
                  component={Link}
                  href="#"
                  variant="button"
                  p={1}
                  onClick={(e) => e.preventDefault()}
                >
                  <MKBox component="i" color="white" className="fab fa-facebook" />
                </MKTypography>
              </MKBox>
              <MKBox component="li">
                <MKTypography
                  component={Link}
                  href="#"
                  variant="button"
                  p={1}
                  onClick={(e) => e.preventDefault()}
                >
                  <MKBox component="i" color="white" className="fab fa-instagram" />
                </MKTypography>
              </MKBox>
            </MKBox>
          </Grid>
        </Container>
      </MKBox>
      <MKBox
        display="flex"
        alignItems="center"
        minHeight="100%"
        sx={{
          backgroundImage: ({ palette: { gradients }, functions: { linearGradient, rgba } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.5),
              rgba(gradients.dark.state, 0.5)
            )}, url("https://iitj.ac.in/techscape/vol04/issue01/images/15%20Years%20of%20IIT%20Jodhpur_01082023.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Container>
          <Grid container item xs={12} md={7} lg={6} flexDirection="column" justifyContent="center">
            <MKTypography
              variant="h1"
              color="white"
              mb={3}
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              Akhil Bhatia
            </MKTypography>
            <MKTypography variant="body1" color="white" opacity={0.8} pr={6} mr={6}>
            Part Time PhD Scholar
            <br></br>
            Cloud and distributed computing
            </MKTypography>
            <Stack direction="row" spacing={1} mt={3}>
              {/* <MKButton color="white">Get Started</MKButton>
              <MKButton variant="text" color="white">
                Read more
              </MKButton> */}
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
      color: 'white',
      textDecoration: 'none',
    }}
    onMouseOver={(e) => e.target.style.textDecoration = 'underline white'} // Set underline color to blue on mouse over
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
      color: 'white',
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
      color: 'white',
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
      color: 'white',
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
      color: 'white',
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
      color: 'white',
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
      color: 'white',
      fontSize: '33px',
      verticalAlign: 'middle', 
      display: 'inline-block', 
    }}
  ></i>
</a>


</p>   
           </MKTypography>
          
            </Stack>
          </Grid>
        </Container>
      </MKBox>
    </MKBox>
  );
}

export default HeaderOne6;