var password=document.getElementById("password");
        var cpassword=document.getElementById("cpassword");
        var text = document.getElementById("passshow");
        var btn=document.getElementById("btn_show_hide");
        var password_checker_status = document.getElementsByClassName("password-check");
        var check_tick = document.getElementsByClassName("check_ticks");
 

        // Password Validate Function
       
        function password_validate_regex(data) {

            const lowercase = new RegExp('(?=.*[a-z])');
            const uppercase = new RegExp('(?=.*[A-Z])');
            const number = new RegExp('(?=.*[0-9])');
            const length_pass = new RegExp('(?=.{8,})');
            const special_char = new RegExp('(?=.*[!@#$%^&*/\|])');
          
            if (lowercase.test(data)) {
                password_checker_status[0].style.color = "green";
                check_tick[0].style.display="inline";
            }
            else {
                password_checker_status[0].style.color = "gray";
                check_tick[0].style.display="none";

            }

            if (uppercase.test(data)) {
                password_checker_status[1].style.color = "green";
                check_tick[1].style.display="inline";

            }
            else {
                password_checker_status[1].style.color = "gray";
                check_tick[1].style.display="none";

            }

            if (number.test(data)) {
                password_checker_status[2].style.color = "green";
                check_tick[2].style.display="inline";

            }
            else {
                password_checker_status[2].style.color = "gray";
                check_tick[2].style.display="none";

            }


            if (length_pass.test(data)) {
                password_checker_status[3].style.color = "green";
                check_tick[3].style.display="inline";

            }
            else {
                password_checker_status[3].style.color = "gray";
                check_tick[3].style.display="none";

            }

            if (special_char.test(data)) {
                password_checker_status[4].style.color = "green";
                check_tick[4].style.display="inline";

            }
            else {
                password_checker_status[4].style.color = "gray";
                check_tick[4].style.display="none";

            }
        }

        // Password Show Function

        function passshow() {
        var Attribute = password.getAttribute("type");
       var passhow_attribute=btn.getAttribute("value");
        // console.log(passhow_attribute);
        var value = password.value;

        if (Attribute == "password") {
            if (value == "") {
                alert("Enter Password");
            }
            else {

                password.setAttribute("type", "text");

                btn.setAttribute("value","Hide Password");
            }
        }
        else if (Attribute == "text") {
            password.setAttribute("type", "password");
            
            btn.setAttribute("value","Show Password");




        }


    }

    // Matching Password and confirm password

    function password_confirm(data_confirm){
          var password_vlaue=password.value;
          var cpassword_value=cpassword.value;
          if(password_vlaue!=cpassword_value){
               document.getElementById("error").innerText="* Confirm Password doesnot Match *";
          }
          else{
            document.getElementById("error").innerText="";
          }
    }

