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
      </div>
    </div>
  </div>
);

const InboxPage = () => <div>inbox</div>;
