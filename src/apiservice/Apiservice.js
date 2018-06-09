import { topStoriesId } from "../constant/constant";

class ApiService {
  fetchTopStoriesId = () => {
    return fetch(topStoriesId).then(response => {
      return response.json();
    });
  };

  fetchSinlgeStory = singleStory => {
    return fetch(
      ` https://hacker-news.firebaseio.com/v0/item/${singleStory}.json?print=pretty`
    ).then(response => {
      return response.json();
    });
  };
}

export const apiService = new ApiService();
