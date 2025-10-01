import { useEffect, useState } from "preact/hooks";
import { TextColumnProps } from "./table-body";

export const ColumnText = ({ text }: TextColumnProps) => {
  return <td>{text}</td>;
};
