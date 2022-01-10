/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-case-declarations */
export const offerReducer = (state, action) => {
  const { type, payload } = action;

  console.log('state: ', state);
  console.log('action: ', action);

  switch (type) {
    case 'SORT_PRODUCT':
      return {
        ...state,
        offers: [...state.offers].sort((a, b) => {
          if (payload.sortBy === 'name') {
            if (payload.order === 'asc') {
              return a.loanProgramName.length - b.loanProgramName.length;
            } else {
              return b.loanProgramName.length - a.loanProgramName.length;
            }
          } else {
            if (payload.order === 'asc') {
              return a[payload.sortBy] - b[payload.sortBy];
            } else {
              return b[payload.sortBy] - a[payload.sortBy];
            }
          }
        })
      };
    case 'SELECT_OFFER':
      return {
        ...state,
        selectedOffers: [...state.selectedOffers, payload.offer]
      };
    case 'INITIAL_PAYMENT':
      return {
        ...state,
        paymentInfo: [...state.paymentInfo, payload.paymentInfo]
      };
    case 'UPDATE_SELECTED_OFFER':
      return {
        ...state,
        selectedOffers: state.selectedOffers.map(item =>
          item.id === payload.offer.loanOfferId ? payload.offer : item
        )
      };
    case 'UPDATE_DATA':
      return {
        ...state,
        offers: [...payload.offers]
      };
    case 'REMOVE_OFFER':
      return {
        ...state,
        selectedOffers: state.selectedOffers.filter(
          offer => offer.loanOfferId !== payload.offer.loanOfferId
        )
      };
    case 'CHECKOUT': {
      return {
        ...state,
        selectedOffers: []
      };
    }
    case 'RESET':
      return {
        ...state
      };
    default:
      return state;
  }
};
