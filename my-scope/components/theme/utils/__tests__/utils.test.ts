import { applyToPrimitiveVal } from "../index";
import { primitiveValues } from "../../tokens/primitiveValue";

describe("applyToPrimitiveVal test", () => {
    it("should return the primitive value for a valid key starting with '--'", () => {
        const input = "--neutral-100";
        const result = applyToPrimitiveVal(input);
        expect(result).toBe(primitiveValues["--neutral-100"]);
    });

    it("should return the input string if it does not start with '--'", () => {
        const input = "random-string";
        const result = applyToPrimitiveVal(input);
        expect(result).toBe(input);
    });

    it("should recursively transform an object with valid keys", () => {
        const input = {
            color: "--neutral-100",
            background: "--neutral-200",
            nested: {
                border: "--neutral-300",
                text: "plain-text",
            },
        };

        const result = applyToPrimitiveVal(input);

        expect(result).toEqual({
            color: primitiveValues["--neutral-100"],
            background: primitiveValues["--neutral-200"],
            nested: {
                border: primitiveValues["--neutral-300"],
                text: "plain-text",
            },
        });
    });

    it("should return the input object unchanged if no keys start with '--'", () => {
        const input = {
            color: "plain-color",
            background: "plain-background",
            nested: {
                border: "plain-border",
                text: "plain-text",
            },
        };

        const result = applyToPrimitiveVal(input);

        expect(result).toEqual(input);
    });

    it("should return the input unchanged for non-object and non-string types", () => {
        expect(applyToPrimitiveVal(42)).toBe(42);
        expect(applyToPrimitiveVal(null)).toBe(null);
        expect(applyToPrimitiveVal(undefined)).toBe(undefined);
        expect(applyToPrimitiveVal(true)).toBe(true);
    });
});
