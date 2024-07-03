import React from "react";
import PropTypes from "prop-types";
import Tooltip from "@mui/material/Tooltip";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";

function ExampleCard1({ image, name, count, pro, des }) {
  return (
    <MKButton to="/sections/page-sections/page-headers">
      <MKBox
        display="flex"
        alignItems="left"
        bgColor="white"
        borderRadius={{ xs: "12px", md: "5vw" }}
        shadow="l1g"
        width={{  md: "80vw" }}
        minHeight="8rem"
        
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
      >
        {/* Left Half - Image */}
        <MKBox
           width={{ xs: "30%", md: "9vw" }} // Set the left half to 10%
          minHeight="1vw"
          display="flex"
          justifyContent="center"
          alignItems="center"
          borderRadius={{ xs: "12px 12px 0 0", md: "12px 0 0 10px" }}
          style={{
            overflow: "hidden",
            borderRadius: "10px 0 0 10px",
          }}
        >
          <img
            src={image}
            alt={name}
            style={{
              maxWidth: "90%",
              maxHeight: "70%",
            }}
          />
        </MKBox>

        {/* Right Half - Name and Count */}
        <MKBox
          width={{ xs: "70%", md: "90vw" }} // Set the right half to 78%
          minHeight="100%"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems={{ xs: "center", md: "flex-start" }} // Align text content to the left
          paddingLeft={{ xs: "0", md: "1vw" }}  // Add left margin of 57px
          borderRadius={{ xs: "0 0 12px 12px", md: "0 10px 10px 0" }}
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

ExampleCard1.defaultProps = {
  name: "",
  count: 0,
  des: 0,
  pro: false,
};

ExampleCard1.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string,
  count: PropTypes.string,
  des: PropTypes.string,
  pro: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

export default ExampleCard1;
