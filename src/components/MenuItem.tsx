import { MenuItems } from "../types";

type MenuItemProps = {
  item: MenuItems;
  addItem: (item: MenuItems) => void;
};

export default function MenuItem({ item, addItem }: MenuItemProps) {
  return (
    <button
      onClick={() => addItem(item)}
      className="w-full p-4 flex items-center justify-between rounded-lg border border-teal-300 bg-white hover:bg-teal-50 transition-colors shadow-sm"
    >
      <div>
        <p className="text-lg font-semibold text-slate-800">{item.name}</p>
      </div>
      <p className="text-lg font-bold text-teal-600">${item.price.toFixed(2)}</p>
    </button>
  );
}
