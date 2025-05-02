{
  // destructuting

  const user = {
    id: 4534,
    name: {
      firstName: "hanan",
      middleName: "jodha",
      lastName: "fanan",
    },
    contactNo: 894563489,
    address: "urugue",
  };
  const {
    contactNo,
    name: { middleName },
  } = user;
  console.log(middleName);
}

const myCart = ["karu", "charu", "ross", "fahmida", "janua", "faltu"];

const [, , bestFriend, ...rest] = myCart;
console.log(rest)
