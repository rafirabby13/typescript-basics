"use strict";
{
    function add(num1, num2) {
        return num1 + num2;
    }
    console.log(add(4, 6));
    const addArrow = (num1, num2 = 10) => {
        return num1 + num2;
    };
    const poorUser = {
        name: "rafi",
        balance: 0,
        addBalance(balance) {
            return `${this.balance + balance}`;
        }
    };
    console.log(poorUser.addBalance(6));
    const arr = [1, 3, 6];
    const newArray = arr.map((item) => item * item);
    console.log(newArray);
}
