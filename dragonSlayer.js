var slaying = true;
var youHit = Math.floor(Math.random() * 2);
var damageThisRound = Math.floor(Math.random()*5 + 1);
var totalDamage = 0;

while(slaying) {
    slaying = false;
    if (youHit === 1) {
        console.log("Congrats on hitting this pleb dragon!");
        totalDamage = totalDamage += damageThisRound;
        if (totalDamage >= 4) {
            console.log("You slew the dragon, buddy! GJ!");
            slaying = false;
        } else {
            youHit = Math.floor(Math.random() * 2);
        }
    } else {
        console.log("Ugh, he got ya! You're dead!");
    }
}
    
