
//Just some example testing.
describe('testing basic functions', function(){
    it('should return the correct string length', function(){
        expect(testStringLength("kittens")).toEqual(7);
    });

    it('returnKittens should return kittens', function(){
        expect(returnKittens()).toBe("kittens");
    });

    ////this test should fail.
    it('this test should fail!', function(){
        expect(returnKittens()).toBe("kittens");
    });

    it('this is a custom test!', function(){
        expect(double("things")).toBe("thingsthings");
    });

    it('here is another test we made!',function(){
        expect(double("")).toBe("");
    });

    it('test for gradeToNumber',function(){
        expect(gradeToNumber("B")).toBe("3");
    });

    it('test for gpa',function(){
       expect(average([2,3,4])).toBe(3);
    });
});

