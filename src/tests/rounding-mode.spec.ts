import {RoundingMode} from "../lib/models/rounding-mode.enum";

describe("Rounding Mode", ()=> {
    it('should verify the enum items - size', () => {
        const keys = Object.keys(RoundingMode);
        expect(keys.length).toEqual(6);
    });
    it('should verify the enum items - value', () => {
        const keys = Object.keys(RoundingMode);
        const values = Object.values(RoundingMode)
            .map(value => value.toString());
        for (const key in keys) {
            expect(values.indexOf(key)).toBeTruthy()
        }
    });
})