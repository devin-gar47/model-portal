import { fireEvent, render } from "@testing-library/react";
import FormInput from "./FormInput";

describe("Form Input component", () => {
  const id = "some-id";
  const type = "text";
  const label = "some label";
  let value = "";
  const setValueMock = jest.fn((text) => {
    value = text;
    return;
  });
  const placeholder = "some placeholder";

  it("should render form input label", () => {
    const { getByTestId } = render(
      <FormInput
        id={id}
        type={type}
        label={label}
        value={value}
        setValue={setValueMock}
        placeholder={placeholder}
      />
    );

    const actual = getByTestId("form-input-label").textContent;
    const expected = "some label";

    expect(actual).toEqual(expected);
  });

  it("should change the input value", async () => {
    const { getByTestId } = render(
      <FormInput
        id={id}
        type={type}
        label={label}
        value={value}
        setValue={setValueMock}
        placeholder={placeholder}
      />
    );

    const input = getByTestId("form-input-some-id") as HTMLInputElement;
    fireEvent.change(input, { target: { value: "some change" } });
    expect(setValueMock).toHaveBeenCalled();
  });
});
