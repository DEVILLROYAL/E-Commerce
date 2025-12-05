import { Facebook, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-auto w-full border-t p-3 flex flex-col">
      <div className="flex justify-between items-center px-4 py-3">
        <p className="text-sm">
          © {new Date().getFullYear()} thegreenleaf. All rights reserved.
        </p>

        <div className="flex gap-3">
          <a href="#" className="cursor-pointer">
            <Facebook color="blue" size={19} />
          </a>
          <a
            href="https://www.instagram.com/thegreenleafbly/"
            target="_blank"
            className="cursor-pointer"
          >
            <Instagram color="red" size={19} />
          </a>
        </div>
      </div>
    </footer>
  );
}
