import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  return (
    <div className="header">
      <FontAwesomeIcon className="stopwatch" icon="stopwatch" />
      <div>React Counter v2</div>
    </div>
  );
};

export default Header;
