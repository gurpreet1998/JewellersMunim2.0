export const merchantPortalRoutes = {
  label: 'Merchant Portal',
  labelDisable: false,
  children: [
    {
      name: 'Home',
      keyword: 'Home',
      to: '/',
      active: true,
      icon: 'home'
    },
    {
      name: 'New Application',
      keyword: 'NewApplication',
      to: '/portal/merchant/new-application',
      active: true,
      icon: 'user-plus'
    },
    {
      name: 'My Applications',
      keyword: 'MyApplications',
      to: '/portal/merchant/my-applications',
      active: true,
      icon: 'folder-open'
    },
    {
      name: 'Loan Calculator',
      keyword: 'LoanCalculator',
      to: '/portal/merchant/loan-calculator',
      active: true,
      icon: 'calculator'
    },
    {
      name: 'Invite Consumer',
      keyword: 'InviteConsumer',
      to: '/portal/merchant/invite-consumer',
      active: true,
      icon: 'envelope-open-text'
    },
    {
      name: 'Invitation History',
      keyword: 'InvitationHistory',
      to: '/portal/merchant/invitation-history',
      active: true,
      icon: 'history'
    },
    {
      name: 'Power BI Report',
      keyword: 'PowerBIReport',
      to: '/portal/merchant/power-bi',
      active: true,
      icon: 'chart-line'
    }
  ]
};

export const adminPortalRoutes = {
  label: 'Admin Portal',
  labelDisable: false,
  children: [
    {
      name: 'Home',
      keyword: 'adminhome',
      to: '/portal/admin/home',
      active: true,
      icon: 'home'
    },

    {
      name: 'Overview',
      keyword: 'overview',
      to: '/portal/admin/overview',
      active: true,
      icon: 'history'
    },
    {
      name: 'Users',
      keyword: 'users',
      to: '/',
      active: true,
      icon: 'user-plus'
    },
    {
      name: 'Merchant',
      keyword: 'AdminMerchants',
      to: '/portal/admin/merchants',
      active: true,
      icon: 'calculator'
    },
    {
      name: 'Lenders',
      keyword: 'lenders',
      to: '/portal/admin/lenders',
      active: true,
      icon: 'money-bill-alt'
    },
    {
      name: 'Sponsors Banks',
      keyword: 'SponsorBanks',
      to: '/portal/admin/sponsorbanks',
      active: true,
      icon: 'university'
    }
  ]
};

export const accountingPortalRoutes = {
  label: 'Accounting Portal',
  labelDisable: false,
  children: [
    {
      name: 'Home',
      keyword: 'AccountingHome',
      icon: 'home',
      to: '/portal/accounting/home',
      active: true
    },
    {
      name: 'Bank Reconciliations',
      keyword: 'BankReconciliations',
      icon: 'university',
      active: true,
      children: [
        {
          name: 'CML Lender',
          keyword: 'CMLLender',
          to: '/portal/accounting/reconciliations/cml',
          active: true
        },
        {
          name: 'CP+ Lender',
          keyword: 'CP+Lender',
          to: '/portal/accounting/reconciliations/cpplus',
          active: true
        },
        {
          name: 'Lock Box',
          keyword: 'LockBox',
          to: '/portal/accounting/reconciliations/lock-box',
          active: true
        }
      ]
    },
    {
      name: 'Daily Payments',
      keyword: 'DailyPayments',
      icon: 'calendar-day',
      active: true,
      children: [
        {
          name: 'CP+ AutoPay',
          keyword: 'CP+AutoPay',
          to: '/portal/accounting/payments/daily/autopay',
          active: true
        },
        {
          name: 'Debit/ Credit Cards',
          keyword: 'Debit/CreditCards',
          to: '/portal/accounting/payments/daily/debit-credit',
          active: true
        },
        {
          name: 'ACH',
          keyword: 'ACH',
          to: '/portal/accounting/payments/daily/ach',
          active: true
        },
        {
          name: 'Cash/Checks/Money Orders',
          keyword: 'Cash/Checks/MoneyOrders',
          to: '/portal/accounting/payments/daily/cash',
          active: true
        }
      ]
    },
    {
      name: 'Manual Payments',
      keyword: 'ManualPayments',
      icon: 'money-bill-alt',
      active: true,
      children: [
        {
          name: 'Deposit Rec',
          keyword: 'DepositRec',
          to: '/portal/accounting/payments/manual/deposit-rec',
          active: true
        }
      ]
    },
    {
      name: 'Pending Settlements',
      keyword: 'PendingSettlements',
      icon: 'clock',
      active: true,
      children: [
        {
          name: 'Merchants',
          keyword: 'Merchants',
          to: '/portal/accounting/pending-settlements/merchants',
          active: true
        },
        {
          name: 'Lender (Medallion)',
          keyword: 'Lender(Medallion)',
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
      keyword: 'ContactUs',
      icon: 'envelope',
      to: '/portal/contact',
      active: false
    },
    {
      name: '888-874-9940',
      keyword: 'CustomerCareNumber',
      icon: 'phone',
      to: '#'
    }
  ]
};

// note: removed appRoutes header when not using
export default [
  merchantPortalRoutes,
  accountingPortalRoutes,
  adminPortalRoutes
];
