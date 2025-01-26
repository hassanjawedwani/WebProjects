function Search() {
  return (
    <div className="bg-black w-full ">
      <div className="bg-black py-2 text-white flex justify-center items-center">
        <input
          type="search"
          placeholder="Search Movie"
          className="border border-solid border-gray-700 text-xl w-80 px-4 py-1 rounded-tl-4xl rounded-bl-4xl h-9 focus:outline focus:outline-blue-500 z-1"
        />
        <svg
          fill="white"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          focusable="false"
          viewBox="0 0 512 512"
          className="w-18 h-9 border border-solid border-gray-700 border-l-0 p-2 rounded-tr-4xl rounded-br-4xl bg-gray-900"
        >
          <path  d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
        </svg>
      </div>
    </div>
  );
}

export default Search;
