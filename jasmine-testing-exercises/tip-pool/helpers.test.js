describe("Helpers Test (with setup and tear-down)", function() {
    beforeEach(function () {
        billAmtInput.value = 100;
        tipAmtInput.value = 20;
        submitPaymentInfo();
      });

it('should calculate bill and tip amount to make tip percent', function(){
    expect(calculateTipPercent(50, 10)).toBe(20);
})

it('should sum total tip amount of all payments on sumPaymentTotal()', function () {
    expect(sumPaymentTotal('tipAmt')).toEqual(20);

    billAmtInput.value = 200;
    tipAmtInput.value = 40;

    submitPaymentInfo();

    expect(sumPaymentTotal('tipAmt')).toEqual(60);
  });

  it('should sum total bill amount of all payments on sumPaymentTotal()', function () {
    expect(sumPaymentTotal('billAmt')).toEqual(100);

    billAmtInput.value = 200;
    tipAmtInput.value = 40;

    submitPaymentInfo();

    expect(sumPaymentTotal('billAmt')).toEqual(300);
  });

  it('should generate delete td and append to tr on appendDeleteBtn(tr, type)', function () {
    let newTr = document.createElement('tr');

    appendDeleteBtn(newTr);

    expect(newTr.children.length).toEqual(1);
    expect(newTr.firstChild.innerHTML).toEqual('X');
  });

// it('should create new element td and append from the value', function(){
//     let newTd = document.createElement('td');
//     newTd.innerText = 456;
//     expect(appendTd()).toBe(456);
// });
afterEach(function() {
    billAmtInput.value = '';
    tipAmtInput.value = '';
    paymentTbody.innerHTML = '';
    summaryTds[0].innerHTML = '';
    summaryTds[1].innerHTML = '';
    summaryTds[2].innerHTML = '';
    serverTbody.innerHTML = '';
    allPayments = {};
    paymentId = 0;
});
});