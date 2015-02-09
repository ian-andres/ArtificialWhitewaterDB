
  

  $scope.enterrepair= function () {
        
        $("#validatemessage").html("");
        var purpose=$("#purpose").val();
        var description=$("#description").val();
        var date=$("#date").val(); 
        var effort=$("#effort").val(); 
        var cost=$("#cost").val();
        var site_id=$("#site_id").val();
        var verification_id=$("#verification_id").val();
        console.log("purpose is " + purpose);

    if(purpose == "" || description == "")
    {

      $("#validatemessage").html("Enter the required fields");
    }
    else
    {

       var adddetails={};
           adddetails.purpose = purpose;
           adddetails.description = description;
           adddetails.date = date;
           adddetails.effort = effort;
           adddetails.cost = cost;
           adddetails.site_id = site_id;
           adddetails.verification_id = verification_id;


    $http.post("/enterrepair",adddetails)
     .success(function(response) 
      {

        if(response.status=="0")
         {
           $("#validatemessage").html("Please check values");   
         }
         else
         {
           alert("succusfully registered");
           $location.path('/') 
         }    
              
      }).error(function(response)
        {
            alert(response);
         });

    }
    }; 

    
    $scope.enterincident = function () {
        
        $("#validatemessage").html("");
        var flow=$("#flow").val();
        var helmet_pfd=$("#helmet_pfd").val();
        var weather=$("#weather").val(); 
        var witnesses=$("#witnesses").val(); 
        var expertise=$("#expertise").val();
        var difficulty= $("#difficulty").val();
        var date=$("#date").val(); 
        var site_id=$("#site_id").val();
        var verification_id=$("#verification_id").val();
        console.log("flow is " + flow);

    if(flow == "" || witnesses == "" || expertise == "" || site_id == "")
    {

      $("#validatemessage").html("Enter the required fields");
    }
    else
    {

       var adddetails={};
           adddetails.flow = flow;
           adddetails.helmet_pfd = helmet_pfd;
           adddetails.weather = weather;
           adddetails.witnesses = witnesses;
           adddetails.expertise = expertise;
           adddetails.difficulty = difficulty;
           adddetails.date = date;
           adddetails.site_id = site_id;
           adddetails.verification_id = verification_id;


    $http.post("/enterincident",adddetails)
     .success(function(response) 
      {

        if(response.status=="0")
         {
           $("#validatemessage").html("Please check values");   
         }
         else
         {
           alert("succusfully registered");
           $location.path('/') 
         }    
              
      }).error(function(response)
        {
            alert(response);
         });

    }
    }; 