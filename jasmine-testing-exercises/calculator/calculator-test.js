
it('should calculate the monthly rate correctly', function () {
  const values = {
    amount: 10000,
    years: 6,
    rate: 5.5
  };
  expect(calculateMonthlyPayment(values)).toEqual('163.38');
});


it("should return a result with 2 decimal places", function() {
  const values = {
    amount: 10000,
    years: 10,
    rate: 5
  };
  expect(calculateMonthlyPayment(values)).toEqual('106.07')
});

it('should work even with a high rate value', function(){
  const values = {
    amount: 10000,
    years: 8,
    rate: 75
  };
  expect(calculateMonthlyPayment(values)).toEqual('626.86')
})
