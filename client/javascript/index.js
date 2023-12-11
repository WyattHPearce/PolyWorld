import {
  setup,
  draw,
  startGame
} from './game/gameRenderer.js';
import {
  setupSocket
} from './socket/socketManager.js';

setupSocket();
startGame();