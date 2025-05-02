"use strict";
var _a, _b, _c;
{
    const age = 234;
    if (age >= 45) {
        console.log("adult");
    }
    else {
        console.log("not adult");
    }
    //nullish qualesshing opereator
    //  null/undefined
    const isAuthenticated = "";
    const result = isAuthenticated !== null && isAuthenticated !== void 0 ? isAuthenticated : "Guest";
    const result2 = isAuthenticated ? isAuthenticated : "Guest";
    const user = {
        name: "sdfh",
        address: {
            city: "asdgdfg",
            road: "aewsome road",
            presentAddress: "sdp ",
        }
    };
    const permanentAddress = (_b = (_a = user === null || user === void 0 ? void 0 : user.address) === null || _a === void 0 ? void 0 : _a.permanentAddress) !== null && _b !== void 0 ? _b : (_c = user === null || user === void 0 ? void 0 : user.address) === null || _c === void 0 ? void 0 : _c.presentAddress;
    console.log({ permanentAddress });
}
