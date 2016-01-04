var assert = require('assert')
var deindent = require('./index')

describe('de-indent', function () {

  it('0 indent', function () {
    var str = 'abc\n  bcd\n  cde\nefg'
    var res = deindent(str)
    assert.equal(str, res)
  })

  it('non-0 indent', function () {
    var str = '  abc\n    bcd\n  cde\n    efg'
    var res = deindent(str)
    assert.equal(res, 'abc\n  bcd\ncde\n  efg')
  })

})
