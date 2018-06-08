import { topStoriesId } from "../constant/constant";

class ApiService {
  fetchTopStoriesId = () => {
    fetch(topStoriesId).then(response => {
      console.log(response.json());
    });
  };
}

export const apiService = new ApiService();
