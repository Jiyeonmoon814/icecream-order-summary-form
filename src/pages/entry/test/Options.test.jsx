import { render, screen } from "@testing-library/react";

import { Options } from "../Options";

describe("When options has loaded", () => {
  it("displays image for each scoop option from server", async () => {
    render(<Options optionType="scoops" />);

    // find images
    const scoopImages = await screen.findAllByRole("img", { name: /scoop$/i });
    expect(scoopImages).toHaveLength(2);

    // confirm alt text of images
    // @ts-ignore
    const altText = scoopImages.map((el) => el.alt);
    expect(altText).toEqual(["Chocolate scoop", "Vanilla scoop"]);
  });

  it("displays image for each topping option from server", async () => {
    render(<Options optionType="toppings" />);

    // find images
    const toppingImages = await screen.findAllByRole("img", {
      name: /topping$/i,
    });
    expect(toppingImages).toHaveLength(3);

    // confirm alt text of images
    // @ts-ignore
    const altText = toppingImages.map((el) => el.alt);
    expect(altText).toEqual([
      "Cherries topping",
      "M&Ms topping",
      "Hot fudge topping",
    ]);
  });
});
