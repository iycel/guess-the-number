function myguesfunc() {
    let output = document.getElementById("outputtext");
    let btn = document.getElementById("btn");
    let number = Math.floor(Math.random()*100)+1;
    let count = 0;
    let try2 ;
    btn.addEventListener("click", function(){
        let x = document.getElementById("userinput").value;
        x = parseInt(x);
        if (isNaN(x) || x>100 || x<1){
            alert("Please enter a number between 1 - 100")
        }else{
            if(x == number){
                output.innerHTML="Good One, Are you mind reader ?"
            }else if(x < number){
                output.innerHTML="Try, but Higher";
                count += 1;
                document.getElementById("attempt").innerHTML = `Number of attempts : ${count}`;
            }else{
                output.innerHTML="Try, but Lower";
                count +=1;
                document.getElementById("attempt").innerHTML = `Number of attempts : ${count}`;
            }
        }
    });
}
myguesfunc();