{



    type FrontendDeveloper = 'fakibazdeveloper' | 'juniorDeveloper'
    type FullStackDeveloper = 'fakibazdeveloper' | 'juniorDeveloper'


    type Developer = FrontendDeveloper | FullStackDeveloper;

    const newDeveloper: FrontendDeveloper = 'juniorDeveloper'
    
    

    type User ={
        name: string;
        email: string;
        gender: "male" | "female";
        bloodGroup: "O+" | "A+" | "AB+";
    }


    const user1 : User={
        name: "Rafi",
        email: "kjsdfhkdh",
        gender: "male",
        bloodGroup: "O+"

    }


    type FrontendDeveloperSkilss={
        skills: string[],
        designation1: "frontend developer"
    }

    type BackendDeveloperSkilss={
        skills: string[],
        designation2: "Backend developer"
    }

    type DeveloperFull = FrontendDeveloperSkilss & BackendDeveloperSkilss
    
    
    const fullstackdeveloper: DeveloperFull = {
        skills: ["prisma", "typescript"],
        designation1:  "frontend developer",
        designation2: "Backend developer"
    }



















}