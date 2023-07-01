import React from 'react';
import Select from 'react-select';
import { preferenceOptions } from './PreferenceOptions';

const SelectPreferenceComponent = ({ onChange }) => (
  <Select
    isMulti
    name="diet-option-selection"
    options={preferenceOptions}
    className="basic-multi-select"
    classNamePrefix="select"
    onChange={onChange}
  />
);

export default SelectPreferenceComponent;