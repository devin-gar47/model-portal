import { render } from "@testing-library/react";
import ReadOnly from "./ReadOnly";

it("should render a read only cell", () => {
  const value = "7";
  const { getByTestId } = render(<ReadOnly value={value} />);

  const valueText = getByTestId("read-only-cell-value").textContent;
  expect(valueText).toEqual("7");
});
