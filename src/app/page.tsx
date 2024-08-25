import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaFacebook, FaYoutube, FaRegCopyright } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

export default function Home() {
  return (
    <>
      <main>
        <section>
          <Image alt="" src="/kaba.jpg" width={1200} height={1000} style={{ width: '100%', height: '500px' }} />
        </section>

        <section className="flex flex-col justify-center items-center my-10">


          <div className="w-96 space-y-5">

            <div className="rounded-md p-5 customBoxshadow">
              Contemporary issues in the light of Quran and Hadith
            </div>

            <div className="flex flex-row justify-between">
              <a className="cursor-pointer rounded-md p-5 customBoxshadow -mx-10 w-24 text-center">Pashto</a>

              <div>

              </div>

              <a className="cursor-pointer rounded-md p-5 customBoxshadow -mx-10 w-24 text-center">Dari</a>
            </div>

          </div>


        </section>
      </main>
      <footer className="flex flex-col bg-slate-600 h-36 text-white justify-center items-center">

        
        <ul className=" flex flex-row gap-7">
          <li>
            <a href="" target="_blank">
              <FaInstagram size={25} />
            </a>
          </li>
          <li>
            <a href="" target="_blank">
              <FaFacebook size={25} />
            </a>
          </li>
          <li>
            <a href="" target="_blank">
              <FaYoutube size={25} />
            </a>
          </li>
          <li>
            <a href="" target="_blank">
              <FaSquareXTwitter size={22} />
            </a>
          </li>
        </ul>
        <div className="flex flex-row">
          {/* <FaRegCopyright /> */}
          <p className="m-5 text-sm">Copyright © 2024 OWLC. All rights reserved.</p>
        </div>

      </footer>
    </>
  );
}
