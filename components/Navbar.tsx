import React from "react";
import { AppBar, IconButton, Container, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import Link from "@mui/material/Link";

const CustomNavBar = styled(AppBar)({
  height: "56px",
  backgroundColor: "#333333",
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
  color: "white",
  fontFamily: "'Work Sans', sansSerif",
  fontSize: "1.125rem",
});

const Navbar = () => {
  return (
    <>
      <CustomNavBar position="sticky">
        <Wrapper>

          <IconButton></IconButton>

          <IconButton>
            <LinkConfig rel="noopener" underline="none" href="https://www.instagram.com/dr.igorcastro/" target="_blank">
              <InstagramIcon sx={{ color: "white" }} />
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
