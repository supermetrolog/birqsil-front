interface IAuthService {
    signUp: ISignUp
}

interface ISignUp {
    (data: ISignUpData): boolean;
}



export default IAuthService;