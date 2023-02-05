import * as React from "react";

interface IReadValueProps {
  value: string;
  setIsEditModeActive: (
    value: boolean | ((prevVar: boolean) => boolean)
  ) => void;
}

const ReadValue: React.FC<IReadValueProps> = ({
  value,
  setIsEditModeActive,
}) => {
  return (
    <p
      data-testid="read-only-cell-value"
      className="w-fit"
      onClick={() => setIsEditModeActive(true)}
    >
      {value}
    </p>
  );
};

export default ReadValue;
