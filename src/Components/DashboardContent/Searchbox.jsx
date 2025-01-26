import { useEffect, useState } from "react";
import searchIcon from "../../assets/search-2-line.svg";
import propTypes from "prop-types";
function Searchbox({ search, setSearch, onClick }) {
  const [getSymbol, setGetSymbol] = useState([]);
  const [autoComplete, setAutoComplete] = useState([]);
  const [show, setShow] = useState(false);
  const finnhub = import.meta.env.VITE_FINNHUB_URL;
  const finnhubkey = import.meta.env.VITE_FINNHUB_TOKEN;

  function handleSearch(e) {
    e.preventDefault();

    const value = e.target.value;

    setSearch(e.target.value);

    if (value) {
      const filtered = getSymbol.filter((sym) =>
        sym.symbol.toLowerCase().includes(value.toLowerCase())
      );

      setAutoComplete(filtered);
      setShow(!show);
    } else {
      setAutoComplete([]);
      setShow(!show);
    }
  }

  function handleAutoComplete(stock) {
    setSearch(stock.symbol);
    setShow(!show);
  }

  useEffect(() => {
    const fetchStock = async () => {
      const res = await fetch(`${finnhub}&token=${finnhubkey}`);

      const data = await res.json();
      setGetSymbol(data.map((short) => short));
    };
    fetchStock();
  }, [finnhub, finnhubkey]);

  return (
    <form className="relative">
      <img
        src={searchIcon}
        alt="searchIcon"
        width={22}
        className="absolute top-2 left-2 righbottom-0 z-50 cursor-pointer"
        onClick={onClick}
      />
      <input
        type="text"
        value={search}
        placeholder="Search for stocks or crypto"
        className="w-full bg-[#283039] px-10 py-2 font-sans text-sm text-white rounded-md"
        onChange={handleSearch}
      />

      {show && autoComplete.length > 0 && (
        <ul className="bg-slate-50 px-2 h-36 overflow-y-scroll border">
          {autoComplete.map((text, index) => (
            <li
              className="flex flex-row justify-between text-tremor-default cursor-pointer"
              key={index}
              onClick={() => handleAutoComplete(text)}
            >
              <span>{text.symbol}</span>{" "}
              <span className="w-4/12 text-left">
                {text.description.toLowerCase()}
              </span>
            </li>
          ))}
        </ul>
      )}
    </form>
  );
}

Searchbox.propTypes = {
  search: propTypes.string.isRequired,
  setSearch: propTypes.func.isRequired,
  onClick: propTypes.func.isRequired,
};

export default Searchbox;
