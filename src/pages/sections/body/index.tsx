import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  Link,
  Separator,
  Spinner,
  Tabs,
  Text,
} from "@radix-ui/themes";
import { CardRadix } from "../../../components/card";
import { TabRadix } from "../../../components/tab";
import { ArrowFatLineUpIcon } from "@phosphor-icons/react";

export function Body() {
  return (
    <>
      <Tabs.Root defaultValue="Motoboys">
        <Container pt={"4"}>
          <Tabs.List color="orange">
            <Flex
              style={{
                display: "flex",
                gap: "12px",
                overflowX: "auto",
                padding: "8px 0",
              }}
            >
              <TabRadix
                name="Para Motoboys"
                value="Motoboys"
                urlImage="https://static.vecteezy.com/ti/vetor-gratis/p1/16120229-estilo-de-desenho-animado-de-capacete-de-moto-vetor.jpg"
              />

              <TabRadix
                name="Mercado Livre"
                value="Mercado Livre"
                urlImage="https://www.promobit.com.br/static/p/222170641717005892948672142758.png"
              />

              <TabRadix
                name="Amazon"
                value="Amazon"
                urlImage="https://www.promobit.com.br/static/p/310574891317067254346440167216.jpg"
              />

              <TabRadix
                name="Shopee"
                value="Shopee"
                urlImage="https://www.promobit.com.br/static/p/124121610416137621105432082697.jpg"
              />

              <TabRadix
                name="Magazine Luiza"
                value="Magazine Luiza"
                urlImage="https://www.promobit.com.br/static/p/404011276417067245464233696940.webp"
              />

              <TabRadix
                name="NetShoes"
                value="netshoes"
                urlImage="https://www.promobit.com.br/static/p/870652183017380832009124855487.png"
              />

              <TabRadix
                name="Kabum"
                value="kabum"
                urlImage="https://www.promobit.com.br/static/p/345610787717067250943703391046.webp"
              />

              <TabRadix
                name="Lg"
                value="Lg"
                urlImage="https://www.promobit.com.br/static/p/602092357016244743766190729928.png"
              />

              <TabRadix
                name="Natura"
                value="Natura"
                urlImage="https://www.promobit.com.br/static/p/930197312515506860497020619167.png"
              />

              <TabRadix
                name="Samsung"
                value="Samsung"
                urlImage="https://www.promobit.com.br/static/p/562852841816171061277828430487.jpg"
              />

              <TabRadix
                name="Nike"
                value="Nike"
                urlImage="https://www.promobit.com.br/static/p/192595823315018504432100778653.jpg"
              />

              <TabRadix
                name="Aliexpress"
                value="Aliexpress"
                urlImage="https://www.promobit.com.br/static/p/935105703617067255243208670751.png"
              />

              <TabRadix
                name="Carrefour"
                value="Carrefour"
                urlImage="https://www.promobit.com.br/static/p/510313175114954781295682127819.jpg"
              />

              <TabRadix
                name="Casas Bahia"
                value="Casas Bahia"
                urlImage="https://www.promobit.com.br/static/p/157939840816152091907106898313.png"
              />
            </Flex>
          </Tabs.List>
        </Container>

        <Box pt="3">
          <Container size={"4"}>
            <Tabs.Content value="Mercado Livre">
              <Container size={"4"} pb={"3"}>
                <Text size="2">
                  <Flex
                    style={{
                      overflowX: "auto",
                      paddingBottom: "10px",
                      whiteSpace: "nowrap",
                    }}
                    gap="1"
                    align="center"
                    wrap="nowrap"
                  >
                    <Button>
                      <Link style={{ display: "flex" }} href="#">
                        Games
                      </Link>
                    </Button>
                    <Separator orientation="vertical" />
                    <Button>
                      <Link href="#">Informática</Link>
                    </Button>
                    <Separator orientation="vertical" />
                    <Button>
                      <Link href="#">Casa</Link>
                    </Button>
                    <Separator orientation="vertical" />
                    <Button>
                      <Link href="#">Livros</Link>
                    </Button>
                    <Separator orientation="vertical" />
                    <Button>
                      <Link href="#">Automóveis</Link>
                    </Button>
                    <Separator orientation="vertical" />
                    <Button>
                      <Link href="#">Roupas</Link>
                    </Button>
                    <Separator orientation="vertical" />
                    <Button>
                      <Link href="#">Tênis</Link>
                    </Button>
                    <Separator orientation="vertical" />
                    <Button>
                      <Link href="#">Acessórios</Link>
                    </Button>
                    <Separator orientation="vertical" />
                    <Button>
                      <Link href="#">Action Figure</Link>
                    </Button>
                    <Separator orientation="vertical" />
                    <Button>
                      <Link href="#">Hqs & mangás</Link>
                    </Button>
                    <Separator orientation="vertical" />
                    <Button>
                      <Link href="#">Jogos de Tabuleiro</Link>
                    </Button>
                    <Separator orientation="vertical" />
                    <Button>
                      <Link href="#">Mais Procurados</Link>
                    </Button>
                  </Flex>
                </Text>
              </Container>
              <Grid
                columns={{ initial: "2", sm: "5" }}
                gap="3"
                rows="repeat(2, 3)"
                justify={"center"}
                width={"auto"}
              >
                <CardRadix />
                <CardRadix />
                <CardRadix />
                <CardRadix />
                <CardRadix />
                <CardRadix />
                <CardRadix />
                <CardRadix />
                <CardRadix />
                <CardRadix />
              </Grid>
            </Tabs.Content>

            <Tabs.Content value="Motoboys">
              <Container size={"4"} pb={"3"}>
                <Text size="2">
                  <Flex
                    style={{
                      overflowX: "auto",
                      paddingBottom: "10px",
                      whiteSpace: "nowrap",
                    }}
                    gap="1"
                    align="center"
                    wrap="nowrap"
                  >
                    <Button>
                      <Link style={{ display: "flex" }} href="#">
                        Games
                      </Link>
                    </Button>
                    <Separator orientation="vertical" />
                    <Button>
                      <Link href="#">Informática</Link>
                    </Button>
                    <Separator orientation="vertical" />
                    <Button>
                      <Link href="#">Casa</Link>
                    </Button>
                    <Separator orientation="vertical" />
                    <Button>
                      <Link href="#">Livros</Link>
                    </Button>
                    <Separator orientation="vertical" />
                    <Button>
                      <Link href="#">Automóveis</Link>
                    </Button>
                    <Separator orientation="vertical" />
                    <Button>
                      <Link href="#">Roupas</Link>
                    </Button>
                    <Separator orientation="vertical" />
                    <Button>
                      <Link href="#">Tênis</Link>
                    </Button>
                    <Separator orientation="vertical" />
                    <Button>
                      <Link href="#">Acessórios</Link>
                    </Button>
                    <Separator orientation="vertical" />
                    <Button>
                      <Link href="#">Action Figure</Link>
                    </Button>
                    <Separator orientation="vertical" />
                    <Button>
                      <Link href="#">Hqs & mangás</Link>
                    </Button>
                    <Separator orientation="vertical" />
                    <Button>
                      <Link href="#">Jogos de Tabuleiro</Link>
                    </Button>
                    <Separator orientation="vertical" />
                    <Button>
                      <Link href="#">Mais Procurados</Link>
                    </Button>
                  </Flex>
                </Text>
              </Container>
              <Grid
                columns={{ initial: "2", sm: "5" }}
                gap="3"
                rows="repeat(2, 3)"
                justify={"center"}
                width={"auto"}
              >
                <CardRadix />
                <CardRadix />
                <CardRadix />
                <CardRadix />
                <CardRadix />
                <CardRadix />
                <CardRadix />
                <CardRadix />
              </Grid>
            </Tabs.Content>
            <Tabs.Content value="Shopee">
              <Text color="gray" size="3">
                <Flex pt={"9"} gap={"3"} align={"center"} justify={"center"}>
                  Não há Produtos Aqui <Spinner size={"3"} />
                </Flex>
              </Text>
            </Tabs.Content>
            <Tabs.Content value="Amazon">
              <Text color="gray" size="3">
                <Flex pt={"9"} gap={"3"} align={"center"} justify={"center"}>
                  Não há Produtos Aqui <Spinner size={"3"} />
                </Flex>
              </Text>
            </Tabs.Content>
            <Tabs.Content value="Magazine Luiza">
              <Text color="gray" size="3">
                <Flex pt={"9"} gap={"3"} align={"center"} justify={"center"}>
                  Não há Produtos Aqui <Spinner size={"3"} />
                </Flex>
              </Text>
            </Tabs.Content>
            <Tabs.Content value="netshoes">
              <Text color="gray" size="3">
                <Flex pt={"9"} gap={"3"} align={"center"} justify={"center"}>
                  Não há Produtos Aqui <Spinner size={"3"} />
                </Flex>
              </Text>
            </Tabs.Content>
          </Container>
        </Box>
      </Tabs.Root>
      <a href="#home">
        <Button
          style={{
            position: "fixed",
            bottom: "60px",
            right: "20px",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            padding: "1.5rem",
            zIndex: 1000,
          }}
          variant="surface"
        >
          <ArrowFatLineUpIcon size={32} />
        </Button>
      </a>
    </>
  );
}
