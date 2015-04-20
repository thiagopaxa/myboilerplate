module.exports = {
  'Demo test local' : function (browser) {
    browser
      .url('http://localhost:9999')
      .waitForElementVisible('body', 1000)
      .assert.containsText('.github', 'Paxa')
      .end();
  }
};