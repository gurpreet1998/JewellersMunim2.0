import React, { useEffect, useState } from 'react';
import { Accordion, Card, Form } from 'react-bootstrap';
import Flex from 'components/common/Flex';
//import StatusAccordionBody from 'components/status-accordion/StatusAccordionBody';
import classNames from 'classnames';

// Data Placeholder
import { PendingSettelmentsSponsorBank } from 'data/accounting/pendingSettlements';

//import { PendingSettelmentsSummaryColumns } from 'data/accounting/pendingSettlements';
import AdvanceTableWrapper from 'components/common/advance-table/AdvanceTableWrapper';
import AdvanceTable from 'components/common/advance-table/AdvanceTable';
//import { pendingSettlementService } from '_services/accounting';
//import AdvanceTablePagination from 'components/common/advance-table/AdvanceTablePagination';
//import AdvanceTableSearchBox from 'components/common/advance-table/AdvanceTableSearchBox';

const CMLTransactions = () => {
  const [SearchKeyword, setSearchKeyword] = useState('');
  const [TableDataState, setTableDataState] = useState([]);
  const [
    PendingSettelmentsSponsorBankData,
    setPendingSettelmentsSponsorBankData
  ] = useState([]);
  //const [MerchantId, setMerchantId] = useState(-1);

  //   useEffect(() => {
  //     setMerchantId(merchant);
  //     GetSummaryTableData(merchant);
  //   }, [merchant])

  //   const GetSummaryTableData = async (MerchantID)=>{
  //     if(MerchantID !== -1){
  //     const resp = await pendingSettlementService.getMerchantSettlementSummary(MerchantID);
  //     console.log(resp);
  //     setCMLPaymentsTableData([...resp]);
  //     setTableDataState([...resp]);
  //     }
  //   };

  useEffect(() => {
    setTableDataState([...PendingSettelmentsSponsorBank.data]);
    setPendingSettelmentsSponsorBankData([
      ...PendingSettelmentsSponsorBank.data
    ]);
  }, []);

  const SearchTable = SK => {
    const keyword = SK;
    const AllRecords = [...PendingSettelmentsSponsorBankData];
    if (AllRecords.length === 0) {
      return;
    }

    // if (SK === '') {
    //   setTableDataState(AllRecords);
    //   return;
    // }
    const fRecords = AllRecords.filter(item => {
      const kk = Object.keys(item);
      //console.log(kk);
      for (let j = 0; j < kk.length; j++) {
        const element = item?.[kk[j]];

        if (
          element?.toString()?.toLowerCase().includes(keyword?.toLowerCase())
        ) {
          return true;
        }
      }
      return false;
    });

    setTableDataState(fRecords);
  };

  useEffect(() => {
    SearchTable(SearchKeyword);
  }, [SearchKeyword]);

  const [CheckboxData, setCheckboxData] = useState({});

  // useEffect(() => {
  //   let check = {};
  //   for (let i = 0; i < PendingSettelmentsSponsorBankData.length; i++) {
  //     check = { ...check, [i]: true };
  //   }
  //   setCheckboxData(check);
  // }, [PendingSettelmentsSponsorBankData]);

  return (
    <>
      <AdvanceTableWrapper
        columns={PendingSettelmentsSponsorBank?.columns}
        data={TableDataState}
        selection
        sortable
        setSelectedRowIDs={val => setCheckboxData(val)}
        pagination
        selectedRowIdsProp={CheckboxData}
        perPage={100}
        rowCount={PendingSettelmentsSponsorBankData.length}
      >
        <Card className="mt-3">
          <Card.Body>
            <Accordion
              key={0}
              defaultActiveKey={1}
              className={classNames('accordion-flush border', {
                'border border-bottom-0':
                  0 < PendingSettelmentsSponsorBankData.length - 1
              })}
            >
              <Accordion.Item eventKey={1}>
                <Accordion.Header>
                  <Flex className="align-items-center">
                    <div className="avatar avatar-xl me-3">
                      <div
                        className={`avatar-name rounded-circle bg-soft-success`}
                      >
                        <span className={`fs-0 text-success`}>
                          {PendingSettelmentsSponsorBankData?.length}
                        </span>
                      </div>
                    </div>
                    CML Payment/Refunds
                  </Flex>

                  {/* <AdvanceTableSearchBox placeholder={"search..."} setGlobalFilter={setSearchKeyword} globalFilter={SearchKeyword}/> */}
                  {/* </Row> */}
                </Accordion.Header>
                <Accordion.Body
                  className={'p-0'}
                  style={{ overflowY: 'scroll', maxHeight: '19rem' }}
                >
                  {/* { TableDataState?.data?.length > 0 &&
                  <StatusAccordionBody className="example-accordian-body"  tableData={CMLPaymentsTableData} showFooter={false} PageSize={CMLPaymentsTableData.data.length}/>
                  } */}
                  <div style={{ textAlign: 'right' }}>
                    <Form.Control
                      placeholder="Search"
                      onChange={e => setSearchKeyword(e.target.value)}
                      value={SearchKeyword}
                      style={{
                        display: 'initial',
                        margin: '1.2rem',
                        width: '25%'
                      }}
                    />
                  </div>
                  <AdvanceTable
                    PendingSettelmentsSponsorBankData
                    table
                    headerClassName="bg-200 text-900 text-nowrap align-middle"
                    rowClassName="btn-reveal-trigger text-nowrap align-middle"
                    tableProps={{
                      size: 'sm',
                      className: 'fs--1 mb-0 overflow-hidden'
                    }}
                  />
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Card.Body>
          {/* <Card.Footer>
            <AdvanceTablePagination showicon={true} align="flex-end" />
          </Card.Footer> */}
        </Card>
      </AdvanceTableWrapper>
    </>
  );
};

export default CMLTransactions;
