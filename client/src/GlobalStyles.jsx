import React from 'react';
import { css, Global } from '@emotion/core';

import { useTheme } from './theme';
import euclidLightEot from './assets/fonts/EuclidCircularB-Light-WebS.eot';
import euclidLightWoff2 from './assets/fonts/EuclidCircularB-Light-WebS.woff2';
import euclidLightWoff from './assets/fonts/EuclidCircularB-Light-WebS.woff';
import euclidLightTtf from './assets/fonts/EuclidCircularB-Light-WebS.ttf';
import euclidLightSvg from './assets/fonts/EuclidCircularB-Light-WebS.svg';
import euclidRegularEot from './assets/fonts/EuclidCircularB-Regular-WebS.eot';
import euclidRegularWoff2 from './assets/fonts/EuclidCircularB-Regular-WebS.woff2';
import euclidRegularWoff from './assets/fonts/EuclidCircularB-Regular-WebS.woff';
import euclidRegularTtf from './assets/fonts/EuclidCircularB-Regular-WebS.ttf';
import euclidRegularSvg from './assets/fonts/EuclidCircularB-Regular-WebS.svg';
import euclidSemiboldEot from './assets/fonts/EuclidCircularB-Semibold-WebS.eot';
import euclidSemiboldWoff2 from './assets/fonts/EuclidCircularB-Semibold-WebS.woff2';
import euclidSemiboldWoff from './assets/fonts/EuclidCircularB-Semibold-WebS.woff';
import euclidSemiboldTtf from './assets/fonts/EuclidCircularB-Semibold-WebS.ttf';
import euclidSemiboldSvg from './assets/fonts/EuclidCircularB-Semibold-WebS.svg';

function GlobalStyles() {
  const theme = useTheme();

  return (
    <>
      <Global
        styles={css`
          @font-face {
            font-family: EuclidCircularB;
            src: url('${euclidLightEot}');
            src: url('${euclidLightEot}?#iefix') format('embedded-opentype'),
              url('${euclidLightWoff2}') format('woff2'),
              url('${euclidLightWoff}') format('woff'),
              url('${euclidLightTtf}') format('truetype'),
              url('${euclidLightSvg}') format('svg');
            font-weight: 300;
            font-style: normal;
          }

          @font-face {
            font-family: EuclidCircularB;
            src: url('${euclidRegularEot}');
            src: url('${euclidRegularEot}?#iefix') format('embedded-opentype'),
              url('${euclidRegularWoff2}') format('woff2'),
              url('${euclidRegularWoff}') format('woff'),
              url('${euclidRegularTtf}') format('truetype'),
              url('${euclidRegularSvg}') format('svg');
            font-weight: 400;
            font-style: normal;
          }

          @font-face {
            font-family: EuclidCircularB;
            src: url('${euclidSemiboldEot}');
            src: url('${euclidSemiboldEot}?#iefix') format('embedded-opentype'),
              url('${euclidSemiboldWoff2}') format('woff2'),
              url('${euclidSemiboldWoff}') format('woff'),
              url('${euclidSemiboldTtf}') format('truetype'),
              url('${euclidSemiboldSvg}') format('svg');
            font-weight: 600;
            font-style: normal;
          }
        `}
      />
      <Global
        styles={{
          body: {
            fontFamily: 'EuclidCircularB',
            fontSize: '16px',
            color: theme.secondaryColor,
            background: theme.bodyBackground,
          },
        }}
      />
    </>
  );
}

export default GlobalStyles;
