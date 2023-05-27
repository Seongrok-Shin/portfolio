import Link from "next/link";
export default function Nav() {
    return (
        <ul className="flex space-x-4">
            <li>
                <Link href="/" className="mr-5 hover:text-gray-900">
                    Home
                </Link>
            </li>
            <li>
                <Link href="Project" className="mr-5 hover:text-gray-900"
                >
                    Project
                </Link>
            </li>
            <li>
                <Link href="About" className="mr-5 hover:text-gray-900">
                    About
                </Link>
            </li>
            <li>
                <Link
                    href="Contact"
                    className="mr-5 hover:text-gray-900"
                >
                    Contact
                </Link>
            </li>
        </ul>
    );
}
