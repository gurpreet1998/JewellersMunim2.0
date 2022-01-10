// import { useState, useEffect } from 'react';
export const loanStats = [20, 40, 100, 120];
export const columns = [
  {
    accessor: 'applicationId',
    Header: 'Application ID'
  },
  {
    accessor: 'consumer',
    Header: 'Consumer Name'
  },
  {
    accessor: 'appDate',
    Header: 'Application Date'
  },
  {
    accessor: 'appExpDate',
    Header: 'Expiration Date'
  },
  {
    accessor: 'serviceAmount',
    Header: 'Service Amount'
  },
  // {
  //   accessor: 'loanAmount',
  //   Header: 'Loan Amount'
  // },
  {
    accessor: 'appType',
    Header: 'Application Type'
  },
  {
    accessor: 'appStatus',
    Header: 'Application Status'
  },
  {
    accessor: 'salesAgent',
    Header: 'Sales Agent'
  },
  {
    accessor: 'location',
    Header: 'Location'
  }
];

// export const PortalSnapshotNewApps = () => {
//   const [data, setData] = useState('');

//   useEffect(() => {
//     const url =
//       'https://localhost:44359/Loan/GetMerchantDataMonthWise?merchantId=2&month=2';

//     const fetchData = async () => {
//       try {
//         const response = await fetch(url);
//         const json = await response.json();
//         console.log(json.data);
//         setData(json.data);
//       } catch (error) {
//         console.log('error', error);
//       }
//     };
//     fetchData();
//   }, []);
//   console.log(data);
//   return { data };
// };

export const appStatusIncomplete = {
  columns: [
    {
      accessor: 'applicationId',
      Header: 'Application ID'
    },
    {
      accessor: 'consumer',
      Header: 'Consumer Name'
    },
    {
      accessor: 'appDate',
      Header: 'Application Date'
    },
    {
      accessor: 'appExpDate',
      Header: 'Application Expiration Date'
    },
    {
      accessor: 'serviceAmount',
      Header: 'Service Amount'
    },
    {
      accessor: 'loanAmount',
      Header: 'Loan Amount'
    },
    {
      accessor: 'appType',
      Header: 'Application Type'
    },
    {
      accessor: 'appStatus',
      Header: 'Application Status'
    },
    {
      accessor: 'salesAgent',
      Header: 'Sales Agent'
    },
    {
      accessor: 'location',
      Header: 'Location'
    }
  ],
  data: [
    {
      id: 1,
      applicationId: '34445541',
      consumer: 'Jane Doe',
      appDate: '11/01/2021',
      appExpDate: '11/30/2021',
      serviceAmount: '$9,500.00',
      loanAmount: '$9,500.00',
      appType: 'TBD/ Placeholder',
      appStatus: 'CP+ Offers',
      salesAgent: 'Jim Fisher',
      location: 'Brain Balance- Henderson'
    },
    {
      id: 2,
      applicationId: '34221541',
      consumer: 'Richard Smith',
      appDate: '11/01/2021',
      appExpDate: '11/30/2021',
      serviceAmount: '$9,500.00',
      loanAmount: '$9,500.00',
      appType: 'TBD/ Placeholder',
      appStatus: 'CP+ Offers',
      salesAgent: 'Jim Fisher',
      location: 'Brain Balance- Henderson'
    },
    {
      id: 3,
      applicationId: '85547555',
      consumer: 'Charles Barkley',
      appDate: '11/01/2021',
      appExpDate: '11/30/2021',
      serviceAmount: '$9,500.00',
      loanAmount: '$9,500.00',
      appType: 'TBD/ Placeholder',
      appStatus: 'CP+ Offers',
      salesAgent: 'Jim Fisher',
      location: 'Brain Balance- Henderson'
    },
    {
      id: 4,
      applicationId: '85547555',
      consumer: 'Carey Casey',
      appDate: '11/01/2021',
      appExpDate: '11/30/2021',
      serviceAmount: '$9,500.00',
      loanAmount: '$9,500.00',
      appType: 'TBD/ Placeholder',
      appStatus: 'CP+ Offers',
      salesAgent: 'Jim Fisher',
      location: 'Brain Balance- Henderson'
    },
    {
      id: 5,
      applicationId: '325448855',
      consumer: 'Kevin Smith',
      appDate: '11/01/2021',
      appExpDate: '11/30/2021',
      serviceAmount: '$9,500.00',
      loanAmount: '$9,500.00',
      appType: 'TBD/ Placeholder',
      appStatus: 'CP+ Offers',
      salesAgent: 'Jim Fisher',
      location: 'Brain Balance- Henderson'
    }
  ]
};

