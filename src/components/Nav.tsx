import Link from "next/link";
import React, { ElementType } from "react";
import clsx from "clsx";

function NavItem({
  children,
  href,
  isActive,
}: {
  children: React.ReactNode;
  href: string;
  isActive?: boolean;
}) {
  return (
    <Link href={href} className={clsx("group")}>
      <div className="sm:flex sm:items-center sm:space-x-2">
        <div className="mb-1.5 flex justify-center sm:mb-0 sm:block">
          <div
            className={clsx(
              "rounded-lg bg-gradient-to-tl from-purple-500/80 to-rose-400/80 p-1 shadow-lg transition-all duration-300 ease-out group-hover:scale-[1.2] group-hover:rounded-[10px] group-hover:shadow-purple-500/40 group-active:translate-y-1",
              {
                "ring-[2px] ring-purple-500/30 ring-offset-1 ring-offset-black/5":
                  isActive,
              }
            )}
          ></div>
        </div>
        <div className="transition-colors group-hover:text-rose-50">
          {children}
        </div>
      </div>
    </Link>
  );
}

export const Nav = () => {
  return (
    <div className="flex items-center space-x-3 text-base font-medium leading-none  lg:space-x-6">
      <NavItem href="/videos">Videos</NavItem>

      <NavItem href="/blog">Blog</NavItem>

      <NavItem href="https://youtube.com/delba">Youtube</NavItem>

      <NavItem href="https://twitter.com/delba_oliveira">Twitter</NavItem>
    </div>
  );
};
