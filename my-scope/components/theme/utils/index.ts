import { primitiveValues } from "../tokens/primitiveValue";

type PrimitiveValueKeys = keyof typeof primitiveValues;

const toPrimitiveVal = (key: PrimitiveValueKeys): string => {
    return primitiveValues[key];
};

/**
 * Recursively applies a transformation to primitive values in an object.
 * If a string starts with "--", it is converted using `toPrimitiveVal`.
 *
 * @param obj - The input object or value to process.
 * @returns The transformed object or value.
 */
// eslint-disable-next-line
export function applyToPrimitiveVal(obj: any): any {
    if (typeof obj === "string") {
        return obj.startsWith("--")
            ? toPrimitiveVal(obj as PrimitiveValueKeys)
            : obj;
    }
    if (typeof obj === "object" && obj !== null) {
        return Object.fromEntries(
            Object.entries(obj).map(([key, value]) => [
                key,
                applyToPrimitiveVal(value),
            ]),
        );
    }
    return obj;
}
