import { Box, Container, Typography } from "@mui/material"
import React from "react"
import { styled } from "@mui/material/styles"

const Wrapper = styled(Container)(
  {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    maxHeight: "400px"
  }
)

const Header = () =>{
  return(
      <Wrapper sx={{
        mt: "56px"
      }}>
        <Typography sx={{flexGrow: 2}}>Dr. Janela Bolado</Typography>

        <Box component="img"
        alt="Janela Bolado"
        src="/janela.jpg"
        sx={{
          flexGrow: 3,
          height: "100%",
        }}
        >
        </Box>
      </Wrapper>
)
}
export default Header