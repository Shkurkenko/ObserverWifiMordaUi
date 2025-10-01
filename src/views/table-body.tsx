import { useEffect, useState } from "preact/hooks";

enum TableColumnTypes {
  Text,
  Signal,
  Operator,
}

interface TableColumn {
  type: TableColumnTypes;
}

interface TextColumnProps {
  text: string;
}

interface RssiColumnProps {
  text: string;
}

interface OperatorColumnProps {
  name?: string;
  iconPath?: string;
  code: number;
}

interface TableRowProps {
  columns: TableColumn[];
}

export const TableBody = ({ rows }: TableRowProps) => {
  return (
    <thead className="table-body">
      {rows.map((row, index) => {
        <tr className="table-body-row">
          <th>#</th>
          return (
          <td key={index} className="table-body-column">
            {row.label}
          </td>
          );
        </tr>;
      })}
    </thead>
  );
};
