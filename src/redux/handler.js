export const handlerPending = state => {
  state.isLoading = true;
  state.error = '';
};

export const handlerRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload.message;
};

export const handlerGetContactsFulfilled = (state, { payload }) => {
  state.items = payload;
  state.isLoading = false;
  state.error = '';
};

export const handlerDeleteContactFulfilled = (state, { payload }) => {
  state.items = state.items.filter(({ id }) => id !== payload);
  state.isLoading = false;
  state.error = '';
};

export const handlerAddContact = (state, { payload }) => {
  state.items.unshift(payload);
  state.isLoading = false;
  state.error = '';
};
