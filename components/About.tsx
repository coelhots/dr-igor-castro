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
          <Box
            mt={["20px", "20px", "0px"]}
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              width: "50%",
            }}
          >
            <Typography sx={{ color: "#08173B" }} variant="h5">
              {" "}
              Cirurgião Plástico
            </Typography>
            <Typography sx={{ color: "#08173B", marginBottom: "16px" }} variant="h3">
              {" "}
              Dr. Igor Castro
            </Typography>
            <Typography sx={{ color: "#08173B" }}>
              {" "}
              Formado pela prestigiada Universidade de Brasília - UnB, ingressou
              em 2016 na residência no Hospital das Clínicas da Faculdade de
              medicina da USP onde realizou sua especialização primeiro como
              Cirurgião Geral e em seguida com Cirurgião Plástico no maior
              complexo hospitalar da América Latina.{" "}
            </Typography>
            <br/>
            <Typography sx={{ color: "#08173B" }}>
              {" "}
              Aprovado no título da Sociedade Brasileira de Cirurgia Plástica,
              também ingressou no programa de Fellowship (pós graduação) em
              Contorno Corporal e Cirurgia Pós Bariátrica (ICHC-USP/SP) onde
              aprimorou diversas técnicas de reconstrução e aperfeiçoamento do
              contorno corporal.{" "}
            </Typography>
            <br/>
            <Typography sx={{ color: "#08173B" }}>
              {" "}
              É Membro da Sociedade Brasileira de Cirurgia Plástica e possui
              título de especialista pela Associação Médica Brasileira (AMB) e
              pela Sociedade Brasileira de Cirurgia Plástica (SBCP). É Membro do
              Conselho Regional de Medicina de São Paulo desde 2016.{" "}
            </Typography>
            <br/>
            <Typography sx={{ color: "#08173B" }}>
              {" "}
              Atualmente atua em São Paulo nos maiores hospitais da cidade, com
              foco em cirurgias corporais estéticas e reconstrutoras de mama,
              abdome, membros e face.{" "}
            </Typography>
          </Box>
          <Hidden smUp>
            <Box
              sx={{
                display: "flex",
                width: "80%",
                height: "600px",
                position: "relative",
              }}
            >
              <Image
                src="/aboutphoto.png"
                layout="fill"
                alt="Foto do Dr Igor Castro"
              />
            </Box>
          </Hidden>
          <Hidden smDown>
            <Box
              sx={{
                display: "flex",
                width: "35%",
                height: "700px",
                position: "relative",
              }}
            >
              <Image
                src="/aboutphoto.png"
                layout="fill"
                alt="Foto do Dr Igor Castro"
              />
            </Box>
          </Hidden>
        </AboutBox>
      </Container>
    </Box>
  );
};

export default About;