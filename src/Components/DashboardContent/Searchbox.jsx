import { useState } from "react";

function Searchbox() {
  const [search, setSearch] = useState("");

  function handleSearch(e) {
    e.preventDefault();

    setSearch(e.target.value);
  }

  return (
    <form>
      <input
        type="text"
        value={search}
        placeholder="Search for stocks or crypto"
        className="w-full bg-[#283039] px-2 py-2 font-sans text-sm  text-white rounded-md"
        onChange={handleSearch}
      />
    </form>
  );
}

export default Searchbox;
