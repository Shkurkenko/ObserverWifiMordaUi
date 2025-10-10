import { Link, Route } from "wouter";
import { ReoScan } from "./views/reo-scan";
import { HeaderSection } from "./components/header-section";

import "./app.css";

export const App = () => (
  <div>
    <HeaderSection />
    {/* <div class="drawer drawer-mobile"> */}
    <div class="main">
      <div class="flex flex-col items-center justify-center">
        {/* <!-- Page content here --> */}

        <Route path="/">
          <ReoScan />
        </Route>
      </div>
    </div>
  </div>
);

const InboxPage = () => <div>inbox</div>;
