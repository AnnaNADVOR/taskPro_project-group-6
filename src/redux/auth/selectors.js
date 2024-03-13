export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectUser = state => state.auth.user;
export const selectIsRefreshing = state => state.auth.isRefreshing;
export const selectIsLoadingRegister = state => state.auth.isLoadingRegister;
export const selectIsLoadingLogin = state => state.auth.isLoadingLogin;
export const selectIsLoadingLogout = state => state.auth.isLoadingLogout;
export const selectBoardList = state => state.auth.user.user.boards;
