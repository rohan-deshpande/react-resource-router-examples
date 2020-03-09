import React from "react";
import { aboutResource } from "../routes/resources";
import { useResource } from "@atlaskit/router";

export const About = () => {
  const [{ loading, data }] = useResource(aboutResource);

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
