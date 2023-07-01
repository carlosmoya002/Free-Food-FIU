import React, { useState } from 'react';
import SelectPreferenceComponent from './diet-option-selectors/preferences/PreferenceSelectComponent';
import ErrorMsg from './ErrorMsg';

const RegistrationTestPage = () => {

  const[email, setEmail] = useState('');
  const[password, setPassword] = useState('');
  const[preferences, setPreferences] = useState([]);
  const [error, setError] = useState('');

  const handlePreferencesSelectChange = (selectedOptions) => {
    const selectedValues = selectedOptions.map((option) => option.value);
    setPreferences(selectedValues);
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    const user = {email, password, preferences};
    
    if (
      !user.email ||
      !user.password ||
      !user.preferences
    ) {
      setError('ERROR: Please fill all the fields');
      return;
    }

    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const json = await response.json();

    if (!response.ok) {
      setError(json.message);
    }

    if (response.ok) {
      setEmail('');
      setPassword('');
      setPreferences([]);
      setError(null);
      console.log("New user created!");
    }
  }

  return (
    <div>
      <h5 className="header">Create an event:</h5>
      <form onSubmit={handleSubmit} className="user-creation-form">
        <label>
          Email of User:
          <input
            name="email"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
          <label>
            Preferences:
            <SelectPreferenceComponent
              value={preferences}
              onChange={handlePreferencesSelectChange}
            ></SelectPreferenceComponent>
          </label>
          <br />
        <button type="submit">
          Create User
        </button>
      </form>

      <ErrorMsg error={error}/>

    </div>
  );
};

export default RegistrationTestPage;