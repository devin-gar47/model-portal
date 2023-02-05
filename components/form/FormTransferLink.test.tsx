import { render } from "@testing-library/react";
import FormTransferLink from "./FormTransferLink";

it("should render the correct text", () => {
  const link = "/";
  const text = "text";

  const { getByTestId } = render(<FormTransferLink link={link} text={text} />);

  const formLinkText = getByTestId("form-transfer-link").textContent;

  expect(formLinkText).toEqual("text");
});
