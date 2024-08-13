import { render, screen } from '@testing-library/react';
import App from './App';
import user from '@testing-library/user-event';

test('renders learn react link', () => {
  render(<App />);

  const linkElement = screen.getByText(/learn react/i);
  
  expect(linkElement).toBeInTheDocument();
});

test("header is loaded", () =>{
  render(<App/>);

  const header = screen.getAllByRole("heading");

  expect(header).toHaveLength(1);
})

test("click button is Clicked", () =>{
  render(<App/>);

  const buttonInput = screen.getByRole("button", { name: /click/i });

  user.click(buttonInput)
})
