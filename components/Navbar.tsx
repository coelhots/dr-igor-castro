import React from "react";
import { AppBar, Container, Box, Typography, Hidden } from "@mui/material";
import { styled } from "@mui/material/styles";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import Link from "@mui/material/Link";
import Image from "next/image";

const CustomNavBar = styled(AppBar)({
  height: "56px",
  backgroundColor: "#08173B",
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
  alignItems: "center",
  color: "#CFCFCF",
  fontFamily: "'Quicksand', sans-serif",
  cursor: "pointer",
  textDecoration: "none",
  fontSize: "1.125rem",
});

const Navbar = () => {
  return (
    <>
      <CustomNavBar position="fixed">
        <Wrapper>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <LinkConfig rel="noopener" underline="none" href="/">
              <Image
                alt="Logo I de Igor C de Castro"
                src="/logo-sem-nome.png"
                width="50px"
                height="50px"
              />
              <Typography sx={{ fontSize: "1.125rem", color: "#CFCFCF" }}>
                Dr. Igor Castro
              </Typography>
            </LinkConfig>
          </Box>

          <Hidden smDown>
            <LinkConfig
              rel="noopener"
              underline="none"
              href="https://www.instagram.com/dr.igorcastro/"
              target="_blank"
            >
              <InstagramIcon sx={{ color: "CFCFCF" }} />
            </LinkConfig>
          </Hidden>

          <Hidden smDown>
            <LinkConfig
              rel="noopener"
              underline="none"
              href="https://wa.me/5511930976117"
              target="_blank"
            >
              <WhatsAppIcon sx={{ mr: 0.5 }} />
              Entre em contato
            </LinkConfig>
          </Hidden>
        </Wrapper>
      </CustomNavBar>
      <Box mb="56px" />
    </>
  );
};
export default Navbar;
