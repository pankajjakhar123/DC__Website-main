import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MailOutlineIcon from "@mui/icons-material/MailOutline"; 
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";


function Download() {
  return (
    <MKBox component="section" py={{ xs: 0, sm: 1 }} style={{marginTop:"20px"}}>
      <Container>
        <Grid container item xs={12} justifyContent="center">
          <Grid container item xs={12} lg={4} justifyContent="flex-start">
            <MKBox textAlign="left">
            <MKTypography variant="h2" mt={6} mb={3} >

            <section id="Photos1"></section>    Photos
              </MKTypography>
              <MKBox component="img" src="https://ubisysresearch.github.io/home/photos/PHOTO-2022-05-12-15-44-02.jpg" width="23vw" height="35vh" />
            </MKBox>
          </Grid>
          <Grid container item xs={12} lg={4} justifyContent="flex-start">
            <MKBox textAlign="left">
            
              <MKBox component="img" src="https://ubisysresearch.github.io/home/photos/gallery00005.jpg" width="23vw" height="35vh" sx={{ marginLeft: '-4vw' ,marginTop:'17vh'}}/>
            </MKBox>
          </Grid>
          <Grid container item xs={12} lg={4} justifyContent="flex-start">
  <MKBox textAlign="left">
   
    <MKTypography variant="body1" mt={7}>
                <MailOutlineIcon />{" "}
                <a href="mailto:suchetana@iitj.ac.in">suchetana@iitj.ac.in</a>
              </MKTypography>
              <MKTypography variant="body1">
                <LocationOnIcon /> Department of Computer Science,  IIT   Jodhpur, India
              </MKTypography>
              <MKTypography variant="body1">Room 215, 1st Floor</MKTypography>
              
    <iframe
      width="110%"
      height="400"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15434.987909360808!2d73.00530567554889!3d26.270122112275576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39631d63b086b455%3A0x8cdd0bc72ce2f9a3!2sIndian%20Institute%20of%20Technology%20Jodhpur!5e0!3m2!1sen!2sin!4v1666839641866!5m2!1sen!2sin"
      loading="lazy"
    />
    
  </MKBox>
</Grid>
        </Grid>
        <Grid container item xs={12} justifyContent="center">
          <Grid container item xs={1} lg={4} justifyContent="flex-start">
            <MKBox textAlign="left">
            
              <MKBox component="img" src="https://ubisysresearch.github.io/home/photos/PHOTO-2022-05-12-15-44-03.jpg" width="23vw" height="35vh" sx={{ marginLeft: '-210px' , marginTop :'-200px' }}/>
            </MKBox>
          </Grid>
          <Grid container item xs={12} lg={4} justifyContent="flex-start">
            <MKBox textAlign="left">
            
              <MKBox component="img" src="https://ubisysresearch.github.io/home/photos/PHOTO-2022-10-29-13-36-16.jpg" width="23vw" height="35vh" sx={{ marginLeft: '-270px' , marginTop :'-200px'}}/>
            </MKBox>
          </Grid>
          </Grid>
      </Container>

    </MKBox>
  );
}

export default Download;