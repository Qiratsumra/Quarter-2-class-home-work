import Link from "next/link"


export default function Header(){
    return(
        <header className="">
            <div className="flex justify-between bg-black  text-red-200 h-20 max-sm:h-20 max-sm:w-max min-w-full max-sm:gap-5">
            <h1 className="text-3xl p-4 max-sm:text-xl max-sm:p-4">Qirat Saeed</h1>
            <ul className="flex justify-center pt-5 text-xl gap-6 pr-8 max-sm:text-xs max-sm:gap-6">
               <Link href={"/"}> <li>Home</li></Link>
                <Link href={"/"}><li>Contact Us</li></Link>
                <Link href={"/"}><li>About Us</li></Link>
            </ul>
            </div>
        </header>
    )
}