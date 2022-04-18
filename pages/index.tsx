import type { NextPage } from "next";

import { Layout } from "../components/layout";
import { pokeApi } from "../api";

const HomePage: NextPage = (props) => {
  return (
    <Layout title="Pokemon Next App">
      <ul>
        <li>pokemon</li>
        <li>pokemon</li>
        <li>pokemon</li>
        <li>pokemon</li>
        <li>pokemon</li>
      </ul>
    </Layout>
  );
};

export default HomePage;

export const getStaticProps = async (ctx: any) => {
  const { data } = await pokeApi.get("/pokemon?limit=151");

  return {
    props: {
      pokemons: data.results
    },
  };
};
