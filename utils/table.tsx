import { DataType } from "./types/types";

const getCellBackgroundColor = (cell: any): string => {
  const id = cell.column.id;
  const percentage = parseInt(cell?.value?.split("/")[1]?.split("%")[0]);

  if (cell.value === "") return "255,255,255";

  if (
    id === "g1_fav_o2point5" ||
    id === "g1_fav_o1point5OR3point5" ||
    id === "g1_dog_o2point5" ||
    id === "g1_dog_o1point5OR3point5"
  ) {
    const cellsArr = cell.row.cells;
    const cellIndex = cellsArr.findIndex(
      (obj: { column: { id: any } }) => obj.column.id === id
    );

    const compareCellValue = cellsArr[cellIndex + 4]?.value;
    const compareCelPercentage = parseInt(
      compareCellValue.split("/")[1]?.split("%")[0]
    );
    return percentage - compareCelPercentage >= 4 ||
      compareCelPercentage - percentage >= 4
      ? "14, 165, 233"
      : "255, 255, 255";
  } else if (
    id === "home_mlo2point5" ||
    id === "home_mlo3point5" ||
    id === "ifRoadMLOnePointFive"
  ) {
    return "34, 211, 238";
  } else {
    if (percentage <= 44) return "248, 113, 113";
    else if (percentage >= 45 && percentage <= 49) {
      return "253, 224, 71";
    } else return "22, 163, 74";
  }
};

const getHeaderColor = (column: any): string => {
  const { id } = column;
  switch (id) {
    case "g1_fav_o2point5":
    case "fav_o2point5":
    case "home_mlo2point5":
      return "#f3e8ff";
    case "g1_fav_o1point5OR3point5":
    case "fav_o1point5OR3point5":
    case "home_mlo3point5":
      return "#d8b4fe";
    case "g1_dog_o2point5":
    case "dog_o2point5":
    case "ifRoadMLOnePointFive":
      return "#7e22ce";
    case "g1_dog_o1point5OR3point5":
    case "dog_o1point5OR3point5":
      return "#581c87";
    default:
      return "#FFFFFF";
  }
};

function filterInt(value: string) {
  if (/^[-+]?(\d+|Infinity)$/.test(value)) {
    return Number(value);
  } else {
    return NaN;
  }
}

const isValidRecordInfo = (str: string): boolean => {
  if (!str?.trim()) return false;

  const hyphenCount = (str.match(/-/g) || []).length;
  if (hyphenCount !== 1) return false;

  const recordInfoArr = str
    .trim()
    .split("-")
    .filter((element) => element);
  if (recordInfoArr.length !== 2) return false;

  const winNum = recordInfoArr[0].trim();
  const lossNum = recordInfoArr[1].trim();

  if (isNaN(filterInt(winNum)) || isNaN(filterInt(lossNum))) return false;

  return true;
};

function addToInitialState(
  initialState: DataType[],
  year: number,
  sport: string,
  home: boolean,
  division: boolean
): DataType[] {
  const newArr: DataType[] = initialState.map((obj: DataType): DataType => {
    const newObj = { ...obj };
    newObj.year = year;
    newObj.sport = sport;
    newObj.home = home;
    newObj.division = division;
    return newObj;
  });

  return newArr;
}

export {
  getCellBackgroundColor,
  isValidRecordInfo,
  addToInitialState,
  getHeaderColor,
};
