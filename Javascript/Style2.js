let counter = 1;

setInterval(function(){

    document.getElementById('slide' + counter).checked = true;
    counter++;
    if(counter > 10){
        counter = 1;
    }
}, 5000);


function toggleAdvanceOption(){

    let AdvanceOption = document.getElementById("Advance_option")

    if (AdvanceOption.style.display === "none") {
        AdvanceOption.style.display = "block";
    }
    
    else {
        AdvanceOption.style.display = "none";
    }
}