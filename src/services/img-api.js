const BASE_URL = "https://pixabay.com/api/";
const API_KEY = "24424361-80a045fa2441dce42755517a4";

const getImg = (searchQuery, page) => {
  return fetch(
    `${BASE_URL}?key=${API_KEY}&q=${searchQuery}&page=${page}&image_type=photo&orientation=horizontal&per_page=12`
  )
    .then((images) => images.json())
    .then((data) => data.hits);
};

export default getImg;
