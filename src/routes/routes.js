export const merchantPortalRoutes = {
  label: 'Merchant Portal',
  labelDisable: false,
  children: [
    {
      name: 'Home',
      to: '/',
      active: true,
      icon: 'home'
    },
    {
      name: 'New Application',
      to: '/portal/merchant/new-application',
      active: true,
      icon: 'user-plus'
    },
    {
      name: 'My Applications',
      to: '/portal/merchant/my-applications',
      active: true,
      icon: 'folder-open'
    },
    {
      name: 'Loan Calculator',
      to: '/portal/merchant/loan-calculator',
      active: true,
      icon: 'calculator'
    },
    {
      name: 'Invite Consumer',
      to: '/portal/merchant/invite-consumer',
      active: true,
      icon: 'envelope-open-text'
    },
    {
      name: 'Invitation History',
      to: '/portal/merchant/invitation-history',
      active: true,
      icon: 'history'
    },
    {
      name: 'Power BI Report',
      to: '/portal/merchant/power-bi',
      active: true,
      icon: 'chart-line'
    }
  ]
};

export const accountingPortalRoutes = {
  label: 'Accounting Portal',
  labelDisable: false,
  children: [
    {
      name: 'Accounting Home',
      icon: 'home',
      to: '/portal/accounting/home',
      active: true
    },
    {
      name: 'Bank Reconciliations',
      icon: 'university',
      active: true,
      children: [
        {
          name: 'CML Lender',
          to: '/portal/accounting/reconciliations/unmatched',
          active: true
        },
        {
          name: 'CP+ Lender',
          to: '/portal/accounting/reconciliations/unmatched-ach',
          active: true
        },
        {
          name: 'Lock Box',
          to: '/portal/accounting/reconciliations/lock-box',
          active: true
        }
      ]
    },
    {
      name: 'Daily Payments',
      icon: 'sun',
      active: true,
      children: [
        {
          name: 'CP+ AutoPay',
          to: '/portal/accounting/payments/daily/autopay',
          active: true
        },
        {
          name: 'Debit/ Credit Cards',
          to: '/portal/accounting/payments/daily/debit-credit',
          active: true
        },
        {
          name: 'ACH',
          to: '/portal/accounting/payments/daily/ach',
          active: true
        }
      ]
    },
    {
      name: 'Manual Payments',
      icon: 'money-bill-alt',
      active: true,
      children: [
        {
          name: 'Deposit Rec',
          to: '/portal/accounting/payments/manual/deposit-rec',
          active: true
        }
      ]
    },
    {
      name: 'Pending Settlements',
      icon: 'clock',
      active: true,
      children: [
        {
          name: 'Merchants',
          to: '/portal/accounting/pending-settlements/merchants',
          active: true
        },
        {
          name: 'Lender (Medallion)',
          to: '/portal/accounting/pending-settlements/lender',
          active: true
        }
      ]
    }
  ]
};

export const appRoutes = {
  label: 'other',
  children: [
    {
      name: 'Contact Us',
      icon: 'envelope',
      to: '/portal/contact',
      active: false
    },
    {
      name: '888-874-9940',
      icon: 'phone',
      to: '#'
    }
  ]
};

export const pageRoutes = {
  label: 'pages (dev only)',
  children: [
    {
      name: 'Login',
      icon: 'lock',
      to: '/authentication/login',
      active: true
    }
  ]
};

export default [
  merchantPortalRoutes,
  accountingPortalRoutes,
  appRoutes,
  pageRoutes
];
