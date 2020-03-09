import { createResource } from "@atlaskit/router";

export const homeResource = createResource({
  type: "HOME",
  getKey: () => "home-quote",
  getData: async () => {
    const response = await fetch("https://got-quotes.herokuapp.com/quotes");

    return await response.json();
  }
});
