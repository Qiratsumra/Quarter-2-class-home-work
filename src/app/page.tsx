

import Image from "next/image";
import qiratlinkdin from '../../public/qiratlinkdin.jpg'
import Header from "./header/page";
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
        </div>
        <div className="">
        <Image src={qiratlinkdin} alt="image" className="h-[400px] w-[400px] max-sm:h-[200px] max-sm:w-[200px]"/>
        </div>
        </div>
    </main>

  )
} 