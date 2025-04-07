import { FaGithubSquare, FaTwitterSquare, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="w-full bg-white text-gray-900 py-6 px-4 mt-auto">
      <div className="border-t border-gray-500 mt-6 pt-6 text-center text-md font-semibold">
        <p>&copy; {currentYear} Bank site. All rights reserved.</p>
        <p className="mt-2">Made with passion by Joel</p>
      </div>
      <div className="flex gap-4">
        <a
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:cursor-pointer hover:scale-110 duration-300"
        >
          <FaGithubSquare size={35} />
        </a>
        <a href="https://www.linkedin.com/feed/">
          <FaLinkedin
            size={35}
            className=" hover:cursor-pointer duration-300 hover:scale-110"
          />
        </a>
        <a href="">
          <FaTwitterSquare
            size={35}
            className=" hover:cursor-pointer duration-300 hover:scale-110"
          />
        </a>
      </div>
    </footer>
  );
}
