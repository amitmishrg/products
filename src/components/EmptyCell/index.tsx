import { AiOutlinePlus } from 'react-icons/ai';

interface props {
  cells: boolean[];
}

const EmptyCell: React.FC<props> = ({ cells }) => {
  return (
    <>
      {cells.map((_: any, index: any) => (
        <div
          key={`${index}-empty-cell`}
          className=" bg-white shadow-md w-[160px] h-[180px] border hover:shadow-sm rounded-md flex items-center justify-center"
        >
          <span className="inline-flex p-3 shadow-sm bg-gray-100 border rounded-sm">
            <AiOutlinePlus className=" text-slate-400 w-5 h-5" />
          </span>
        </div>
      ))}
    </>
  );
};

export default EmptyCell;
