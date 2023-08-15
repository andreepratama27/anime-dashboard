import { useParams } from "react-router-dom";
import AppWrapper from "../../components/app-wrapper";
import { fetchAnimeDetail } from "../../lib/api";
import { useEffect, useState } from "react";
import { Anime } from "../../lib/api/type";

export default function AnimeDetail() {
  const params = useParams();
  const [detail, setDetail] = useState<Anime | null>(null);

  const fetchDetailPage = async () => {
    const response = await fetchAnimeDetail({
      id: parseInt(params?.id as string),
    });

    setDetail(response?.data);
  };

  useEffect(() => {
    fetchDetailPage();
  }, []);

  console.log("fff", detail);

  return (
    <AppWrapper>
      <main>
        <div className="pt-4 app-title">
          <p className="text-xl">{detail?.title}</p>
        </div>

        <div className="flex items-center justify-between mt-4 app-menu">
          <div className="flex items-center justify-center gap-2 app-menu__info app-categories">
            {detail?.genres.map((genre) => (
              <div
                className="px-2 py-1 bg-blue-200 rounded categories"
                key={genre.mal_id}
              >
                <p className="text-sm">{genre.name}</p>
              </div>
            ))}
          </div>

          <div className="app-menu__favorites">
            <button className="px-2 py-1 text-sm text-white bg-pink-400 button">
              Add as Favorite
            </button>
          </div>
        </div>

        <div className="mt-4 bg-black image-jumbotron bg-gradient-to-b">
          <img
            src={detail?.images?.jpg?.large_image_url}
            alt=""
            className="object-contain w-full h-[480px]"
            loading="lazy"
          />
        </div>

        <div className="mt-2 anime-description">
          <p className="my-4 text-lg font-bold">Synopsis</p>
          <p>{detail?.synopsis}</p>
        </div>
      </main>
    </AppWrapper>
  );
}
