import { render } from "@testing-library/react";
import FormHeader from "./FormHeader";

it("should render the correct form header text", () => {
  const text = "some text";

  const { getByTestId } = render(<FormHeader text={text} />);

  const actual = getByTestId("form-header-text").textContent;
  const expected = "some text";

  expect(actual).toEqual(expected);
});
