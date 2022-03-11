
function newFortune () {
   let randomNum = (Math.floor(Math.random() * 11))

    console.log(randomNum);

   if (randomNum === 1) {
       return " beautiful, smart, and loving person will be coming into your life."
   }
   else if (randomNum === 2) {
       return "A dubious friend may be an enemy in camouflage."
   }
   else if (randomNum === 3) {
    return "A faithful friend is a strong defense"
    }
    else if (randomNum === 4) {
    return "A feather in the hand is better than a bird in the air."
    }
    else if (randomNum === 5) {
        return "A fresh start will put you on your way"
    }
    else if (randomNum === 6) {
        return "A friend asks only for your time not your money"
    }
    else if (randomNum === 7) {
        return "A friend is a present you give yourself."
    }
    else if (randomNum === 8) {
        return "A gambler not only will lose what he has, but also will lose what he doesn’t have."
    }
    else if (randomNum === 9) {
        return "A golden egg of opportunity falls into your lap this month."
    }
    else if (randomNum === 10) {
        return "A good friendship is often more important than a passionate romance."
    }
    else if (randomNum === 0) {
        return "A good time to finish up old tasks. "
    }
    }


function newHTML () {
    document.getElementById('fortune').innerHTML = newFortune();
    document.getElementById("button").disabled = true;
    document.getElementById('button').innerHTML = "Your fortune for the day is:"
    }

