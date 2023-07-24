import React from 'react';
import Select from 'react-select';
import AllergyOptions from './AllergyOptions';

const AllergiesSelectComponent = ( { onChange }) => (
  <Select
    isMulti
    name="allergy-option-selection"
    options={AllergyOptions}
    className="basic-multi-select"
    classNamePrefix="select"
    onChange={onChange}
  />
);

export default AllergiesSelectComponent;