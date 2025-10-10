import { useState } from "preact/hooks";
import { ReoScanStatusTypes } from "../views/reo-scan";

import "./scan-light-status.css";

export function ScanLightStatus({ statusType }) {
  const defaultStatusColors = {
    running: "#36b37e", // Some sort of green
    pending: "#FFEE58", // Some sort of yellow
    failed: "#FF5722", // Some sort of red
  };

  function getColor() {
    switch (statusType) {
      case ReoScanStatusTypes.Running:
        return defaultStatusColors.running;
      case ReoScanStatusTypes.Pending:
        return defaultStatusColors.pending;
      case ReoScanStatusTypes.Failed:
        return defaultStatusColors.failed;
    }
  }

  return (
    <div className="scan-light" style={{ background: getColor() }}>
      <div className="scan-light-core" style={{ background: getColor() }}></div>
    </div>
  );
}
