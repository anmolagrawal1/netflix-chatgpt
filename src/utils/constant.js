export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NjQ5ODFjNjEyZjI0MGE5NjMyMzVkODI1YjI1OTljMSIsInN1YiI6IjY2MGE2NmMxYzhhNWFjMDE2Mzc3OTQzMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5eRJbpCH8pM1Hfq0ZUbpCaed42rZc2oFgF-0MK0nFi4",
  },
};

export const MOVIE_CARD_IMAGE = "https://image.tmdb.org/t/p/w780";

export const BG_URL =
  "https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/a3873901-5b7c-46eb-b9fa-12fea5197bd3/IN-en-20240311-popsignuptwoweeks-perspective_alpha_website_medium.jpg";

export const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "English" },
  { identifier: "hindi", name: "Hindi" },
  { identifier: "spanish", name: "Spanish" },
  { identifier: "french", name: "French" },
];

export const OPEN_AI_KEY = process.env.OPEN_AI_KEY;