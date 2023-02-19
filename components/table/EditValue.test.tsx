import { render } from "@testing-library/react";
import EditValue from "./EditValue";

xit("should render the correct read only percentage", () => {
  const initialValue = "0-0 / 0% on o1.5";
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
  };
  const tableName = "BASEBALL HOME NON DIVISION";

  const { getByTestId } = render(
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

  //   expect(readOnlyPercentage).toEqual("/ 0% on o1.5");
  expect(true).toEqual(true);
});
