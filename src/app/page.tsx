

import Image from "next/image";
import qiratlinkdin from '../../public/qiratlinkdin.jpg'
import Header from "./header/page";
import Link from "next/link";
export default function Home() {
  return (
    <main className="bg-slate-900  text-red-200 h-screen max-sm:h-[800px] max-sm:w-fit ">
      <title>Qirat Saeed</title>


      {/* NavBar Section */}
      <Header/>

        {/* Introduction Section */}
        <div className="flex justify-between p-44 max-sm:p-24 max-sm:grid ">
        <div>
          <h1  className="text-4xl max-sm:text-3xl max-sm:text-center"><b><i>Qirat Saeed</i></b></h1>
          <p className="text-xl max-sm:text-center"> My name is <i><b>Qirat Saeed, and I'm recent passed Quarter no.1 of GIAIC</b></i>.
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
          </p>
          <Link href={"https://github.com/Qiratsumra"}>
        <button type="button" className="m-5 focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">GitHub</button>
        </Link>

        <Link href={"https://www.linkedin.com/in/qirat-saeed-8048662b7/"}>
        <button type="button" className=" p-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Linkedin</button>
        </Link>
        </div>
        <div className="">
        <Image src={qiratlinkdin} alt="image" className="h-[400px] w-[400px] max-sm:h-[200px] max-sm:w-[200px]"/>
        </div>
        
        </div>
    </main>

  )
} 