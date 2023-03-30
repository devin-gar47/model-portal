import { fireEvent, render } from "@testing-library/react";
import ReadValue from "./ReadValue";

it("should render the correct value", () => {
  const value = "0-0";
  const setIsEditModeActiveMock = jest.fn();
  const { getByTestId } = render(
    <ReadValue value={value} setIsEditModeActive={setIsEditModeActiveMock} />
  );

  const valueText = getByTestId("read-only-cell-value").textContent;
  expect(valueText).toEqual("0-0");
});

it("should register setIsEditModeActive click", () => {
  const value = "0-0";
  const setIsEditModeActiveMock = jest.fn();
  const { getByTestId } = render(
    <ReadValue value={value} setIsEditModeActive={setIsEditModeActiveMock} />
  );

  const valueText = getByTestId("read-only-cell-value");
  fireEvent.click(valueText);
  expect(setIsEditModeActiveMock).toBeCalledTimes(1);
});
