import { useEffect, useState } from 'react';
import { Button, Space, Tooltip, Typography } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';

import GameGrid from '../components/TicTacToe/GameGrid';

const { Title } = Typography;

const X_IMAGE_URL = "../src/assets/game-x.svg";
const O_IMAGE_URL = "../src/assets/game-o.svg";

export default function TicTacToe() {
  const [isPlayerXTurn, setIsPlayerXTurn] = useState(true);
  const [gameState, setGameState] = useState(Array.from({ length: 9 }).fill(''));
  const [isGameOver, setIsGameOver] = useState(false);

  const changeTurn = () => {
    setIsPlayerXTurn((prevIsPlayerXTurn) => !prevIsPlayerXTurn);
  };

  const startNewGame = () => {
    setIsPlayerXTurn(true);
    setGameState(Array.from({ length: 9 }).fill(''));
    setIsGameOver(false);
  };

  const currentGameStateDisplay = () => {
    if (isGameOver) {
      return gameState.every(square => square !== '') ? "It's a Draw!" : `Player ${isPlayerXTurn ? 'O' : 'X'} Wins!`;
    } else {
      return `Current Turn: Player ${isPlayerXTurn ? 'X' : 'O'}`;
    }
  };

  useEffect(() => {
    const checkForWinner = () => {
      const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
      ];

      for (const combination of winningCombinations) {
        const [a, b, c] = combination;
        if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
          setIsGameOver(true);
          return;
        }
      }
      if (gameState.every(square => square !== '')) {
        setIsGameOver(true);
      }
    };

    checkForWinner();
  }, [...gameState]);

  return (
    <div>
      <Space align='center'>
        <Tooltip title="Back to Projects">
          <Button
            shape='circle'
            icon={<ArrowLeftOutlined />}
            href='/projects'
          />
        </Tooltip>
        <Title level={2} style={{ margin: '20px 0' }}>Tic-Tac-Toe Game</Title>
      </Space>
      <GameGrid>
        {
          gameState.map((gameSquareContent, index) => {
            let icon = <></>;
            if (gameSquareContent === 'X') {
              icon = <img src={X_IMAGE_URL} alt="X Icon" />;
            } 
            if (gameSquareContent === 'O') {
              icon = <img src={O_IMAGE_URL} alt="O Icon" />;
            }

            return <Button
              key={'game-square-' + index}
              style={{
                width: '90px',
                height: '90px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              type='text'
              icon={icon}
              disabled={gameSquareContent !== '' || isGameOver}
              onClick={() => {
                setGameState((prevGameState) => {
                  prevGameState[index] = isPlayerXTurn ? 'X' : 'O';
                  return prevGameState;
                });
                changeTurn();
              }}
            />
          })
        }
      </GameGrid>
      <Space align='center' size='large'>
        <Button
          onClick={startNewGame}
        >New Game</Button>
        <Title level={4} style={{ marginTop: '10px' }}>
          { currentGameStateDisplay() }
        </Title>
      </Space>
    </div>
  );
};