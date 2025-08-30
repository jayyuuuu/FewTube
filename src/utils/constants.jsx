const GOOGLE_API_KEY = "AIzaSyAMQl2FX8_8_dxcgPn8Og0bzcZL4vu-D1A";
export const YOUTUBE_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&key=" +
  GOOGLE_API_KEY +
  "&maxResults=50";
export const YOUTUBE_SEARCH_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
//   const Youtube_API = "https://www.googleapis.com/youtube/v3/videos?key=" + API_KEY + "&part=snippet,statistics&chart=mostPopular&maxResults=25&regionCode=US";

export const SEARCH_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&key=" +
  GOOGLE_API_KEY +
  "&q=";
