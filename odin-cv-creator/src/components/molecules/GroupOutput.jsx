import PropTypes from "prop-types";
import NameForm from "../atoms/NameFrom";

function GeneralOutput() {
  return <NameForm />;
}

GeneralOutput.propTypes = {
  inputNames: PropTypes.arrayOf(PropTypes.string),
  groupName: PropTypes.string,
};

export default GeneralOutput;
