var inherits = function(Child, Parent) {
  Child.prototype = Parent.prototype;
  Child.prototype.constructor = Child;
};

module.exports = inherits;