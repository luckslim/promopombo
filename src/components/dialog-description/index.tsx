import { CopyIcon, ListMagnifyingGlassIcon } from "@phosphor-icons/react";
import {
  Avatar,
  Badge,
  Box,
  Button,
  Card,
  Code,
  DataList,
  Dialog,
  Flex,
  Grid,
  IconButton,
  Link,
  Text,
} from "@radix-ui/themes";

export function DialogRadix() {
  return (
    <>
      <Dialog.Root>
        <Dialog.Trigger>
          <Button color="gray">
            <ListMagnifyingGlassIcon weight="bold" color="#ffff" />
          </Button>
        </Dialog.Trigger>

        <Dialog.Content maxWidth="300px">
          <Grid gap={"2"} justify={"center"} align={"center"}>
            <Box maxWidth={"260px"}>
              <Card>
                <Flex gap="2" align="center" justify={"center"}>
                  <Avatar
                    size="2"
                    src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
                    radius="full"
                    fallback="T"
                  />
                  <Box>
                    <Text as="div" size="1" weight="bold">
                      Teodros Girmay
                    </Text>
                    <Text as="div" size="1" color="gray">
                      Engineering
                    </Text>
                  </Box>
                </Flex>
              </Card>
            </Box>
            <DataList.Root>
              <DataList.Item align="center">
                <DataList.Label minWidth="88px">Status</DataList.Label>
                <DataList.Value>
                  <Badge color="jade" variant="soft" radius="full">
                    Disponível
                  </Badge>
                </DataList.Value>
              </DataList.Item>
              <DataList.Item>
                <DataList.Label minWidth="88px">Nome</DataList.Label>
                <DataList.Value>
                  <Flex align="center" gap="2">
                    <Code variant="ghost">Produto</Code>
                    <IconButton
                      size="1"
                      aria-label="Copy value"
                      color="gray"
                      variant="ghost"
                    >
                      <CopyIcon />
                    </IconButton>
                  </Flex>
                </DataList.Value>
              </DataList.Item>
              <DataList.Item>
                <DataList.Label minWidth="88px">Valor</DataList.Label>
                <DataList.Value>R$ 250,00</DataList.Value>
              </DataList.Item>
              <DataList.Item>
                <DataList.Label minWidth="88px">Data de Expiração</DataList.Label>
                <DataList.Value>
                  <Link>22/03/2025</Link>
                </DataList.Value>
              </DataList.Item>
              <DataList.Item>
                <DataList.Label minWidth="88px">Loja</DataList.Label>
                <DataList.Value>
                  <Link target="_blank" href="https://workos.com">
                    Mercado Livre
                  </Link>
                </DataList.Value>
              </DataList.Item>
            </DataList.Root>
          </Grid>
        </Dialog.Content>
      </Dialog.Root>
    </>
  );
}
