import React, { useContext, useEffect, useReducer, useState } from 'react';
import PropTypes from 'prop-types';
import { NewApplicationContext, OfferContext } from 'context/Context';
import { offerReducer } from 'reducers/offerReducer';
import { loanService } from '_services/loanService';

const OfferProvider = ({ children, loanAppId }) => {
  const initData = {
    initOffers: [],
    offers: [],
    selectedOffers: [],
    paymentInfo: []
  };

  const [Data, setData] = useState(initData);
  const { step } = useContext(NewApplicationContext);
  const [offersState, offersDispatch] = useReducer(offerReducer, Data);

  useEffect(() => {
    if (step === 4) {
      loanService.getLoanOffers(loanAppId).then(data => {
        initData.initOffers = [...data];
        initData.offers = [...data];
        setData([...data]);
        offersDispatch({ type: 'UPDATE_DATA', payload: initData });
      });
    }
  }, [step]);

  const isInSelectedOffers = id =>
    !!offersState.selectedOffers.find(
      selectedOffers => selectedOffers.id === id
    );

  return (
    <OfferContext.Provider
      value={{
        offersState,
        offersDispatch,
        isInSelectedOffers
      }}
    >
      {children}
    </OfferContext.Provider>
  );
};

OfferProvider.propTypes = {
  children: PropTypes.node.isRequired,
  loanAppId: PropTypes.number.isRequired
};

export default OfferProvider;
