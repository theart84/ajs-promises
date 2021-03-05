import read from './reader';
import json from './parser';

export default class GameSavingLoader {
  static load() {
    return new Promise((resolve, reject) => {
      read()
        .then((response) => json(response))
        .then((value) => resolve(value))
        .catch((err) => reject(err));
    });
  }
}
