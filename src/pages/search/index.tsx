import AppWrapper from "../../components/app-wrapper";
import SearchInput from "../../components/search-input";
import { useQuery } from "react-query";
import { fetchAnimeByQuery } from "../../lib/services/anime.service";
import { useState } from "react";
import { debounce } from "../../utils";
import AnimeList from "../../components/anime-list";
import Shimmer from "../../components/shimmer";

export default function Search() {
  const [search, setSearch] = useState("");

  const { data, isLoading } = useQuery(
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

  const renderContent = () => {
    if (isLoading) return <Shimmer />;

    // Initial UI
    if (search === "") {
      return (
        <div className="flex items-center justify-center w-full h-20 gap-2 bg-gray-100">
          <p className="text-xl">✏️</p>
          <p>
            Try to <i>type</i> anime name in search box
          </p>
        </div>
      );
    }

    // When result not found
    if (data?.data?.length <= 0) {
      return (
        <div className="flex items-center justify-center w-full h-20 gap-2 bg-gray-100">
          <p className="text-xl">🚫</p>
          <p>
            Anime <i>{search}</i> not found
          </p>
        </div>
      );
    }

    return (
      <div className="grid grid-cols-3 gap-4">
        <AnimeList list={data?.data} />
      </div>
    );
  };

  return (
    <AppWrapper>
      <section className="pt-8 my-4 main-content">
        <SearchInput onChange={handleSearch} />

        {renderContent()}
      </section>
    </AppWrapper>
  );
}
