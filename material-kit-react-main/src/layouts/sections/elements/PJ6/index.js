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
import HeaderOnePJ6 from "./components";
// // PageHeaders page components code
import headerOneCode from "layouts/sections/page-sections/page-headers/components/HeaderOne/code";
import MKTypography from "components/MKTypography";
function PageHeadersPJ6() {
  return (
    
    <BaseLayout
      title=""
      breadcrumb={[
        { label: "Page Sections", route: "/sections/page-sections/page-headers" },
        { label: "" },
      ]}
    >
      <View title="" code={headerOneCode} height="40rem">
        <HeaderOnePJ6 />
      </View>
      <MKTypography variant="h3" mb={1} >Paper Publication</MKTypography>
     <MKTypography variant="body2" mb={2}><ul><li>energy sensing by applying expertise in sensing, </li>
     <li>low-power sensing, and energy sensing by applying expertise in sensing, signal processing, embedded systems, circuits, and human-computer interaction. </li>
     <li>mproving UE Energy Efficiency through Network-aware Video Streaming over 5G, IEEE Transactions on Network and Service Management </li>
     </ul>
      </MKTypography>
      <MKTypography variant="h3" mb={1} >Details</MKTypography>
      <MKTypography variant="body2" mb={2}><ul><li>DisProTrack: Distributed Distributed Provenance Tracking over Silent Serverless Applications</li>
     <li>low-power sensing, and energy sensing by applying expertise in sensing, signal processing, embedded systems, circuits, and human-computer interaction. </li>
     <li>mproving UE Energy Efficiency through Network-aware Video Streaming over 5G, IEEE Transactions on Network and Service Management </li>
     </ul>
      </MKTypography>
    </BaseLayout>
  );
}

export default PageHeadersPJ6;
