import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import { FunctionComponent } from "react";

type Props = {
  totalPosts: number,
  postsPerPage: number,
  currentPage: number,
  currentPosts: number,
  firstPostIndex: number,
  accumulatdPosts: number,
  setCurrentPage: (a: number) => void
};

const Pagination: FunctionComponent<Props> = (props) => {

  const pages = [];

  for (let i = 1; i <= Math.ceil(props.totalPosts / props.postsPerPage); i++) {
    pages.push(i)
  }

  function nextPage() {
    if (props.currentPage > pages.length - 1) {
      return props.currentPage
    }
    props.setCurrentPage(props.currentPage + 1)
  }
  
  function prevPage() {
    if (props.currentPage < pages.length - 1) {
      return props.currentPage
    }
    props.setCurrentPage(props.currentPage - 1)
  }

  return (
    <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
      <div className="flex flex-1 justify-between sm:hidden">
        <button
          className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          onClick={prevPage}
        >
          Previous
        </button>
        <button
          className="relative ml-3 inline-flex items-center rounded-md border bg-teal-600 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-teal-400"
          onClick={nextPage}
        >
          Next
        </button>
      </div>
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <nav className="isolate inline-flex gap-1 shadow-sm" aria-label="Pagination">
            <button
              className="relative inline-flex items-center rounded-md border bg-slate-500 px-2 py-2 text-sm font-medium hover:bg-slate-400 focus:z-20"
              onClick={prevPage}
            >
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon className="h-5 w-5 fill-white" aria-hidden="true" />
            </button>
            {/* Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" */}
            {/*relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 */}
            {pages.map((page, index) => {
              return (
                <button
                  className={`${page === props.currentPage ?
                  'relative z-10 inline-flex items-center rounded-md border bg-indigo-50 px-4 py-2 text-sm font-medium focus:z-20'
                  : 'relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20'}`}
                  key={index}
                  onClick={() => props.setCurrentPage(page)}
                >
                  {page}
                </button>
              )
            })}
            <button
              className="relative inline-flex items-center rounded-md bg-teal-600 px-2 py-2 text-sm font-medium text-teal-500 hover:bg-teal-500 focus:z-20"
              onClick={nextPage}
            >
              <span className="sr-only">Next</span>
              <ChevronRightIcon className="h-5 w-5 fill-white" aria-hidden="true" />
            </button>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Pagination;