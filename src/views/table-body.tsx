import { useEffect, useState } from "preact/hooks";
import { ColumnText } from "./column-text";
import { ColumnEnum } from "./column-enum";
import { ColumnOperator } from "./column-operator";
import { ColumnSignal } from "./column-signal";

export enum TableColumnTypes {
  Enum,
  Text,
  Signal,
  Operator,
}

export interface TableColumn {
  type?: TableColumnTypes;
  data?: any;
}

export interface TextColumnProps extends TableColumn {
  text: string;
}

export interface SignalColumnProps extends TableColumn {
  text: string;
}

export interface OperatorColumnProps extends TableColumn {
  name?: string;
  iconPath?: string;
  code: number;
}

export interface TableRowProps {
  columns: TableColumn[];
}

export interface TableBodyProps {
  rows: TableRowProps[];
}

export const TableBody = ({ rows }: TableBodyProps) => {
  return (
    <tbody className="table-body">
      {rows.map((row, index) => {
        <tr className="table-body-row">
          return (
          <td key={index} className="table-body-column">
            {row.columns.map((column, index) => {
              switch (column.type) {
                case TableColumnTypes.Enum:
                  return <ColumnEnum index={index} />;
                case TableColumnTypes.Text:
                  return (
                    <ColumnText text={(column.data as TextColumnProps).text} />
                  );
                case TableColumnTypes.Operator:
                  return (
                    <ColumnOperator
                      name={(column.data as OperatorColumnProps).name}
                      code={(column.data as OperatorColumnProps).code}
                      iconPath={(column.data as OperatorColumnProps).iconPath}
                    />
                  );
                case TableColumnTypes.Signal:
                  return (
                    <ColumnSignal
                      text={(column.data as SignalColumnProps).text}
                    />
                  );
              }
            })}
          </td>
          );
        </tr>;
      })}
    </tbody>
  );
};
