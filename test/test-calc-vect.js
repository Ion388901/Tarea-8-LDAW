const assert = require('assert');
const VectorCalculator = require('../app/models/VectorCalculator');

describe('VectCalc', () => {
    describe('#sum', () => {
        let v1 = {x: 6, y: 8};
        let v2 = {x: 3, y: 5};
        it('Debería hacer suma de vectores', () => {
            assert.deepEqual({x: 9, y: 13}, VectorCalculator.sum(v1, v2));
        })
    })

    describe('#sub', () => {
        let v1 = {x: 6, y: 8};
        let v2 = {x: 3, y: 5};
        it('Debería hacer substracción de vectores', () => {
            assert.deepEqual({x: 3, y: 3}, VectorCalculator.sub(v1, v2));
        })
    })

    describe('#scalar', () => {
        let v1 = {x: 3, y: 7};
        let s1 = 2;
        it('Debería multiplicar por el escalar', () => {
            assert.deepEqual({x: 6, y: 14}, VectorCalculator.scalar(v1, s1));
        })
    })

    describe('#dot', () => {
        let v1 = {x: 3, y: 6};
        let v2 = {x: 2, y: 5};
        it('Debería dar el producto punto de los vectores', () => {
            assert.deepEqual(36, VectorCalculator.dot(v1, v2));
        })
    })
})