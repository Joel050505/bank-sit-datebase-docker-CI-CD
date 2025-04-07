import { render, screen } from "@testing-library/react";
import Signup from "../signup/page";
import Signup from "@/app/signup/page";
import test from "node:test";

test("renders signup page", () => {
  render(<Signup />);
  const linkElement = screen.getByText(/Create an account/i);
  expect(linkElement).toBeInTheDocument();
});
