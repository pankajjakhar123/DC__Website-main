import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

export default styled(Box)(({ theme }) => {
  const {  typography, borders, functions } = theme;
  // const { white } = palette; // Import the grey color from the palette
  const { fontSizeRegular, fontWeightMedium } = typography;
  const { borderRadius } = borders;
  const { pxToRem } = functions;

  // Use a solid color for the background
  // const backgroundColorValue = ownerState.color ? palette.gradients[ownerState.color].main : palette.gradients.info.main;

  return {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    minHeight: pxToRem(60),
    backgroundColor: "", // Use the solid color here
   
    position: "relative",
    padding: pxToRem(16),
    marginBottom: pxToRem(16),
    borderRadius: borderRadius.md,
    fontSize: fontSizeRegular,
    fontWeight: fontWeightMedium,
  };
});
