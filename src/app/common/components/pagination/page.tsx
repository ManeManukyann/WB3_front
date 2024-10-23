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
    <div className={`ml-[1548px] flex h-full w-max items-center justify-evenly gap-[10px] rounded px-4 py-3 ${containerClass}`}>
      <button
        className={`border-secondary-darkest flex h-8 w-8 items-center justify-center rounded-full border bg-white ${currentPage === 1 ? "text-green-400" : ""} ${isHorizontal ? "-rotate-90" : ""} ${arrowClass}`}
        onClick={goPreviousPage}
      >
        <Image src="/icons/arrow-up.svg" width={16} height={16} alt="arrow up" />
      </button>

      <div className={`flex ${isHorizontal ? "flex-row gap-x-2" : "flex-col gap-y-2"}`}>
        {currentPage > 4 && totalPages !== 5 && (
          <div className={`flex ${isHorizontal ? "flex-row gap-x-2" : "flex-col gap-y-2"}`}>
            <button
              className={`border-secondary-darkest flex h-8 w-8 items-center justify-center rounded-full border bg-white ${pageItemClass}`}
              onClick={() => updatePage(1)}
            >
              <p className={`text-h7 text-black ${textClass}`}>1</p>
            </button>
            <span className={`text-secondary-medium flex h-8 w-8 justify-center ${textClass}`}>...</span>
          </div>
        )}

        {displayedPagesQuartet.map((pageNumber: any) => (
          <button
            key={pageNumber}
            className={`border-secondary-darkest flex h-8 w-8 items-center justify-center rounded-full border ${currentPage === pageNumber ? `${activeClass || "bg-white"}` : "bg-white"} ${pageItemClass}`}
            onClick={() => updatePage(pageNumber)}
          >
            <p
              className={`text-h7 ${currentPage === pageNumber ? `${activeTextClass || "text-white"}` : "text-black"} ${textClass}`}
            >
              {pageNumber}
            </p>
          </button>
        ))}

        {totalPages > 5 && !displayedPagesQuartet.includes(totalPages) && (
          <div className={`flex ${isHorizontal ? "flex-row gap-x-2" : "flex-col gap-y-2"}`}>
            <span className={`text-secondary-medium flex h-8 w-8 justify-center ${textClass}`}>...</span>
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
        className={`border-secondary-darkest flex h-8 w-8 items-center justify-center rounded-full border bg-white ${currentPage === 1 ? "text-green-400" : ""} ${isHorizontal ? "-rotate-90" : ""} ${arrowClass}`}
        onClick={goNextPage}
      >
        <Image src="/icons/arrow-down.svg" width={16} height={16} alt="arrow down" />
      </button>
    </div>
  );
}
