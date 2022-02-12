const baseUrl = 'https://pixabay.com/api/';
const pixelList = {
  getList: () => {
    return fetch(`${baseUrl}?key=25632604-bd334999637f9d384589445f9`).then(
      response => response.json(),
    );
  },
  search: text => {
    return fetch(
      `${baseUrl}?key=25632604-bd334999637f9d384589445f9&q=${text}`,
    ).then(response => response.json());
  },
};
export default pixelList;
