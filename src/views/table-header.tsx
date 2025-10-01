import { useEffect, useState } from "preact/hooks";

interface HeaderColumn {
  label: string;
}

interface TableHeaderProps {
  headers: Array<HeaderColumn>;
}

export const TableHeader = ({ headers }: TableHeaderProps) => {
  return (
    <thead className="table-header">
      <tr className="table-header-row">
        <th>#</th>
        {headers.map((header: HeaderColumn, index) => {
          return (
            <td key={index} className="table-header-column">
              {header.label}
            </td>
          );
        })}
      </tr>
    </thead>
  );
};
