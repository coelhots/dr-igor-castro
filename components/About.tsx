import React from "react";
import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import { styled } from "@mui/material/styles";
import Button from '@mui/material/Button';

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

const ButtonSobreMim = styled(Button)({
  marginTop: "16px",
  backgroundColor: "#08173B",
  marginRight: "16px",
  fontWeight: "700",
  '&:hover': {
    backgroundColor: '#052C87',
    boxShadow: 'none',}
});

const ButtonAgendarConsulta = styled(Button)({
  marginTop: "16px",
  backgroundColor: "#CFCFCF",
  color: "#08173B",
  fontWeight: "700",
  '&:hover': {
    backgroundColor: '#4F4F4F',
    boxShadow: 'none',}
});

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
            <Box>
              <ButtonSobreMim variant="contained" href="/sobre">Sobre Mim</ButtonSobreMim>
              <ButtonAgendarConsulta variant="contained" href="https://wa.me/5511981045189">Agendar Consulta</ButtonAgendarConsulta>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              height: "700px",
              width: "35%",
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
