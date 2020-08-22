import { css } from 'emotion';

export const cardStyle = (width: number, height: number, order: number) => css`
  .inner{
    /* min-width: ${width}px; */
    flex: 1 0 auto;
  }
  height: ${height}px;
  order: ${order};
`;

export const root = (height: number) => css`
  display: flex;
  height: ${height}px;
`;