import { useState } from "preact/hooks";
import { Logo } from "../logo";

import "./header-section.css";

export function HeaderSection() {
  const [nav, setNav] = useState(true);

  return (
    <header>
      <nav className="header-section bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800 shadow">
        <a href="/" className="flex items-center">
         

          {/* <Logo /> */}
        </a>
      </nav>
    </header>
  );
}
