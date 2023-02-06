import { login } from './login'

describe('logindebugger', () => {

  const mockAlert = jest.fn();
  window.alert = mockAlert;

  it('must show an alert with welcomes', () => {
    login();
    expect(window.alert).toHaveBeenCalledWith('Bem Vindo!');
  })
})