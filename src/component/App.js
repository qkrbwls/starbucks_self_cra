import React from "react";
import SkipComponent from "./SkipComponent";
import WrapComponent from "./WrapComponent";
import MobileNavComponent from "./MobileNavComponent";
import QuickMenuComponent from "./QuickMenuComponent";
import GoTopComponent from "./GoTopComponent"
import ValidaterComponent from "./ValidaterComponent";

function App({}) {
  return(
    <React.Fragment>
        <SkipComponent/>
        <WrapComponent/>
        <MobileNavComponent/>
        <QuickMenuComponent/>
        <GoTopComponent/>
        <ValidaterComponent/>
    </React.Fragment>
  );
}

export default App;
