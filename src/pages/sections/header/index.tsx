import {
  Box,
  Button,
  Callout,
  Container,
  Flex,
  Grid,
  TextField,
} from "@radix-ui/themes";
import logo from "../../../assets/Logo.png";
import {
  HeartIcon,
  MagnifyingGlassIcon,
  UserSquareIcon,
} from "@phosphor-icons/react";
export function Header() {
  return (
    <>
      <Box>
        <Container pt={"3"} size="2">
          <Flex  gap="2" align={"center"}>
            <img id="home" width={100} height={100} src={logo} alt="" />
            <Callout.Root color="amber">
              <Grid
                columns={{ initial: "1", sm: "2" }}
                gap="1"
                rows="repeat(2, 3)"
                justify={"center"}
                width={"auto"}
              >
                <TextField.Root size={"2"} placeholder="Pesquise por Ofertas">
                  <TextField.Slot>
                    <MagnifyingGlassIcon height="16" width="16" />
                  </TextField.Slot>
                </TextField.Root>
                <Flex align={"center"} gap={"1"}>
                  <Button>
                    <HeartIcon /> Lista de Desejos
                  </Button>
                  <Button>
                    <UserSquareIcon /> Fazer Login
                  </Button>
                </Flex>
              </Grid>
            </Callout.Root>
          </Flex>
        </Container>
      </Box>
    </>
  );
}
