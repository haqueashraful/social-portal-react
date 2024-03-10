import Banner from "./Banner";
import { usePortalContext } from "./Context";
import Nav from "./Nav";

const Header = () => {
  const { homeRef } = usePortalContext()
  return (
    <div id="home" ref={homeRef}>
      <Nav />
      <Banner/>
    </div>
  );
};

export default Header;
