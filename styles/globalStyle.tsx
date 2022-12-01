import { css, Global } from '@emotion/react';
import reset from 'emotion-reset';

const GlobalStyle = () => {
  return (
    <Global
      styles={css`
        ${reset}

        *, *::before, *::after {
          box-sizing: border-box;
        }

        body {
          font-family: 'noto sans';
          max-width: 720px;
          margin: 0 auto;
        }
      `}
    />
  );
};

export default GlobalStyle;
