import React, { FC } from "react";
import { Layout } from "../../components/layout/Layout";
import { pokeApi } from "../../api/pokeApi";
import { Pokemon } from "../../interfaces";

interface Props {
  pokemon: Pokemon;
}

const PokemonPage: FC<Props> = ({ pokemon }) => {
  return (
    <Layout>
      <div>{pokemon.name}</div>
    </Layout>
  );
};

export default PokemonPage;

export const getStaticPaths = async (ctx: any) => {
  const pokemons151 = [...Array(151)].map((value, index) => `${index + 1}`);

  return {
    paths: pokemons151.map((id) => ({ params: { id: id } })),
    fallback: false,
  };
};

export const getStaticProps = async (ctx: any) => {
  const { id } = ctx.params;
  const { data } = await pokeApi.get<Pokemon>(`/pokemon/${id}`);

  return {
    props: {
      pokemon: data,
    },
  };
};
