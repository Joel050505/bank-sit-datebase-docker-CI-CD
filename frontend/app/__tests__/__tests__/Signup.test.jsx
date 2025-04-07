import { render, fireEvent, waitFor } from "@testing-library/react";
import Signup from "@/app/signup/page";
import "@testing-library/jest-dom";
import { vi } from "vitest";

// Mocking the fetch API
global.fetch = vi.fn();

describe("Signup Component", () => {
  beforeEach(() => {
    fetch.mockResolvedValue({
      ok: true,
      json: () => Promise.resolve({ message: "User created" }),
    });
  });

  afterEach(() => {
    vi.resetAllMocks();
  });

  test("renders form inputs and submit button", () => {
    const { getByLabelText, getByText } = render(<Signup />);
    expect(getByLabelText(/Username/i)).toBeInTheDocument();
    expect(getByLabelText(/Password/i)).toBeInTheDocument();
    expect(getByText(/Sign up/i)).toBeInTheDocument();
  });

  test("allows user to fill in and submit the form", async () => {
    const { getByLabelText, getByText } = render(<Signup />);

    const usernameInput = getByLabelText(/Username/i);
    const passwordInput = getByLabelText(/Password/i);
    const submitButton = getByText(/Sign up/i);

    fireEvent.change(usernameInput, { target: { value: "testuser" } });
    fireEvent.change(passwordInput, { target: { value: "testpass" } });

    fireEvent.click(submitButton);

    // Wait for the async fetch call to be called
    await waitFor(() => {
      expect(fetch).toHaveBeenCalledTimes(1); // Ensure fetch is called once
    });

    // Ensure fetch was called with the correct parameters
    expect(fetch).toHaveBeenCalledWith(
      expect.stringContaining("/create-user"),
      expect.objectContaining({
        method: "POST",
        headers: expect.objectContaining({
          "Content-Type": "application/json",
        }),
        body: expect.stringContaining("testuser"),
      })
    );
  });
});
