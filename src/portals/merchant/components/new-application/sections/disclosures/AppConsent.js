import React from 'react';
import SimpleBarReact from 'simplebar-react';
import FormInput from '../../FormInput';
import PropTypes from 'prop-types';

const ApplicationDisclosure = ({ register, errors }) => {
  return (
    <>
      <div className={'pb-2 h5 fs-0'}>Application Disclosure:</div>

      <SimpleBarReact
        className={'border border-500 bg-100 rounded-1 px-3 py-2'}
        style={{ maxHeight: '14rem' }}
      >
        <div className={'fs--1 pt-1 mb-2'}>
          Information submitted on this website may be evaluated for separate
          loan programs by different lenders. The ChoicePays Plus installment
          loans are originated by Medallion Bank, a Utah-chartered bank, member
          FDIC. Choice Payment Services, as the servicer for works with
          Medallion Bank to originate installment loans made by Medallion Bank
          by using the Choice Pay Services platform.
        </div>
        <div className={'fs--1 pt-1 mb-2'}>
          You authorize us to obtain credit bureau reports, employment, and
          income information about you that we will use when considering your
          application for credit. You also authorize us to obtain credit bureau
          reports and any other information about you in connection with 1)
          extensions of credit on your account; 2) the administration, review or
          collection of your account; and 3) offering you enhanced or additional
          products and services. If you ask, we will tell you the name and
          address of the credit bureau from which we obtained a report about
          you.
        </div>
        <div className={'fs--1 pt-1 mb-2'}>
          The Annual Percentage Rate (APR) is the cost of credit as a yearly
          rate which may include an origination fee of up to 2% of the loan
          amount, due upon loan closing. The APR offered will depend on your
          credit score, income, debt payment obligations, loan amount, loan
          term, credit usage history and other factors.{' '}
        </div>
        <div className={'fs--1 pt-1 mb-2'}>
          By entering your email address, you are opting in to receive updates,
          notifications and special offers from Choice Payment Services, LLC
          ("Choice") and its affiliates, agents, service providers or assignees
          (and any of its assignee's affiliates, agents or service providers)
          and, with your consent, one or more lending partners. This email
          address will also be used to log into your application. Choice does
          not make loans or credit decisions in connection with loans or retail
          installment sales agreements. Choice is not your agent or of any
          Lender other than your service provider. Choice’s services are only
          administrative. You should rely on your own judgment in deciding which
          available loan or credit product, terms or Lender or Creditor best
          suits your needs and financial means. The Lender or Creditor is solely
          responsible for its services to you, and you agree that Choice shall
          not be liable for any damages or costs of any type arising out of or
          in any way connected with your use of such services. You understand
          that Lenders may keep your loan request information and any other
          information provided by Choice or received by them in the processing
          of your credit request, whether or not you are qualified for a loan or
          retail installment sales agreement with them or if you make a loan or
          retail installment sales agreement with them. You agree to notify any
          particular Lender or Creditor directly if you no longer want to
          receive communications from them.
        </div>
        <div className={'fs--1 pt-1 mb-2'}>
          The data and other information you may provide Choice is not, and is
          not treated as, an application for a loan, credit or a request to be
          pre-approved, pre-qualified or any similar concept. Choice does not
          guarantee acceptance into any particular loan program or specific loan
          or retail installment sales agreement terms or conditions with any
          Lender or Creditor; credit approval standards are established and
          maintained solely by individual Lenders and Creditors. Likewise,
          Choice does not guarantee that the loan or retail installment sales
          agreement terms or rates offered and made available by Lenders or
          Creditors are the best terms or lowest rates available in the market.
          A Lender's conditional loan offer or a Creditor’s retail installment
          sales agreement may be subject to market conditions, approval and
          qualification. The rates and fees actually provided by Lenders or
          Creditors may be higher or lower depending on your complete credit
          profile, collateral/property considerations (if applicable) including
          but not limited to location, equity and value and income/asset
          consideration including but not limited to loan to value and debt to
          income ratios. Unless expressly stated in writing, nothing contained
          herein shall constitute an offer or promise for a loan commitment or
          interest rate lock-in agreement. Lenders and Creditors may not offer
          all products as well as not offer products in all states. You might
          not be matched any Lender or Creditor making a specific offer.
        </div>

        <div className={'fs--1 pt-1 mb-0'}>
          Depending on the Lender or Creditor and your credit qualifications,
          you may be required to make a down-payment.
        </div>
      </SimpleBarReact>
      <h5 className="me-3 pt-3 fs--1">
        I Confirm that I have read the Application Disclosure:
      </h5>
      <FormInput
        type="checkbox"
        label="I Agree"
        errors={errors}
        name="agreedToTerms3"
        formControlProps={{
          ...register('agreedToTerms3', {
            required:
              'You need to read the application disclosure and agree to continue.'
          })
        }}
      />
    </>
  );
};

ApplicationDisclosure.propTypes = {
  register: PropTypes.func.isRequired,
  errors: PropTypes.object
};

export default ApplicationDisclosure;
