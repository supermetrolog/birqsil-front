interface Validator {
    $touch: Touch;
    $validate: Validate;
    $hasError: HasError;
    $getErrors: GetErrors;
}
interface GetErrors {
    (): string[];
}
interface HasError {
    (): boolean;
}

interface Validate {
    (): boolean;
}

interface Touch {
    (): boolean;
}

export default Validator;