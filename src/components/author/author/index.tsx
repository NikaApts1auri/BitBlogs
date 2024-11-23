import { useState } from "react";


export default function Author() {
  const [activeTab, setActiveTab] = useState("articles");
  return (
    <div>




       <div className="flex w-[89rem] h-[24rem] dark:bg-[#04040f] items-center p-[3.2rem] gap-[3rem] mx-[auto]">
          <div className="w-[12rem] h-[12rem] border-[0.5rem] border-blue-800 rounded-[50%] ">
          <span className="flex text-[1.2rem] h-full w-full items-center justify-center rounded-[50%] bg-muted">JD</span>
          </div>

           <div className=" flex flex-col ">
            <h2 className="text-[2.5rem] font-[bold] dark:text-[white]">Jon Doe</h2>
            <p className="w-[67rem] text-[grey] text-[1.4rem]">Tech enthusiast, software engineer, and avid blogger. Passionate about AI, web development, and the future of technology.</p>

            <div className="flex gap-[1rem] mt-[1rem]">

             <button className=" flex w-[3.6rem] h-[3.6rem] justify-center items-center border-[0.2rem] rounded-[50%]">
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-twitter h-4 w-4"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
             </button>

             <button className=" flex w-[3.6rem] h-[3.6rem] justify-center items-center border-[0.2rem] rounded-[50%]">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-facebook h-4 w-4"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
             </button>


             <button className=" flex w-[3.6rem] h-[3.6rem] justify-center items-center border-[0.2rem] rounded-[50%]">
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-linkedin h-5 w-5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
             </button>


             <button className=" flex w-[3.6rem] h-[3.6rem] justify-center items-center border-[0.2rem] rounded-[50%]">
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-github h-4 w-4"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
             </button>
            
            </div>

            <div className="flex gap-[1rem] mt-[1rem]">
              <span className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" color="grey" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-users  h-4 w-4 mr-1"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
              <p className="text-[grey] text-[1.2rem]">1234 Folowers</p>
              </span>

              <span className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" color="grey" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-users h-4 w-4 mr-1"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
              <p className="text-[grey] text-[1.2rem]">567 Folowers</p>
              </span>
            </div>

          </div>

       </div>


       <div>

      <div className="flex w-[89rem] dark:bg-[grey]  mx-[auto] h-[3.6rem] rounded-[1.2rem] my-[2rem] p-[0.2rem] ">
        <div
          className={`cursor-pointer ${
            activeTab === "articles" ? "dark:bg-[black] dark:text-white" : ""
          } w-[50%] rounded-[1.2rem] flex items-center justify-center text-[1.2rem]`}
          onClick={() => setActiveTab("articles")}
        >
          Articles
        </div>
        <div
          className={`cursor-pointer ${
            activeTab === "about" ? "dark:bg-[black] dark:text-white" : ""
          } w-[50%] rounded-[1.2rem] flex justify-center items-center text-[1.2rem]`}
          onClick={() => setActiveTab("about")}
        >
          About
        </div>
      </div>

     
      {activeTab === "articles" && (
        <div className="articles p-[8rem] gap-[2rem] flex flex-col  ml-[10%]">
          
          <div className="flex flex-col space-y-1.5 p-6">
       
          <div className="mb-4">
            <img
              src="https://g-zwkebgiacpe.vusercontent.net/placeholder.svg?height=200&amp;width=400"
              alt="Cover image for The Future of Blockchain Technology"
              className="rounded-lg object-cover w-full h-[200px]"
            />
          </div>


          <div className="tracking-tight text-2xl font-bold">
            The Future of Blockchain Technology
          </div>


          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <a className="hover:underline" href="/author/1">John Doe</a>
            <span>•</span>
            <span>May 15, 2023</span>
            <span>•</span>
            <span>5 min read</span>
          </div>
        </div>

        <div className="p-6 pt-0">
          <p className="text-muted-foreground">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...
          </p>
        </div>





        <div className="flex flex-col mt-[5rem] space-y-1.5 p-6">
       
          <div className="mb-4">
            <img
              src="https://g-zwkebgiacpe.vusercontent.net/placeholder.svg?height=200&amp;width=400"
              alt="Cover image for The Future of Blockchain Technology"
              className="rounded-lg object-cover w-full h-[200px]"
            />
          </div>


          <div className="tracking-tight text-2xl font-bold">
          Cryptocurrency: A Beginner's Guide
          </div>


          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <a className="hover:underline" href="/author/1">Jame Smith</a>
            <span>•</span>
            <span>May 18, 2023</span>
            <span>•</span>
            <span>7 min read</span>
          </div>
        </div>

        <div className="p-6 pt-0">
          <p className="text-muted-foreground">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...
          </p>
        </div>






        <div className="flex flex-col mt-[5rem]  space-y-1.5 p-6">
       
          <div className="mb-4">
            <img
              src="https://g-zwkebgiacpe.vusercontent.net/placeholder.svg?height=200&amp;width=400"
              alt="Cover image for The Future of Blockchain Technology"
              className="rounded-lg object-cover w-full h-[200px]"
            />
          </div>


          <div className="tracking-tight text-2xl font-bold">
          Decentralized Finance (DeFi) Explained
          </div>


          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <a className="hover:underline" href="/author/1">Alex Jonson</a>
            <span>•</span>
            <span>May 20, 2023</span>
            <span>•</span>
            <span>6 min read</span>
          </div>
        </div>

        <div className="p-6 pt-0">
          <p className="text-muted-foreground">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...
          </p>
        </div>



        </div>
      )}

      {activeTab === "about" && (
        <div className="about p-[2rem] my-[5rem] border-[0.1rem] border-[grey] rounded-[1.2rem] flex flex-col w-[89rem] mx-[auto]">
          <h1 className="text-2xl font-bold">About Jane Doe</h1>
          <p className="start text-[grey] text-[1.5rem] mt-[2rem]">
          Jane Doe is a seasoned software engineer with over a decade of experience in web development. She specializes in JavaScript, React, and Node.js, and has a keen interest in emerging technologies like AI and blockchain. Jane is a frequent speaker at tech conferences and contributes to various open-source projects.
          </p>
          <h2 className="text-2xl mt-[2rem]">Skills</h2>
          <div className="flex gap-[1rem] mt-[1rem]">
            <span className="dark:bg-[#0e0e43] text-[#3e3ee3] text-[1.2rem] p-[0.5rem] rounded-[1.2rem]">JavaScript</span>
            <span className="bg-[#0e0e43] text-[#3e3ee3] text-[1.2rem] p-[0.5rem] rounded-[1.2rem]">React</span>
            <span className="bg-[#0e0e43] text-[#3e3ee3] text-[1.2rem] p-[0.5rem] rounded-[1.2rem]">Node.js</span>
            <span className="bg-[#0e0e43] text-[#3e3ee3] text-[1.2rem] p-[0.5rem] rounded-[1.2rem]" >Python</span>
            <span className="bg-[#0e0e43] text-[#3e3ee3] text-[1.2rem] p-[0.5rem] rounded-[1.2rem]" >AI</span>
            <span className="bg-[#0e0e43] text-[#3e3ee3] text-[1.2rem] p-[0.5rem] rounded-[1.2rem]">BlockChain</span>
            <span className="bg-[#0e0e43] text-[#3e3ee3] text-[1.2rem] p-[0.5rem] rounded-[1.2rem]">Web Development</span>
          </div>
        </div>
      )}
    </div>

    </div>
  )
}
