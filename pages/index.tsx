import type { NextPage } from "next";

import { Layout } from "../components/layout";
import { pokeApi } from "../api";
import { Pokemons, Result } from "../interfaces/pokemon-list";
import { Card, Grid, Row, Text } from "@nextui-org/react";
import { PokemonCard } from "../components/pokemon/PokemonCard";

interface Props {
  pokemons: Result[];
}

const HomePage: NextPage<Props> = ({ pokemons }) => {
  return (
    <Layout title="Pokemon Next App">
      <Grid.Container gap={2} justify="flex-start">
        {pokemons.map((poke, index) => (
          <PokemonCard key={index} pokemon={poke} />
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
