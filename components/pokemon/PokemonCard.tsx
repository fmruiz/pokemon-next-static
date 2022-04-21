import React, { FC } from "react";
import { Result } from "../../interfaces/pokemon-list";
import { Grid, Card, Row, Text } from "@nextui-org/react";
import { useRouter } from "next/router";

interface Props {
  pokemon: Result;
}

export const PokemonCard: FC<Props> = ({ pokemon }: Props) => {
  const router = useRouter();

  const onClick = () => {
    router.push(`/pokemon/${pokemon.id}`);
  };

  return (
    <Grid key={pokemon.id} xs={6} sm={3} md={2} xl={1}>
      <Card onClick={onClick} hoverable clickable>
        <Card.Body css={{ p: 1 }}>
          <Card.Image src={pokemon.img} width="100%" height={140} />
        </Card.Body>
        <Card.Footer>
          <Row justify="space-between">
            <Text>{pokemon.name}</Text>
            <Text>#{pokemon.id}</Text>
          </Row>
        </Card.Footer>
      </Card>
    </Grid>
  );
};
