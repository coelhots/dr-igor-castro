import { CardMedia, Container, Typography, Box } from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";

const LogoJanela = styled(Typography)({
  position: "absolute",
});

const Header = () =>{
  return (
    <Box>
      <Box sx={{position: "relative"}}>
        <CardMedia sx={{filter: "brightness(35%)"}}
              component="video"
              autoPlay
              loop
              muted
              src="/pexels-ron-lach-7584602.mp4"
              />
        <Box sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: "100%",
        color: 'white',
      }}>
          <Box sx={{ display: "flex", alignItems: "center",justifyContent: "center"}}>
            <img alt="Logo I de Igor C de Castro" src="/logo-sem-nome.png" width="120px" height="120px"/>
            <Typography sx={{fontFamily: "'Quicksand', sans-serif"}}>Dr. Igor Castro</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
    
  );
};

export default Header
