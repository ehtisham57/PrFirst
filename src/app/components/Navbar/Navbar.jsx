export default function Navbar () { 
    return(
        <>
        <header className="text-defualtcolor body-font bg-primaryColor">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="cursor-pointer user-select-none flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-10 h-10 text-primaryColor p-2 bg-secondaryColor rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
            <span className="ml-3 text-xl text-defualtcolor">PageCabite</span>
          </a>
          <nav className="cursor-pointer user-select-none md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <a className="mr-5 hover:text-secondaryColor">First Link</a>
            <a className="mr-5 hover:text-secondaryColor">Second Link</a>
            <a className="mr-5 hover:text-secondaryColor">Third Link</a>
            <a className="mr-5 hover:text-secondaryColor">Fourth Link</a>
          </nav>
          <button className="inline-flex items-center bg-secondaryColor border-0 py-1 px-3 focus:outline-none hover:bg-primaryColor-500 rounded text-base mt-4 md:mt-0">
            Subscribe
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </header>
        </>
    )
}