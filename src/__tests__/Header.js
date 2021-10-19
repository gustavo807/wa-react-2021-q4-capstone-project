import { Header } from "../components";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import logoImage from "../assets/images/store-logo.png";

Enzyme.configure({ adapter: new Adapter() });

describe("<Header />", () => {
  it("renders an image", () => {
    const logo = shallow(<Header />);

    expect(logo.find(".store-logo").prop("src")).toEqual(logoImage);
  });
});
