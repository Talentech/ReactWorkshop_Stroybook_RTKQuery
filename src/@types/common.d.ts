export interface ITableData<T, G extends Record<string, any>> {
  value: T;
  row: {
    original: G;
  };
}
