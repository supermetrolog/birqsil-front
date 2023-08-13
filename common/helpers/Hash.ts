import {sha256} from "ohash";

const WaitingHash = (payload: string): string => {
    return sha256(payload)
}
export default WaitingHash;