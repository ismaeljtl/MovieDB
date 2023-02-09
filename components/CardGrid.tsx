import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import {
  IMovie,
  INowPlayingMovie,
} from "../interfaces/NowPlayingMovies.interface";
import Card from "./Card";

const CardGrid: React.FC<{ data: IMovie[] }> = ({ data }) => {
  const itemsPerPage = 20;
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const [currentItems, setCurrentItems] = useState(
    data && data.slice(itemOffset, endOffset)
  );

  // Invoke when user click to request another page.
  const handlePageClick = (event: { selected: number }) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    const pageIndex = event.selected;
    const newOffset = data && (pageIndex * itemsPerPage) % data.length;
    setItemOffset(newOffset!);
  };

  useEffect(() => {
    setCurrentItems(data.slice(itemOffset, endOffset));
  }, [itemOffset]);

  return (
    <div className="px-2 md:px-0">
      <div className="flex justify-between">
        <div className="prose mb-8">
          <h1>Playing Movies</h1>
        </div>
      </div>
      <div className="grid gap-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {currentItems &&
          currentItems.map((item) => <Card key={item.id} movie={item} />)}
      </div>
      <ReactPaginate
        className="flex mt-8 justify-center"
        pageClassName="isolate inline-flex -space-x-px rounded-md shadow-sm"
        pageLinkClassName="relative inline-flex items-center border border-base-300 bg-base-100 px-2 md:px-4 py-2 text-sm font-medium text-gray-500 hover:bg-base-200 focus:z-20"
        activeLinkClassName="relative z-10 inline-flex items-center border border-indigo-500 bg-base-300 px-2 md:px-4 py-2 text-sm font-medium text-grey-600 focus:z-20"
        activeClassName="px-0"
        breakClassName="relative inline-flex items-center border border-base-300 bg-base-100 px-2 md:px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
        previousLabel="«"
        breakLabel="..."
        nextLabel="»"
        onPageChange={handlePageClick}
        pageCount={Math.ceil(data.length / itemsPerPage)}
        previousClassName="relative inline-flex items-center rounded-l-md border border-base-300 bg-base-100 px-2 md:px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
        nextClassName="relative inline-flex items-center rounded-r-md border border-base-300 bg-base-100 px-2 md:px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
        forcePage={Math.ceil((itemOffset + itemsPerPage) / itemsPerPage) - 1}
      />
    </div>
  );
};

export default CardGrid;
