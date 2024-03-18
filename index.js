const mainContainer = document.getElementById("container");
//create function to show the amount of letters words and sentences
const showResult = () => {
    const inputText = document.querySelector(".input_text").value;
    const letters = inputText.replace(/[^a-zA-Z]/g, "").length;
    const words = inputText.split(/\s+/).filter((elem) => elem !== "").length;
    const sentences = inputText
        .split(/[?.!:]/)
        .filter((item) => item !== "").length;
    //get to the div and append to that div p tags to show the result
    const resultContainer = document.querySelector(".count_info");
    resultContainer.innerHTML = `
        <p>Number of letters - ${letters}</p>
        <p>Number of words - ${words}</p>
        <p>Number of sentences - ${sentences}</p>    
    `;
};
//add eventlistner to button show result
document.querySelector(".result_button").addEventListener("click", showResult);

//random background
//rNum generate random color for RGB
const rNum = () => Math.floor(Math.random() * 255);
function generateRandomColor() {
    return `rgb(${rNum()}, ${rNum()}, ${rNum()})`;
}
const changeBg = document.querySelector(".bg_change");
//add eventlistner to button change background
changeBg.addEventListener("click", () => {
    mainContainer.style.background = generateRandomColor();
});
