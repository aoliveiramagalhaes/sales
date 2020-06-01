const sales = require("./sales");

// to run tests go to the terminal and execute yarn jest

describe("rangeFiveToNine", () => {
    describe("when won is under range", () => {
        it("returns 0", () => {
            expect(sales.rangeFiveToNine(5)).toBe(0);
        });
    });

    describe("when won is the first tier of the range", () => {
        it("returns 25", () => {
            expect(sales.rangeFiveToNine(6)).toBe(25);
        });
    });


    describe("when won is the maximum value within range", () => {
        it("returns 125", () => {
            expect(sales.rangeFiveToNine(10)).toBe(125);
        });
    });


    describe("when won is above range", () => {
        it("returns 125", () => {
            expect(sales.rangeFiveToNine(20)).toBe(125);
        });
    });
});


describe("rangeTenToFourteen", () => {
    describe("when won is under range", () => {
        it("returns 0", () => {
            expect(sales.rangeTenToFourteen(10)).toBe(0);
        });
    });

    describe("when won is the first tier of the range", () => {
        it("returns 32.5", () => {
            expect(sales.rangeTenToFourteen(11)).toBe(32.5);
        });
    });


    describe("when won is the maximum value within range", () => {
        it("returns 162.5", () => {
            expect(sales.rangeTenToFourteen(15)).toBe(162.5);
        });
    });


    describe("when won is above range", () => {
        it("returns 162.5", () => {
            expect(sales.rangeTenToFourteen(20)).toBe(162.5);
        });
    });
});

describe("rangeFifhteenToNineteen", () => {
    describe("when won is under range", () => {
        it("returns 0", () => {
            expect(sales.rangeFifhteenToNineteen(15)).toBe(0);
        });
    });

    describe("when won is the first tier of the range", () => {
        it("returns 40", () => {
            expect(sales.rangeFifhteenToNineteen(16)).toBe(40);
        });
    });


    describe("when won is the maximum value within range", () => {
        it("returns 160", () => {
            expect(sales.rangeFifhteenToNineteen(19)).toBe(160);
        });
    });


    describe("when won is above range", () => {
        it("returns 200", () => {
            expect(sales.rangeFifhteenToNineteen(20)).toBe(200);
        });
    });
});

describe("rangeTweentyOrMore", () => {
    describe("when won is under range", () => {
        it("returns 0", () => {
            expect(sales.rangeTweentyOrMore(20)).toBe(0);
        });
    });

    describe("when won is the first tier of the range", () => {
        it("returns 50", () => {
            expect(sales.rangeTweentyOrMore(21)).toBe(50);
        });
    });
});

describe("total", () => {
    it("returns total", () => {
        expect(sales.total(50)).toBe(1987.5);
    });
});