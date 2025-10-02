import { Link, Route } from "wouter";
import { ReoScan } from "./views/reo-scan";
import { HeaderSection } from "./components/header-section";

import "./app.css";
import { DownloadIcon } from "./components/download-icon";
import { HistoryIcon } from "./components/history-icon";

export const App = () => (
  <div>
    <HeaderSection />
    {/* <div class="drawer drawer-mobile"> */}
    <div class="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content flex flex-col items-center justify-center">
        {/* <!-- Page content here --> */}

        <Route path="/">
          <ReoScan />
        </Route>

        <label
          for="my-drawer-2"
          class="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div class="observer-sidebar drawer-side">
        {/* <label for="my-drawer-2" class="drawer-overlay"></label> */}
        <ul class="menu p-4 overflow-y-auto w-60 md:w-80 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <Link href="/">
            <li className="observer-sidebar-item">
              <a className="observer-sidebar-item-link">
                <DownloadIcon width={28} height={28} color={"white"} />
                <b>Инженерное РЭО</b>
              </a>
            </li>
          </Link>
          <Link href="/history">
            <li className="observer-sidebar-item">
              <a className="observer-sidebar-item-link">
                <HistoryIcon width={28} height={28} color={"white"} />
                <b>История замеров</b>
              </a>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  </div>
);

const InboxPage = () => <div>inbox</div>;
