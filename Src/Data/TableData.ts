import { TableSpace } from '../Shared/Interfaces/Table.interface'
import { MockGenHelpers } from '../Utils/MockGen'

export const MockOperators = [
  { name: 'MTS', code: 1 },
  { name: 'Beeline', code: 2 },
  { name: 'Megafon', code: 3 },
  { name: 'Tele2', code: 4 },
  { name: 'Yota', code: 5 },
  { name: 'SkyLink', code: 6 },
  { name: 'Rostelecom', code: 7 },
  { name: 'HzTelecom', code: 8 },
  { name: 'AnotherTelecom', code: 9 },
]

export const MockCountries = [
  { name: 'Russia', countryCode: 'RU' },
  { name: 'United States', countryCode: 'US' },
  { name: 'Germany', countryCode: 'DE' },
  { name: 'France', countryCode: 'FR' },
  { name: 'Italy', countryCode: 'IT' },
  { name: 'Spain', countryCode: 'ES' },
]

// export const scanRowsData1: TableSpace.IRow[] = MockGenHelpers.generateMockReoTableData(50, [
//   TableSpace.IColumnTypes.Enum,
//   TableSpace.IColumnTypes.Operator,
//   TableSpace.IColumnTypes.Text,
//   TableSpace.IColumnTypes.Country,
//   TableSpace.IColumnTypes.Text,
//   TableSpace.IColumnTypes.Signal,
//   TableSpace.IColumnTypes.Text,
// ])

// export const scanRowsData2: TableSpace.IRow[] = MockGenHelpers.generateMockReoTableData(30, [
//   TableSpace.IColumnTypes.Enum,
//   TableSpace.IColumnTypes.Operator,
//   TableSpace.IColumnTypes.Text,
//   TableSpace.IColumnTypes.Text,
//   TableSpace.IColumnTypes.Text,
//   TableSpace.IColumnTypes.Text,
//   TableSpace.IColumnTypes.Signal,
//   TableSpace.IColumnTypes.Checkbox,
//   TableSpace.IColumnTypes.Text,
//   TableSpace.IColumnTypes.Text,
//   TableSpace.IColumnTypes.Text,
//   TableSpace.IColumnTypes.Text,
//   TableSpace.IColumnTypes.Text,
//   TableSpace.IColumnTypes.Text,
//   TableSpace.IColumnTypes.Text,
//   TableSpace.IColumnTypes.Text,
// ])

// export const scanRowsData3: TableSpace.IRow[] = MockGenHelpers.generateMockReoTableData(100, [
//   TableSpace.IColumnTypes.Enum,
//   TableSpace.IColumnTypes.Operator,
//   TableSpace.IColumnTypes.Text,
//   TableSpace.IColumnTypes.Text,
//   TableSpace.IColumnTypes.Text,
//   TableSpace.IColumnTypes.Text,
//   TableSpace.IColumnTypes.Signal,
//   TableSpace.IColumnTypes.Checkbox,
//   TableSpace.IColumnTypes.Text,
//   TableSpace.IColumnTypes.Signal,
//   TableSpace.IColumnTypes.Text,
//   TableSpace.IColumnTypes.Checkbox,
//   TableSpace.IColumnTypes.Text,
//   TableSpace.IColumnTypes.Text,
//   TableSpace.IColumnTypes.Signal,
//   TableSpace.IColumnTypes.Text,
//   TableSpace.IColumnTypes.Signal,
//   TableSpace.IColumnTypes.Checkbox,
//   TableSpace.IColumnTypes.Text,
//   TableSpace.IColumnTypes.Text,
//   TableSpace.IColumnTypes.Text,
// ])

// export const mockTablesArray: TableSpace.IRow[][] = [scanRowsData1, scanRowsData2, scanRowsData3]
