import { renderWithProviders } from "../../utils/test-utils";
import { fireEvent, render } from "@testing-library/react";
import EditValue from "./EditValue";

const rowIndex = 0;
const columnID = "g1_fav_o1point5OR3point5";
const setIsEditModeActiveMock = jest.fn();
const row = {
  ou: "6.5",
  year: 2017,
  sport: "BASEBALL",
  home: true,
  division: false,
  g1_fav_o2point5: "0-0 / 0%",
  g1_fav_o1point5OR3point5: "0-0 / 0% on   o1.5",
  g1_dog_o2point5: "",
  g1_dog_o1point5OR3point5: "0-0 / 0% on o1.5",
  fav_o2point5: "0-0 / 0%",
  fav_o1point5OR3point5: "0-0 / 0% on o1.5",
  dog_o2point5: "",
  dog_o1point5OR3point5: "0-0 / 0% on o1.5",
  home_mlo2point5: "0-0 / 0%",
  home_mlo3point5: "",
  ifRoadMLOnePointFive: "",
  original: {
    ou: "6.5",
    year: 2017,
    sport: "BASEBALL",
    home: true,
    division: false,
  },
};
const tableName = "BASEBALL HOME NON DIVISION";

it("should render the correct read only percentage", () => {
  const initialValue = "0-0 / 0% on o1.5";
  const { getByTestId } = renderWithProviders(
    <EditValue
      initialValue={initialValue}
      rowIndex={rowIndex}
      columnID={columnID}
      setIsEditModeActive={setIsEditModeActiveMock}
      row={row}
      tableName={tableName}
    />
  );

  const readOnlyPercentage = getByTestId("read-only-percentage").textContent;

  expect(readOnlyPercentage).toEqual("/ 0% on o1.5");
});

it("should render 0% for read only percentage", () => {
  const initialValue = "0-0 /";
  const { getByTestId } = renderWithProviders(
    <EditValue
      initialValue={initialValue}
      rowIndex={rowIndex}
      columnID={columnID}
      setIsEditModeActive={setIsEditModeActiveMock}
      row={row}
      tableName={tableName}
    />
  );

  const readOnlyPercentage = getByTestId("read-only-percentage").textContent;

  expect(readOnlyPercentage).toEqual("/ 0%");
});

it("should show the invalid message because the input is invalid", () => {
  const initialValue = "0-0 / 0% on o1.5";
  const { getByTestId } = renderWithProviders(
    <EditValue
      initialValue={initialValue}
      rowIndex={rowIndex}
      columnID={columnID}
      setIsEditModeActive={setIsEditModeActiveMock}
      row={row}
      tableName={tableName}
    />
  );

  const form = getByTestId("edit-value-form");
  const input = getByTestId("edit-value-input");
  fireEvent.change(input, { target: { value: "0" } });
  fireEvent.submit(form);
  const errorMessage = getByTestId("invalid-input-error-message").textContent;
  expect(errorMessage).toEqual("Valid input must be in the form: 0-0");
});

it("should not show the invalid message because the input is valid", () => {
  const initialValue = "0-0 / 0% on o1.5";
  const { getByTestId, queryByTestId } = renderWithProviders(
    <EditValue
      initialValue={initialValue}
      rowIndex={rowIndex}
      columnID={columnID}
      setIsEditModeActive={setIsEditModeActiveMock}
      row={row}
      tableName={tableName}
    />
  );

  const form = getByTestId("edit-value-form");
  const input = getByTestId("edit-value-input");
  fireEvent.change(input, { target: { value: "0-0" } });
  fireEvent.submit(form);
  const errorMessage = queryByTestId("invalid-input-error-message");
  expect(errorMessage).not.toBeInTheDocument;
});
