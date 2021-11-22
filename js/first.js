

let first_name = "leke";
      console.log(first_name);
      let secondName = "temidayo";
      console.log(secondName);
      let _email_address = "leketems@gmail.com";
      console.log(_email_address);

      let firstName = "Elijah";
      let typ_of_name=typeof firstName;
      let gravity = 9.8660;
      let typ_of_num = typeof gravity;
      console.log(typ_of_name);
      console.log(typ_of_num);
      let possibility = true;
      let typ_of_outcome = typeof possibility;
      console.log(typ_of_outcome);
      let studentName = "Gideon";
      let typ_of_nam = typeof studentName;
      console.log(typ_of_nam);

      let student={phone_num: 09073305098, class: "Jss1", Age: "19yr", name01: "Elijah", name02: "Olusunmade",}
      let type_of_ age = typeof Age;
      console.log(type_of_age);






function  Repeat(num1, num2, operand){
     var Output = "";
     if (operand =="+"){
          Output = num1 + num2;
     }
     else if(operand == "-"){
          Output = num1-num2;
     }
     else if (operand == "*"){
          Output = num1*num2;
     }
     else if(operand == "/"){
          Output= num1/num2;
     }
     else { 
          Output = "Wrong Operator!!"


          function Result(Output){
               console.log("The answer is " + Output)

          }



          Result(Output);


     }

     Repeat(320, 40, "/")
}



<button onclick="Result(Output)"> Click me Please</button>;
<input type="text" onclick="Result(Output)" placeholder="input your secret number"> ;
