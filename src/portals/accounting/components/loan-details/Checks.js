import React from 'react';

export default function Checks() {
  return (
    <div className="mt-2 mb-0">
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
    </div>
  );
}