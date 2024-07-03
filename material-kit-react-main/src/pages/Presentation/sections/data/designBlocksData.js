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
import garvit from "./TA/garvitchugh.jpg";
import ana from "./TA/ananyamondal.png"
import osho from "./TA/osho.jpeg";
import kong from "./TA/kondagurlesukitha.jpg";
import susmita from "./TA/Susmita.jpeg";
import akhil from "./TA/akhilbhatia.jpeg";
import kamal from "./TA/kamalgola.jpeg";
import mohik from "./TA/monikraj.jpeg";
// import priyal from "./TA/priyal.jpeg";
// import saha from "./TA/nayanita.jpeg";
import MKTypography from "components/MKTypography";
// import HeaderOne from "layouts/sections/page-sections/page-headers/components/HeaderOne";

export default [
  {
    title: <div><MKTypography variant="h2" fontWeight="bold" sx={{  position: 'sticky',marginTop: '-100px' , marginBottom:"-100px" }}>
   <section id="Current"></section><div style={{  position: 'sticky'}}>Current Students</div>
 </MKTypography>
 <MKTypography variant="h4" fontWeight="bold" sx={{ position: 'sticky', marginTop: '100px' , marginBottom:"-60px" }}>
   <section id="Current"></section>PhD Scholar
  </MKTypography>
 </div>,
    items:
     [
      
      {
        image: garvit,
        name: "Garvit Chugh",
        count: "PhD Scholar",
        des: "Mobile and Pervasive Computing",
       
        // route: "https://chughgarvit.github.io/",
        route : "/sections/page-sections/TA1",

      },
      {
        image: ana,
        name: "Ananya Mondal",
        count: "PhD Scholar",
        des:"IoT, Sensing as a Software",
        route: "/sections/page-sections/TA2",
      },
      {
        image: osho,
        name: "Osho",
        count: "PhD Scholar",
        des: "Next-gen vehicular network",
        route:"/sections/page-sections/TA3",
      },
      {
        image: kong,
        name: "Kondagurle Sukitha",
        count: "PhD Scholar",
        des: "CPS Security",
        route: "/sections/page-sections/TA4",
      },
      {
        image:susmita,
        name: "Susmita Mondal",
        count: "PhD Scholar",
        des :"Blockchain, Cryptography and Network Security",
        route: "/sections/page-sections/TA5",
      },
      
    ],

  },
  {
    title: <div>
  <MKTypography variant="h4" fontWeight="bold" sx={{ position: 'sticky', marginTop: '10px' , marginBottom:"-80px" }}>
    <section id="Current"></section>Part Time Phd Scholar
   </MKTypography>
  </div>,
   items:
   [
    {
      image: akhil,
      name: "Akhil Bhatia",
      count: "Part Time PhD Scholar",
      des: "Cloud and distributed computing",
      route: "/sections/page-sections/TA6"
    },
    {
      image: kamal,
      name: "Kamal Kumar Gola",
      count: "Part Time PhD Scholar",
      des : "Under water WSN",
      route : "/sections/page-sections/TA7",
    },
  ]


  },
  {
    title: <div>
    <MKTypography variant="h4" fontWeight="bold" sx={{ position: 'sticky', marginTop: '10px' , marginBottom:"-130px" }}>
      <section id="Current"></section>Executive Students
     </MKTypography>
    </div>,
     items:
     [
      {
        image: mohik,
        name: "Monik Raj Behera",
        count: "Executive MTech Scholar",
        des :"Federated Learning in a P2P",
        route :"/sections/page-sections/TA8",
      }
    ]
  
  },
  // {
  //   title: <div style={{ marginBottom:"-500px"}}><section id="Alumni"></section>Lab Alumni</div>,
  //   description: "30+ components that will help go through the pages",
  //   items: [
  //     {
  //       image: priyal,
  //       name: "Priyal Jain",
  //       count: "MTech Scholar",
  //       des :"CPS Security",
  //       route: "/sections/navigation/LA1",
  //     },
  //     {
  //       image: saha,
  //       name: "Nayanita Saha",
  //       count: "MTech Scholar",
  //       des: "IoT, Sensing as a Service",
  //       route: "/sections/navigation/LA2",
  //     },
  
  //   ],
  // },
  

  
];

