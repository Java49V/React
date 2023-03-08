import { LoginData } from '../models/LoginData';
export class AuthService {
  private users: LoginData[] = [
    { username: 'user@gmail.com', password: '12345' },
    { username: 'admin@gmail.com', password: '54321' },
  ];
  login(loginData: LoginData) {
    console.log(loginData);
    const { username, password } = loginData;
    const checkUser = (user: LoginData) => {
      return user.password === password && user.username === username;
    };
    if (!this.users.some(checkUser)) {
      throw 'Incorrect entered username or password';
    }
  }
}
