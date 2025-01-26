import propTypes from "prop-types";
function Pagination({ page, setPage, numPage }) {
  function prevPage() {
    if (page !== 1) setPage(page - 1);
  }

  function nextPage() {
    if (page !== numPage) setPage(page + 1);
  }
  return (
    <nav className="w-full border-t-2 m-auto">
      <ul className="flex flex-row justify-between py-2 border-0">
        <li className="text-tremor-default text-slate-500 m-auto font-semibold cursor-pointer border-0">
          <span className="flex items-center gap-2" onClick={prevPage}>
            &larr; Previous
          </span>
        </li>
        {page}
        <li className="text-tremor-default text-slate-500 m-auto font-semibold cursor-pointer border-0">
          <span className="flex items-center gap-2" onClick={nextPage}>
            Next &rarr;
          </span>
        </li>
      </ul>
    </nav>
  );
}

Pagination.propTypes = {
  page: propTypes.number.isRequired,
  setPage: propTypes.func.isRequired,
  numPage: propTypes.number.isRequired,
  //   num: propTypes.arrayOf(propTypes.object).isRequired,
};

export default Pagination;
