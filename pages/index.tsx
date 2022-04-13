import { Button } from "@nextui-org/react";
import type { NextPage } from "next";

import { Layout } from "../components/layout";

const HomePage: NextPage = () => {
  return (
    <Layout title="Pokemon Next App">
      <Button color="gradient">Hola mundo!</Button>
    </Layout>
  );
};

export default HomePage;
