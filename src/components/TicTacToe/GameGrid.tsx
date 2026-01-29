import { ReactNode } from 'react';

import './GameGrid.css';

const GRID_IMAGE_URL = "../src/assets/game-grid.svg";

export default function GameGrid(props: Readonly<{ children: ReactNode }>) {
  return (
    <div className="game-grid" style={{ backgroundImage: `url(${GRID_IMAGE_URL})`}}>
      {props.children}
    </div>
  );
};