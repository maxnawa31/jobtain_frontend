/**
 *
 * DropDown
 *
 */

import React from 'react';
import Downshift from 'downshift';
import './styles.css';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

/* eslint-disable react/prefer-stateless-function */
class DropDown extends React.Component {
  constructor(props) {
    super(props);
    this.values = [
      { value: 'Applied' },
      { value: 'Not a Fit' },
      { value: 'Interested' },
      { value: 'Interview' },
      { value: 'Accepted' },
    ];

    this.state = {
      // currently selected dropdown item
      selectedValue: '',
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(selectedObj) {
    this.setState({ selectedValue: selectedObj.value });
  }

  render() {
    return (
      <Downshift
        onChange={this.onChange}
        selectedItem={this.state.selectedBook}
        itemToString={values => (values ? values.value : '')}
      >
        {({
          isOpen,
          getToggleButtonProps,
          getItemProps,
          highlightedIndex,
          getLabelProps,
        }) => (
          <div>
            <label
              style={{ marginTop: '1rem', marginLeft: '2%' }}
              {...getLabelProps()}
            >
              Select the status of your application
            </label>{' '}
            <br />
            <button className="dropdown-button" {...getToggleButtonProps()}>
              {this.state.selectedValue !== ''
                ? this.state.selectedValue
                : 'Click here to select the status of your application'}
            </button>
            <div>
              {isOpen ? (
                <div className="downshift-dropdown">
                  {this.values.map((item, index) => (
                    <div
                      className="dropdown-item"
                      {...getItemProps({ key: index, index, item })}
                    >
                      {item.value}
                    </div>
                  ))}
                </div>
              ) : null}
            </div>
          </div>
        )}
      </Downshift>
    );
  }
}

DropDown.propTypes = {};

export default DropDown;
