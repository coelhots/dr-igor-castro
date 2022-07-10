import React from "react";
import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import { styled } from "@mui/material/styles";

const AboutBox = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  flexDirection: "row",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
}));

const About = () => {
  return (
    <Container
      sx={{
        backgroundColor: "#214087",
      }}
    >
      <AboutBox>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            width: "300px",
          }}
        >
          <Typography variant="subtitle1"> Cirurgião Plastico</Typography>
          <Typography variant="h4"> Dr Igor Castro</Typography>
          <Typography>
            {" "}
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book. It has survived
            not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum
            passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.{" "}
          </Typography>
        </Box>
        <Image
          src="/fotoabout.png"
          width={433}
          height={577}
          alt="Foto do Dr Igor Castro"
        ></Image>
      </AboutBox>
    </Container>
  );
};

export default About;
