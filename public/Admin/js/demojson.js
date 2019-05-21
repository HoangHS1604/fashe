window.onload=function(){
    // $.get( "data/json_demo.txt", function( data ) {
    //     var objjson=jQuery.parseJSON(data);
    //     console.log(objjson.age);
    //     document.getElementById("tname").innerHTML=objjson.name;
    //     document.getElementById("tage").innerHTML=objjson.age;
    //     var animals=objjson.pets;
    //     for(i=0;i<animals.length;i++){
            
    //         var item=document.createElement("div");
    //         $("#dAnimal").append($(item));

    //         var spanAnimal=document.createElement("span");
    //         $(item).append($(spanAnimal));
    //         $(spanAnimal).html(animals[i].animal)+" ";

    //         var spanAnimalName=document.createElement("span");
    //         $(item).append($(spanAnimalName));
    //         $(spanAnimalName).html(animals[i].name)+" ";
    //     }
    //     // document.writeln("Name: "+objjson.name+"<br>");
    //     // document.writeln("Age: "+objjson.age+"<br>");
    //     // document.writeln("Pet 1: "+"<br>"
    //     //                 +"Animal: "+objjson.pets[0].animal+"<br>"
    //     //                 +"Name: "+objjson.pets[0].name+"<br>");
    //     // document.writeln("Pet 2: "+"<br>"
    //     //                 +"Animal: "+objjson.pets[1].animal+"<br>"
    //     //                 +"Name: "+objjson.pets[1].name+"<br>");
    //     // document.writeln("Pet 3: "+"<br>"
    //     //                 +"Animal: "+objjson.pets[2].animal+"<br>"
    //     //                 +"Name: "+objjson.pets[2].name+"<br>");                                 
    //   });
    //   $.get( "data/json_demo_array.txt", function( data ) {
    //     var arrayobj=jQuery.parseJSON(data);
    //     var demodiv=document.getElementById("demoa");
    //     for(i=0;i<arrayobj.length;i++){
    //         var item=document.createElement("div");
    //         $(demodiv).append($(item));

    //         var tname=document.createElement("span");
    //         $(item).append($(tname));
    //         $(tname).html(arrayobj[i])+"&bnsp;";

    //     }
    //   });
      $.get( "http://dummy.restapiexample.com/api/v1/employees", function( data ) {
        var arrayobj=jQuery.parseJSON(data);
        var demodiv=document.getElementById("demo");
            for(i=0;i<arrayobj.length;i++){
                
    
                
                var Employee = document.createElement("div");
                
        Employee.className = "title";
        var EmployeeId = document.createElement("div");
        EmployeeId.innerHTML = arrayobj[i].id;

        var EmployeeName = document.createElement("div");
        EmployeeName.innerHTML = arrayobj[i].employee_name;

        var EmployeeAge = document.createElement("div");
        EmployeeAge.innerHTML = arrayobj[i].employee_age;

        var EmployeeSalary = document.createElement("div");
        EmployeeSalary.innerHTML = arrayobj[i].employee_salary;

        Employee.append(EmployeeId);
        Employee.append(EmployeeName);
        Employee.append(EmployeeAge);
        Employee.append(EmployeeSalary);
        $(demodiv).append($(Employee));
            }
      });
}