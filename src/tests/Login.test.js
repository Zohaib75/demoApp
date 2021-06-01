import { render, screen, act, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Login from "../pages/Login";
import { MemoryRouter } from "react-router-dom";

const mockSubmit = jest.fn();

describe("Login", () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Login login={mockSubmit} />
      </MemoryRouter>
    );
  });

  it("should have all login form fields", () => {
    screen.getByPlaceholderText("Email");
    screen.getByPlaceholderText("Password");
    screen.getByRole("button");
    screen.getByRole("link");
  });

  it("should display required error when value is invalid", async () => {
    userEvent.click(screen.getByRole("button"));

    expect(await screen.findAllByRole("alert")).toHaveLength(2);
    expect(mockSubmit).not.toBeCalled();
  });

  it("should display matching error when email is invalid", async () => {
    userEvent.type(screen.getByPlaceholderText("Email"), "test");
    userEvent.type(screen.getByPlaceholderText("Password"), "password");
    userEvent.click(screen.getByRole("button"));

    expect(await screen.findAllByRole("alert")).toHaveLength(1);
    expect(mockSubmit).not.toBeCalled();
    expect(screen.getByPlaceholderText("Email").value).toBe("test");
    expect(screen.getByPlaceholderText("Password").value).toBe("password");
  });

  it("should not display error when value is valid", async () => {
    userEvent.type(screen.getByPlaceholderText("Email"), "test@email.com");
    userEvent.type(screen.getByPlaceholderText("Password"), "password");
    userEvent.click(screen.getByRole("button"));

    await waitFor(() => expect(screen.queryAllByRole("alert")).toHaveLength(0));
  });
});
