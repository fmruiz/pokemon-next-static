import type { NextPage } from "next";

import { Layout } from "../components/layout";
import { pokeApi } from "../api";
import { Pokemons, Result } from "../interfaces/pokemon-list";
import { Card, Grid, Row, Text } from "@nextui-org/react";

interface Props {
  pokemons: Result[];
}

const HomePage: NextPage<Props> = ({ pokemons }) => {
  return (
    <Layout title="Pokemon Next App">
      <Grid.Container gap={2} justify="flex-start">
        {pokemons.map(({ id, name, img }) => (
          <Grid key={id} xs={6} sm={3} md={2} xl={1}>
            <Card hoverable clickable>
              <Card.Body css={{ p: 1 }}>
                <Card.Image src={img} width="100%" height={140} />
              </Card.Body>
              <Card.Footer>
                <Row justify="space-between">
                  <Text>{name}</Text>
                  <Text>#{id}</Text>
                </Row>
              </Card.Footer>
            </Card>
          </Grid>
        ))}
      </Grid.Container>
    </Layout>
  );
};

export default HomePage;

export const getStaticProps = async (ctx: any) => {
  const { data } = await pokeApi.get<Pokemons>("/pokemon?limit=151");

  const pokemons: Result[] = data.results.map((pokemon, index) => ({
    ...pokemon,
    id: index + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
      index + 1
    }.png`,
  }));

  return {
    props: {
      pokemons,
    },
  };
};
