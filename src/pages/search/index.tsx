import AppWrapper from "../../components/app-wrapper";
import SearchInput from "../../components/search-input";
import { useQuery } from "react-query";
import { fetchAnimeByQuery } from "../../lib/services/anime.service";
import { useState } from "react";
import { debounce } from "../../utils";
import AnimeList from "../../components/anime-list";

export default function Search() {
  const [search, setSearch] = useState("");

  const { data } = useQuery(
    ["animeSearch", search],
    () => fetchAnimeByQuery({ search }),
    { enabled: !!search }
  );

  const handleSearch = debounce(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearch(event?.target.value);
    },
    1000
  );

  return (
    <AppWrapper>
      <section className="pt-8 my-4 main-content">
        <SearchInput onChange={handleSearch} />

        <div className="grid grid-cols-3 gap-4">
          <AnimeList list={data?.data} />
        </div>
      </section>
    </AppWrapper>
  );
}
