document.getElementById("submit_btn").onclick = function age() // on clicking the submit button age function will be called
{
    let d1 = document.getElementById("date").value;            // storing the values of html elemnts in js variables
    let m1 = document.getElementById("month").value;
    let y1 = document.getElementById("year").value;

    if(d1){

    let date = new Date();                                     // storing the current date in js variables
    let d2 = date.getDate();
    let m2 = date.getMonth()+1; 
    let y2 = date.getFullYear();

    let month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; // couldnt find any other way to get number of days in month
    // found the array logic from geeksforgeeks

    // logic: if months is smaller than birth month
    //        change current year to last year and add 12 months to current months
    //        if day is smaller than birth day
    //        change current month to last months and add the no. of days in the current month to days

    if (d1>d2) {
        m2 = m2 - 1;
        var d= d1-d2;
        d= month[m2]-d;
    }
    else{
        var d= d2-d1;
    }

    if (m1>m2) {
        y2 = y2 - 1;
        var m = m1-m2;
        m = 12-m;
    }
    else{
        var m = m2-m1;
    }
    var y = y2-y1;
    document.getElementById("years-output").innerHTML = y;
    document.getElementById("months-output").innerHTML = m;
    document.getElementById("days-output").innerHTML = d;
  }
  else{

  }

}

