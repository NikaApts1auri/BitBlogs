
import { Button } from "../../ui/button"

export default function about() {
  return (
    <div className=" flex flex-col justify-center py-[3.2rem] ">
      <section className=" flex flex-col justify-center mx-[auto]">
        <h1 className="text-[3.5rem] font-[bold] flex justify-center">About BitBlogs</h1>
        <p className="text-[1.6rem] text-[grey] " >Empowering tech enthusiasts to share knowledge and inspire innovation.</p>
      </section>

      <div className="flex mt-[5rem] justify-center">
        <div className=" flex flex-col items-center my-[auto] mx-[4rem]  ">
        <h2 className="text-[2.6rem] font-[bold]">Our Mission</h2>
        <p className="w-[33rem] text-[1.6rem]  text-[grey] ">At bitBlogs, we believe in the power of shared knowledge. Our mission is to create a platform where tech enthusiasts, developers, and innovators can come together to share ideas, learn from each other, and push the boundaries of what's possible in the world of technology.</p>
        </div>

        <div>
        <img
              src="https://g-zwkebgiacpe.vusercontent.net/placeholder.svg?height=200&amp;width=400"
              alt="image "
              className="rounded-lg w-[43.2rem] h-[43.2rem]"
            />
        </div>
      </div>


      <section className="mx-[auto] mt-[5rem]">
      <h2 className="text-[2.6rem] font-[bold] flex justify-center my-[5rem]">What We Offer</h2>

       <div className="flex gap-[4rem]">


        <div className="p-[2rem] rounded-[1rem] border-[0.1rem] border-[white]">
          <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-book-open w-10 h-10 text-primary mb-2"><path d="M12 7v14"></path><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path></svg>
          <h2 className="text-[2rem] font-[bold]">Rich Content</h2>
          </div>
          <p className="w-[20rem]">Access a wide range of articles, tutorials, and insights on the latest tech trends and best practices.</p>
        </div>

        <div className="p-[2rem] rounded-[1rem] border-[0.1rem] border-[white]">
        <div>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-users w-10 h-10 text-primary mb-2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
          <h2 className="text-[2rem] font-[bold]">Vibrant Community</h2>
          </div>
          <p className="w-[20rem]">Connect with like-minded individuals, share your knowledge, and grow your professional network.</p>
        </div>

        <div className="p-[2rem] rounded-[1rem] border-[0.1rem] border-[white]">
          <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-zap w-10 h-10 text-primary mb-2"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
          <h2 className="text-[2rem] font-[bold]">Cutting-edge Topic</h2>
          </div>
          <p className="w-[20rem]">Stay ahead of the curve with content covering emerging technologies and innovative solutions.</p>
        </div>

       </div>
      </section>

     <section className="w-[80rem] flex flex-col rounded-[1rem] h-[20rem] p-[2rem] dark:bg-slate-800  mx-[auto] justify-between my-[3rem] ">
      <h2 className="text-[2.6rem] font-[bold]"> Our Story</h2>
      <p className=" text-[1.6rem] text-[grey]"> Founded in 2023, bitBlogs started as a small project by a group of passionate developers who wanted to create a space for sharing their experiences and learning from others. What began as a simple blog quickly grew into a thriving community of tech enthusiasts from all around the world.</p>

      <p className=" text-[1.6rem] text-[grey]" >Today, bitBlogs is proud to be a leading platform for technology-focused content, fostering innovation and collaboration in the ever-evolving world of tech.</p>
     </section>


    <section className="mt-[4rem] mx-[auto]">
      <h2 className="text-[2.6rem] font-[bold] flex justify-center my-[1rem]">Join Us on Our Journey</h2>
      <p className="w-[73rem] text-[1.6rem] text-[grey] ">Whether you're a seasoned developer, a curious beginner, or somewhere in between, there's a place for you at bitBlogs. Let's shape the future of technology together.</p>

      <Button className="bg-[blue] w-[18.5rem] h-[4rem] text-[1.5rem]  flex mx-[auto] my-[3rem]" variant="outline">Get Started Today</Button>

    </section>
    
    </div>
  )
}
