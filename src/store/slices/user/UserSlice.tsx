import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
  id?: string;
  token?: string;
  avatarId?: string | number | null;
  firstName?: string;
  lastName?: string;
  userName?: string;
  email?: string;
  emailVerified?: string;
}

interface InitialState {
  data: User | null;
  avatarId?: string | number | null;
  networkError: boolean;
  isLoading: boolean;
  isNull: boolean;
}

const initialState: InitialState = {
  data: null,
  avatarId: null,
  networkError: false,
  isLoading: true,
  isNull: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateAvatarId: (state, action: PayloadAction<string | number | null>) => {
      state.avatarId = action.payload;
    },
    loginUser: (state, action: PayloadAction<User>) => {
      state.data = action.payload;
      state.isLoading = false;
      state.isNull = false;
      state.networkError = false;
    },
    logoutUser: (state) => {
      state.data = null;
      state.isLoading = false;
      state.isNull = true;
      state.networkError = false;
    },
    setUserWithNetworkError: (state) => {
      state.data = null;
      state.isLoading = false;
      state.isNull = false;
      state.networkError = true;
    },
  },
});

export const {
  loginUser,
  logoutUser,
  setUserWithNetworkError,
  updateAvatarId,
} = userSlice.actions;
export default userSlice.reducer;
