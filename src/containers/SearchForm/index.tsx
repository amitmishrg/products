import React from 'react';
import { STEPS_DETAIL } from '../../constant';
import { ProductContextState } from '../../context';
import SelectMenu from '../SelectMenu';

const SearchForm: React.FC = () => {
  const { selected, setSelected } = ProductContextState();

  const handleSubmit = () => {
    console.log(
      `These are the selected products`,
      JSON.stringify(selected, null, '\t')
    );
    setSelected([]);
  };

  return (
    <div className="flex min-h-full items-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-[340px]">
        <span className="bg-gradient-to-tl text-white from-pink-500 to-indigo-500 rounded-md text-xs px-2 py-1">
          1 of 3
        </span>

        <h3 className="mt-6 text-2xl font-medium tracking-tight text-slate-900">
          {STEPS_DETAIL.HEADING}
        </h3>
        <p className="mt-4 text-sm text-slate-600">
          {STEPS_DETAIL.DISCRIPTION}
        </p>

        <div className="mt-8">
          <div className="-space-y-px">
            <SelectMenu />
          </div>
          <button
            type="submit"
            className="group relative flex w-full justify-center rounded-md border border-transparent bg-blue-600 hover:bg-blue-700 py-2 px-4 text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
              disabled:cursor-not-allowed disabled:bg-slate-300 mt-3"
            disabled={selected.length > 3 ? false : true}
            onClick={() => handleSubmit()}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
