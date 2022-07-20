import { greeting } from "./string";

describe("greeting",()=>{
    it("should retung Welcome Name",()=>{
        const res=greeting('Abdo');
        expect(res).toBe(`Welcome Abdo`)
    })
})