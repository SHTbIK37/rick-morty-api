import type { TItem } from "../Item/types";
export type TItemListProps = {
  onSelect: (item: TItem) => void;
  bannedList: Array<string>;
  items: Array<TItem>;
  handleDelete: (id: string) => void;
};
