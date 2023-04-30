import React from 'react';
import PropTypes from 'prop-types';

const MyComponent = ({ name, age, email }) => (
  <div>
    <h1>Hello {name}!</h1>
    {age && <h2>Are you {age} years old.</h2>}
    <p>
      If yes, contact Oyinkansola at {email}.
    </p>
  </div>
);

MyComponent.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  email: PropTypes.string.isRequired,
};

export default MyComponent;