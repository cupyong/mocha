var assert = require('assert');
 
describe('Array', function() {
 
  describe('#indexOf()', function() {
    //同步测试
    it('当值不存在时应该返回 -1', function() {
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
    });
  });
 
  describe('Array', function() {
    describe('#indexOf()', function() {
      //下面是一个挂起的测试
      it('当值不存在时应该返回 -1');
    });
  });
  
  
});