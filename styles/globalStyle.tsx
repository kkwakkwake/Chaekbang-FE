import { css, Global } from '@emotion/react';
import reset from 'emotion-reset';

const GlobalStyle = () => {
  return (
    <Global
      styles={css`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700;900&display=swap');
        ${reset}

        *,
        *::before,
        *::after {
          box-sizing: border-box;
          font-family: inherit;
        }
        body {
          font-family: 'Noto Sans KR', sans-serif;
          max-width: 720px;
          margin: 0 auto;
        }
      `}
    />
  );
};

export default GlobalStyle;
