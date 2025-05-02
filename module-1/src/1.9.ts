{



    type Student = {
        name: string;
        age: number;
        contact?: string;
        gender: string;
        address: string;
      }


//   const student1: {
//     name: string;
//     age: number;
//     gender: string;
//     contact: number;
//     address: string;
//   } = {
//     name: "mezba",
//     age: 50,
//     gender: "janana",
//     contact: 8563489,
//     address: "golahat",
//   };


const student1:Student = {
    name: "mezba",
    age: 50,
    gender: "janana",
    contact: '8563489',
    address: "golahat",
  };



  

  const student2: Student = {
    name: "mir",
    age: 45,
    gender: "mardana",
    address: "rasulpur",
  };



  type UserName = string;
  type IsAdmin = boolean
  
  const userName: UserName = 'afmin'
  const isAdmin: IsAdmin = false


  type Add = (a: number, b: number)=> number

  const add:Add =(num1, num2)=>{
    return num1 + num2
  }


}
