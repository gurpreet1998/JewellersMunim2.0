import React, { useEffect, useState } from 'react';
import { Button, Row } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import FormInput from 'portals/merchant/components/new-application/FormInput';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
import FalconCloseButton from 'components/common/FalconCloseButton';
import { batchData } from 'data/accounting/lockBox';
function SubmitBatch({ show, closeModal, SelectedRowID }) {
  const {
    register,
    // handleSubmit,
    formState: { errors },
    // watch,
    setValue
    // clearErrors
  } = useForm();
  const [closedBatchesData, setClosedBatchesData] = useState(batchData);
  const handleSubmitBatch = () => {
    closeModal();
  };
  useEffect(() => {
    console.log('we are in submit batch dialogue');
    const rows = Object.keys(SelectedRowID);
    let res = [];
    for (let i = 0; i < rows.length; i++) {
      res.push(batchData[rows[i]]);
    }
    setClosedBatchesData(res);
    console.log(closedBatchesData);
  }, []);
  return (
    <>
      <Modal
        show={show}
        size="lg"
        // aria-labelledby="contained-modal-title-vcenter"
        aria-labelledby="example-modal-sizes-title-xs"
        centered
      >
        <Modal.Header>
          <FalconCloseButton
            size="sm"
            className="position-absolute top-0 end-0 me-2 mt-2"
            onClick={() => handleSubmitBatch()}
          />
          <Modal.Title id="contained-modal-title-vcenter">
            <Row> Batch Submitted</Row>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="ml-3">
          {closedBatchesData[0].batchName}
          <FormInput
            label="Deposit reference Id (Optional)"
            name="referenceId"
            errors={errors}
            setValue={setValue}
            formGroupProps={{
              as: Row,
              // md: 4,
              // xl: 3,
              className: 'md-8'
            }}
            formControlProps={{
              ...register('referenceId'),
              placeholder: 'Deposit reference Id'
            }}
          />
          <FormInput
            type="date"
            label="Date"
            name="date"
            errors={errors}
            setValue={setValue}
            formGroupProps={{
              //   as: Row,
              sm: 6,
              xl: 3,
              className: 'mb-3'
            }}
            formControlProps={{
              placeholder: 'E.g. 12/01/2028',
              ...register('date')
            }}
            datepickerProps={{
              dateFormat: 'MM/dd/yyyy',
              showMonthDropdown: true,
              showYearDropdown: true,
              dropdownMode: 'select'
              // minDate: idExpStartDate
            }}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => handleSubmitBatch()}>Cancel</Button>
          <Button onClick={() => handleSubmitBatch()}>Submit Batch</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
SubmitBatch.propTypes = {
  show: PropTypes.bool,
  closeModal: PropTypes.func,
  SelectedRowID: PropTypes.array
};
export default SubmitBatch;
