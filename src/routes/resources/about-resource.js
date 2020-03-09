import { createResource } from "@atlaskit/router";

export const aboutResource = createResource({
  type: "ABOUT",
  getKey: () => "about-quote",
  getData: async () => {
    const response = await fetch("https://got-quotes.herokuapp.com/quotes");

    return await response.json();
  }
});
