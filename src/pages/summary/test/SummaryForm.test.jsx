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

describe("When rendering a popover", () => {
  it("appears on mouseover of checkbox label and disappears on mouse out", async () => {
    render(<SummaryForm />);

    // query expects element not to be in the DOM
    const hiddenpopover = screen.queryByText(
      "No ice cream will actually be delivered"
    );

    // check it's not
    expect(hiddenpopover).not.toBeInTheDocument();

    // hover on label first
    const label = screen.getByText("Terms and Conditions");
    await userEvent.hover(label);

    // and then get expects popover to be in the DOM
    const popover = screen.getByText("No ice cream will actually be delivered");
    expect(popover).toBeInTheDocument();

    await userEvent.unhover(label);
    expect(popover).not.toBeInTheDocument();
  });
});
