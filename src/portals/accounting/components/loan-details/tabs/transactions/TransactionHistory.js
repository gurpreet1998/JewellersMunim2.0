import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Card, Row, Col } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import AdvanceTableWrapper from 'components/common/advance-table/AdvanceTableWrapper';
import AdvanceTable from 'components/common/advance-table/AdvanceTable';
import IconButton from 'components/common/IconButton';
import AddTransaction from './AddTransaction';
import { formatDateCol } from 'helpers/utils';
import { useLoanTransactionsData } from 'hooks/useAccountingData';

const TransactionHistory = props => {
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

  const [modal, setModal] = useState(false);
  const closeModal = () => {
    setModal(false);
  };

  const {
    register,
    formState: { errors },
    watch,
    setValue
  } = useForm();

  const { isLoading, data: transactions } = useLoanTransactionsData(
    props.loanId
  );

  return (
    <>
      <Card>
        <Card.Header className="mb-0 mt-0 flex-1">
          <Row className="flex-between-center">
            <Col xs={4} sm="auto" className="d-flex align-items-center pe-0">
              <h5 className="fs-0 mb-0 text-nowrap py-2 py-xl-0">
                Recent Transactions
              </h5>
            </Col>
            <Col xs={8} sm="auto" className="ms-auto text-end ps-0">
              <IconButton
                variant="falcon-default"
                size="sm"
                icon="plus"
                transform="shrink-3"
                onClick={() => setModal(true)}
              >
                <span className="d-none d-sm-inline-block ms-1">
                  New Transaction
                </span>
              </IconButton>
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
            </Col>
          </Row>
        </Card.Header>
        <Card.Body className="p-0">
          <AdvanceTableWrapper
            columns={columns}
            data={isLoading ? [] : transactions?.data}
            sortable
            pagination
            perPage={7}
            rowCount={isLoading ? 0 : transactions?.data.length}
          >
            <Card>
              <Card.Body className="p-0">
                <AdvanceTable
                  table
                  headerClassName="bg-200 text-900 text-nowrap align-middle"
                  rowClassName="text-nowrap align-middle"
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
};

TransactionHistory.propTypes = {
  loanId: PropTypes.string
};

export default TransactionHistory;
