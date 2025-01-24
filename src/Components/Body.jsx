import propTypes from "prop-types";

function Body({ children }) {
  return (
    <div
      className="w-full grid lg:grid-cols-[15rem_1fr] md:grid-cols-1 sm:grid-cols-1 max-sm:grid-cols-1 min-h-dvh 
      self-center m-auto border"
    >
      {children}
    </div>
  );
}

Body.propTypes = {
  children: propTypes.node.isRequired,
};

export default Body;
