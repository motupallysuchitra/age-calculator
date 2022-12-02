function age() {
    var d1 = document.getElementById("date").value;
    var m1 = document.getElementById("month").value;
    var y1 = document.getElementById("year").value;
    var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (d1 == null || m1 == null || y1 == null) {
        document.getElementById("age").innerHTML = "**Choose a proporly detail please!**";
        return false;
    } else if (d1 == "" || m1 == "" || y1 == "") {
        document.getElementById("age").innerHTML = "******Type details please!!!!******";
        return false;
    } else if (d1 > 31) {
        document.getElementById("age").innerHTML = "****Please provide valid Date!!!!****";
        return false;
    } else if (m1 > 12) {
        document.getElementById("age").innerHTML = "****Please provide Month value in range from 1 to 12!!!!****";
        return false;
    } else if (y1.length < 4) {
        document.getElementById("age").innerHTML = "****Please provide year in format YYYY!!!!****";
        return false;
    } else if (d1 > month[m1 - 1]) {
        document.getElementById("age").innerText =
            "******Please provide valid Date with respect to Month!!!!!***** ";
        return false;
    } else if (d1.length < 2 && m1.length < 2) {
        document.getElementById("age").innerText =
            "Provide Day and Month in format DD & MM";;
        return false;
    } else if (m1.length < 2) {
        document.getElementById("age").innerText =
            "Provide Month in format MM";;
        return false;
    } else if (d1.length < 2) {
        document.getElementById("age").innerText =
            "Provide Day in format DD";;
        return false;
    } else {
        var date = new Date();
        var d2 = date.getDate(); //today date
        var m2 = 1 + date.getMonth(); //jan=0,feb=1 & so-on
        var y2 = date.getFullYear(); //this year
        // var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        // for(let i=0;i<month.length;i++){  
        //    if(d2>month[i]) {
        //     document.getElementById("age").innerHTML = "Please provide Date between 1 to 31";
        // return false;
        //    }
        // }
        if (d1 > d2) {
            d2 = d2 + month[m2];
            m2 = m2 - 1;
        }
        if (m1 > m2) {
            m2 = m2 + 12;
            y2 = y2 - 1;
        }
        var d = d2 - d1;
        var m = m2 - m1;
        var y = y2 - y1;
        document.getElementById("age").innerHTML = "Your Age is " + y + " Years " + m + " Months " + d + " Days";
        console.log("Your Age is " + y + " Years " + m + " Months " + d + " Days")

    }
    //function age() {
    // define date string to test 
    // var ExpiryDate = document.getElementById(' ExpiryDate').innerHTML;
    // check date and print message 
    // if (date(ExpiryDate)) {
    //     //     alert('OK');
    // } else {
    //     //   alert('Please provide valid Date with respect to Month!');

    //     // }
    // }
}