/**
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

/** 
  All of the  for the Material Kit 2 React are added here,
  You can add a new route, customize the routes and delete the routes here.

  Once you add a new route on this file it will be visible automatically on
  the Navbar.

  For adding a new route you can follow the existing routes in the routes array.
  1. The `name` key is used for the name of the route on the Navbar.
  2. The `icon` key is used for the icon of the route on the Navbar.
  3. The `collapse` key is used for making a collapsible item on the Navbar that contains other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  4. The `route` key is used to store the route location which is used for the react router.
  5. The `href` key is used to store the external links location.
  6. The `component` key is used to store the component of its route.
  7. The `dropdown` key is used to define that the item should open a dropdown for its collapse items .
  8. The `description` key is used to define the description of
          a route under its name.
  9. The `columns` key is used to define that how the content should look inside the dropdown menu as columns,
          you can set the columns amount based on this key.
  10. The `rowsPerColumn` key is used to define that how many rows should be in a column.
*/

// @mui material components
import Icon from "@mui/material/Icon";

// @mui icons
// import GitHubIcon from "@mui/icons-material/GitHub";

// Pages

// import AboutUs from "layouts/pages/landing-pages/about-us";
// import ContactUs from "layouts/pages/landing-pages/contact-us";
// import Author from "layouts/pages/landing-pages/author";
// import SignIn from "layouts/pages/authentication/sign-in";


import PageHeadersPJ1 from "layouts/sections/elements/PJ1";
import PageHeadersPJ2 from "layouts/sections/elements/PJ2";
import PageHeadersPJ3 from "layouts/sections/elements/PJ3";
import PageHeadersPJ4 from "layouts/sections/elements/PJ4";
import PageHeadersPJ5 from "layouts/sections/elements/PJ5";
import PageHeadersPJ6 from "layouts/sections/elements/PJ6";



// Sections
import PageHeaders1 from "layouts/sections/page-sections/TA1";
import PageHeaders2 from "layouts/sections/page-sections/TA2";
import PageHeaders3 from "layouts/sections/page-sections/TA3";
import PageHeaders4 from "layouts/sections/page-sections/TA4";
import PageHeaders5 from "layouts/sections/page-sections/TA5";
import PageHeaders6 from "layouts/sections/page-sections/TA6";
import PageHeaders7 from "layouts/sections/page-sections/TA7";
import PageHeaders8 from "layouts/sections/page-sections/TA8";
import PageHeaders9 from "layouts/sections/navigation/navbars";
import PageHeaders10 from "layouts/sections/navigation/LA2";
// import PageHeadersR1 from "layouts/sections/page-sections/RC1";


import PageHeadersRCP1 from "layouts/sections/elements/RCP";
import PageHeadersRCP2 from "layouts/sections/elements/RCP1";
import PageHeadersRCP3 from "layouts/sections/elements/RCP2";
import PageHeadersRCP4 from "layouts/sections/elements/RCP3";


import PageHeadersRJP2 from "layouts/sections/elements/RJP2";
import PageHeadersRJP3 from "layouts/sections/elements/RJP3";
import PageHeadersRJP4 from "layouts/sections/elements/RJP4";
import PageHeadersJP1 from "layouts/sections/elements/RJP1";


// import PageHeaders from "layouts/sections/page-sections/page-headers";
// import Features from "layouts/sections/page-sections/featuers";
// import Navbars from "layouts/sections/navigation/navbars";
// import NavTabs from "layouts/sections/navigation/nav-tabs";
// import Pagination from "layouts/sections/navigation/pagination";
// import Inputs from "layouts/sections/input-areas/inputs";
// import Forms from "layouts/sections/input-areas/forms";
// import Alerts from "layouts/sections/attention-catchers/alerts";
import Alerts1 from "layouts/sections/attention-catchers/SA";
// import Modals from "layouts/sections/attention-catchers/modals";
// import TooltipsPopovers from "layouts/sections/attention-catchers/tooltips-popovers";
// import Avatars from "layouts/sections/elements/avatars";
import Alerts09 from "layouts/sections/attention-catchers/Interns";
import Badges from "layouts/sections/elements/badges";
import BreadcrumbsEl from "layouts/sections/elements/breadcrumbs";
import Buttons from "layouts/sections/elements/buttons";
import Dropdowns from "layouts/sections/elements/dropdowns";
import ProgressBars from "layouts/sections/elements/progress-bars";
import Toggles from "layouts/sections/elements/toggles";
import Typography from "layouts/sections/elements/typography";
// import Solve from "pages/Presentation/sections/DC Publication/cse.iitkgp.ac.in/resgrp/ubinet/publications/index2";
// import HeaderOneRCP1 from "layouts/sections/elements/RCP/components";
// import HeaderOneR1 from "layouts/sections/page-sections/RC1/components";

