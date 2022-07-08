import { CardMedia, Container, Typography, Box } from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";

const AbsoluteLogo = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: "100%",
  color: 'white',
});

const Header = () =>{
  return (
    <Box>
      <Box sx={{position: "relative", height: "calc(100vh - 56px)"}}>
        <CardMedia sx={{filter: "brightness(35%)", height:"100%", objectFit: "cover"}}
              component="video"
              playsInline
              autoPlay
              loop
              muted
              src="/video.mp4"
              />
        <AbsoluteLogo>
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center"}}>
            <img alt="Logo I de Igor C de Castro" src="/logo-sem-nome.png" width="200px" height="200px"/>
            <Box>
              <Typography sx={{color: "#CFCFCF"}} variant="h4">Dr. Igor Castro</Typography>
              <Typography sx={{color: "#CFCFCF"}} variant="subtitle1"> Cirurgião Plástico </Typography>
              <Typography sx={{color: "#CFCFCF"}} variant="subtitle2"> CRM 179.023 </Typography>
            </Box>
          </Box>
        </AbsoluteLogo>
      </Box>
    </Box>
    
  );
};

export default Header
