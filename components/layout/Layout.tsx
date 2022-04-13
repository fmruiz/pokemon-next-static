import Head from "next/head";
import React, { FC, Fragment } from "react";

import { Navbar } from "../ui";

interface IProps {
  children: JSX.Element | JSX.Element[];
  title?: string;
}

export const Layout: FC<IProps> = ({ children, title }: IProps) => {
  return (
    <Fragment>
      <Head>
        <title>{title ? title : "PokemonApp"}</title>
        <meta name="author" content="francoRuiz" />
        <meta name="description" content="Informacion sobre pokemon" />
      </Head>
      <Navbar />
      <main
        style={{
          padding: "0px 20px",
        }}
      >
        {children}
      </main>
    </Fragment>
  );
};
