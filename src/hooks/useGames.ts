import { CanceledError } from "axios";
import { useEffect, useState } from "react";
import { GameQuery } from "../App";
import apiClient from "../services/api-client";
import useData from "./useData";
import { Genre } from "./useGenres";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}
interface GameResponse {
  id: number;
  results: Game[];
}

// const useGame = (genre: Genre | null) => {
//   const [games, setGames] = useState<Game[]>([]);
//   const [error, setError] = useState("");
//   const [isLoading, setLoading] = useState(false);

//   useEffect(
//     () => {
//       const controller = new AbortController();
//       setLoading(true);
//       apiClient
//         .get<GameResponse>("/games", {
//           params: { genres: genre?.id },
//           signal: controller.signal,
//         })
//         .then((res) => {
//           setGames(res.data.results);
//           setLoading(false);
//         })
//         .catch((err) => {
//           if (err instanceof CanceledError) return;
//           setError(err.message);
//           setLoading(false);
//         });

//       return () => {
//         controller.abort();
//       };
//     },
//     genre ? [genre.id] : []
//   );

//   return { games, error, isLoading };
// };

const useGame = (gameQuery: GameQuery | null) => {
  return useData<Game>(
    "/games",
    {
      params: {
        genres: gameQuery?.genre?.id,
        plaforms: gameQuery?.platform?.id,
        ordering: gameQuery?.sortKey,
        search: gameQuery?.searchText,
      },
    },
    [gameQuery]
  );
};
export default useGame;
