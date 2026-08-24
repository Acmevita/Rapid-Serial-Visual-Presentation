

document.getElementById("button").addEventListener("click", function() {
    const textBlock = document.getElementById("text").value;
    const words = textBlock.split(/\s+/); //regex to split on whitespace (one or more spaces) 

    //real function to display each word in the "display" div
    text.style.display = "none"; //hide the textarea
    button.style.display = "none"; //hide the button
    console.log("textarea hidden");

    const displayDiv = document.getElementById("display");
    
    for (let i = 0; i < words.length; i++) {
        setTimeout(function() {
            displayDiv.innerHTML = words[i];
            console.log("displaying word: " + words[i]);
        }, i * 200);
    }

    //reset appearance after all words have been displayed
    setTimeout(function() {
        displayDiv.innerHTML = ""; 
        button.style.display = "block";
        text.style.display = "block"; 
    }, words.length * 200);

});

