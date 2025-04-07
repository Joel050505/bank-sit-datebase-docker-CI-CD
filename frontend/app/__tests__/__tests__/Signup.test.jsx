import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Signup from "@/app/signup/page";
import "@testing-library/jest-dom";

// Mock fetch globally
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve([]),
  })
);

describe("Signup Component", () => {
  beforeEach(() => {
    fetch.mockClear(); // clear previous calls to mock fetch
  });

  it("renders form inputs and submit button", () => {
    render(<Signup />);

    // Check if the username input, password input, and button are rendered
    expect(screen.getByPlaceholderText("Username...")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("••••••••")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /sign up/i })
    ).toBeInTheDocument();
  });

  it("allows user to fill in and submit the form", async () => {
    render(<Signup />);

    const usernameInput = screen.getByPlaceholderText("Username...");
    const passwordInput = screen.getByPlaceholderText("••••••••");
    const button = screen.getByRole("button", { name: /sign up/i });

    // Simulate user input for username and password
    fireEvent.change(usernameInput, { target: { value: "testuser" } });
    fireEvent.change(passwordInput, { target: { value: "testpass" } });

    // Simulate form submission
    fireEvent.click(button);

    // Wait for the async fetch call to be called
    await waitFor(() => {
      expect(fetch).toHaveBeenCalledTimes(1); // Ensure fetch is called once
    });

    // Ensure fetch was called with the correct parameters
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
