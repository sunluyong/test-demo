import React, { useState } from 'react';

export default function CheckboxWithLabel(props) {
  const [checkStatus, setCheckStatus] = useState(false);

  const { labelOn, labelOff } = props;

  function onChange() {
    setCheckStatus(!checkStatus);
  }

  return (
    <label>
      <input
        type="checkbox"
        checked={checkStatus}
        onChange={onChange}
      />
      {checkStatus ? labelOn : labelOff}
    </label>
  );
}
