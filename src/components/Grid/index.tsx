import React, { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import cn from 'classnames';
import Box from '@material-ui/core/Box';
import { useWindowSize } from 'hooks/useWindowSize';
import { cardType } from 'appConsts/types';
import { getRandomColor, getColumns } from 'utils';
import { root, cardStyle } from './styles';

function Grid(props: { cards: Array<cardType> }) {
  const { cards = [] } = props;
  const { height, width } = useWindowSize();
  const [columns, setColumns] = useState(getColumns(height, width));
  const [containerHeight, setContainerHeight] = useState(500);
  const col_heights = Array(columns).fill(0);
  useEffect(() => {
    const col = getColumns(height, width);
    setColumns(col);
    cards.forEach(({ height }, index) => {
      const order = ((index + 1) % col === 0) ? col : (index + 1) % col;
      col_heights[order - 1] += height;
    });
    setContainerHeight(Math.max.apply(Math, col_heights))
  }, [width, height]);

  return (
    <Box component="div" className={cn(root(containerHeight), "flex flex-wrap flex-col max-w-full w-full")}>
      {cards.map((card: cardType, index: number) => {
        const { width = 0, height = 0, id } = card;
        const order = ((index + 1) % columns === 0) ? columns : (index + 1) % columns;
        return (
          <Box component="div" className={cn(cardStyle(width, height, order), 'card flex-auto overflow-hidden p-2')} key={uuid()}>
            <Box component="div" className={`
              flex items-center justify-center inner h-full w-full max-w-full border border-solid border-${getRandomColor()} text-${getRandomColor()}
            `}>
              {id}
            </Box>
          </Box>
        )
      })}
    </Box >
  );
}

export default Grid;
