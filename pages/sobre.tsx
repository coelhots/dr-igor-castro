import React from "react";
import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import { styled } from "@mui/material/styles";
import Navbar from "../components/Navbar";
import Fab from "@mui/material/Fab";
import { Hidden } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Link from "@mui/material/Link";

const WhatsAppLink = styled(Link)({
    zIndex: "999",
    position: "fixed",
    left: "5%",
    bottom: "2.5%",
  });
  
  const WhastAppFab = styled(Fab)({
    color: "white",
    backgroundColor: "#25d366",
    "&:hover": {
      backgroundColor: "#25d366",
      color: "white",
    },
  });

const AboutBox = styled(Box)(({ theme }) => ({
  width: "100%",
  marginTop: "82px",
  marginBottom: "26px",
  display: "flex",
  justifyContent: "center",
  flexDirection: "row",
  alignItems: "center",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
}));

export default function about() {
    return (
        <>
            <Navbar />
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
                        Cirurgião Plastico
                        </Typography>
                        <Typography sx={{ color: "#08173B" }} variant="h2">
                        {" "}
                        Dr. Igor Castro
                        </Typography>
                        <Typography sx={{ color: "#08173B" }}>
                        {" "}
                        Formado pela prestigiada Universidade de Brasília - UnB, ingressou
                        em 2016 na residência no Hospital das Clínicas da Faculdade de
                        medicina da USP onde realizou sua especialização primeiro como
                        Cirurgião Geral e em seguida com Cirurgião Plástico no maior
                        complexo hospitalar da América Latina. Durante a residência
                        completou ainda Fellowship em Lipoaspiração HD na Clínica Schmitt
                        em Santa Catarina (SC). Após residência de cirurgia plástica,
                        realizou mais uma subespecialização com Fellowship de Cirurgia de
                        Contorno Corporal Pós-bariátrica também no Hospital das Clínicas
                        da Faculdade de medicina da USP.{" "}
                        </Typography>
                        <br/>
                        <Typography>{" "}Membro da Sociedade Brasileira de
                        Cirurgia Plástica e possui título de especialista pela Associação
                        Médica Brasileira (AMB) e pela Sociedade Brasileira de Cirurgia
                        Plástica (SBCP). É também Membro do Conselho Regional de Medicina
                        de São Paulo desde 2016. Atualmente, tem sua prática clínica
                        fixada em São Paulo, onde atende pacientes de todo o Brasil.{" "}</Typography>
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
                        src="/aboutphoto.png"
                        layout="fill"
                        alt="Foto do Dr Igor Castro"
                        />
                    </Box>
                    </AboutBox>
                </Container>
                </Box>
        <Hidden smUp>
            <WhatsAppLink
            rel="noopener"
            underline="none"
            href="https://wa.me/5511981045189"
            target="_blank"
            >
            <WhastAppFab aria-label="WhatsApp">
                <WhatsAppIcon />
            </WhastAppFab>
            </WhatsAppLink>
        </Hidden>
        </>
    )
}