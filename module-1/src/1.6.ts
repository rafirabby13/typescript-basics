{
    function add(num1:number, num2:number): number {
        return num1 + num2;
    }
    
    console.log(add(4, 6))
    
    const addArrow= (num1: number, num2: number = 10): number=>{
    return num1+num2
    }
    
    
    
    const poorUser ={
        name: "rafi",
        balance: 0,
        addBalance (balance: number): string{
            return `${this.balance + balance}`;
        }
    
    }
    
    console.log(poorUser.addBalance(6))
    
    
    const arr : number[] = [1,3,6]
    const newArray: number[] = arr.map((item: number): number=> item*item)
    console.log(newArray)
}