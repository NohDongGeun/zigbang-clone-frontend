//로그인
export interface ILogin {
  email: string;
  password: string;
}

//회원가입
export interface ISignup {
  email: string;
  password: string;
  passwordVerify: string;
}
