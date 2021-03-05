import GameSavingLoader from '../GameSavedLoader';
import '../reader';

jest.mock('../reader', () =>
  // eslint-disable-next-line prefer-promise-reject-errors
  jest.fn().mockImplementationOnce(() => Promise.reject('Error parsing data'))
);

test('Должен ловить ошибку', async () => {
  try {
    await GameSavingLoader.load();
  } catch (err) {
    expect(err).toBe('Error parsing data');
  }
});
