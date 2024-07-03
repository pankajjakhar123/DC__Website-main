import React from "react";
import PropTypes from "prop-types";
import Tooltip from "@mui/material/Tooltip";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
// import HeaderOne from "layouts/sections/page-sections/page-headers/components/HeaderOne";
import MKButton from "components/MKButton";
function ExampleCard({ image, name, count, pro, des }) {
  // const handleCardClick = () => {
  //   onClick({ name, count, des });
  // };
  return (
    <MKButton to="/sections/page-sections/page-headers" >
    <MKBox
      display="flex"
      alignItems="center"
      bgColor="white"
      
      borderRadius="10px"
      shadow="l1g"
      width="20vw"
      minHeight="12rem"
      minWidth="20vw"
      sx={{
        overflow: "hidden",
        textAlign: "center",
        transform: "perspective(999px) rotateX(0deg) translate3d(0, 0, 0)",
        transformOrigin: "50% 0",
        backfaceVisibility: "hidden",
        willChange: "transform, box-shadow",
        transition: "transform 200ms ease-out",
        "&:hover": {
          transform: "perspective(999px) rotateX(7deg) translate3d(0px, -4px, 5px)",
        },
      }}
      // onClick={handleCardClick}
  
    >
      {/* Left Half - Image */}
      <MKBox
        width="50%"
        minHeight="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
        borderRadius="10px 0 0 10px"
        style={{
          overflow: "hidden",
          borderRadius: "10px 0 0 10px",
        }}
      >
        <img
          src={image}
          alt={name}
          style={{
            maxWidth: "100%",
            maxHeight: "100%",
          }}
        />
      </MKBox>

      {/* Right Half - Name and Count */}
      <MKBox
        width="50%"
        minHeight="100%"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        borderRadius="0 10px 10px 0"
      >
        <MKTypography variant="h6" fontWeight="bold">
          {name}
        </MKTypography>
      
        
          <MKTypography variant="button" fontWeight="regular" color="secondary">
          {count}
            <br />
            {des}
          </MKTypography>
      
      </MKBox>

      {/* Pro Badge */}
      {pro && (
        <MKBox
          position="absolute"
          top={0}
          right={0}
          zIndex={2}
          p={1}
          textAlign="center"
        >
          <Tooltip title="Pro Element" placement="top">
            <svg
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              {/* Your SVG content for the Pro badge goes here */}
            </svg>
          </Tooltip>
        </MKBox>
      )}
    </MKBox>
    </MKButton>
  );
}

// Setting default props for the ExampleCard
ExampleCard.defaultProps = {
  name: "",
  count: 0,
  des: 0,
  pro: false,
};

// Typechecking props for the ExampleCard
ExampleCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string,
  count: PropTypes.string,
  des: PropTypes.string,
  pro: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

export default ExampleCard;