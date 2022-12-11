import axios from 'axios';

interface Parameter {
  query: string;
  sort: string;
  page: number;
  size: number;
}

const KakaoAPI = axios.create({
  baseURL: `https://dapi.kakao.com`,
  headers: {
    Authorization: `KakaoAK 4c05068b551059a91563b4015d008313`,
  },
});

export const BOOKSEARH = (params: Parameter) => {
  return KakaoAPI.get('/v3/search/book?target=title', { params });
};

// export const BOOK = () => {
//   return KakaoAPI.get('/v3/search/book?target=title');
// };
