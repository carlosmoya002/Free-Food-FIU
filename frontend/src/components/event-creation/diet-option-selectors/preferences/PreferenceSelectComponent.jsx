import React from 'react';
import Select from 'react-select';
import PreferenceOptions from './PreferenceOptions';

const PreferenceSelectComponent = ({ onChange }) => (
  <Select
    isMulti
    name="diet-option-selection"
    options={PreferenceOptions}
    className="basic-multi-select"
    classNamePrefix="select"
    onChange={onChange}
  />
);

export default PreferenceSelectComponent;