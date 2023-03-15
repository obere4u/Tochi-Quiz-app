// const quiz = [
//     ["What is Superman's real name? ","Clark Kent"],
//     ["What is Wonder Woman's real name?","Diana Prince"],
//     ["What is Batman's real name?","Bruce Wayne"]
// ];

// function start(quiz){
//     let score = 0;
//     //***main game loop*/
//     for(const [question, answer] of quiz){
//         const response = ask(question);
//         check(response, answer);
//     }
//     //***end of game loop */

//     gameOver();
//     // function declaration
//     function ask(question){
//         return prompt(question);
//     }

//     function check(response, answer) {
//         if(response === answer) {
//         alert("You are correct");
//         score++;
//         } else {
//         alert(`Wrong! The answer is ${answer}`);
//         }
//     }

//     function gameOver(){
//         alert(`Game Over, you scored: ${score} point: ${score !== 1 ? 's' : " "}`)
//     }
// }
// start(quiz);

