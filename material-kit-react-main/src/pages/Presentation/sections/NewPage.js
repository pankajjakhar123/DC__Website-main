// NewPage.js

import React from "react";
import PropTypes from "prop-types"; // Import PropTypes
import { useParams } from "react-router-dom";
import HeaderOne from "layouts/sections/page-sections/page-headers/components/HeaderOne";

function NewPage({ data }) {
    const { name } = useParams(); // Retrieve the route parameter
  
    const selectedItem = data.find((item) => item.name === name);
  
    if (!selectedItem) {
      return <div>Item not found</div>;
    }
  
    return <HeaderOne image={selectedItem.image} name={selectedItem.name} count={selectedItem.count} des={selectedItem.des} />;
  }

// Define propTypes for the data prop
NewPage.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      count: PropTypes.string.isRequired,
      des: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default NewPage;

