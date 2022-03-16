import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Card, Button } from 'react-bootstrap';
import AdvanceTableWrapper from 'components/common/advance-table/AdvanceTableWrapper';
import AdvanceTable from 'components/common/advance-table/AdvanceTable';
import AddTransaction from './AddTransaction';
// import { transactionHistoryService } from '_services/accounting';
import { useForm } from 'react-hook-form';
import { formatDateCol } from 'helpers/utils';

// eslint-disable-next-line no-unused-vars
export default function TransactionHistory(props) {
  const columns = [
    {
      accessor: 'transactionDate',
      Header: 'Date',
      Cell: rowData => {
        return formatDateCol(rowData, 'transactionDate');
      }
    },
    {
      accessor: 'paymentAmount',
      Header: 'Payment Amount'
    },
    {
      accessor: 'principalAmount',
      Header: 'Principal Amount'
    },
    {
      accessor: 'feeAmount',
      Header: 'Fee Amount'
    },
    {
      accessor: 'source',
      Header: 'Source',
      headerProps: { className: 'pe-4' }
    },
    {
      accessor: 'paymentType',
      Header: 'Payment Type'
    },
    {
      accessor: 'user',
      Header: 'User'
    },
    {
      accessor: 'comment',
      Header: 'Comment'
    },
    {
      accessor: 'none',
      Header: '',
      disableSortBy: true,
      cellProps: {
        className: 'text-end py-2'
      }
    }
  ];
  // eslint-disable-next-line no-unused-vars
  const [transactionHistoryData, setTransactionHistoryData] = useState([]);
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
  // useEffect(() => {
  //   transactionHistoryService
  //     .getTransactionHistory(props.loanId)
  //     .then(res => setTransactionHistoryData(res));
  // }, []);
  return (
    <>
      <Card>
        <Card.Header className="mb-0 mt-0 flex-1">
          <Button
            className="mt-0 mb-0"
            style={{ marginLeft: 'auto', display: 'flex' }}
            onClick={() => setModal(true)}
          >
            Add Transaction
          </Button>
          {modal && (
            <AddTransaction
              register={register}
              setValue={setValue}
              errors={errors}
              watch={watch}
              show={true}
              closeModal={closeModal}
            />
          )}
        </Card.Header>
        <Card.Body className="mt-0 pt-0 mb-0">
          <AdvanceTableWrapper
            columns={columns}
            data={transactionHistoryData}
            //   selection
            sortable
            pagination
            perPage={7}
            rowCount={transactionHistoryData.length}
          >
            <Card>
              <Card.Body className="p-3">
                <AdvanceTable
                  table
                  headerClassName="bg-200 text-900 text-nowrap align-middle"
                  rowClassName="btn-reveal-trigger text-nowrap align-middle"
                  tableProps={{
                    size: 'sm',
                    className: 'fs--1 mb-0 overflow-hidden'
                  }}
                />
              </Card.Body>
            </Card>
          </AdvanceTableWrapper>
        </Card.Body>
      </Card>
    </>
  );
}
TransactionHistory.propTypes = {
  loanId: PropTypes.array
};
