import React from "react";
import { homeResource } from "../routes/resources";
import { useResource } from "@atlaskit/router";

export const Home = () => {
  const [{ loading, data }] = useResource(homeResource);

  return (
    <section>
      {loading && <div>loading...</div>}
      {data && (
        <div>
          <h2>{data.quote}</h2>
          <small>{data.character}</small>
        </div>
      )}
    </section>
  );
};
