import GameSavingLoader from './GameSavedLoader';
import GameSaving from './GameSaving';

GameSavingLoader.load().then(
  (saving) => new GameSaving(saving),
  (err) => err
);
