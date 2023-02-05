import { render } from "@testing-library/react"
import FormButton from "./FormButton"

it("should render the button with the correct text", () => {
    const text = "Login"

    const { getByTestId } = render(
        <FormButton text={text} />
    )
    
    const actual = getByTestId("form-button").textContent
    const expected = "Login"

    expect(actual).toEqual(expected)
})