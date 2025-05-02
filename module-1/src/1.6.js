function add(num1, num2) {
    return num1 + num2;
}
console.log(add(4, 6));
var addArrow = function (num1, num2) {
    if (num2 === void 0) { num2 = 10; }
    return num1 + num2;
};
var poorUser = {
    name: "rafi",
    balance: 0,
    addBalance: function (balance) {
        return "".concat(this.balance + balance);
    }
};
console.log(poorUser.addBalance(6));
