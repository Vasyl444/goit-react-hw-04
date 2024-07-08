import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com";
export default async function RequestFunction(searchValue, currentPage) {
  const result = await axios.get("search/photos/?", {
    params: {
      client_id: "bo6UUdHenoMMOPFLTK8SW_yTIPp0tqSVsntH7vxFhVk",
      query: searchValue,
      per_page: 12,
      page: currentPage,
    },
  });
  return result.data;
}
