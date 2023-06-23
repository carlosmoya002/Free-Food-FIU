import React from 'react';
import Select from 'react-select';
import { allergyOptions } from './AllergyOptions';

const SelectAllergiesComponent = ( { onChange }) => (
  <Select
    isMulti
    name="allergy-option-selection"
    options={allergyOptions}
    className="basic-multi-select"
    classNamePrefix="select"
    onChange={onChange}
  />
);

export default SelectAllergiesComponent;