declare module "@uppercod/get-prop" {
    export default function getProp<T>(
        data: any | any[],
        mapProp: string | (string | number)[],
        optionalValue?: T
    ): T;
}
