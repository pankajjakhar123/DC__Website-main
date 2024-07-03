// TeacherAssistantDetails.js
import React from 'react';
import PropTypes from 'prop-types';
import MKTypography from 'components/MKTypography';
import AlignLeft from './page-headers/Talign';
function TeacherAssistantDetails({ accomplishments, publications, education }) {
  // Define inline styles for colors
//   const pinkColorStyle = { color: 'Pearl' };
  const darkGreyColorStyle = { color: 'aegean' };

  return (
    <div>
      {/* Render the details in the component */}
      <MKTypography variant="h3" mb={-2} style={darkGreyColorStyle}>
        Accomplishments
      </MKTypography>

      <AlignLeft description={accomplishments}></AlignLeft>
      <MKTypography variant="h3" mb={-2} style={darkGreyColorStyle}>
        Publications
        
      </MKTypography>
      <AlignLeft description={publications}></AlignLeft>
      <MKTypography variant="h3" mb={-2} style={darkGreyColorStyle}>
        Education
      </MKTypography>
      <AlignLeft description={education}></AlignLeft>
    </div>
  );
}

// PropTypes definition
TeacherAssistantDetails.propTypes = {
  accomplishments: PropTypes.string.isRequired,
  publications: PropTypes.string.isRequired,
  education: PropTypes.string.isRequired,
};

export default TeacherAssistantDetails;
