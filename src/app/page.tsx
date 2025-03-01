import { createClient } from "contentful";
import DishFilter from "./components/DishFilter"; 

const fetchData = async () => {
  if (!process.env.CONTENTFUL_SPACE_ID || !process.env.CONTENTFUL_ACCESS_TOKEN) {
    throw new Error("Contentful space ID or access token is missing!");
  }

  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  const res = await client.getEntries({ content_type: "gourmetPalace" });

  return res.items;
};

const Dish = async () => {
  const gourmetPalace = await fetchData(); 

  return (
    <div>
      <DishFilter initialItems={gourmetPalace} />
    </div>
  );
};

export default Dish;
