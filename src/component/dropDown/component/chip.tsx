import { IoMdClose } from "react-icons/io";
interface Iprosp {
  onDelete: (value: string) => void;
  lable: string;
  type: "delete" | "defulte";
}
const Chip = ({ lable, onDelete, type }: Iprosp) => {
  return (
    <div className="whitespace-nowrap text-ellipsis bg-gray-100 border z-30 px-3 py-1 rounded-md flex items-center justify-start gap-3" >
      {type !== "defulte" && (
        <button type="button" onClick={() => onDelete(lable)}>
          <IoMdClose />
        </button>
      )}
      <span className="font-medium text-xs text-gray-400">{lable}</span>
    </div>
  );
};
export default Chip;
