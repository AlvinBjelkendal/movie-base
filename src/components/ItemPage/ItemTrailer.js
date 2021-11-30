import useFetch from "../useFetch";
import { specific, youtubeUrl } from "../../config/config";
import { useParams } from "react-router";
import ReactPlayer from 'react-player'
import LoadingSpinner from "../LoadingSpinner";
import Error from "../Error";
import { BackButton } from "../BackButton";

const ItemTrailer = () => {
  const { id } = useParams();
  const { type } = useParams();
  const { responseData: trailer, error, isLoading } = useFetch(`${specific}${type}/${id}/videos`);

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
              {trailer.results < 1 ? (
                null
              ) : (
                <div>
                  <BackButton className="trailer-back-button" />
                  <ReactPlayer
                    url={youtubeUrl + trailer.results[0].key}
                    width="100%"
                    playing
                  >
                  </ReactPlayer>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>

  )
};
export default ItemTrailer;