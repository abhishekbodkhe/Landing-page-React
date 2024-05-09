import React from "react";


function Header (){
    return(
<>
        {/* Navbar */}

        <nav class="bg-white border-gray-200 flex items-center m-8 ">

        <a href="" class="flex items-center space-x-3 rtl:space-x-reverse">
                <img src="https://res.cloudinary.com/do4vytmxm/image/upload/v1695803892/images/Logo_ev7w4u.png" class="h-7" alt="Logo" />
            </a>
            
            
            <div class="flex absolute md:flex md:flex-grow flex-row-reverse right-10" id="navbar-cta">
            
                <ul class=" flex  space-x-30 flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 md:flex-row md:mt-0 md:border-0 md:bg-white md:dark:bg-gray-0 ">
                <li>
                    <a href="#" class="block py-2 px-3 text-white bg-gray-700 rounded md:bg-transparent md:text-gray-700 md:p-0 md:dark:text-gray-500 hover:text-blue-600" aria-current="page">Home</a>
                </li>
                <li>
                    <a href="#" class="block py-2 px-3 text-white bg-gray-700 rounded md:bg-transparent md:text-gray-700 md:p-0 md:dark:text-gray-500 hover:text-blue-600">Flashcard</a>
                </li>
                <li>
                    <a href="#" class="block py-2 px-3 text-white bg-gray-700 rounded md:bg-transparent md:text-gray-700 md:p-0 md:dark:text-gray-500 hover:text-blue-600">Contact</a>
                </li>
                <li>
                    <a href="#" class="block py-2 px-3 text-white bg-gray-700 rounded md:bg-transparent md:text-gray-700 md:p-0 md:dark:text-gray-500 hover:text-blue-600">FAQ </a>
                </li>
                <li>
                <button type="button" class="text-white h-7 flex items-center  bg-blue-800 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-2xl text-sm px-4 py-2 text-center ">Login</button>
                </li>
                </ul>
            </div>
            
        </nav>

{/* The navigation/location panel  */}
        
    <nav class="flex m-8" aria-label="Breadcrumb">
        <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
          <li class="inline-flex items-center">
            <a href="#" class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 ">
              <svg class="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
              </svg>
              Flashcards
            </a>
          </li>
          <li>
            <div class="flex items-center">
              <svg class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
              </svg>
              <a href="#" class="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400">Mathematics</a>
            </div>
          </li>
          <li aria-current="page">
            <div class="flex items-center ">
              <svg class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
              </svg>
              <span class="ms-1 text-sm font-medium text-purple-800 md:ms-2">Relation and Functions </span>
            </div>
          </li>
        </ol>
    </nav>

{/* The current chapter/tab name */}
<div className="ml-8 text-start mt-8 text-lg font-bold leading-tight text-blue-700	--tw-text-opacity: 1; color: rgba(29, 78, 216, var(--tw-text-opacity)); sm:text-4xl lg:text-2xl ">
  Relations and Functions( Mathematics )
</div>

        

</>

    )
}

export default Header ;