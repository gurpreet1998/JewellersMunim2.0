import React from 'react';
import PropTypes from 'prop-types';
import FormInput from '../../FormInput';
import { Col, Row } from 'react-bootstrap';
import ChoiceDisclosures from './ChoiceDisclosures';
// import NumberFormat from 'react-number-format';
// import { useForm, Controller } from 'react-hook-form';

const ServiceDateForm = ({ register, errors, setValue }) => {
  // const { control } = useForm();
  const date = new Date();
  const serviceDate = date.setDate(date.getDate() + 1);

  return (
    <>
      <Row className="g-2 mb-3">
        <FormInput
          type="number"
          errors={errors}
          label="Gross Monthly Household Income*"
          name="grossMonthlyIncome"
          placeholder="E.g. 10000"
          formGroupProps={{ as: Col, xl: 6 }}
          formControlProps={{
            className: 'input-spin-none',
            ...register('grossMonthlyIncome', {
              required: 'Please enter your income (numbers only)'
            })
          }}
        />

        <FormInput
          type="number"
          errors={errors}
          label="Estimated Cost of Service*"
          name="serviceAmount"
          placeholder="E.g. 4500"
          formGroupProps={{ as: Col, xl: 6 }}
          formControlProps={{
            className: 'input-spin-none',
            ...register('serviceAmount', {
              required: 'Please enter the service amount (numbers only)'
            })
          }}
        />
        {/*  todo: figure out form validation for Controller before using
        <Form.Group as={Col} xl={6}>
          <Form.Label>Example Field with Masked NumberFormat</Form.Label>
          <Controller
            render={({ field }) => (
              <>
                <NumberFormat
                  thousandSeparator={true}
                  prefix={'$'}
                  decimalScale={2}
                  fixedDecimalScale={true}
                  displayType={'input'}
                  className={errors.numberFormatTest ? 'is-invalid' : ''}
                  placeholder="E.g. $5,000.00"
                  customInput={Form.Control}
                  name="numberFormatTest"
                  {...field}
                />
              </>
            )}
            {...register('numberFormatTest', {
              required: 'Please enter the service amount.'
            })}
            control={control}
            name={'numberFormatTest'}
          />
        </Form.Group>
        */}
      </Row>

      <Row className="g-2 mb-3">
        <FormInput
          label="Service Date*"
          type="date"
          name="serviceDate"
          setValue={setValue}
          errors={errors}
          formGroupProps={{ as: Col }}
          formControlProps={{
            placeholder: 'MM/DD/YYYY',
            ...register('serviceDate', {
              required: 'Field is required. Must be a future date.'
            })
          }}
          datepickerProps={{
            dateFormat: 'MM/dd/yyyy',
            showMonthDropdown: true,
            showYearDropdown: true,
            dropdownMode: 'select',
            minDate: serviceDate
          }}
        />
      </Row>
      <Row className="g-2 mb-3">
        <hr className="my-3" />
        <ChoiceDisclosures register={register} errors={errors} />
      </Row>
    </>
  );
};

ServiceDateForm.propTypes = {
  register: PropTypes.func.isRequired,
  errors: PropTypes.object,
  setValue: PropTypes.func.isRequired
};

export default ServiceDateForm;
