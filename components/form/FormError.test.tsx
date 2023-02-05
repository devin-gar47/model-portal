import { render } from "@testing-library/react";
import FormError from "./FormError";

it("should show the error message because an error is present", () => {
  const errorMessage = "some error message";

  const { getByTestId } = render(<FormError errorMessage={errorMessage} />);

  const actual = getByTestId("form-error-message").textContent;
  const expected = "some error message";

  expect(actual).toEqual(expected);
});

it("should not show the error message because an error is not present", () => {
  const errorMessage = "";

  const { queryByTestId } = render(<FormError errorMessage={errorMessage} />);

  const text = queryByTestId("form-error-message");

  expect(text).not.toBeInTheDocument;
});
