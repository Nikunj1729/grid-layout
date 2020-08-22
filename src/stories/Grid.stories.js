import React from 'react';
import Grids from 'components/Grid';
import 'main.css';
import 'fonts.css';

const cardsSet = [
  {id: 1, width: 100, height: 200}, 
  {id: 2, width: 300, height: 150}, 
  {id: 3, width: 200, height: 400},
  {id: 4, width: 300, height: 200},
  {id: 5, width: 100, height: 250},
  {id: 6, width: 200, height: 100},
  {id: 7, width: 300, height: 200},
  {id: 8, width: 150, height: 350},
  {id: 9, width: 200, height: 200},
  {id: 10, width: 100, height: 150},
  {id: 11, width: 250, height: 300},
  {id: 12, width: 300, height: 250},
  {id: 13, width: 400, height: 400},
  {id: 14, width: 300, height: 450},
  {id: 15, width: 100, height: 150},
  {id: 16, width: 150, height: 200},
]

export default {
  title: 'Grid Layout',
  component: Grids,
};

export const GridLayout = () => <Grids cards={cardsSet} />;