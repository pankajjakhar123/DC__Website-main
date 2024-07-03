// App.js
import React, { useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import UserDetails from "pages/Presentation/sections/tempalte/UserDetails";
import { Users } from "pages/Presentation/sections/tempalte/Users";
import theme from "assets/theme";
import Presentation from "layouts/pages/presentation";
import routes from "routes";
// Create a global variable for dynamicLink
window.dynamicLink = ""; // Set an initial value

const App = () => {
  const { pathname } = useLocation();
  // const [dynamicLink, setDynamicLink] = useState("");

  // useEffect(() => {
    // Update the dynamic link whenever the pathname changes
    // const newDynamicLink = `http://${window.location.hostname}:/users/`;
    
    // setDynamicLink(newDynamicLink);

    // Update the global variable for external access
    // window.dynamicLink = newDynamicLink;
  // }, [pathname]);

  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.route) {
        return <Route exact path={route.route} element={route.component} key={route.key} />;
      }

      return null;
    });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        {getRoutes(routes)}
        <Route path="/presentation" element={<Presentation />} />
        <Route path="*" element={<Navigate to="/presentation" />} />
        <Route path="/users" element={<UserDetails />} />
        <Route path="/users/:userid" element={<Users />} />
      </Routes>
      
      {/* Render a link with the dynamicLink variable */}
      {/* <p>Dynamic Link: <a href={dynamicLink} target="_blank" rel="noopener noreferrer">{dynamicLink}</a></p> */}
    </ThemeProvider>
  );
};

export default App;
