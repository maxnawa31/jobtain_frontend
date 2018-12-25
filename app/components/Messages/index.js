/**
 *
 * Messages
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function Messages(props) {
  const { messages } = props;
  return (
    <div>
      <ul>
        {messages.map(message => {
          return <li key={message.time}>{message.body}</li>;
        })}
      </ul>
    </div>
  );
}

Messages.propTypes = {};

export default Messages;
