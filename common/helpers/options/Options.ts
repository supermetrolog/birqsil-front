export interface Option {
    label: string,
    value: any,
}

export const options = (array: any[], label: string, value: string): Option[] => {
    return array.map((el: any): Option => {
        return  {
            label: el[label],
            value: el[value]
        }
    })
}