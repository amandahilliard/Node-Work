
let choices: Array<string> = ["rock", "paper", "scissors"];
    
interface Stats{
    games: number, 
    win: number, 
    tie: number, 
    loss: number,
}
let stats: Stats = {
    games: 1, 
    win: 0, 
    tie: 0, 
    loss: 0, 
}
    
    document.querySelectorAll(".choice").forEach((div) =>{
        div.addEventListener("click", () => {
            let cpuChoice: string = choices[Math.floor(Math.random() * choices.length)];
            let userChoice: string = this.value;
           
            document.getElementById("user").innerText = `You chose ${userChoice}`;
            document.getElementById("computer").innerText = `The cpu chose ${cpuChoice}`;
            
            if (cpuChoice === userChoice) {
                setOutcome("tie")
            }
    
            else if (cpuChoice === "rock" && userChoice == "scissors" ||
                cpuChoice == "paper" && userChoice == "rock" ||
                cpuChoice == "scissors" && userChoice == "paper") {
                setOutcome("loss")
            }
    
            else {
                setOutcome("win")
            }
            
            stats.games++;
            document.getElementById("game").innerText = stats.games.toString();
            document.getElementById("playAgain").innerText = "Choose a button to play again!";
        })
    });
    
    function setOutcome(outcome: string): void{   
        stats[outcome]++;           
        document.getElementById("result").innerText = `It was a ${outcome}`; 
        document.getElementById(outcome).innerText = stats[outcome]; 
    }

