
import { breakPoints } from 'appConsts/consts';

export const getColumns = (height: number, width: number) => {
  if (width > breakPoints.l) {
    return 4;
  }
  if (width > breakPoints.md && width <= breakPoints.l && height > breakPoints.sm) {
    return 3;
  }
  if ((width > breakPoints.sm && height < breakPoints.sm)
    || (width > breakPoints.sm && width <= breakPoints.md && height > breakPoints.sm)
  ) {
    return 2;
  }
  if (width < breakPoints.sm) {
    return 1;
  }
  return 1;
};

interface Color {
  color: string;
}

export const colors: Color[] = [
  {
    color: 'orange-400'
  },
  { color: 'yellow-400' },
  { color: 'blue-400' },
  { color: 'indigo-400' },
  { color: 'purple-400' },
  { color: 'pink-400' },
  { color: 'gray-400' },
  { color: 'red-400' },
  { color: 'green-400' },
  { color: 'teal-400' },
  { color: 'blue-700' },
  { color: 'indigo-700' },
  { color: 'orange-600' },
  { color: 'pink-600' },
];

export const getRandomColor = () => {
  const randomNumber = Math.floor(Math.random() * colors.length);
  return colors[randomNumber].color;
};
