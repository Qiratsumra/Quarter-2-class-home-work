import Image from "next/image";
import qiratlinkdin from '../../public/qiratlinkdin.jpg'
export default function Home() {
  return (
    <main className="bg-black h-screen text-red-200">
      <title>Qirat Saeed</title>

      {/* Navbar Section */}
      <div className=" flex justify-evenly  bg-gray-900 h-[50px] w[100%] ">
        <span className="text-2xl mt-1  hover:text-white">Qirat Saeed</span>
        <a href="#" className="text-lg mt-2 hover:text-blue-900 underline" >Home</a>
        <a href="#" className="text-lg mt-2  hover:text-blue-900 underline">Contact Us</a>
        <a href="#" className="text-lg mt-2  hover:text-blue-900 underline">About Us</a>
      </div>
       

       {/* Introduction Section */}
       <div className="flex justify-between">
        <p className=" mt-32 ml-32"><i className="text-2xl font-bold">Qirat Saeed</i>
        <br />
        My name is <i>Qirat Saeed, and I'm recent passed Quarter no.1 of GIAIC</i>
        <br  />
        I'm a Webdeveloper. In first Quarter learned:
        <br />
        Typescript
        <br />
        HTML
        <br />
        CSS
        <br />
        Javascript
          <br />
        <button type="button" className="text-white bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-900 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"><a href="https://github.com/Qiratsumra">GitHub</a></button>
        <button type="button" className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"><a href="https://www.linkedin.com/in/qirat-saeed-8048662b7/">LinkedIn</a></button>
        </p>
        <Image src={qiratlinkdin} alt="image" height={200} width={400} className="mr-20 mt-9"/>
       </div> 
    </main>
  )
} 