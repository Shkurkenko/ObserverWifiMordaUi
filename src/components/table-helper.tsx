import { useEffect } from "preact/hooks";
import "./table-helper.css";

export function TableHelper() {
  return (
    <div className="table-helper">
      <div className="table-stats">
        <h5 className="scan-count-label">
          Всего результатов: <span className="scan-count">344</span>
        </h5>
      </div>

      <div className="table-helper-button-group">
        <div className="save-to-file-button">
            
        </div>
      </div>
    </div>
  );
}
