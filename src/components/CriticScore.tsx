import { Badge } from "@chakra-ui/react";
interface Props {
  score: number;
}
const CriticScore = ({ score }: Props) => {
  const color = score > 75 ? "green" : score > 60 ? "yellow" : "";
  return (
    <Badge
      fontSize="14px"
      colorScheme={color}
      borderRadius="4px"
      paddingX="10px"
    >
      {score}
    </Badge>
  );
};

export default CriticScore;
