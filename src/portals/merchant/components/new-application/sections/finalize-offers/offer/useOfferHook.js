import { NewApplicationContext, OfferContext } from 'context/Context';
import { useContext } from 'react';

const useOfferHook = offer => {
  const {
    offersState: { selectedOffers },
    offersDispatch,
    isInSelectedOffers
  } = useContext(OfferContext);

  const { step, setStep } = useContext(NewApplicationContext);

  const handleAddToSelectedOffers = () => {
    if (isInSelectedOffers(offer.loanOfferId)) {
      const selectedOffer = selectedOffers.find(
        item => item.id === offer.loanOfferId
      );
      console.log('UPDATE_SELECTED_OFFER', selectedOffer);
      setStep(step + 1);
      offersDispatch({
        type: 'UPDATE_SELECTED_OFFER',
        payload: {
          offer: {
            ...selectedOffer
          }
        }
      });
    } else {
      console.log('SELECT_OFFER', offer);
      // when "Apply" from OfferGrid.js is selected go to step 5 (finalize)
      setStep(step + 1);
      offersDispatch({
        type: 'SELECT_OFFER',
        payload: {
          offer: {
            ...offer
          }
        }
      });
    }
  };

  return { handleAddToSelectedOffers };
};

export default useOfferHook;
