import InputType from "~/enums/InputType";
import {PropType} from "@vue/runtime-core";
import Validator from "~/interfaces/Validator";

export default (): Validator => {
    interface IProps {
        v: Validator;
    }

    const { v }: IProps = defineProps({
        v: {
            type: Object as PropType<Validator>,
            required: true,
        },
    })

    return v
}