var assert = require("assert");
 
suite('Array', function(){
  setup(function(){
    console.log('测试执行前执行');
  });
 
  suite('#indexOf()', function(){
    test('当值不存在时应该返回 -1', function(){
      assert.equal(-1, [1,2,3].indexOf(4));
    });
  });
});
//mocha --ui tdd suite.js