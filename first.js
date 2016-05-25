//模块依赖
var assert = require("assert");
var expect = require('chai').expect;
 
var variable ; 
//断言条件
describe('Array', function(){
  describe('#indexOf()', function(){
    it('当值不存在时应该返回 -1', function(){
     //expect(variable).to.equal("value");
     expect(variable).to.ok;
     //assert.equal(variable, "value");
    });
  });
});
describe('Array1', function(){
  describe('#indexOf1()', function(){
    it('当值不存在时应该返回 -1', function(){
       //assert.equal(variable, "value");
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
    });
  });
});
//mocha first.js


//should.js
//expect.js
//chai.js
//better-assert
//assert：nodejs原生模块，在前文示例中我们有应用到



//expect 库应用是非常广泛的，它拥有很好的链式结构和仿自然语言的方法。通常写同一个断言会有几个方法，比如expect(response).to.be(true) 和 expect(response).equal(true)。以下列举了 expect 常用的主要方法：

// ok ：检查是否为真
// true：检查对象是否为真
// to.be、to：作为连接两个方法的链式方法
// not：链接一个否定的断言，如 expect(false).not.to.be(true)
// a/an：检查类型（也适用于数组类型）
// include/contain：检查数组或字符串是否包含某个元素
// below/above：检查是否大于或者小于某个限定值
// 在课程开始讲解什么是mocha的时说：mocha支持TDD/BDD 的 开发方式，结合 should.js、expect、chai、better-assert 断言库，能轻松构建各种风格的测试用例。这里面有两个知识点，一个是断言库，另一个是 TDD/BDD 。

// 断言库我们已经在前文中讲解了，那下一章我们就开始讲解TDD/BDD 。