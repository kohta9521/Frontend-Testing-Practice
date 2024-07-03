import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Button", () => {
  it("buttonタグがレンダリングされる", () => {
    render(<Button label="ボタン" onClick={() => alert("test")} />);

    const element = screen.getByRole("button");
    expect(element).toBeInTheDocument();
  });
});
