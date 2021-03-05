import GameSavingLoader from '../GameSavedLoader';
import GameSaving from '../GameSaving';
import '../reader';

test('Метод должен возвращать валидные данные', async () => {
  const receivedValue = {
    id: 9,
    created: 1546300800,
    userInfo: { id: 1, name: 'Hitman', level: 10, points: 2000 },
  };
  const response = await GameSavingLoader.load();
  const expectedValue = new GameSaving(response);
  expect(expectedValue).toEqual(receivedValue);
});
