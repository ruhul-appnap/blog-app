import Link from "next/link";
import clsx from "clsx";
import { Nav } from "./Nav";

export function SiteHeader() {
  return (
    <div className="rounded-2xl bg-primary text-foreground">
      <div className="flex items-center justify-between">
        <Link href="/" title="Navigate home" className={clsx("rounded-full")}>
          <div>Logo</div>
        </Link>

        <Nav />
      </div>
    </div>
  );
}
