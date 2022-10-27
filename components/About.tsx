import React from "react";
import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import { styled } from "@mui/material/styles";

const AboutBox = styled(Box)(({ theme }) => ({
  width: "100%",
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
            <Typography sx={{ color: "#08173B" }} variant="subtitle1">
              {" "}
              Cirurgião Plastico
            </Typography>
            <Typography sx={{ color: "#08173B" }} variant="h4">
              {" "}
              Dr Igor Castro
            </Typography>
            <Typography sx={{ color: "#08173B" }}>
              {" "}
              Formado pela prestigiada Universidade de Brasília - UnB, ingressou
              em 2016 na residência no Hospital das Clínicas da Faculdade de
              medicina da USP onde realizou sua especialização primeiro como
              Cirurgião Geral e em seguida com Cirurgião Plástico no maior
              complexo hospitalar da América Latina. Durante a residência
              completou ainda Fellowship em Lipoaspiração HD na Clínica Schmitt
              em Santa Catarina (SC) Após residência de cirurgia plástica,
              realizou mais uma subespecialização com Fellowship de Cirurgia de
              Contorno Corporal Pós-bariátrica também no Hospital das Clínicas
              da Faculdade de medicina da USP. Membro da Sociedade Brasileira de
              Cirurgia Plástica e possui título de especialista pela Associação
              Médica Brasileira (AMB) e pela Sociedade Brasileira de Cirurgia
              Plástica (SBCP). É também Membro do Conselho Regional de Medicina
              de São Paulo desde 2016. Atualmente, tem sua prática clínica
              fixada em São Paulo, onde atende pacientes de todo o Brasil.{" "}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              width: "50%",
              height: "820px",
              position: "relative",
            }}
          >
            <Image
              src="/aboutprofile.png"
              layout="fill"
              height={820}
              width={528}
              alt="Foto do Dr Igor Castro"
            />
          </Box>
        </AboutBox>
      </Container>
    </Box>
  );
};

export default About;
