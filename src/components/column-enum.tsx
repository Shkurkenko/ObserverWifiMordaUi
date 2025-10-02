import { useEffect, useState } from "preact/hooks";

import "./column-enum.css"

export const ColumnEnum = ({ index }) => {
  return <td className="column-enum">{index + 1}</td>;
};
