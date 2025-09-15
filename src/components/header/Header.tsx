import { memo } from "react";
import {LINKS} from "@/components/header/LINKS/page"
import GoHome from "@/components/go-home/page"
import Signs from "@/components/Signs/page"

const Header = () => {
  return (
    <header className="py-[26px] bg-white sticky top-0 z-10 shadow-md">
      <nav className="container flex items-center justify-between">
        <div className="flex items-center gap-[50px]">
          <GoHome/>
          <ul className="flex items-center gap-[50px] max-[940px]:hidden">
            {
              LINKS.map((item : any, inx: any) => (
                <li key={inx} className="font-medium">
                  <a href="#">
                    <span>{item}</span>
                  </a>
                </li>
              ))
            }
          </ul>
        </div>
        <Signs/>
      </nav>
    </header>
  );
};

export default memo(Header);
