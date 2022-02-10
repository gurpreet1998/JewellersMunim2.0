import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import ValidateCaller from './ValidateCaller';

export default function Checks() {
  const [modal, setModal] = useState(false);
  const {
    register,
    // handleSubmit,
    formState: { errors },
    watch,
    setValue
    // clearErrors
  } = useForm();

  const closeModal = () => {
    setModal(false);
    console.log('Heyyy');
  };
  return (
    <div>
      <label className="p-0">
        <input
          className="form-check-input"
          type="checkbox"
          name="ReconcileRadio"
          id="flexRadioDefault1"
          disabled={true}
          checked={true}
          style={{ marginRight: '5px' }}
          // onClick={() => reconcileData()}
        />
        AutoPay
      </label>
      <label className="p-2 mr-5">
        <input
          className="form-check-input p-1"
          type="checkbox"
          disabled={true}
          checked={true}
          name="ReconcileRadio"
          id="flexRadioDefault1"
          style={{ marginRight: '5px' }}
          // onClick={() => reconcileData()}
        />
        Open Complaints/Disputes
      </label>
      <label className="p-2 mr-5">
        <input
          className="form-check-input p-1"
          type="checkbox"
          disabled={true}
          checked={true}
          name="ReconcileRadio"
          id="flexRadioDefault1"
          style={{ marginRight: '5px' }}
          // onClick={() => reconcileData()}
        />
        Alerts
      </label>
      <label className="p-2 mr-5">
        <input
          className="form-check-input p-1"
          type="checkbox"
          checked={true}
          disabled={true}
          name="ReconcileRadio"
          id="flexRadioDefault1"
          style={{ marginRight: '5px' }}
          // onClick={() => reconcileData()}
        />
        Cease/Desist
      </label>
      <label className="p-2 mr-5">
        <input
          className="form-check-input p-1"
          type="checkbox"
          disabled={true}
          checked={true}
          name="ReconcileRadio"
          id="flexRadioDefault1"
          style={{ marginRight: '5px' }}
          // onClick={() => reconcileData()}
        />
        Do Not Call
      </label>
      <label className="p-0">
        <Button onClick={() => setModal(true)} className={'btn-sm'}>
          Validate Caller
        </Button>
        {modal && (
          <ValidateCaller
            register={register}
            setValue={setValue}
            errors={errors}
            watch={watch}
            show={true}
            closeModal={closeModal}
          />
        )}
      </label>
    </div>
  );
}
