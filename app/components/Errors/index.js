/**
 *
 * Errors
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function Errors(props) {
  const { errors } = props;
  return (
    <div>
      <ul>
        {errors.map(error => {
          return <li key={error.time}>{error.body}</li>;
        })}
      </ul>
    </div>
  );
}

Errors.propTypes = {};

export default Errors;
