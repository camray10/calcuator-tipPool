describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('should not add to the server if the input is empty', function(){
    serverNameInput.value = '';
    submitServerInfo();

    expect(Object.keys(allServers).length).toBe(0);
  });

  // it('should update #servertable on updateServerTable()', function () {
  //   submitServerInfo();
  //   updateServerTable();

  //   let updateTD = document.querySelectorAll('#serverTable tbody tr td');

  //   expect(updateTD.length).toEqual(3);
  //   expect(updateTD[0].innerText).toEqual('Alice');
  //   expect(updateTD[1].innerText).toEqual('$0.00');
  //   expect(updateTD[2].innerText).toEqual('X');
  // });

  afterEach(function() {
    // teardown logic
    serverId.value = 0;
    serverTbody.innerHTML = '';
    allServers = {};
  });
});
