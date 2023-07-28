import { render, screen } from "@testing-library/react";
import App from "../src/App";

describe("App", () => {
  beforeEach(() => {
    render(<App />);
  });

  it("renders the application", () => {
    expect(screen.getByText("Hello Vite + React!"));
  });
});
