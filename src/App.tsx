import Header from './components/Header';
import Products from './containers/Products';
import SearchForm from './containers/SearchForm';
import ProductContextProvider from './context';

const App: React.FC = () => {
  return (
    <div className="min-h-full">
      <Header />
      <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8 flex-col-reverse md:flex-row flex justify-evenly items-center min-h-[calc(100vh-76px)]">
        <ProductContextProvider>
          <Products />
          <SearchForm />
        </ProductContextProvider>
      </div>
    </div>
  );
};

export default App;
