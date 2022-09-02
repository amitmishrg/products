import { ProductContextState } from '../../context';
import EmptyCell from '../../components/EmptyCell';
import Product from '../../components/Product';
import { PRODUCT_LIMIT } from '../../constant';

const Products: React.FC = () => {
  const { selected, setSelected } = ProductContextState();

  const handleRemove = (id: number) => {
    setSelected(selected.filter((product) => product.id !== id));
  };

  const cellsCount =
    selected.length <= PRODUCT_LIMIT
      ? PRODUCT_LIMIT - selected.length
      : PRODUCT_LIMIT;

  const emptyCells = new Array(cellsCount).fill(false);

  return (
    <div className="flex flex-col items-center">
      <div className="grid grid-cols-2 gap-5 flex-wrap">
        {selected.map((product) => (
          <Product
            product={product}
            handleRemove={handleRemove}
            key={product.id}
          />
        ))}
        <EmptyCell cells={emptyCells} />
      </div>
      <p className="text-slate-400 mt-5">{`${selected.length} Products added`}</p>
    </div>
  );
};

export default Products;
