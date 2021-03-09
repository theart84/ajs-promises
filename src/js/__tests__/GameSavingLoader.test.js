import GameSavingLoader from '../GameSavedLoader';
import reader from '../reader';

afterEach(() => jest.resetModules());

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

reader.mockImplementationOnce(() => jest.requireActual('../reader').default());

test('Метод должен возвращать валидные данные', async () => {
  const receivedValue = {
    id: 9,
    created: 1546300800,
    userInfo: { id: 1, name: 'Hitman', level: 10, points: 2000 },
  };
  const response = await GameSavingLoader.load();
  expect(response).toEqual(receivedValue);
});
