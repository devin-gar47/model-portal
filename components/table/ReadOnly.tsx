import * as React from "react";

interface IReadOnlyProps {
  value: string;
}

const ReadOnly: React.FC<IReadOnlyProps> = ({ value }) => {
  return (
    <p data-testid="read-only-cell-value" className="w-fit">
      {value}
    </p>
  );
};

export default ReadOnly;
