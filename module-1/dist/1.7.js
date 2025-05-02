"use strict";
{
    //spread operator
    // rest operator
    const bros1 = ['a', 'b', 'v'];
    const bros2 = ['tonmoy', 'nahid', 'rahat'];
    bros1.push(...bros2);
    console.log(bros1);
    const mentors = {
        typescriot: 'mezba',
        redux: 'mir',
        dbms: 'mizabn'
    };
    const mentors2 = {
        prisma: 'firoz',
        next: 'tonmoy',
        cloud: 'nahid'
    };
    const mentorsList = Object.assign(Object.assign({}, mentors), mentors2);
    console.log(mentorsList);
    const greetFriends = (...friends) => {
        console.log(friends);
        friends.forEach(friend => {
            console.log(friend);
        });
    };
    greetFriends('a', 'b', 'c', 'd', 'e');
}
