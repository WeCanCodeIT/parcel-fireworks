import Fireworks from 'fireworks-canvas';
import './main.css';

export default () => {
  const container = document.getElementById('container');
  const fireworks = new Fireworks(container);
  fireworks.start();
};
