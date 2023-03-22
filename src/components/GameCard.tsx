import { Card, CardBody, Heading, HStack, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Game } from "../hooks/useGames";
import getCroppedImage from "../services/image-url";
import CriticScore from "./CriticScore";
import GameIconList from "./GameIconList";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card overflow="hidden" borderRadius={10}>
      <Image src={getCroppedImage(game.background_image)} />
      <CardBody>
        <>
          <HStack marginBottom={2} justifyContent={"space-between"}>
            <GameIconList
              platform={game.parent_platforms.map(({ platform }) => platform)}
            />
            <CriticScore score={game.metacritic} />
          </HStack>
          <Heading fontSize="2xl">{game.name}</Heading>
        </>
      </CardBody>
    </Card>
  );
};

export default GameCard;
