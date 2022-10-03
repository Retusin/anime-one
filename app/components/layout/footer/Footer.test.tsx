import { Footer } from '@/components/layout/footer/Footer';
import { render } from '@testing-library/react';

test('render footer', () => {
  const { container } = render(<Footer />);
  expect(container).toMatchSnapshot();
});
