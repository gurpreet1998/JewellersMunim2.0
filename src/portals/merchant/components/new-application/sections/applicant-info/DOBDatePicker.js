import React, { forwardRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { setDate18YearsAgo } from 'helpers/utils';
import moment from 'moment/moment';

const DateInput = forwardRef(
  (
    { value, onClick, isInvalid, isValid, formControlProps, errorMessage },
    ref
  ) => (
    <div className="position-relative">
      <Form.Control
        size="md"
        ref={ref}
        isInvalid={isInvalid}
        isValid={isValid}
        onClick={onClick}
        value={value}
        className="ps-4"
        onChange={e => {
          console.log({ e });
        }}
        {...formControlProps}
      />
      <Form.Control.Feedback type="invalid">
        {errorMessage}
      </Form.Control.Feedback>
      <FontAwesomeIcon
        icon="calendar-alt"
        className="text-primary position-absolute top-50 translate-middle-y ms-2"
      />
    </div>
  )
);

const DOBDatePicker = ({
  setValue,
  label,
  name,
  errors,
  formControlProps,
  formGroupProps
}) => {
  const [startDate, setStartDate] = useState(null);

  return (
    <Form.Group {...formGroupProps}>
      {!!label && <Form.Label>{label}</Form.Label>}
      <DatePicker
        selected={startDate}
        onChange={date => {
          setStartDate(date);
          setValue(name, moment(date).format('MM/DD/yyyy'));
        }}
        startDate={startDate}
        formatWeekDay={day => day.slice(0, 3)}
        dateFormat="MM/dd/yyyy"
        customInput={
          <DateInput
            formControlProps={formControlProps}
            errorMessage={errors[name]?.message}
            isInvalid={errors[name]}
            isValid={Object.keys(errors).length > 0 && !errors[name]}
          />
        }
        maxDate={setDate18YearsAgo()}
        showMonthDropdown="true"
        showYearDropdown="true"
        dropdownMode="select"
      />
    </Form.Group>
  );
};

DateInput.propTypes = {
  value: PropTypes.string,
  onClick: PropTypes.func,
  isInvalid: PropTypes.bool,
  isValid: PropTypes.bool,
  formControlProps: PropTypes.object,
  errorMessage: PropTypes.string
};

DOBDatePicker.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  formControlProps: PropTypes.object,
  formGroupProps: PropTypes.object,
  errors: PropTypes.object,
  name: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired
};

export default DOBDatePicker;
