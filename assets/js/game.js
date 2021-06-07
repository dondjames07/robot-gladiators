var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth, playerMoney);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
    //Alert payers that they are starting the round
  window.alert("Welcome to Robot Gladiators!");
var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

// if player chooses to fight, then fight
if (promptFight === "fight" || promptFight === "FIGHT") {



//Subtract the value of 'playerAttack' from the value of 'enemyHealth' and use result to update 'enemyHealth'
enemyHealth = enemyHealth - playerAttack;
//Log a resulting message to the console so we know it worked.
console.log(
    playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
);

// check enemy's health
if ( enemyHealth <= 0) {
    window.alert(enemyName + " has died!");
}
else {
    window.alert(enemyName + " still has "+ enemyHealth + " health left.");
}
//Subtract value of 'enemyAttack' from value of 'playerHealth' and use result to update  'playerHealth'
playerHealth = playerHealth - enemyAttack;
//Log a resulting message to console so we know it worked.
console.log(
    enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");
// check player's health
if (playerHealth <= 0 ) {
    window.alert(playerName + " has died!");
}
else {
    window.alert( playerName + " still has " + playerHealth + " health left.");
}
 // if player chooses to skip
} else if (promptFight === "skip" || promptFight === "SKIP") {
    //confirm player wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");

    //if yes, leave fight
    if (confirmSkip) {
        window.alert(playerName + " has decided to skip this fight. Goodbye!");
        //subtract from playerMoney
        playerMoney = playerMoney - 2;
    }
    //if no ask question again by running fight() again
    else {
        fight();
    }

 
} else {
    window.alert("Invalid option. Try again!");
}


};



fight();