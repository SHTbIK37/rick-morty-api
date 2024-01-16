export interface IItems {}
export type TItem = {
  id: string;
  image: string;
  name: string;
};
export type TItemProps = {
  bannedList: Array<string>;
  id: string;
  item: TItem;
  setBannedList: any;
};
export type TItemListProps = {
  bannedList: Array<string>;
  items: Array<TItem>;
  setBannedList: any;
};
