export const selectIsLoggedIn = state => state.user.isLoggedIn;
export const selectUser = state => state.user.user;
export const selectIsRefreshing = state => state.user.isRefreshing;
export const selectIsLoadingRegister = state => state.user.isLoadingRegister;
export const selectIsLoadingLogin = state => state.user.isLoadingLogin;
export const selectIsLoadingLogout = state => state.user.isLoadingLogout;
export const selectBoardList = state => state.user.user.user.boards;
