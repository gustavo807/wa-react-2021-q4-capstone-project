import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import StoreLogo from "./StoreLogo";
import logoImage from "../../assets/images/store-logo.png";

Enzyme.configure({ adapter: new Adapter() });

describe("<StoreLogo />", () => {
  it("renders an image", () => {
    const logo = shallow(<StoreLogo logo={logoImage} width="auto" />).dive();

    expect(logo.find(".store-logo").prop("src")).toEqual(logoImage);
  });
});
