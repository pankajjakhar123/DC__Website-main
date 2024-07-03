import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import MKBox from 'components/MKBox';
// import RotatingCard from 'examples/Cards/RotatingCard';
// import RotatingCardFront from 'examples/Cards/RotatingCard/RotatingCardFront';
// import RotatingCardBack from 'examples/Cards/RotatingCard/RotatingCardBack';
import DefaultInfoCard from 'examples/Cards/InfoCards/DefaultInfoCard';
// import bgFront from 'assets/images/rotating-card-bg-front.jpeg';
// import bgBack from 'assets/images/rotating-card-bg-back.jpeg';
import MKTypography from 'components/MKTypography';

function Information() {
  return (
    <>
    <MKBox component="section" py={6} my={1} style={{ backgroundColor: '#F8F8F8' , textAlign:"justify"}}>
  
      <Container >
          {/* style={{ backgroundColor: '#F8F8F8' }} */}
          <Grid container spacing={-2} sx={{ mt: { xs: 0, md: 6 } }}>
          <Grid item xs={19} md={26}>
          
              
              
                <DefaultInfoCard
                  
                  title=<MKTypography variant="h3"> <h1 style={{ marginTop:"-30px" , marginBottom: '20px' }}><section id="Lab">Lab News</section></h1></MKTypography>
                  description=<div>Prospective Members Apply Here!</div>
                  des2={
                    <a href="https://ubisysresearch.github.io/openpositions/index.html" style={{ color: 'blue' }}>
                      Interns, BTP/MTP, PhD, Postdoc and design credits
                    </a>
                  }
                  des3="A few PhD positions are available."
                  des4="Looking for self-motivated BTech/MTech students (NET/GATE qualified) with high analytical skill, strong research aptitude, and excellent academic background to join our research team. If you are interested in working with us and pursuing PhD/Summer Internship/MTP/BTP, write to us with your updated resume."
                />
           
    
           <a href="/sections/attention-catchers/SA" src="www.google.com" style={{ fontSize: '18px', float: 'right' }}>
  See All Details
</a>
              </Grid>
            

           

            </Grid>
          
           </Container>
           
            </MKBox>
            <MKBox style={{ backgroundColor: ''  ,textAlign:"justify"}}>
            <Container>
            <Grid container spacing={-2} sx={{ mt: { xs: 0, md: 6 } }}>
              <Grid item xs={12} md={26}>
                <DefaultInfoCard
                  // icon={
                  //   <i className="fas fa-trophy" style={{ color: 'gold', fontSize: '20px' }}></i>
                  // }
                  title=<h1 style={{ marginTop:"15px" , marginBottom: '20px' }}>Student Accomplishments</h1>
                  description={
                    <div>
                      [Publication] <a href="https://chughgarvit.github.io/" style={{ color: 'blue' }}>Garvit</a> received an acceptance for a full paper at{' '}
                      <a href="https://chase23.sigbed.org/Home.html" style={{ color: 'blue' }}>IEEE/ACM CHASE 2023! </a>
                    </div>
                  }
                  des2="Ananya was selected and attended the SE"
                  des3={
                    <div  style={{ textAlign: 'justify' }}>
                      <a href="https://chughgarvit.github.io/" style={{ color: 'blue' }}>Garvit </a>received a Travel Grant from{' '}
                     
  <a href="https://www.comsnets.org/" style={{ color: 'blue' }}>COMSNETS!</a> to attend the 15th International Conference on COMmunication Systems & NETworkS from 3rd to 9th January 2023.
</div>

                  }
                  des4={
                    <div>
                      [Publication] <a href="https://chughgarvit.github.io/" style={{ color: 'blue' }}>Garvit</a> presented one Poster and one Demo at{' '}
                      <a href="https://www.comsnets.org/" style={{ color: 'blue' }}>COMSNETS!</a>
                    </div>
                  }
                />
                
                <a href="/sections/attention-catchers/SA" src="www.google.com" style={{ fontSize: '18px', float: 'right' }}>
  See All Details
</a>



              </Grid>
              
            
          </Grid>
        {/* </Grid> */}
      </Container>
     
    </MKBox>
    </>
  );
}

export default Information;
