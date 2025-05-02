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
}
getSpeedInMeterPerSecond(45)










}
