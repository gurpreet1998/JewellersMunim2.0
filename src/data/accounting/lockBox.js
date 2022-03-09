export const paymentHistoryData = [
  {
    paymentId: 100,
    loanNumber: 1234,
    name: 'John Smith',
    date: '01/03/2020',
    paymentAmount: 456.6,
    paymentType: ''
  },
  {
    paymentId: 101,
    loanNumber: 7893,
    name: 'Paul',
    date: '03/04/2020',
    paymentAmount: 456.6,
    paymentType: ''
  },
  {
    paymentId: 102,
    loanNumber: 2343,
    name: 'Roman',
    date: '21/04/2020',
    paymentAmount: 436.6,
    paymentType: ''
  },
  {
    paymentId: 103,
    loanNumber: 3432,
    name: 'Natasha',
    date: '11/11/2020',
    paymentAmount: 656.6,
    paymentType: ''
  },
  {
    paymentId: 104,
    loanNumber: 7985,
    name: 'John Smith',
    date: '01/06/2020',
    paymentAmount: 896.4,
    paymentType: ''
  },
  {
    paymentId: 105,
    loanNumber: 9875,
    name: 'John Smith',
    date: '30/09/2020',
    paymentAmount: 896.6,
    paymentType: ''
  }
];
export const loanData = [
  {
    loanId: 4,
    loanStatus: 'NEW',
    borrowerName: 'Bobby  Fenner',
    preferredName: null,
    authorizedParty: ' ',
    merchant: 'Green Valley Consulting Corp',
    location: null,
    currentAmountDue: null,
    currentPrincipal: 0,
    nextDueDate: '2022-03-04T00:00:00',
    merchantId: null,
    loanNumber: 'L10000003'
  },
  {
    loanId: 5,
    loanStatus: 'NEW',
    borrowerName: 'Annie  Painter',
    preferredName: null,
    authorizedParty: ' ',
    merchant: 'Green Valley Consulting Corp',
    location: null,
    currentAmountDue: null,
    currentPrincipal: 0,
    nextDueDate: '2022-03-04T00:00:00',
    merchantId: null,
    loanNumber: 'L10000004'
  },
  {
    loanId: 7,
    loanStatus: 'NEW',
    borrowerName: 'Jasmine Gonzalez',
    preferredName: null,
    authorizedParty: ' ',
    merchant: 'Brain Balance Achievement Centers',
    location: null,
    currentAmountDue: null,
    currentPrincipal: 2500,
    nextDueDate: '2022-03-04T00:00:00',
    merchantId: null,
    loanNumber: 'TRN010109571'
  },
  {
    loanId: 8,
    loanStatus: 'NEW',
    borrowerName: 'David Reed',
    preferredName: null,
    authorizedParty: ' ',
    merchant: 'Green Valley Consulting Corp',
    location: null,
    currentAmountDue: null,
    currentPrincipal: 3450,
    nextDueDate: '2022-03-04T00:00:00',
    merchantId: null,
    loanNumber: 'CH349008'
  },
  {
    loanId: 10,
    loanStatus: 'NEW',
    borrowerName: 'Tuuasoitagata C Panama',
    preferredName: null,
    authorizedParty: ' ',
    merchant: 'TRAINING-SANDBOX',
    location: null,
    currentAmountDue: null,
    currentPrincipal: 2500,
    nextDueDate: '2022-03-04T00:00:00',
    merchantId: null,
    loanNumber: 'TRN010157204'
  }
];
export const batchData = [
  {
    batchId: 1234,
    batchName: '20220116-Cash/Money1-AB',
    depositDate: '01/03/2020',
    batchAmount: 456.6,
    batchStatus: 'Closed',
    batchType: 'Cash',
    batchOwner: 'AB',
    createdBy: 'A'
  },
  {
    batchId: 7893,
    batchName: '20220116-Cash/Money2-SB',
    depositDate: '03/04/2020',
    batchAmount: 456.6,
    batchStatus: 'Closed',
    batchOwner: 'SB',
    batchType: 'Check',
    createdBy: 'A'
  },
  {
    batchId: 3432,
    batchName: '20220116-Cash/Money3-PB',
    depositDate: '11/11/2020',
    batchAmount: 656.6,
    batchStatus: 'Open',
    batchType: 'Cash',
    batchOwner: 'PB',
    createdBy: 'A'
  },
  {
    batchId: 9875,
    batchName: '20220116-Cash/Money4-B',
    depositDate: '30/09/2020',
    batchAmount: 896.6,
    batchStatus: 'Open',
    batchType: 'Check',
    batchOwner: 'B',
    createdBy: 'A'
  }
];
export const batchdetailsData = [
  {
    loanNumber: 'CH349008',
    loanId: 15,
    name: 'John Smith',
    date: '01/03/2020',
    paymentType: 'check',
    amount: 456.6,
    checkNumber: 31213132,
    depositedBy: 'John Smith',
    validatedBy: 'John Smith',
    submittedBy: 'John Smith'
  },
  {
    loanNumber: 1235,
    loanId: 11,
    name: 'John Smith',
    date: '01/03/2020',
    paymentType: 'check',
    amount: 456.6,
    checkNumber: 31213132,
    depositedBy: 'John Smith',
    validatedBy: 'John Smith',
    submittedBy: 'John Smith'
  },

  {
    loanNumber: 1236,
    name: 'John Smith',
    loanId: 3,
    date: '01/03/2020',
    paymentType: 'check',
    amount: 456.6,
    checkNumber: 31213132,
    depositedBy: 'John Smith',
    validatedBy: 'John Smith',
    submittedBy: 'John Smith'
  },
  {
    loanNumber: 1237,
    name: 'John Smith',
    loanId: 5,
    date: '01/03/2020',
    paymentType: 'check',
    amount: 456.6,
    checkNumber: 31213132,
    depositedBy: 'John Smith',
    validatedBy: 'John Smith',
    submittedBy: 'John Smith'
  }
];

export const batchHistoryData = [
  {
    batchId: 1234,
    batchName: '20220116-Cash/Money1-AB',
    dateCreated: '01/03/2020',
    batchAmount: 456.6,
    batchStatus: 'Closed',
    batchType: 'Cash',
    batchOwner: 'AB',
    createdBy: 'A'
  },
  {
    batchId: 7893,
    batchName: '20220116-Cash/Money2-SB',
    dateCreated: '03/04/2020',
    batchAmount: 456.6,
    batchStatus: 'Closed',
    batchOwner: 'SB',
    batchType: 'Check',
    createdBy: 'A'
  },
  {
    batchId: 3432,
    batchName: '20220116-Cash/Money3-PB',
    dateCreated: '11/11/2020',
    batchAmount: 656.6,
    batchStatus: 'Open',
    batchType: 'Cash',
    batchOwner: 'PB',
    createdBy: 'A'
  },
  {
    batchId: 9875,
    batchName: '20220116-Cash/Money4-B',
    dateCreated: '30/09/2020',
    batchAmount: 896.6,
    batchStatus: 'Open',
    batchType: 'Check',
    batchOwner: 'B'
  }
];
