const express = require('express');
const { exec } = require('child_process');
const path = require('path');

const app = express();
const PORT = 3002;

// Endpoint to start the tic-tac-toe app
app.get('/start-tic-tac-toe', (req, res) => {
  // Path to the tic-tac-toe project (adjust if different)
  const ticTacToePath = path.join(__dirname, '..', 'tic-tac-toe');

  // Command to start the tic-tac-toe app (assuming npm start on port 3001)
  const npmCmd = process.platform === 'win32' ? 'npm.cmd' : 'npm';
  exec(`${npmCmd} start`, {
    cwd: ticTacToePath,
    env: { ...process.env, PORT: '3001' },
    detached: true,
    stdio: 'ignore'
  }, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error starting tic-tac-toe: ${error}`);
      return res.status(500).json({ error: 'Failed to start tic-tac-toe app' });
    }
    console.log('Tic-tac-toe app started');
  });

  res.json({ message: 'Tic-tac-toe app starting...' });
});

app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});