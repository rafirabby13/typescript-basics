{
  // nullable type /unknown

  const searchName = (value: string | null) => {
    if (value) {
      console.log("searching");
    } else {
      console.log("there is nothing to search");
    }
  };
  searchName(null)


  const getSpeedInMeterPerSecond = (value: unknown)=>{
    if (typeof value == "number") {
        const speed = value* 3.6;
        console.log('speed is ', speed)
    }
    if (typeof value == 'string') {
        
        const valueInNumber = Number(value.split(' ')[0])
        const speed = valueInNumber* 3.6;
        console.log('speed is ', speed)
    }
}
getSpeedInMeterPerSecond('454 kmph')


//never type


const  throwError= (msg: string): never=>{
    throw new Error (msg)
}


throwError('mushkil se error  hogiya')






}
