import propTypes from "prop-types";
function Pagination({ page, setPage, numPage, num }) {
  console.log(typeof num);
  function prevPage() {
    if (page !== 1) setPage(page - 1);
  }

  function changeCurrPage(id) {
    setPage(id);
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
        <div className="flex flex-row items-center m-auto justify-center space-x-2 border-0">
          {num.map((n, i) => (
            <li
              key={i}
              className={`${
                page === n
                  ? "w-8 h-8 bg-[#F9FAFB] flex items-center justify-center text-tremor-default rounded-full cursor-pointer"
                  : "w-8 h-8 flex items-center justify-center text-tremor-default text-slate-500 cursor-pointer"
              }`}
            >
              <span onClick={() => changeCurrPage(n)}>{n}</span>
            </li>
          ))}
        </div>

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
  num: propTypes.arrayOf(propTypes.object).isRequired,
};

export default Pagination;
