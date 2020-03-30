/* eslint-disable no-undef */
const f = require('../modules/functions')


describe('Tests IsNumber', () => {
    it("Retorna NaN", () => {
        expect(f.isNumber("Teste")).toBeFalsy()
    })

    it("Retorna True", () => {
        expect(f.isNumber("454")).toBe(true)
    })
});
