import React from "react";
import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import { styled } from "@mui/material/styles";

const AboutBox = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  paddingBottom: "26px",
  paddingTop: "26px",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "row",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
}));

const MarginAboutBox = styled(Box) (({ theme }) => ({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
  width: "100%",
  [theme.breakpoints.down("sm")]: {
  width: "90%",
  },
}));

const StyleText = styled(Typography) (({}) => ({
  color: "#08173B", 
  fontWeight: "500",
  textAlign: "justify",
}));

const LogoBox = styled(Box) (({theme}) => ({
  display: "flex",
  width: "30%",
  flexDirection: "column",
  justifyContent: "space-evenly",
  marginLeft: "30px",
  gap: "20px",
  [theme.breakpoints.down("sm")]: {
    marginTop: "20px",
    marginLeft: "10px",
    marginRight: "10px",
    flexDirection: "row",
    justifyContent:"space-evenly",
    width: "90%",
    height: "40px",
    gap: "15px"
  },
}));

const StyleImg = styled(Box) (({ theme }) => ({
  display: "flex",
  position: "relative",
  width: "100%",
  marginTop: "20px",
  [theme.breakpoints.up("md")]: {
    height: "750px",
  },
  [theme.breakpoints.down("md")]: {
    height: "600px",
  },
  [theme.breakpoints.down("sm")]: {
    height: "450px",
  },
}))

const About = () => {
  return (
    <Box
      component="section"
      sx={{
        backgroundColor: "#FAFAFA",
      }}
    >
      <Container>
        <AboutBox>
          <MarginAboutBox
            mt={["20px", "20px", "0px"]}
          >
            <StyleText  variant="h5">
              {" "}
              Cirurgião Plástico
            </StyleText>
            <StyleText sx={{ textAlign: "center" , marginBottom: "16px" }} variant="h3">
              {" "}
              Dr. Igor Castro
            </StyleText>
            <StyleText>
              {" "}
              Formado pela prestigiada Universidade de Brasília - UnB, ingressou
              em 2016 na residência no Hospital das Clínicas da Faculdade de
              medicina da USP onde realizou sua especialização primeiro como
              Cirurgião Geral e em seguida com Cirurgião Plástico no maior
              complexo hospitalar da América Latina.{" "}
            </StyleText>
            <br/>
            <StyleText>
              {" "}
              Aprovado no título da Sociedade Brasileira de Cirurgia Plástica,
              também ingressou no programa de Fellowship (pós graduação) em
              Contorno Corporal e Cirurgia Pós Bariátrica (ICHC-USP/SP) onde
              aprimorou diversas técnicas de reconstrução e aperfeiçoamento do
              contorno corporal.{" "}
            </StyleText>
            <br/>
            <StyleText>
              {" "}
              É Membro da Sociedade Brasileira de Cirurgia Plástica e possui
              título de especialista pela Associação Médica Brasileira (AMB) e
              pela Sociedade Brasileira de Cirurgia Plástica (SBCP). É Membro do
              Conselho Regional de Medicina de São Paulo desde 2016.{" "}
            </StyleText>
            <br/>
            <StyleText>
              {" "}
              Atualmente atua em São Paulo nos maiores hospitais da cidade, com
              foco em cirurgias corporais estéticas e reconstrutoras de mama,
              abdome, membros e face.{" "}
            </StyleText>
          </MarginAboutBox>
          <StyleImg>
            <Image
              src="/aboutphoto.png"
              layout="fill"
              alt="Foto do Dr Igor Castro"
              objectFit="contain"
            />
          </StyleImg>
          <LogoBox>
              <Image
                src="/logos/unbLogo.png"
                alt="UNB"
                width="100%"
                height="100%"
              />
              <Image
                src="/logos/uspLogo.png"
                alt="USP"
                width="100%"
                height="100%"
              />
              <Image
                src="/logos/hcLogo.png"
                alt="Hospital das Clínicas"
                width="100%"
                height="100%"
              />
              <Image
                src="/logos/sbcpLogo.png"
                alt="SBCP"
                width="100%"
                height="100%"
              />
              <Image
                src="/logos/ambLogo.png"
                alt="AMB"
                width="100%"
                height="100%"
              />
          </LogoBox>
        </AboutBox>
      </Container>
    </Box>
  );
};

export default About;