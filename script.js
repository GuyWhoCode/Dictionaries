let output = document.getElementById("generationBox")

let startGeneration = (startNum, endNum) => {
  output.value = ""
    if (startNum < 0 || endNum < 0 || endNum < startNum) {
        alert("Formatting issue")
        return;
    }

    for (var i=startNum; i<=(endNum); i++) {
        output.value += `${i}. ` + "\n"
    }
  output.style.height = "auto"
  navigator.clipboard.writeText(output.value)
//   .then(function() {
//   console.log('Async: Copying to clipboard was successful!');
// }, function(err) {
//   console.error('Async: Could not copy text: ', err);
// });
}


document.getElementById("submitNums").addEventListener("click", ()=> {
    let startNumber = document.getElementById("startNumber").value
    let endNumber = document.getElementById("endNumber").value

    startGeneration(parseInt(startNumber), parseInt(endNumber))
})