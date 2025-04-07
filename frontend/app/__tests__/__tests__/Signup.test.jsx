import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Signup from "@/app/signup/page";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve([]),
  })
);

describe("Signup Component", () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  it("renders form inputs and submit button", () => {
    render(<Signup />);

    expect(screen.getByPlaceholderText("Enter username")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Enter password")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Register" })
    ).toBeInTheDocument();
  });

  it("allows user to fill in and submit the form", async () => {
    render(<Signup />);

    const usernameInput = screen.getByPlaceholderText("Enter username");
    const passwordInput = screen.getByPlaceholderText("Enter password");
    const button = screen.getByRole("button", { name: /register/i });

    fireEvent.change(usernameInput, { target: { value: "testuser" } });
    fireEvent.change(passwordInput, { target: { value: "testpass" } });
    fireEvent.click(button);

    await waitFor(() => {
      expect(fetch).toHaveBeenCalledTimes(1);
      expect(fetch).toHaveBeenCalledWith(
        expect.stringMatching(/http:\/\/.*:4000\/users/),
        expect.objectContaining({
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            username: "testuser",
            password: "testpass",
          }),
        })
      );
    });
  });
});
