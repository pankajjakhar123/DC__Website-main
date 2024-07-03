import React, { useState } from "react";
import PropTypes from "prop-types";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import CenteredFooter from "examples/Footers/CenteredFooter";
import routes from "routes";

function Assign({ title, children }) {
  const [selectedExample, setSelectedExample] = useState(null);

  const onButtonClick = (exampleName) => {
    // Your logic when a button is clicked
    setSelectedExample(exampleName);
  };

  const BaseLayout = () => {
    // Your BaseLayout logic here
    console.log(`Selected example: ${selectedExample}`);
    // Add your specific logic here based on the selected example
  };

  return (
    <MKBox display="flex" flexDirection="column" bgColor="white" minHeight="100vh">
      <MKBox bgColor="white" shadow="sm" py={0.25}>
        <DefaultNavbar routes={routes} transparent relative />
      </MKBox>
      <Container sx={{ mt: 6 }}>
        <Grid container item xs={12} flexDirection="column" justifyContent="center" mx="auto">
          <MKBox width={{ xs: "100%", md: "50%", lg: "25%" }} mb={3}></MKBox>
          <MKTypography variant="h3" mb={1}>
            {title}
          </MKTypography>
          {children({
            onButtonClick,
            BaseLayout,
          })}
        </Grid>
      </Container>
      <MKBox mt="auto">
        <CenteredFooter />
      </MKBox>
    </MKBox>
  );
}

Assign.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.func.isRequired,
};

export default Assign;