const routes = [
  {
    name: "Home",
    icon: <Icon>dasboard</Icon>,
    href:<a href="/"></a>
   
  },
  {
    name: "Team",
    icon: <Icon>view_day</Icon>,
    collapse: [
      {
        name: <a href="#MeetTeam">Meet the Team</a>,
        description: " ",
        collapse :[]
      },
      
        // name: <a href="#Current">Current Students</a>,
        // description: " ",
        // dropdown: true,
        // collapse: [
  
        //   {
        //     name: "Garvit Chugh",
        //     route: "/sections/page-sections/TA1",
        //     component: <PageHeaders1 />,
        //   },
        //   {
        //     name: "Ananya Mondal",
        //     route: "/sections/page-sections/TA2",
        //     component: <PageHeaders2 />,
        //   },
        //   {
        //     name: "Osho",
        //     route: "/sections/page-sections/TA3",
        //     component: <PageHeaders3 />,
        //   },
        //   {
        //     name: "Kondagurle Sukitha",
        //     route: "/sections/page-sections/TA4",
        //     component: <PageHeaders4 />,
        //   },
        //   {
        //     name: "Sushmita Mondal",
        //     route: "/sections/page-sections/TA5",
        //     component: <PageHeaders5 />,
        //   },
        //   {
        //     name: "Akhil Bhatia",
        //     route: "/sections/page-sections/TA6",
        //     component: <PageHeaders6 />,
        //   },
        //   {
        //     name: "Kamal Kumar Gola",
        //     route: "/sections/page-sections/TA7",
        //     component: <PageHeaders7 />,
        //   },
        //   {
        //     name: "Monik Raj Behera",
        //     route: "/sections/page-sections/TA8",
        //     component: <PageHeaders8 />,
        //   },
          

      //  ],
      
      
        // name: <a href="#Alumni">Lab Alumni</a>,
        // description: " ",
        //dropdown: true,
        // collapse: [
        //   {
        //     name: "Priyal Jain",
        //     route: "/sections/navigation/LA1",
        //     component: <PageHeaders9 />,
        //   },
        //   {
        //     name: "Nayanita Saha",
        //     route: "/sections/navigation/LA2",
        //     component: <PageHeaders10 />,
        //   },
         
        // ],
      
      // {
      //   name: "input areas",
      //   description: "See all input areas",
      //   dropdown: true,
      //   collapse: [
      //     {
      //       name: "inputs",
      //       route: "/sections/input-areas/inputs",
      //       component: <Inputs />,
      //     },
      //     {
      //       name: "forms",
      //       route: "/sections/input-areas/forms",
      //       component: <Forms />,
      //     },
      //   ],
      // },
      {
        
        name: <a href="#Alumni">Lab Alumni</a>,
        description: " ",
        collapse: [
          {
            name: "Priyal Jain",
            route: "/sections/navigation/LA1",
            component: <PageHeaders9 />,
          },
          {
            name: "Nayanita Saha",
            route: "/sections/navigation/LA2",
            component: <PageHeaders10 />,
          },
          
          // {
          //   name: "Alerts",
          //   route: "/sections/attention-catchers/alerts",
          //   component: <Alerts />,
          // },
          {
            name: "Alerts",
            route: "/sections/attention-catchers/SA",
            component: <Alerts1 />,
          },
          {
            name: "Alerts",
            route: "/sections/attention-catchers/Interns",
            component: <Alerts09 />,
          },
          // {
          //   name: "Alerts",
          //   route: "/sections/attention-catchers/AllProp",
          //   component: <Alerts1 />,
          // },
          // {
          //   name: "modals",
          //   route: "/sections/attention-catchers/modals",
          //   component: <Modals />,
          // },
          // {
          //   name: "",
          //   route: "/sections/attention-catchers/tooltips-popovers",
          //   component: <TooltipsPopovers />,
          // },
          
        ],
      },
      {
        name: <a href="#Current">Current Students</a>,
        description: " ",
       
        collapse: [
         
          
  
          {
            name: "Garvit Chugh",
            route: "/sections/page-sections/TA1",
            component: <PageHeaders1 />,
          },
          {
            name: "Ananya Mondal",
            route: "/sections/page-sections/TA2",
            component: <PageHeaders2 />,
          },
          {
            name: "Osho",
            route: "/sections/page-sections/TA3",
            component: <PageHeaders3 />,
          },
          {
            name: "Kondagurle Sukitha",
            route: "/sections/page-sections/TA4",
            component: <PageHeaders4 />,
          },
          {
            name: "Sushmita Mondal",
            route: "/sections/page-sections/TA5",
            component: <PageHeaders5 />,
          },
          {
            name: "Akhil Bhatia",
            route: "/sections/page-sections/TA6",
            component: <PageHeaders6 />,
          },
          {
            name: "Kamal Kumar Gola",
            route: "/sections/page-sections/TA7",
            component: <PageHeaders7 />,
          },
          {
            name: "Monik Raj Behera",
            route: "/sections/page-sections/TA8",
            component: <PageHeaders8 />,
          },
          

        

          
          {
            name: "badges",
            route: "/sections/elements/badges",
            component: <Badges />,
          },
          {
            name: "PJ1",
            route: "/sections/elements/PJ1",
            component: <PageHeadersPJ1 />,
          },
          {
            name: "PJ2",
            route: "/sections/elements/PJ2",
            component: <PageHeadersPJ2 />,
          },
          {
            name: "PJ3",
            route: "/sections/elements/PJ3",
            component: <PageHeadersPJ3 />,
          },
          {
            name: "PJ4",
            route: "/sections/elements/PJ4",
            component: <PageHeadersPJ4 />,
          },
          {
            name: "PJ5",
            route: "/sections/elements/PJ5",
            component: <PageHeadersPJ5 />,
          },
          {
            name: "PJ6",
            route: "/sections/elements/PJ6",
            component: <PageHeadersPJ6 />,
          },
          {
            name: "dropdowns",
            route: "/sections/elements/dropdowns",
            component: <Dropdowns />,
          },
          {
            name: "progress bars",
            route: "/sections/elements/progress-bars",
            component: <ProgressBars />,
          },
          {
            name: "toggles",
            route: "/sections/elements/toggles",
            component: <Toggles />,
          },
          {
            name: "typography",
            route: "/sections/elements/typography",
            component: <Typography />,
          },
          {
            name: "RCP1",
            route: "/sections/elements/RCP",
            component: <PageHeadersRCP1 />,
          },
          {
            name: "RCP2",
            route: "/sections/elements/RCP1",
            component: <PageHeadersRCP2 />,
          },
          {
            name: "RCP3",
            route: "/sections/elements/RCP2",
            component: <PageHeadersRCP3 />,
          },
          {
            name: "RCP4",
            route: "/sections/elements/RCP3",
            component: <PageHeadersRCP4 />,
          },
          {
            name: "RJP1",
            route: "/sections/elements/RJP1",
            component: <PageHeadersJP1 />,
          },
          {
            name: "RJP2",
            route: "/sections/elements/RJP2",
            component: <PageHeadersRJP2 />,
          },
          {
            name: "RJP3",
            route: "/sections/elements/RJP3",
            component: <PageHeadersRJP3 />,
          },
          {
            name: "RJP4",
            route: "/sections/elements/RJP4",
            component: <PageHeadersRJP4 />,
          },
          {
            name: "breadcrumbs",
            route: "/sections/elements/breadcrumbs",
            component: <BreadcrumbsEl />,
          },
          {
            name: "buttons",
            route: "/sections/elements/buttons",
            component: <Buttons />,
          },
       
          {
            name: "buttons",
            route: "/sections/elements/buttons",
            component: <Buttons />,
          },
        ],
      },
    ],
  },
  {
    name: <a href="#Lab" style={{color:"	#606060"}}>News</a>,
    href:<a href="#Lab" style={{color:"	#606060"}}></a>
  //   icon: <Icon>article</Icon>,
  //   collapse: [
  //     {
  //       name: "getting started",
  //       description: "All about overview, quick start, license and contents",
  //       href: "https://www.creative-tim.com/learning-lab/react/quick-start/material-kit/",
  //     },
  //     {
  //       name: <div><a href="./layouts/sections/elements/DC Publication/cse.iitkgp.ac.in/resgrp/ubinet/publications">Pun</a></div>,
  //       description: "All about overview, quick start, license and contents",
  //       // href: "/sections/elements/DC Publication/cse.iitkgp.ac.in/resgrp/ubinet/publications",
  //     },
  //     {
  //       name: "foundation",
  //       description: "See our colors, icons and typography",
  //       href: "https://www.creative-tim.com/learning-lab/react/colors/material-kit/",
  //     },
  //     {
  //       name: "components",
  //       description: "Explore our collection of fully designed components",
  //       href: "https://www.creative-tim.com/learning-lab/react/alerts/material-kit/",
  //     },
  //     {
  //       name: "plugins",
  //       description: "Check how you can integrate our plugins",
  //       href: "https://www.creative-tim.com/learning-lab/react/datepicker/material-kit/",
  //     },
  //   ],
  },
  
  {
    name: "Papers",
    // icon: <GitHubIcon/>,
    href: "https://www.github.com/creativetimofficial/material-kit-react",
  },
  {
    name: <a href="#Projects1" style={{color:"	#606060"}}>Projects</a>,
    // icon: <GitHubIcon/>,
    href: <a href="#Projects1"></a>,
  },
  {
    name: <a href="#Courses1" style={{color:"	#606060"}}>Courses</a>,
    // icon: <GitHubIcon/>,
    href: <a href="#Courses1"></a>,
  },
  {
    name: <a href="#Photos1" style={{color:"	#606060"}}>Photos</a>,
    // icon: <GitHubIcon/>,
    href: <a href="#Photos1"></a>,
  },
  {
    name: <a href="#Photos1" style={{color:"	#606060"}}>Contact</a>,
    // icon: <GitHubIcon/>,
    href: <a href="#Photos1"></a>,
  },
];

export default routes;