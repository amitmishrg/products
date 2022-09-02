import { IoClose } from 'react-icons/io5';
import { ProductInterface } from '../../modals';

interface props {
  product: ProductInterface;
  handleRemove: (id: number) => void;
}

const Product: React.FC<props> = ({ product, handleRemove }) => {
  const { svg, color } = product.icon;
  const Icon = svg;
  return (
    <div
      key={product.id}
      className="bg-white shadow-md w-[160px] h-[180px] border rounded-md hover:shadow-sm flex items-center justify-center flex-col"
    >
      <Icon className={`h-9 w-9 flex-shrink-0 mt-4 ${color}`} />
      <span className="m-3 block text-sm font-medium">{product.name}</span>
      <button
        className="text-xs flex items-center text-slate-400 mt-6"
        onClick={() => handleRemove(product.id)}
      >
        <IoClose className="text-red-500 font-medium mr-[2px]" />
        Remove
      </button>
    </div>
  );
};

export default Product;
