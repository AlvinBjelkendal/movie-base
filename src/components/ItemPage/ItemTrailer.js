import useFetch from "../useFetch";
import { specific, youtubeUrl } from "../../config/config";
import { useParams } from "react-router";
import ReactPlayer from 'react-player'
import LoadingSpinner from "../LoadingSpinner";

const ItemTrailer = () => {
  const { id } = useParams();
  const { type } = useParams();
  const { responseData: trailer, error, isLoading } = useFetch(`${specific}${type}/${id}/videos`);
  console.log(trailer);

  return (
    <div>
      {error && <div>{error}</div>}
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div>
          {trailer.results < 1 ? (
            null
            ) : (
              <ReactPlayer
              url={youtubeUrl + trailer.results[0].key}
              width="100%"
              playing
              ></ReactPlayer>
              )}
        </div>
      )}
    </div>

  )
};
export default ItemTrailer;