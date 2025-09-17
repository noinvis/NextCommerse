import { memo } from "react";
import {LINKS} from "@/components/header/LINKS/page"
import GoHome from "@/components/go-home/page"
import Signs from "@/components/Signs/page"
import Search from "../search/Search";

const Header = () => {
  return (
    <header className="h-[95px] bg-white sticky top-0 z-10">
      <nav className="container h-full flex items-center justify-between">
        <div className="flex items-center gap-[40px]">
          <GoHome/>
          <ul className="flex items-center gap-[24px] max-[1320px]:hidden">
            {
              LINKS.map((item : any, inx: any) => (
                <li key={inx}>
                  <a href="#">
                    <span>{item}</span>
                  </a>
                </li>
              ))
            }
          </ul>
        </div>
        <Search/>
        <Signs/>
      </nav>
    </header>
  );
};

export default memo(Header);
