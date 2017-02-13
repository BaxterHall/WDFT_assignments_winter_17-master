
let timenowstart = Date.now()


function timenow() {
let timenowstart = Date.now();

    return timenowstart ;

};

let timesince = Date.now() - timenowstart

function timeElapsed() {
let timesince = Date.now() - timenowstart
    
  
    return timesince;


};

console.log(timesince)
describe('take in time', () => {
    it('give time elapsed since a moment', () => {
        expect(timenow(timenowstart)).toBe(timeElapsed(timesince));
    });
});

describe('calculate time passed', () => {
    it('shows time passed since another time', () => {
        expect(timenow(timenowstart)).toBe(timeElapsed(timesince));

    });

});