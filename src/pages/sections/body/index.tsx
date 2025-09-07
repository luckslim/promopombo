import {
  Box,
  Container,
  Flex,
  Grid,
  Link,
  Separator,
  Tabs,
  Text,
} from "@radix-ui/themes";
import { CardRadix } from "../../../components/card";
import { TabRadix } from "../../../components/tab";

export function Body() {
  return (
    <>
      <Tabs.Root defaultValue="Mercado Livre">
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
                    style={{ overflowX: "auto", paddingBottom: "10px" }}
                    gap="3"
                    align="center"
                  >
                    <Link style={{ display: "flex" }} href="#">
                      Games
                    </Link>
                    <Separator orientation="vertical" />
                    <Link href="#">Informática</Link>
                    <Separator orientation="vertical" />
                    <Link href="#">Casa</Link>
                    <Separator orientation="vertical" />
                    <Link href="#">Livros</Link>
                    <Separator orientation="vertical" />
                    <Link href="#">Automóveis</Link>
                    <Separator orientation="vertical" />
                    <Link href="#">Roupas</Link>
                    <Separator orientation="vertical" />
                    <Link href="#">Tênis</Link>
                    <Separator orientation="vertical" />
                    <Link href="#">Acessórios</Link>
                    <Separator orientation="vertical" />
                    <Link href="#">Action Figure</Link>
                    <Separator orientation="vertical" />
                    <Link href="#">Hqs & mangás</Link>
                    <Separator orientation="vertical" />
                    <Link href="#">Jogos de Tabuleiro</Link>
                    <Separator orientation="vertical" />
                    <Link href="#">Mais Procurados</Link>
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
                    style={{ overflowX: "auto", paddingBottom: "10px" }}
                    gap="3"
                    align="center"
                  >
                    <Link style={{ display: "flex" }} href="#">
                      Peças
                    </Link>
                    <Separator orientation="vertical" />
                    <Link href="#">Bags</Link>
                    <Separator orientation="vertical" />
                    <Link href="#">Jaquetas</Link>
                    <Separator orientation="vertical" />
                    <Link href="#">Corta vento</Link>
                    <Separator orientation="vertical" />
                    <Link href="#">Capacetes</Link>
                    <Separator orientation="vertical" />
                    <Link href="#">Oléo</Link>
                    <Separator orientation="vertical" />
                    <Link href="#">Botas</Link>
                    <Separator orientation="vertical" />
                    <Link href="#">Kit de Chuva</Link>
                    <Separator orientation="vertical" />
                    <Link href="#">Kit Proteção UV</Link>
                    <Separator orientation="vertical" />
                    <Link href="#">Escapamentos</Link>
                    <Separator orientation="vertical" />
                    <Link href="#">óculos</Link>
                    <Separator orientation="vertical" />
                    <Link href="#">Luvas</Link>
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
              <Text size="2">
                Edit your profile or update contact information.
              </Text>
            </Tabs.Content>
          </Container>
        </Box>
      </Tabs.Root>
    </>
  );
}
