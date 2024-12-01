import { useState, useEffect } from "react";
import axios from "axios";
import { getSpotifyAccessToken } from "../utils/get-spotify-access-token";

// Tipo para uma música retornada pela API do Spotify
interface SpotifyTrack {
  id: string;
  name: string;
  artists: {
    name: string;
  }[];
}

const SpotifySearch = ({
  onSelectSong,
}: {
  onSelectSong: (song: SpotifyTrack) => void;
}) => {
  const [query, setQuery] = useState("");
  const [songs, setSongs] = useState<SpotifyTrack[]>([]);
  const [accessToken, setAccessToken] = useState("");

  useEffect(() => {
    const fetchAccessToken = async () => {
      const token = await getSpotifyAccessToken();
      setAccessToken(token);
    };
    fetchAccessToken();
  }, []);

  const handleSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchQuery = e.target.value;
    setQuery(searchQuery);

    if (searchQuery.length > 2) {
      try {
        const { data } = await axios.get(`https://api.spotify.com/v1/search`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
          params: {
            q: searchQuery,
            type: "track",
            limit: 5,
          },
        });
        setSongs(data.tracks.items);
      } catch (error) {
        console.error("Erro ao buscar músicas:", error);
      }
    } else {
      setSongs([]);
    }
  };

  return (
    <div className="mt-4">
      <label className="block">Escolha uma música do Spotify</label>
      <input
        type="text"
        value={query}
        onChange={handleSearch}
        className="w-full p-2 mt-2 border bg-transparent border-gray-300 rounded-md"
        placeholder="Digite o nome da música..."
      />
      <ul className="mt-2 max-h-60 overflow-y-auto">
        {songs.map((song) => (
          <li
            key={song.id}
            onClick={() => onSelectSong(song)}
            className="p-2 cursor-pointer hover:bg-gray-200"
          >
            <p>{song.name}</p>
            <p className="text-sm text-gray-500">
              {song.artists.map((artist) => artist.name).join(", ")}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SpotifySearch;
