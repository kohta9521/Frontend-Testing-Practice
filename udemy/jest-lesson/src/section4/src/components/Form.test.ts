import { render, screen } from "@testing-library/react";
import Form from "./Form";

describe("Form関連のテスト", () => {

    it("初期状態ではテキストボックスが空である", () => {
        render(<Form />);

        const inputElement = screen.getByRole("textbox");
        expect(inputElement).toHaveValue("");
    }
});
