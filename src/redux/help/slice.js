import { requestHelp } from './operation.js';

export const helpSlice = createSlice({
  name: 'help',
  initialState: {
    email: '',
    comment: '',
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(requestHelp.pending, state => {
        state.isLoading = true;
      })
      .addCase(requestHelp.fulfilled, (state, { payload }) => {
        state.email = payload;
        state.comment = payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(requestHelp.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const requestHelpReducer = helpSlice.reducer;
