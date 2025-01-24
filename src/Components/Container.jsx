import propTypes from "prop-types";
function Container({ children }) {
  return (
    <section className="flex flex-col space-y-4 h-full overflow-y-scroll lg:px-10 md:px-10 sm:px-5 max-sm:px-2 border-0">
      {children}
    </section>
  );
}

Container.propTypes = {
  children: propTypes.node.isRequired,
};

export default Container;
