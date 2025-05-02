{
  const age: number = 234;

  if (age >= 45) {
    console.log("adult");
  } else {
    console.log("not adult");
  }

  //nullish qualesshing opereator
  //  null/undefined

  const isAuthenticated = "";

  const result = isAuthenticated ?? "Guest";
  const result2 = isAuthenticated ? isAuthenticated : "Guest";

//   console.log({ result }, { result2 });

  type User = {
    name: string;
    address:{
    city: string;
    road: string;
    presentAddress: string;
    permanentAddress?: string;}
  };

  const user: User = {
    name: "sdfh",
    address:{
    city: "asdgdfg",
    road: "aewsome road",
    presentAddress: "sdp ",}
  };
  const permanentAddress = user?.address?.permanentAddress ?? user?.address?.presentAddress
  console.log({permanentAddress})
}
