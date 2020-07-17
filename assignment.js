// 	1: feetToMile

function feetToMile(feet) {

    if(feet >= 0) {
        var mile = feet / 5280;
        return mile;
    }
    else {
        console.log("Error420: Physical quantities can never be negative.")
    }

}

// 2: woodCalculator

function woodCalculator(chair, table, bed) {

    if(chair >= 0 && table >= 0 && bed >= 0) {
        chairWoodCount = chair * 1;
        tableWoodCount = table * 3;
        bedWoodCount = bed * 5;
        totalWoodCount = chairWoodCount + tableWoodCount + bedWoodCount;
        return totalWoodCount;
    }
    else {
        console.log("Error420: Physical quantities can never be negative.")
    }

}

// 	3: brickCalculator

function brickCalculator(floorCount) {

    var bricksPerFloor = floorCount * 1000;
    var floorLength;

        if(floorCount >= 0 && floorCount <= 10) {
            floorLength = bricksPerFloor * 15;
        }
        else if(floorCount > 10 && floorCount <= 20) {
            floorLength = (bricksPerFloor * 12) + 30000;
        }
        else if(floorCount > 20) {
            floorLength = (bricksPerFloor * 10) + 70000;
        }
        else {
            console.log('Error420: Physical quantities can never be negative.')
        }
        return floorLength;
        
}

// 	4: tinyFriend Undone

function tinyFriend(friendsName) {

    let 

}





// // var result = tinyFriend(['Sabber', 'Rhea', 'Amrin', 'Bushra', 'Mridul', 'Mahin']);
// // console.log(result)