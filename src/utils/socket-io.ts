import { io } from 'socket.io-client';

export const socket = io('http://localhost:8008', {
  autoConnect: false,
});