export const selectIsLoggedIn = state => state.user.isLoggedIn;

export const selectIsRefreshing = state => state.user.isRefreshing;

export const selectLoading = state => state.user.isLoading;


export const selectUser = state => state.user.user;

export const selectToken = state => state.user.accessToken;

export const selectCurrentName = state => state.user.user;

export const selectCurrentPets = state => state.user.user.pets || [];

export const selectNoticesFAvorits = state => state.user.user.noticesFavorites;