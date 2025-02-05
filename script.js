let textArea = document.querySelector('#text');
let emptyDiv = document.querySelector('.empty');
let btn = document.querySelector('button');

let collecton = [
    "Iste qui exercitationem eligendi delectus excepturi sunt adipisci voluptatem natus, dolorem a eaque fugiat consequatur eum nostrum at laborum reiciendis alias numquam! Porro necessitatibus nam facilis, magni voluptates quis vel ipsam eaque alias.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic perferendis perspiciatis necessitatibus consequatur magnam excepturi quisquam explicabo! "]

textArea.disabled = true;
let startTime;

const showPara = () => {
    let index = Math.floor(Math.random() * collecton.length);
    emptyDiv.innerText = collecton[index];
}

const endTyping = () => {
    let time = new Date().getTime();
    let totalTime = (time - startTime)/1000;

    if(textArea.value == ""){
        emptyDiv.innerText = `Please Type Something...`;
    }
    else{
    let typeWords = textArea.value;
    let typeWordsAr = typeWords.split(" ");
    // console.log(typeWordsAr);
    
    let countWords = 0;
    countWords = typeWordsAr.length;

    let typingSpeed = Math.floor((countWords/totalTime)*60);
    let paraLength = emptyDiv.innerText;
    let paraWordsAr = paraLength.split(" ");

    let count = 0;
    typeWordsAr.forEach((element,index) => {
        if(element === paraWordsAr[index])
            count++;
    });
    // console.log(countWords);
    let mistakes = countWords - count;
    // console.log(count)
    // console.log(mistakes)

    emptyDiv.innerText = `Your typing speed is ${typingSpeed} words per minute, ${count} are correct words and ${mistakes} are mistakes.`;
}

}
btn.addEventListener('click',() => {
    if(btn.innerText === "Start"){
        textArea.disabled = false;
        textArea.focus();
        // console.log("ok");
        btn.innerText = "Done";
        let time = new Date();
        startTime = time.getTime();
        showPara();
        textArea.value = "";
    }
    else{
        textArea.disabled = true;
        btn.innerText = "Start";
        endTyping();
        
    }
});