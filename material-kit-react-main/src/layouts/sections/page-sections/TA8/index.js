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

// Sections components
import View from "layouts/sections/components/View";
import BaseLayout from "layouts/sections/components/BaseLayout";
// PageHeaders page components
// import HeaderOne from "../page-headers/components/HeaderOne";
import HeaderOne8 from "./components";
// // PageHeaders page components code
import headerOneCode from "../page-headers/components/HeaderOne/code";
import TeacherAssistantDetails from "../TADetails";
function PageHeaders8() {
  const accomplishmentsData = (
    <div>
      <ul>
        <li>PhD admits at Michigan State University (both BioMolecular Sciences/Genetics and Genome Sciences and Computational Math Science and Engineering programs), Penns</li>
        <li>MSU College of Natural Science Scholarships for Spring 2020, Summer 2020, Fall 2020, Spring 2021, Fall 2021</li>
        <li>L.C. Plant Mathematics Award 2020, MSU Department of Mathematics</li>
      </ul>
    </div>
  );

  const educationData = (
    <div>
      <ul>
        <li>PhD in Computational Bioscience, 2022– University of Colorado Anschutz Medical Campus</li>
        <li>B.Sc. in Computational Mathematics; Computational Math Science and Engineering, 2022, Michigan State University</li>
      </ul>
    </div>);
    const publications = (
      <div>
        <ul>
          <li>PhD in Computational Bioscience, 2022– University of Colorado Anschutz Medical Campus</li>
          <li>B.Sc. in Computational Mathematics; Computational Math Science and Engineering, 2022, Michigan State University</li>
        </ul>
      </div>
  );
  return (
    
    <BaseLayout
      title="Monik Raj Behera"
      breadcrumb={[
        {  route: "/sections/page-sections/page-headers" },
        {  },
      ]}
    >
      <View title="" code={headerOneCode} height="40rem">
        <HeaderOne8 />
      </View>
      <TeacherAssistantDetails accomplishments={accomplishmentsData} education={educationData} publications={publications} />
    </BaseLayout>
  );
}

export default PageHeaders8;
