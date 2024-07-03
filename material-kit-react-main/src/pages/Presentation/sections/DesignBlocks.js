import React from 'react';
import { Link } from 'react-router-dom';
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
import MKBadge from "components/MKBadge";
import MKTypography from "components/MKTypography";
import ExampleCard from "pages/Presentation/components/ExampleCard";
import data from "pages/Presentation/sections/data/designBlocksData";
import BuiltByDevelopers from "../components/BuiltByDevelopers";
// import HeaderOne from './HeaderOne'; // Import the HeaderOne component

function DesignBlocks() {
  const renderData = data.map(({ title, items }) => (
    <Grid container spacing={0} sx={{ mb: 0 }} key={title}>
      <Grid item xs={0} lg={0}>
        <MKBox position="sticky" top="100px" pb={{ xs: 2, lg: 8 }}>
          <MKTypography variant="h3" fontWeight="bold" mb={1}>
            {title}
          </MKTypography>
        </MKBox>
      </Grid>
      <Grid item xs={0} lg={12}>
        <Grid container spacing={3}>
          {items.map(({ image, name, count, des, route, pro }) => (
            <Grid item xs={12} md={4} sm={6} lg={3} sx={{ mb: 2 }} key={name}>
              <Link to={route}>
                <ExampleCard image={image} name={name} count={count} des={des} pro={pro} />
                <div style={{marginLeft:"100px"}}></div>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  ));

  return (
    <MKBox component="section" my={-8} py={6}>
      <Container>
        <BuiltByDevelopers />
        <Grid
          container
          item
          xs={1}
          lg={9}
          flexDirection="column"
          alignItems="center"
          sx={{ textAlign: "center", my: 6, mx: "auto", px: 0.75 }}
        >
          <MKBadge variant="contained" color="info" container sx={{ mb: 2 }} />
        </Grid>
      </Container>
      
      <Container sx={{ mt: 0 }}>
        
          {renderData}
       
      </Container>
    </MKBox>
  );
}

export default DesignBlocks;
