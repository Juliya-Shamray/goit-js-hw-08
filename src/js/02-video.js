import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const KEY_TIME = 'videoplayer-current-time';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

const onPlay = function (data) {
  localStorage.setItem(KEY_TIME, JSON.stringify(data));
};

player.setCurrentTime(JSON.parse(localStorage.getItem(KEY_TIME)).seconds);

player.on('timeupdate', throttle(onPlay, 1000));
