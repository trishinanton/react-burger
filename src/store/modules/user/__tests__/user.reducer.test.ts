import {fetchLogin,
  fetchLogout,
  fetchRegister,
  fetchUpdateUser,
  fetchUser,
  reducer} from "../user.reducer";

describe('user reducer', () => {
  const initialState = {
    email: '',
    name: '',
    password: '',
    hasUser: false,
  };

  it('should handle initial state', () => {
    expect(reducer(undefined, { type: 'unknown' })).toEqual(initialState);
  });

  it('should handle fetchRegister.fulfilled', () => {
    const payload = { email: 'test@example.com', name: 'Test User', password: 'password123' };
    const action = fetchRegister.fulfilled(payload, '', payload);
    const state = reducer(initialState, action);

    expect(state).toEqual({
      email: 'test@example.com',
      name: 'Test User',
      password: 'password123',
      hasUser: true,
    });
  });
  it('should handle fetchLogin.fulfilled', () => {
    const payload = { email: 'test@example.com', name: 'Test User' };
    const action = fetchLogin.fulfilled(payload, '', payload);
    const state = reducer(initialState, action);

    expect(state).toEqual({
      email: 'test@example.com',
      name: 'Test User',
      password: '',
      hasUser: true,
    });
  });
  it('should handle fetchUser.fulfilled', () => {
    const payload = { email: 'test@example.com', name: 'Test User' };
    const action = fetchUser.fulfilled(payload, '', undefined);
    const state = reducer(initialState, action);

    expect(state).toEqual({
      email: 'test@example.com',
      name: 'Test User',
      password: '',
      hasUser: true,
    });
  });

  it('should handle fetchUpdateUser.fulfilled', () => {
    const payload = { email: 'updated@example.com', name: 'Updated User' };
    const action = fetchUpdateUser.fulfilled(payload, '', payload);
    const state = reducer(initialState, action);

    expect(state).toEqual({
      email: 'updated@example.com',
      name: 'Updated User',
      password: '',
      hasUser: true,
    });
  });
  it('should handle fetchLogout.fulfilled', () => {
    const loggedInState = {
      email: 'test@example.com',
      name: 'Test User',
      password: 'password123',
      hasUser: true,
    };

    const action = fetchLogout.fulfilled(undefined, '', undefined);
    const state = reducer(loggedInState, action);

    expect(state).toEqual(initialState);
  });
})
