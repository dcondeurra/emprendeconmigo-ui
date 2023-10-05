import * as React from "react";

export type Action<T> = {
  component: React.ElementType<{ items: T[]; ids: React.Key[] }>;
};

export type CustomRenderers<T> = Partial<
  Record<keyof T, (it: T, index: number) => React.ReactNode>
>;

export type EditColumn<T extends MinTableItem> = keyof T;

export type FlexRenderProps<T> = {
  item: T;
  index: number;
  cell: keyof T;
};

export type MinTableItem = {
  id: React.Key;
};

export type RowSelection<T> = {
  selectedRowKeys: T[];
  onChange: (items: T[]) => void;
};

export type Sorting<T> = Partial<keyof T>[];

export type TableHeaders<T> = Partial<Record<keyof T, React.ReactNode>>;

export type TableProps<T> = {
  //   title?: string;
  items: T[];
  // editColumn?: EditColumn<T>;
  // editColumnId?: EditColumn<T>;
  columns: TableHeaders<T>;
  customRenderers?: CustomRenderers<T>;
  rowSelection?: RowSelection<T>;
  sorting?: Sorting<T>;
  onHandleSort?: (val: React.Key) => void;
  loading?: boolean;
  // actions?: Action<T>[];
  // inlineActions?: (it: T, index: number) => React.ReactNode;
  // globalActions?: React.ReactNode;
  filter?: React.ReactNode;
  // filter?: FilterTable;

  //   paginator?: PaginatorProps;
};
