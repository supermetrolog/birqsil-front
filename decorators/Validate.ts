import Validator from "~/interfaces/Validator";

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
}