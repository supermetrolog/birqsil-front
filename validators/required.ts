import {required} from "@vuelidate/validators";

export default (value: any): boolean|string => {
    if (required.$validator(value)) return true;

    return 'Field must be filled'
}