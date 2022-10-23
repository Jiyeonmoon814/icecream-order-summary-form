import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SummaryForm } from "../SummaryForm";

describe("When rendering SummaryForm", () => {
  it("returns initial conditions", () => {
    render(<SummaryForm />);

    const checkbox = screen.getByRole("checkbox");
    const confirmButton = screen.getByRole("button", { name: "Confirm order" });

    expect(checkbox).not.toBeChecked();
    expect(confirmButton).toBeDisabled();
  });

  describe("when clicking the checkbox", () => {
    it("enables and disables the confirm button", async () => {
      render(<SummaryForm />);

      const checkbox = screen.getByRole("checkbox");
      const confirmButton = screen.getByRole("button", {
        name: "Confirm order",
      });

      await userEvent.click(checkbox);

      expect(checkbox).toBeChecked();
      expect(confirmButton).toBeEnabled();

      await userEvent.click(checkbox);

      expect(checkbox).not.toBeChecked();
      expect(confirmButton).toBeDisabled();
    });
  });
});
