import Navbar from "@components/Navbar/Navbar";
import Footer from "@components/Footer/Footer";
import PropTypes from "prop-types";

const Layout = (props) => {
  return (
    <div>
      <Navbar />
      {props.children}
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;