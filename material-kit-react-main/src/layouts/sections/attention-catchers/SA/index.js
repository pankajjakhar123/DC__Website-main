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
import BaseLayout from "layouts/sections/components/BaseLayout";
import View from "layouts/sections/components/View";

// ALerts page components
import SimpleAlerts1 from "./components/SimpleAlerts";

// ALerts page components code
import simpleAlertsCode from "layouts/sections/attention-catchers/alerts/components/SimpleAlerts/code";

function Alerts1() {
  return (
    <BaseLayout
      title="Student Accomplishments"
      breadcrumb={[
        { label: "", route: "/sections/attention-catchers/SA" },
        { label: "" },
      ]}
    >
      <View title="" code={simpleAlertsCode}>
        <SimpleAlerts1 />
      </View>
    </BaseLayout>
  );
}

export default Alerts1;
