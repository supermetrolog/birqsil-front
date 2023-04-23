interface Validator {
    $touch: Touch;
    $validate: Validate;
}
interface Validate {
    (): boolean;
}

interface Touch {
    (): boolean;
}

export default Validator;