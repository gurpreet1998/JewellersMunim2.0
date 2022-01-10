const TableBadge = [
  { content: 99.99, type: 'success', icon: 'check' },
  { content: 199.99, type: 'secondary', icon: 'clock' },
  { content: 225.5, type: 'warning', icon: 'ban' }
];

export const depositoryAccountsTableData = [
  {
    loanNumber: 'L23F3445',
    name: 'John Smith',
    ssn: '***-**-4433',
    routing: 554234455,
    payment: TableBadge[0]
  },
  {
    loanNumber: 'L23F3445',
    name: 'Home Simpson',
    ssn: '***-**-4332',
    routing: 554234405,
    payment: TableBadge[1]
  },
  {
    loanNumber: 'L23F3445',
    name: 'Edgar Poe',
    ssn: '***-**-9855',
    routing: 285577555,
    payment: TableBadge[2]
  },
  {
    loanNumber: 'L23F3445',
    name: 'William Yates',
    ssn: '***-**-5566',
    routing: 888575551,
    payment: TableBadge[1]
  }
];

export const autopayTransactions = [
  {
    id: 1,
    title: 'John Smith',
    subtitle: 'Auto-payment 1 of 24',
    status: 'Completed',
    amount: '$290.00 USD',
    date: '15 December, 2021'
  },
  {
    id: 2,
    title: 'Mark Paul',
    subtitle: 'Auto-payment 4 of 24',
    status: 'Pending',
    amount: '$300.00 USD',
    date: '26 December, 2021'
  },
  {
    id: 3,
    title: 'Richard James',
    subtitle: 'Auto-payment 1 of 12',
    status: 'Pending',
    amount: '$320.00 USD',
    date: '14 December, 2021'
  },
  {
    id: 4,
    title: 'John Andretti',
    subtitle: 'Auto-payment 1 of 4',
    status: 'Pending',
    amount: '$400.00 USD',
    date: '11 December, 2021'
  }
];
