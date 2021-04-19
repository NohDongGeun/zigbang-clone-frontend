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
  name: string;
}

export interface IAuth {
  phone: string;
}

export interface IAuthNext {
  code: string;
}
