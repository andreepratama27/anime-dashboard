import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import AppWrapper from "../../components/app-wrapper";
import { fetchAnimeDetail } from "../../lib/services/anime.service";
import ButtonAddFavorite from "./components/button-add-favorites";
import { Anime } from "../../lib/api/type";

export default function AnimeDetail() {
  const params = useParams();

  const { data: detail } = useQuery(["animeDetail"], () =>
    fetchAnimeDetail({ id: parseInt(params?.id as string) })
  );

  return (
    <AppWrapper>
      <main>
        <div className="pt-8 app-title">
          <p className="text-xl">{detail?.data?.title}</p>
        </div>

        <div className="flex items-center justify-between mt-4 app-menu">
          <div className="flex items-center justify-center gap-2 app-menu__info app-categories">
            {detail?.data?.genres?.map((genre) => (
              <div
                className="px-2 py-1 bg-blue-200 rounded categories"
                key={genre.mal_id}
              >
                <p className="text-sm">{genre.name}</p>
              </div>
            ))}
          </div>

          <div className="app-menu__favorites">
            <ButtonAddFavorite anime={detail?.data as Anime} />
          </div>
        </div>

        <div className="mt-4 bg-black image-jumbotron bg-gradient-to-b">
          <img
            src={detail?.data?.images?.jpg?.large_image_url}
            alt=""
            className="object-contain w-full h-[480px]"
            loading="lazy"
          />
        </div>

        <div className="mt-2 anime-description">
          <p className="my-4 text-lg font-bold">Synopsis</p>
          <p>{detail?.data?.synopsis}</p>
        </div>
      </main>
    </AppWrapper>
  );
}
