// const BASE_URL = "https://pixabay.com/api/";
// const API_KEY = "24424361-80a045fa2441dce42755517a4";

// const fetchImg = async ({ searchQuery, page }) => {
//   const response = await fetch(
//     // `${BASE_URL}?key=${API_KEY}&q=${searchQuery}&page=${page}&image_type=photo&orientation=horizontal&per_page=12`
//     `https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
//   );
//   if (response.ok) {
//     return response.json();
//   }
//   return await Promise.reject(new Error(`Нет ${searchQuery}`));
// };
