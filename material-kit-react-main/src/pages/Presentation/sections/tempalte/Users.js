import React from 'react';
import users from "./data.js";
import { useParams } from "react-router-dom";
import HeaderOne from 'layouts/sections/page-sections/page-headers/components/HeaderOne';
import headerOneCode from "layouts/sections/page-sections/page-headers/components/HeaderOne/code";
import View from 'layouts/sections/components/View';
import BaseLayout from 'layouts/sections/components/BaseLayout';
import MKTypography from 'components/MKTypography/index.js';

export const Users = () => {
    const params = useParams();
    const userId = params.userid;
    const user = users.find((user) => user.id === userId);
    if (!user) {
        // Handle the case when the user is not found
        return <div>User not found</div>;
      }

    return (
        <div>
        
            
           
            {/* Pass title and description as strings */}
            
            <BaseLayout 
      title=""
      breadcrumb={[
        { label: "Page Sections", route: "/sections/page-sections/page-headers" },
        { label: "" },
      ]} >
      <View title="" code={headerOneCode} height="40rem">
      <HeaderOne title={user.name} description={user.address}/>
      </View>
     <MKTypography variant="h3" mb={0}>Publication</MKTypography> 
     <MKTypography variant="body2" mb={0}> {user.paper}</MKTypography>
     <MKTypography variant="h3" mb={0}>Details</MKTypography> 
     <MKTypography variant="body2" mb={-2}> {user.details}</MKTypography>
    
    </BaseLayout>
    
            
        </div>
    );
}
