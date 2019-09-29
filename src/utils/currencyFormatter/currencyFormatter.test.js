import { currencyFormatter } from "./currencyFormatter";

describe('currency formatter', function () {
    it('Correctly format values smaller than 1', () =>{
        expect(currencyFormatter(0.85)).toEqual('£0.85')
    });

    it('Correctly format big values', () =>{
        expect(currencyFormatter(23456789.45)).toEqual('£23,456,789.45')
    });

    it('Correctly format falsy values', () =>{
        expect(currencyFormatter()).toEqual('£0.00')
    })
});