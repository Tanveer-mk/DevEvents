import Link from "next/link";
import Image from "next/image";

const NavBar = () => {
    return (
        <header>
            <nav>
                <Link href="/" className="logo">
                    <Image src="/icons/logo.png" alt="logo" width={24} height={24}/>
                    <p>DevEvents</p>
                </Link>
                <ul>
                    <Link href="/">Home</Link>
                    <Link href="/event">Events</Link>
                    <Link href="/create-event">Create Event</Link>
                </ul>
            </nav>
        </header>
    )
}
export default NavBar
