import read from './reader';
import json from './parser';
import GameSaving from './GameSaving';

export default class GameSavingLoader {
  static load() {
    return read()
      .then((response) => json(response))
      .then((value) => new GameSaving(value))
      .catch((err) => new Error(err));
  }
}
