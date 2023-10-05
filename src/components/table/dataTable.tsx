import * as React from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableInput,
  TableRow,
} from ".";

import { cn } from "../..";

import type { FlexRenderProps, MinTableItem, TableProps } from ".";

/** Helpers */

// helper to get an array containing the object values with
// the correct type infered.
// function objectValues<T extends object>(obj: T) {
//   return Object.keys(obj).map((objKey) => obj[objKey as keyof T]);
// }

function objectKeys<T extends object>(obj: T) {
  return Object.keys(obj).map((objKey) => objKey as keyof T);
}

function DataTable<T extends MinTableItem>({
  //   title,
  items,
  columns,
  loading,
  //   paginator,
  rowSelection,
  customRenderers,
  sorting,
  onHandleSort,
  className,
  ...otherProps
}: TableProps<T> & React.HTMLAttributes<HTMLTableElement>) {
  const [checkedAll, setCheckedAll] = React.useState<boolean>(false);

  const onChangeAll = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.checked) {
        // TODO: Improve this method
        // const ids = props.rowSelection.selectedRowKeys;
        //   props.rowSelection.selectedRowKeys.filter((e)
        rowSelection?.onChange(items);
      } else {
        rowSelection?.onChange([]);
      }
      setCheckedAll(e.target.checked);
    },
    [items, rowSelection],
  );

  const onChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>, item: T) => {
      const checked = e.target.checked;
      if (checked) {
        rowSelection?.onChange(rowSelection.selectedRowKeys.concat(item));
      } else {
        rowSelection?.onChange(
          rowSelection.selectedRowKeys.filter((e) => e.id !== item.id),
        );
      }
    },
    [rowSelection],
  );

  const DataTableHeader = () => {
    return (
      <TableHeader>
        <TableRow>
          {rowSelection && (
            <TableHead>
              <TableInput onChange={onChangeAll} checked={checkedAll} />
            </TableHead>
          )}
          {objectKeys(columns).map((cell, index) => {
            const col = columns[cell];

            if (onHandleSort && sorting && sorting.includes(cell)) {
              const onClick =
                sorting && sorting.includes(cell)
                  ? () => onHandleSort(cell as string)
                  : undefined;
              //   const current = `${paginator?.sort}`.includes(cell as string);
              //   const sortAsc = `${paginator?.sort}`.includes("asc") && current;
              return (
                <TableHead
                  onClick={onClick}
                  key={`${col?.toString()}-${index}`}
                  className="cursor-pointer"
                >
                  <div className="flex items-center gap-2.5">
                    {col}
                    {/* {sortAsc ? (
                      <SortAsc
                        className="w-5 stroke-old-100"
                        style={{ strokeWidth: current ? 2 : 1.5 }}
                      />
                    ) : (
                      <SortDesc
                        className="w-5 stroke-old-100"
                        style={{ strokeWidth: current ? 2 : 1.5 }}
                      />
                    )} */}
                  </div>
                </TableHead>
              );
            }
            return (
              <TableHead key={`${col?.toString()}-${index}`}>{col}</TableHead>
            );
          })}
        </TableRow>
      </TableHeader>
    );
  };

  const FlexRender = ({
    item,
    index,
    cell,
  }: FlexRenderProps<T>): JSX.Element => {
    const customRenderer = customRenderers?.[cell];
    if (customRenderer) return <>{customRenderer(item, index)}</>;

    return <>{item[cell]}</>;
  };

  const DataTableBody = () => {
    return (
      <TableBody>
        {items.map((item, index) => (
          <TableRow key={`${item.id}-${index}`}>
            <>
              {rowSelection && (
                <TableCell>
                  <TableInput
                    onChange={(e) => onChange(e, item)}
                    checked={rowSelection?.selectedRowKeys.includes(item)}
                  />
                </TableCell>
              )}
              {objectKeys(columns).map((cell, indexCell) => (
                <TableCell key={`${cell.toString()}-${indexCell}`}>
                  <FlexRender item={item} index={index} cell={cell} />
                </TableCell>
              ))}
            </>
          </TableRow>
        ))}
      </TableBody>
    );
  };

  if (loading) return <>...</>;

  return (
    <div className={cn("relative overflow-x-auto", className)}>
      <Table {...otherProps}>
        <DataTableHeader />

        <DataTableBody />
      </Table>
      {/* {!loading && paginator && <Paginator {...paginator} />} */}
    </div>
  );
}

export { DataTable };
