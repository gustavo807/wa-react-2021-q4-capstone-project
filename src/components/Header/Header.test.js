import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Header from "./Header";
import StoreLogo from "./StoreLogo";
import logoImage from "../../assets/images/store-logo.png";

Enzyme.configure({ adapter: new Adapter() });

describe("<Header />", () => {
  it("should render the Storelogo component", () => {
    const header = shallow(<Header />);
    const element = header.find(StoreLogo);

    expect(element.name()).toBe("StoreLogo");
    expect(element.prop("logo")).toBe(logoImage);
  });
});
