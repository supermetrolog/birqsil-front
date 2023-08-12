import Validator from "~/domain/interfaces/Validator";

export default class implements Validator {
    property: any;

    constructor(property: any) {
        this.property = property;
    }
    $validate(): boolean {
        return this.property.$validate();
    }

    $touch(): boolean {
        return this.property.$touch();
    }

    $hasError(): boolean {
        return this.property.$error();
    }

    $getErrors(): string[] {
        return this.property.$errors.map((elem: any) => elem.$message);
    }
}