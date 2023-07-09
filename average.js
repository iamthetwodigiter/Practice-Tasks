function myfunc(){
    const mark1 = Number(document.getElementById("mark1").value)
    const mark2 = Number(document.getElementById("mark2").value)
    const mark3 = Number(document.getElementById("mark3").value)

    const avg = (mark1+mark2+mark3)/3
    if (avg>=90){
        document.getElementById("display").innerText="Excellent score with average of "+avg
    }else{
        document.getElementById("display").innerText="Improve your scores, your average is "+avg
    }
}