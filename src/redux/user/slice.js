const { createSlice } = require("@reduxjs/toolkit");
const { updateUser } = require("./operation");

const handlePending = state => {
    state.isLoading = true;
  };

  const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  };  

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: {
            name: null,
            email: null,
            theme: null,
            avatarURL: '',
          }
    },

    extraReducers: builder => {
        builder
        .addCase(updateUser.rejected, handleRejected)
        .addCase(updateUser.pending, handlePending)
        .addCase(updateUser.fulfilled, (state, action) => {
            console.log(action.payload)
          const { name, email, password, avatarURL } = action.payload;
          state.user.name = name;
          state.user.email = email;
          state.user.password = password;
          state.user.avatarURL = avatarURL;
          state.isLoading = false;
        })
    }
})

export const userReducer = userSlice.reducer
