import { render, screen } from "@testing-library/react";
import App from "../components/App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/livestream helper/i);
  expect(linkElement).toBeInTheDocument();
});
