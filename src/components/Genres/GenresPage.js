import { useParams } from "react-router";
import { discover } from "../../config/config";
import useFetch from "../useFetch";
import { IonContent, IonHeader, IonTitle, IonToolbar } from "@ionic/react";
import TitlesSlider from "../TitlesSlider/TitlesSlider";
import LoadingSpinner from "../LoadingSpinner";
import Error from "../Error";
import { BackButton } from "../BackButton";


const GenresPage = () => {
  const { type } = useParams();
  const { id } = useParams();
  const { genre } = useParams();

  const Popular = () => {
    const { responseData: items, error, isLoading } = useFetch(`${discover}${type}?&with_genres=${id}`);
    return (
      <div>
        {error !== null ? (
          <Error />
        ) : (
          <div>
            {isLoading ? (
              <LoadingSpinner />
            ) : (
              <div>
                <TitlesSlider title={`Popular ${genre} Titles`} titles={items.results.sort((a, b) => b.popularity - a.popularity)} />
              </div>
            )}
          </div>
        )}
      </div>
    )
  }

  const TopRated = () => {
    const { responseData: items, error, isLoading } = useFetch(`${discover}${type}?&with_genres=${id}&vote_average.gte=8.3&vote_count.gte=1000`);
    return (
      <div>
        {error !== null ? (
          <Error />
        ) : (
          <div>
            {isLoading ? (
              <LoadingSpinner />
            ) : (
              <div>
                {items.results.length > 0 ? (
                  <div>
                    <TitlesSlider title={`Top Rated ${genre} Titles`} titles={items.results.sort((a, b) => b.vote_average - a.vote_average)} />
                  </div>
                ) : (
                  null
                )}
              </div>
            )}
          </div>
        )}
      </div>
    )
  }
  return (
    <IonContent>
      <IonHeader>
        <IonToolbar>
          <BackButton />
          <IonTitle>{genre}</IonTitle>
        </IonToolbar>
      </IonHeader>
      {Popular()}
      {TopRated()}
    </IonContent>
  )
}; export default GenresPage