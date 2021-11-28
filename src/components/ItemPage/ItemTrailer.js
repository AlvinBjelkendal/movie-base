import useFetch from "../useFetch";
import { specific, youtubeUrl } from "../../config/config";
import { useParams } from "react-router";
import ReactPlayer from 'react-player'
import { IonContent } from "@ionic/react";
import { useEffect, useState } from "react";
import LoadingSpinner from "../LoadingSpinner";
import { BackButton } from "../BackButton";

const ItemTrailer = () => {
  const { id } = useParams();
  const { type } = useParams();
  const { responseData: trailer, error, isLoading } = useFetch(`${specific}${type}/${id}/videos`);

  return (
    <div>
      {error && <div>{error}</div>}
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div>
          {trailer.length === 0 ? (
            <div></div>
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