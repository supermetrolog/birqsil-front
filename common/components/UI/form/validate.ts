import {PropType} from "@vue/runtime-core";
import Validator from "cabinet/domain/interfaces/Validator";

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