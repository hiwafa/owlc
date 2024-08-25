import Link from "next/link";
import Image from "next/image";

export default function Header() {
    return (
        <nav className="sticky top-0 bg-slate-600 text-white flex flex-row justify-between items-center px-10">

            {/* first nav item */}
            <section className="flex flex-row space-x-2">
                <p>Logo</p>
                <ul>
                    <li>عربی</li>
                    <li>پشتو</li>
                    <li>دری</li>
                    <li>English</li>
                </ul>
            </section>
            {/* first nav item */}


            {/* second nav item */}
            <menu className="flex flex-row items-center gap-5">

                <ul className="flex flex-row gap-5">
                    <Link href="/">Home</Link>
                    <Link href="/about">About</Link>
                </ul>

                <div className="dropdown">
                    <button className="dropbtn">Dropdown</button>
                    <div className="dropdown-content">
                        <Link className="dropLink" href="/">English</Link>
                        <Link className="dropLink" href="/">Dari</Link>
                        <Link className="dropLink" href="/">Pashto</Link>
                    </div>
                </div>

            </menu>
            {/* second nav item */}

        </nav>
    );
}
