import React, { ReactElement, useState } from 'react';
import { FilterValue, useAsyncDebounce } from 'react-table';

import FormInput from '../../../Workouts/components/FormInput/FormInput';
import { SearchInputWrapper } from './../../WorkoutsDetails.styled';

interface SearchInputProps {
  globalFilter: any;
  onSetFilter: (filterValue: FilterValue) => void;
}

const SearchInput = ({ globalFilter, onSetFilter }: SearchInputProps): ReactElement => {
  const [inputValue, setInputValue] = useState(globalFilter);

  const handleInputValueChange = useAsyncDebounce((value) => {
    onSetFilter(value || undefined);
  }, 500);

  return (
    <SearchInputWrapper>
      <span>Search Workout: </span>
      <FormInput
        name='search'
        value={inputValue || ''}
        placeholder='Search'
        onChange={(e) => {
          setInputValue(e.target.value);
          handleInputValueChange(e.target.value);
        }}
      />
    </SearchInputWrapper>
  );
};

export default SearchInput;
