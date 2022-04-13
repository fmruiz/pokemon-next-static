import Head from "next/head";
import React, { FC, Fragment } from "react";

interface IProps {
  children: JSX.Element | JSX.Element[];
  title?: string
}

export const Layout: FC<IProps> = ({ children, title }: IProps) => {
  return (
    <Fragment>
      <Head>
        <title>{title ? title : 'PokemonApp'}</title>
        <meta name="author" content="francoRuiz" />
        <meta name="description" content="Informacion sobre pokemon" />
      </Head>
      <main>{children}</main>
    </Fragment>
  );
};
