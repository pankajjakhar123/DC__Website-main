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
import HeaderOne6 from "./components";
// // PageHeaders page components code
import headerOneCode from "../page-headers/components/HeaderOne/code";
import TeacherAssistantDetails from "../TADetails";
function PageHeaders6() {
  const accomplishmentsData = (
    <div>
      <ul>
        <li>Samart K*, Tuyishime P*, Krishnan A#, Ravi J#. Reconciling multiple connectivity scores for drug repurposing. Briefings in Bioinformatics. 2021 DOI | Live doc | GitHub</li>
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
      title="Akhil Bhatia"
      breadcrumb={[
        { label: "", route: "/sections/page-sections/page-headers" },
        { label: "" },
      ]}
    >
      <View title="" code={headerOneCode} height="40rem">
        <HeaderOne6 />
      </View>
      <TeacherAssistantDetails accomplishments={accomplishmentsData} education={educationData} publications={publications} />
    </BaseLayout>
  );
}

export default PageHeaders6;
