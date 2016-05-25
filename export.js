var expect = require('chai').expect;
module.exports = {
  before: function(){
   console.log(11)
  },
 
  'Array': {
     '#indexOf()': {
        '当值不存在时应该返回 -1': function(){
          expect([1,2,3].indexOf(4)).to.equal(-1);
        }
      }
  }
};
//mocha --ui exports export.js
