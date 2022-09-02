import React, { Fragment, useRef, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { BiCheck } from 'react-icons/bi';
import { AiOutlineSearch } from 'react-icons/ai';
import { ProductContextState } from '../../context';
import { PRODUCT_LIMIT } from '../../constant';
import { classNames } from '../../utils';
import { ProductInterface } from '../../modals';

const SelectMenu: React.FC = () => {
  const { products, selected, setSelected } = ProductContextState();
  const [filteredData, setFilteredData] =
    useState<Array<ProductInterface>>(products);

  const [search, setSearch] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchText = e.target.value;
    setSearch(searchText);

    const filteredResult = products.filter((product) =>
      product.name?.toLocaleLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredData(filteredResult);
  };

  return (
    <Listbox value={selected} onChange={setSelected} multiple>
      {({ open }) => (
        <>
          <div className="relative mt-1">
            <Listbox.Button className="relative w-full cursor-default mb-3">
              <div className="relative">
                <AiOutlineSearch className=" absolute left-[10px] top-[12px] z-20 text-slate-400" />
                <input
                  id="search"
                  name="search"
                  type="text"
                  className="relative border block w-full appearance-none rounded-md shadow-sm bg-slate-200 px-8 py-2 text-slate-600 placeholder-slate-400 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 focus:bg-white sm:text-sm"
                  placeholder="Search for any software..."
                  autoComplete="off"
                  ref={inputRef}
                  value={search}
                  onChange={handleSearch}
                  autoFocus
                />
              </div>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options
                className={() =>
                  classNames(
                    selected.length === PRODUCT_LIMIT
                      ? 'cursor-not-allowed'
                      : '',
                    'absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-2 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'
                  )
                }
                onFocus={() => inputRef.current?.focus()}
              >
                {filteredData.map((product: any) => (
                  <Listbox.Option
                    key={product.id}
                    className={({ active }) =>
                      classNames(
                        active ? 'text-white bg-indigo-600' : 'text-slate-900',
                        selected.length === PRODUCT_LIMIT
                          ? ' pointer-events-none opacity-20'
                          : '',
                        'relative cursor-pointer select-none mx-2 rounded-md py-2 pl-3 pr-9'
                      )
                    }
                    value={product}
                    disabled={selected.length === PRODUCT_LIMIT}
                  >
                    {({ selected, active }) => {
                      const { svg, color } = product.icon;
                      const Icon = svg;

                      return (
                        <>
                          <div className="flex items-center">
                            <Icon
                              className={`h-4 w-4 flex-shrink-0 ${
                                active ? 'text-white' : color
                              }`}
                            />
                            <span
                              className={classNames(
                                selected ? 'font-semibold' : 'font-normal',
                                'ml-3 block truncate'
                              )}
                            >
                              {product.name}
                            </span>
                          </div>

                          {selected ? (
                            <span
                              className={classNames(
                                active ? 'text-white' : 'text-indigo-600',
                                'absolute inset-y-0 right-0 flex items-center pr-4'
                              )}
                            >
                              <BiCheck className="h-5 w-5" aria-hidden="true" />
                            </span>
                          ) : null}
                        </>
                      );
                    }}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  );
};

export default SelectMenu;
