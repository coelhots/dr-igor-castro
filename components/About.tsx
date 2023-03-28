import React from "react";
import { Box, Container, Hidden, Typography } from "@mui/material";
import Image from "next/image";
import { styled } from "@mui/material/styles";

const AboutBox = styled(Box)(({ theme }) => ({
  width: "100%",
  marginTop: "26px",
  marginBottom: "26px",
  display: "flex",
  justifyContent: "center",
  flexDirection: "row",
  alignItems: "center",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
}));

const MarginAboutBox = styled(Box) (({ theme }) => ({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  width: "50%",
  [theme.breakpoints.down("sm")]: {
  width: "90%",
  },
}));

const StyleText = styled(Typography) (({ theme }) => ({
  color: "#08173B", 
  fontWeight: "600"
}));

const StyleImg = styled(Box) (({ theme }) => ({
  display: "flex",
  position: "relative",
  [theme.breakpoints.up("md")]: {
    width: "35%",
    height: "700px",
  },
  [theme.breakpoints.down("md")]: {
    width: "45%",
    height: "600px",
  },
  [theme.breakpoints.down("sm")]: {
    width: "60%",
    height: "450px",
  },
}))

const About = () => {
  return (
    <Box
      component="section"
      sx={{
        backgroundColor: "#white",
      }}
    >
      <Container>
        <AboutBox>
          <MarginAboutBox
            mt={["20px", "20px", "0px"]}
          >
            <StyleText variant="h5">
              {" "}
              Cirurgião Plástico
            </StyleText>
            <StyleText sx={{ marginBottom: "16px" }} variant="h3">
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
              />
          </StyleImg>
        </AboutBox>
      </Container>
    </Box>
  );
};

export default About;