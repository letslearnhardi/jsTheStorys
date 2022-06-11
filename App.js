"use strich"


window.onload = () => {

    let questionTotal = 3;
    let questionCounter = 0;
    let solicitation = `Tolong masukan `;
    
    let questionArray = [
        `${solicitation} nama lengkap anda`,
        `${solicitation} umur anda`,
        `${solicitation} tempat lahir anda`,
    ];
    
    let userInputs = [];
    for(i = questionTotal; i >= 0; i--){
    
        userInputs.push(
            prompt(questionArray[questionCounter] + `... (${questionTotal} pertanyaan tersisa)`)
        )
        questionTotal--;
        questionCounter++;
    }

    originalStory = `<h1>Hallo guys... perkenalkan nama ku ${userInputs[0]} sekarang aku berumur ${userInputs[1]}, dan aku berasal dari ${userInputs[2]}</h1>`
    console.log(originalStory);

    document.write(originalStory);
}
