var ids = ["services","profileDetails","contact","portfolio","experience","education","certificate"];

function showHide(divId){
    console.log(divId);
    ids.forEach(element => {
        if(divId != element){
            document.getElementById(element).style.display = "none";
        }
        else{
            document.getElementById(element).style.display = "block";
        }
    });
}