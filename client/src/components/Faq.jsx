import React from "react";

function Faq(){


    return(

        <>
    {/* The mid section for logo and create flashcard */}
        <div className="flex items-center mt-10 ml-8 ">
            <img className="px-10 cursor-pointer" src="https://res.cloudinary.com/do4vytmxm/image/upload/v1695803892/images/Logo_ev7w4u.png" alt="logo" />
            <span className="flex absolute right-10 px-10 text-2xl font-bold leading-tight text-blue-700 cursor-pointer"> 
            <svg className="mr-1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 40 40">
                <path fill="#98ccfd" d="M20,38.5C9.799,38.5,1.5,30.201,1.5,20S9.799,1.5,20,1.5S38.5,9.799,38.5,20S30.201,38.5,20,38.5z"></path><path fill="#4788c7" d="M20,2c9.925,0,18,8.075,18,18s-8.075,18-18,18S2,29.925,2,20S10.075,2,20,2 M20,1 C9.507,1,1,9.507,1,20s8.507,19,19,19s19-8.507,19-19S30.493,1,20,1L20,1z"></path><g><path fill="#fff" d="M30 18L22 18 22 10 18 10 18 18 10 18 10 22 18 22 18 30 22 30 22 22 30 22z"></path></g>
            </svg>
            Create Flashcard 
            </span>
        </div>
    {/* Frequently asked questions   */}

    <div class="py-10 bg-gray-10 sm:py-16 lg:py-24 ">
        {/* FAQ Heading */}
    <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-full ">
        <div class=" flex ml-8 max-w-3xl mx-auto ">
            <h2 class="text-2xl font-bold leading-tight text-blue-700 sm:text-4xl lg:text-5xl ">
                FAQ
            </h2>
        </div>
        {/* questions with answers */}
        <div class="max-w-full mx-auto ml-8 mt-8 space-y-4 md:mt-16 mr-1">
            <div
                class="flex transition-all duration-200 h-14 bg-white border border-gray-200 rounded-xl shadow-lg cursor-pointer hover:bg-gray-50">
                <button type="button" id="question1" data-state="closed" class="flex items-center justify-between w-full px-4 py-5 sm:p-6">
                    <div class="flex text-sm font-semibold text-black ">Can education Flashcards be used for all age groups ?  </div>
                    <svg id="arrow1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                        class="w-6 h-6 text-gray-400">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                
                </button>
                <div id="answer1"  class="px-4 pb-5 sm:px-6 sm:pb-6 hidden">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi beatae, quod fugiat natus ipsum fugit expedita laudantium animi sit? Tempora aut accusamus nostrum, laborum officia tempore distinctio eum dolores molestias..</p>
                </div>
            </div>      
            <div
                class="flex transition-all duration-200 h-14 bg-white border border-gray-200 rounded-xl shadow-lg cursor-pointer hover:bg-gray-50">
                <button type="button" id="question2" data-state="closed" class="flex items-center justify-between w-full px-4 py-5 sm:p-6">
                    <span class="flex text-sm font-semibold text-black">How do education flashcards Work ?</span>
                    <svg id="arrow2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                        class="w-6 h-6 text-gray-400">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                </button>
                <div id="answer2"  class="px-4 pb-5 sm:px-6 sm:pb-6 hidden">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis natus dolorem placeat nisi veniam, voluptates, maxime qui animi perspiciatis exercitationem atque doloremque odit ipsam, error expedita facilis. Sequi, alias dolores.</p>
                </div>
            </div>
            <div
                class=" flex transition-all duration-200 h-14 bg-white border border-gray-200 rounded-xl shadow-lg cursor-pointer hover:bg-gray-50">
                <button type="button" id="question3" data-state="closed" class="flex items-center justify-between w-full px-4 py-5 sm:p-6">
                    <span class="flex text-sm font-semibold text-black">Can education flashcards be prepared for test prpose ?</span>
                    <svg id="arrow3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                        class="w-6 h-6 text-gray-400">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                </button>
                <div id="answer3"  class="px-4 pb-5 sm:px-6 sm:pb-6 hidden">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde enim voluptatum corrupti quia error impedit! Fugiat harum accusantium quasi sed facere dolorem voluptatem doloremque repellendus? Minima sed recusandae porro dolore?</p>
                </div>
            </div>
            
            
        </div>
        
    </div>

</div>
{/* the answers are kept hidden by default, they can be viewd by targeting the onclick() method on each method */}


{/* Footer */}
<footer class="bg-white ">
    
        <hr class="my-3 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-2" />
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400 m-2">© 2024 <a href="https://flowbite.com/" class="hover:underline">Abhishek Bodkhe™</a>. All Rights Reserved.</span>

</footer>
    
        </>
    )
}

export default Faq ;