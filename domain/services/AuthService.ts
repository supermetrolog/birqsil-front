export interface ISignUpData {
    email: string;
    password: string;
    passwordRepeat: string;
};

export default class {
    api: any;

    constructor(api: any) {
        this.api = api;
    }

    signUp(data: ISignUpData): boolean {
        return false;
    }
}
