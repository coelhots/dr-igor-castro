import React from "react";
import { AppBar, IconButton, Container, Box, CardMedia, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import Link from "@mui/material/Link";

const CustomNavBar = styled(AppBar)({
  height: "56px",
  backgroundColor: "#214087",
});

const Wrapper = styled(Container)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
  height: "100%",
});

const LinkConfig = styled(Link)({
  display: "flex",
  justifyContent: "center",
  color: "#CFCFCF",
  fontFamily: "'Quicksand', sans-serif",
  fontSize: "1.125rem",
});

const Navbar = () => {
  return (
    <>
      <CustomNavBar position="fixed">
        <Wrapper>
          <IconButton>
            <Box sx={{ display: "flex", alignItems: "center",justifyContent: "center" }}>
            <img alt="Logo I de Igor C de Castro" src="/logo-sem-nome.png" width="50px" height="50px"/>
              <Typography sx={{fontFamily: "'Quicksand', sans-serif", color: "#CFCFCF"}}>Dr. Igor Castro</Typography>
            </Box>

          </IconButton>

          <IconButton>
            <LinkConfig rel="noopener" underline="none" href="https://www.instagram.com/dr.igorcastro/" target="_blank">
              <InstagramIcon sx={{ color: "CFCFCF" }} />
            </LinkConfig>
          </IconButton>

          <IconButton>
            <LinkConfig rel="noopener" underline="none" href="https://wa.me/5511981045189" target="_blank">
              <WhatsAppIcon sx={{ mr: 0.5 }} />
              Entre em contato
            </LinkConfig>
          </IconButton>

        </Wrapper>
      </CustomNavBar>
      <Box mb="56px"/>
    </>
  );
};
export default Navbar;
