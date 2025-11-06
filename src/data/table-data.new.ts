import { TableColumnTypes } from '../components/table/table-body'

export const scanRowsData1 = [
  {
    columns: [
      { type: TableColumnTypes.Enum, role: 'enumiration' },
      {
        type: TableColumnTypes.Operator,
        role: 'operator',
        data: { name: 'MTS', code: 1 },
      },
      {
        type: TableColumnTypes.Text,
        role: 'cid',
        data: { text: 'SomeText' },
      },
      {
        type: TableColumnTypes.Country,
        role: 'country',
        data: { countryCode: 'gr' },
      },
      {
        type: TableColumnTypes.Text,
        role: 'lac',
        data: { text: 'SomeText' },
      },
      {
        type: TableColumnTypes.Signal,
        role: 'rxLevel',
        data: { level: -50 },
      },
      {
        type: TableColumnTypes.Text,
        role: 'tac',
        data: { text: 'SomeText' },
      },
    ],
  }
];