// import { createSlice } from '@reduxjs/toolkit';
// import { updateUser } from './operation';

// const handlePending = state => {
//     state.isLoading = true;
//   };

//   const handleRejected = (state, action) => {
//     state.isLoading = false;
//     state.error = action.payload;
//   };  

// const userSlice = createSlice({
//     name: 'user',
//     initialState: {
//         user: {
//             name: null,
//             email: null,
//             theme: null,
//             avatarURL: '',
//           }
//     },

//     extraReducers: builder => {
//         builder
//         .addCase(updateUser.rejected, handleRejected)
//         .addCase(updateUser.pending, handlePending)
//         .addCase(updateUser.fulfilled, (state, action) => {
//           const { name, email, password, avatarURL } = action.payload;
//           state.user.user.name = name;
//           state.user.user.email = email;
//           state.user.user.password = password;
//           state.user.user.avatarURL = avatarURL;
//           state.isLoading = false;
//         })
//     }
// })

// export const userReducer = userSlice.reducer