export const appStatusComplete = {
  columns: [
    {
      accessor: 'applicationId',
      Header: 'Application ID'
    },
    {
      accessor: 'consumer',
      Header: 'Consumer Name'
    },
    {
      accessor: 'appDate',
      Header: 'Application Date'
    },
    {
      accessor: 'appExpDate',
      Header: 'Application Expiration Date'
    },
    {
      accessor: 'serviceAmount',
      Header: 'Service Amount'
    },
    {
      accessor: 'loanAmount',
      Header: 'Loan Amount'
    },
    {
      accessor: 'appType',
      Header: 'Application Type'
    },
    {
      accessor: 'appStatus',
      Header: 'Application Status'
    },
    {
      accessor: 'salesAgent',
      Header: 'Sales Agent'
    },
    {
      accessor: 'location',
      Header: 'Location'
    }
  ],
  data: [
    {
      id: 1,
      applicationId: '34445541',
      consumer: 'Marcus Spears',
      serviceAmount: '$9,500.00',
      appDate: '11/01/2021',
      appStatus: 'CP+ Offers',
      salesAgent: 'Jim Fisher',
      location: 'Brain Balance- Henderson',
      appExpDate: '11/30/2021',
      appType: 'TBD/ Placeholder'
    },
    {
      id: 2,
      applicationId: '34221541',
      consumer: 'Riley Crane',
      serviceAmount: '$5,500.00',
      appDate: '11/01/2021',
      appStatus: 'CP+ Offers',
      salesAgent: 'Jim Fisher',
      location: 'Brain Balance- Henderson',
      appExpDate: '11/30/2021',
      appType: 'TBD/ Placeholder'
    },
    {
      id: 3,
      applicationId: '85547555',
      consumer: 'Chuck Franklin',
      serviceAmount: '$17,500.00',
      appDate: '10/05/2021',
      appStatus: 'CP+ Offers',
      salesAgent: 'Mitch Smith',
      location: 'Brain Balance- Summerlin',
      appExpDate: '11/24/2021',
      appType: 'TBD/ Placeholder'
    }
  ]
};

export const portalUpdates = [
  {
    title: 'Content Analysis',
    icon: 'code-branch',
    description:
      'Which landing pages with over 10 sessions have the worst bounce rates?'
  },
  {
    title: 'Technical performance',
    icon: 'bug',
    description:
      'Show me a trend of my average page load time over the last 3 months'
  },
  {
    title: 'Where you get your users from',
    icon: 'project-diagram',
    description: 'What are my top landing channel groupings by user?'
  },
  {
    title: 'Geographic Analysis',
    icon: 'map-marker-alt',
    description: 'What pages do people from California go to the most?'
  }
];

