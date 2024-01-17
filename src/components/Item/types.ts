export type TItem = {
  id: string;
  image: string;
  name: string;
};

export type TItemProps = {
  name: string;
  id: string;
  image: string;
  onDelete: (id: string) => void;
  onClick: () => void;
};
