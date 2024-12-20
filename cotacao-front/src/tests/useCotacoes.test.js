import { renderHook } from '@testing-library/react-hooks';
import useCotacoes from '../hooks/useCotacoes';

test('useCotacoes fetches data successfully', async () => {
  const { result, waitForNextUpdate } = renderHook(() => useCotacoes());

  await waitForNextUpdate();
  expect(result.current.cotacoes).toBeTruthy();
});