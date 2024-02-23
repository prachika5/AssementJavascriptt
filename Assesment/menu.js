//Write an Arrow function to print different menu for different day in a week.

const printMenuForDay = (dayOfWeek) => {
    switch (dayOfWeek) {
        case 0:
            console.log("Sunday Menu: Chicken");
            break;
        case 1:
            console.log("Monday Menu: DalFry");
            break;
        case 2:
            console.log("Tuesday Menu: Tacos");
            break;
        case 3:
            console.log("Wednesday Menu: Pizza");
            break;
        case 4:
            console.log("Thursday Menu: Egg Plant");
            break;
        case 5:
            console.log("Friday Menu: Salad");
            break;
        case 6:
            console.log("Saturday Menu: Bread Butter");
            break;
        default:
            console.log("Invalid day of the week!");
    }
};


printMenuForDay(0); 
printMenuForDay(3); 
printMenuForDay(7); 