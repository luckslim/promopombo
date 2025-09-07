import { BookmarkIcon, HeartIcon} from "@phosphor-icons/react";
import {
  Badge,
  Box,
  Button,
  Card,
  Flex,
  Inset,
  Strong,
  Text,
} from "@radix-ui/themes";
import { DialogRadix } from "../dialog-description";

export function CardRadix() {
  return (
    <>
      <Box maxWidth="240px">
        <Card size="1">
          <Inset clip="padding-box" side="top" pb="current">
            <img
              src="https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
              alt="Bold typography"
              style={{
                display: "block",
                objectFit: "cover",
                width: "100%",
                height: 140,
                backgroundColor: "var(--gray-5)",
              }}
            />
          </Inset>

          <Badge color="green">Disponível</Badge>
          <Flex align={"center"} gap={"2"}>
            <small style={{ textDecoration: "line-through", color: "#727272" }}>
              R$ 300,00
            </small>
            <Strong>R$ 200,00 </Strong>
          </Flex>

          <Text as="p" size="3" color="gray">
            Name Product and Description
          </Text>

          <Flex gap={"1"} align={"center"} justify={"end"}>
            <Button color="yellow">
              <BookmarkIcon /> Ir á loja
            </Button>
            <Button color="blue">
              <HeartIcon weight="duotone" color="#ffff" />
            </Button>
            <DialogRadix/>
          </Flex>
        </Card>
      </Box>
    </>
  );
}
