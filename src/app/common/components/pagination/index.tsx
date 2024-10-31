import Image from "next/image";

export default function Pagination({
  isHorizontal,
  containerClass,
  arrowClass,
  currentPage,
  totalPages,
  pageItemClass,
  activeClass,
  activeTextClass,
  textClass,
  displayedPagesQuartet,
  updatePage,
  goPreviousPage,
  goNextPage
}: any) {
  return (
    <div className={`flex h-full w-max items-center justify-evenly gap-[10px] rounded px-4 py-3 ${containerClass}`}>
      <button
        className={`border-secondary-darkest flex h-8 w-8 items-center justify-center rounded-full border bg-white ${currentPage === 1 ? "text-green-400" : ""} ${isHorizontal ? "-rotate-90" : ""} ${arrowClass}`}
        onClick={goPreviousPage}
        disabled={currentPage === 1}
      >
        <Image src="/icons/arrow-up.svg" width={16} height={16} alt="arrow up" />
      </button>

      <div className={`flex ${isHorizontal ? "flex-row gap-x-2" : "flex-col gap-y-2"}`}>
        {displayedPagesQuartet.map((pageNumber: number) => (
          <button
            key={pageNumber}
            className={`flex h-8 w-8 items-center justify-center rounded-full border ${currentPage === pageNumber ? `${activeClass || "bg-white"} border-[#0B97A7]` : "border-secondary-darkest bg-white"} ${pageItemClass}`}
            onClick={() => updatePage(pageNumber)}
          >
            <p
              className={`text-h7 ${currentPage === pageNumber ? `${activeTextClass || "text-[#0B97A7]"}` : "text-black"} ${textClass}`}
            >
              {pageNumber}
            </p>
          </button>
        ))}
        {totalPages > 5 && !displayedPagesQuartet.includes(totalPages) && (
          <div className="flex items-center">
            <span className="text-secondary-medium flex h-8 w-8 justify-center">...</span>
            <button
              className={`border-secondary-darkest flex h-8 w-8 items-center justify-center rounded-full border bg-white ${pageItemClass}`}
              onClick={() => updatePage(totalPages)}
            >
              <p className={`text-h7 text-black ${textClass}`}>{totalPages}</p>
            </button>
          </div>
        )}
      </div>

      <button
        className={`border-secondary-darkest flex h-8 w-8 items-center justify-center rounded-full border bg-white ${currentPage === totalPages ? "text-green-400" : ""} ${isHorizontal ? "-rotate-90" : ""} ${arrowClass}`}
        onClick={goNextPage}
        disabled={currentPage === totalPages}
      >
        <Image src="/icons/arrow-down.svg" width={16} height={16} alt="arrow down" />
      </button>
    </div>
  );
}
