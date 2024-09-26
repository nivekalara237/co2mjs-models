import {SortDirection} from "../lib/models/sort-direction.enum";

describe("Sort Direction", ()=> {
    it('should check size', () => {
        expect(Object.keys(SortDirection).length).toEqual(2);
    });
    it('should check elements', () => {
        expect(["ASC", "DESC"]).toStrictEqual(Object.values(SortDirection).map(value => value.toString()));
    });
})