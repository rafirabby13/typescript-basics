const user: {
    readonly comapany: "PH"; //--> literal type
    firstName: string;
    middleName?: string; // optional type
    lastName: string;
    isMarried: boolean;
} = {
    comapany: "PH",
    firstName: "Rafi",
    lastName: "Rabby",
    isMarried: false
}


// user.comapany = ''