export const portalSnapshotNewApps = [
  {
    month: 'January',
    newApps: 31,
    // newAppsPercentChange: '3.6%',
    // newAppsIcon: ['caret-up', 'success'],
    totalAmt: 13944,
    // totalAmtPercentChange: '2.5%',
    // totalAmtIcon: ['caret-up', 'success'],
    vsPrevMonth: [2, 'Fewer', 'danger']
  },
  {
    month: 'February',
    newApps: '41',
    // newAppsPercentChange: '5.6%',
    // newAppsIcon: ['caret-up', 'success'],
    totalAmt: 18021,
    // totalAmtPercentChange: '6.5%',
    // totalAmtIcon: ['caret-up', 'success'],
    vsPrevMonth: [4, 'More', 'success']
  },
  {
    month: 'March',
    newApps: '56',
    // newAppsPercentChange: '4.6%',
    // newAppsIcon: ['caret-up', 'success'],
    totalAmt: 23978,
    // totalAmtPercentChange: '3.5%',
    // totalAmtIcon: ['caret-up', 'success'],
    vsPrevMonth: [2, 'More', 'success']
  },
  {
    month: 'April',
    newApps: '32',
    // newAppsPercentChange: '8.6%',
    // newAppsIcon: ['caret-down', 'danger'],
    totalAmt: 20255,
    // totalAmtPercentChange: '1.9%',
    // totalAmtIcon: ['caret-down', 'danger'],
    vsPrevMonth: [3, 'Fewer', 'danger']
  },
  {
    month: 'May',
    newApps: '46',
    // newAppsPercentChange: '4.4%',
    // newAppsIcon: ['caret-up', 'success'],
    totalAmt: 25455,
    // totalAmtPercentChange: '2.5%',
    // totalAmtIcon: ['caret-up', 'success'],
    vsPrevMonth: [9, 'More', 'success']
  },
  {
    month: 'June',
    newApps: '36',
    // newAppsPercentChange: '3.1%',
    // newAppsIcon: ['caret-down', 'danger'],
    totalAmt: 29844,
    // totalAmtPercentChange: '2.5%',
    // totalAmtIcon: ['caret-up', 'success'],
    vsPrevMonth: [4, 'Fewer', 'danger']
  },
  {
    month: 'July',
    newApps: '37',
    // newAppsPercentChange: '0.6%',
    // newAppsIcon: ['caret-up', 'success'],
    totalAmt: 21022,
    // totalAmtPercentChange: '1.2%',
    // totalAmtIcon: ['caret-down', 'danger'],
    vsPrevMonth: [14, 'More', 'success']
  },
  {
    month: 'August',
    newApps: '38',
    newAppsPercentChange: '1.1%',
    newAppsIcon: ['caret-up', 'success'],
    totalAmt: 18588,
    totalAmtPercentChange: '2.5%',
    totalAmtIcon: ['caret-up', 'success'],
    vsPrevMonth: [8, 'Fewer', 'danger']
  },
  {
    month: 'September',
    newApps: '45',
    newAppsPercentChange: '2.9%',
    newAppsIcon: ['caret-up', 'success'],
    totalAmt: 19658,
    totalAmtPercentChange: '3.2%',
    totalAmtIcon: ['caret-up', 'success'],
    vsPrevMonth: [7, 'Fewer', 'danger']
  },
  {
    month: 'October',
    newApps: '41',
    newAppsPercentChange: '0.9%',
    newAppsIcon: ['caret-down', 'danger'],
    totalAmt: 21588,
    totalAmtPercentChange: '2.5%',
    totalAmtIcon: ['caret-up', 'success'],
    vsPrevMonth: [6, 'More', 'success']
  },
  {
    month: 'November',
    newApps: '32',
    newAppsPercentChange: '1.3%',
    newAppsIcon: ['caret-down', 'danger'],
    totalAmt: 20958,
    totalAmtPercentChange: '2.5%',
    totalAmtIcon: ['caret-up', 'success'],
    vsPrevMonth: [5, 'More', 'success']
  },
  {
    month: 'December',
    newApps: '25',
    newAppsPercentChange: '2.4%',
    newAppsIcon: ['caret-down', 'danger'],
    totalAmt: 14877,
    totalAmtPercentChange: '1.9%',
    totalAmtIcon: ['caret-down', 'danger'],
    vsPrevMonth: [4, 'Fewer', 'danger']
  }
];

export const statsData = [
  {
    id: 1,
    title: 'Avg Loan Amt',
    amount: 8,
    target: '5500 vs 5100',
    icon: 'funnel-dollar',
    caret: 'caret-up',
    color: 'primary',
    caretColor: 'success',
    data: [220, 230, 150, 175, 200, 170, 70, 160]
  },
  {
    id: 2,
    title: 'New Apps',
    amount: 13,
    target: '65 vs 49',
    icon: 'file-signature',
    caret: 'caret-up',
    color: 'info',
    caretColor: 'success'
  },
  {
    id: 3,
    title: 'New Loans',
    amount: 16,
    target: '66 vs 75',
    icon: 'bolt',
    caret: 'caret-down',
    color: 'success',
    caretColor: 'danger'
  },
  {
    id: 4,
    title: 'More Data',
    amount: 16,
    target: '1423 vs 256',
    icon: 'share',
    caret: 'caret-down',
    color: 'secondary',
    caretColor: 'danger'
  },
  {
    id: 5,
    title: 'Older Data',
    amount: 12,
    target: '1423 vs 256',
    icon: 'list',
    caret: 'caret-down',
    color: 'warning',
    caretColor: 'danger'
  },
  {
    id: 6,
    title: 'Newer Data',
    amount: 7,
    target: '800 vs 256',
    icon: 'poll',
    caret: 'caret-down',
    color: 'danger',
    caretColor: 'danger'
  }
];
