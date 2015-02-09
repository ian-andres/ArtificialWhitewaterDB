    'use strict';

    angular.module('clientApp')
    .controller('MainCtrl',
    function ($scope, $location,$http) { 

    var username=getCookie("username");
     if(username != "")
      {
       $location.path('/dashboard')
      }
     
    //user signin
    $scope.login = function () {

    $("#validatemessage").html("");
    var email=$("#signinemail").val();
    var password=$("#signinpassword").val();

    if(email == "" || password == "")
    {

     $("#validatemessage").html("Enter the required fields");
    }
    else
    {

     var adddetails={};

     adddetails.email=email;
     adddetails.password=password;

      $http.post("/signin",adddetails)
     .success(function(response) 
    {
       
    if(response.result < 1)
      {                                        
        $("#validatemessage").html("Invalid email or password");
      }
     else
      {
        var sessionname=response.sessionname[0].username;
        var sessionemail=response.sessionname[0].email; 
        setCookie("username", sessionname, 30);
        setCookie("email", sessionemail, 30);
        $location.path('/dashboard')    
      } 

    }).error(function(response)
        {
            alert(response);
         });

    }            
    };
      $scope.signup = function () {
      $location.path('/signup')
    };

    $scope.forgotpassword = function () {
      $location.path('/forgotpassword')
    };
  
    });

    angular.module('clientApp')
    .controller('signupCtrl',
    function ($scope, $location,$http) {
    $scope.signin = function () {
      $location.path('/')
    };
 
    //user signup
    $scope.register = function () {
        
        $("#validatemessage").html("");
        var name=$("#name").val();
        var username=$("#username").val();
        var email=$("#email").val(); 
        var password=$("#password").val();
        var reg =/^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/;

    if(name == "" || username == "" || email == "" || password == "")
    {

      $("#validatemessage").html("Enter the required fields");
    }
    else if(!reg.test(email))
    {
      $("#validatemessage").html("Enter valid email");
     }
    else
    {

       var adddetails={};
           adddetails.name=name;
           adddetails.email=email;
           adddetails.username=username;
           adddetails.password=password;

       $http.post("/signup",adddetails)
     .success(function(response) 
      {

        if(response.status=="0")
         {
           $("#validatemessage").html("User already exist");   
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

    });

    angular.module('clientApp')
    .controller('DashboardCtrl',
    function ($scope, $location) {
    var username=getCookie("username");
     if(username == "")
      {
       $location.path('/')
      }
  
    $scope.name=username;

    $scope.signout = function () {
      document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
      $location.path('/')
    };

   $scope.changepassword = function () {
      $location.path('/changepassword')
    };
    $scope.siteView = function(){
      console.log("siteView")
      $location.path('/entersite')
    }; 
    $scope.projectView = function(){
      $location.path('/enterproject')
    }; 
   $scope.repairView = function(){
      $location.path('/enterrepair')
    }; 
    $scope.incidentView = function(){
      $location.path('/enterincident')
    }; 
    $scope.verificationView = function(){
      $location.path('/enterverification')
    }; 
    $scope.mapView = function(){
      console.log("mapView")
      $location.path('/map')
    }; 
    $scope.queryView = function(){
      // console.log("mapView")
      $location.path('/query')
    }; 

    });

    angular.module('clientApp')
    .controller('forgotpasswordCtrl',
    function ($scope, $location,$http) {
     $scope.resetpassword = function () {

    $("#validatemessage").html("");

    var forgotpasswordemail=$("#forgotpasswordemail").val();
    var reg =/^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/;
    var text = "";
    var charset = "abcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < 8; i++ )
      text += charset.charAt(Math.floor(Math.random() * charset.length));
     var adddetails={};

    adddetails.forgotpasswordemail=forgotpasswordemail;
    adddetails.newpassword=text;

      if(forgotpasswordemail == "" )
       {

        $("#validatemessage").html("Enter the required fields");
       }
     else if(!reg.test(forgotpasswordemail))
      {
        $("#validatemessage").html("Enter valid email");
      }
     else
      {

        $http.post("/forgotpassword",adddetails)
       .success(function(response) 
      {
       
      if(response.status=="0")
       {                                        
          $("#validatemessage").html("Please enter registered email id"); 
       }
      else
       {
           alert("New password sent to your mail check your inbox"); 
            $location.path('/') 
       }  

      }).error(function(response)
        {
            alert(response);
         });

     }
   };

  });

angular.module('clientApp')
    .controller('changepasswordCtrl',
    function ($scope, $location,$http) {
     $scope.site_id;
     $scope.verification_id;
     $scope.changeuserpassword = function () {
 
       $("#validatemessage").html("");

       var useremail=getCookie("email");
       var changepassword=$("#changepassword").val();
       var confirmchangepassword=$("#confirmchangepassword").val();

       var adddetails={};
       adddetails.useremail=useremail;
       adddetails.userpassword=changepassword;

       if(changepassword == "" || confirmchangepassword == "")
        {

            $("#validatemessage").html("Enter the required fields");
        }
        else if(changepassword != confirmchangepassword)
        {
            $("#validatemessage").html("password mismatch");
        }
        else
        {

            $http.post("/changepassword",adddetails)
     .success(function(response) 
      {

          alert("Password successfully changed"); 
          document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
          document.cookie = "email=; expires=Thu, 01 Jan 1970 00:00:00 UTC";  
           $location.path('/')   
              
       }).error(function(response)
        {
            alert(response);
         });

        }  
     
    };

});

angular.module('clientApp')
    .controller('enterdataCtrl',
    function ($scope, $location, $http, $routeParams) {
    console.log("route params " + $routeParams.id);

    $scope.routeID = $routeParams.id;
    $scope.gohome = function (){
      $location.path('/dashboard')

    };
    $scope.entersite = function () {
        
        $("#validatemessage").html("");
        var name=$("#name").val();
        var water_source=$("#water_source").val();
        var power_source=$scope.Power_source;
        var latitude=$("#latitude").val();
        var longitude=$("#longitude").val(); 
        var state=$("#state").val(); 
        var city=$("#city").val();
        var country= $("#country").val();
        var description=$("#description").val();
        var owner=$("#owner").val();
        var date_completed = $("#date_completed").val();
        console.log("power_source is " + power_source);
        console.log("water_source is " + water_source);
        console.log(date_completed)

    if(name == "" || state == "" || city == "" || description == "")
    {

      $("#validatemessage").html("Enter the required fields");
    }
    else
    {

       var adddetails={};
           adddetails.name = name;
           adddetails.water_source = water_source;
           adddetails.power_source = power_source;
           adddetails.latitude = latitude;
           adddetails.longitude = longitude;
           adddetails.state = state;
           adddetails.city = city;
           adddetails.country = country;
           adddetails.description = description;
           adddetails.owner = owner;
           adddetails.date_completed = date_completed;

    
    $http.post("/entersite",adddetails)
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
    $scope.enterproject = function () {
        
        
        $("#validatemessage").html("");
        var purpose=$("#purpose").val();
        var date_completed=$("#date_completed").val();
        var intended_type_of_craft=$("#intended_type_of_craft").val(); 
        var max_difficulty=$("#max_difficulty").val(); 
        var min_difficulty=$("#min_difficulty").val();
        var engineer= $("#engineer").val();
        var description= $("#description").val();
        var construction_cost=$("#construction_cost").val(); 
        var design_cost=$("#design_cost").val();
        var land_easement_cost=$("#land_easement_cost").val();
        var total_cost=$("#total_cost").val();
        if ($routeParams.id) {
          var site_id=$routeParams.id;
        }else{
          var site_id=$("#site_id").val();

        }
        var verification_id=$("#verification_id").val();

    if(purpose == "" || description == "" )
    {

      $("#validatemessage").html("Enter the required fields");
    }
    else
    {

      var adddetails={};
           adddetails.purpose = purpose;
           adddetails.date_completed = date_completed;
           adddetails.intended_type_of_craft = intended_type_of_craft;
           adddetails.max_difficulty = max_difficulty;
           adddetails.min_difficulty = min_difficulty;
           adddetails.engineer = engineer;
           adddetails.description = description;
           adddetails.design_cost = design_cost;
           adddetails.construction_cost = construction_cost;
           adddetails.land_easement_cost = land_easement_cost;
           adddetails.total_cost = total_cost;
           adddetails.site_id = site_id;
           adddetails.verification_id = verification_id;

    
    $http.post("/enterproject",adddetails)
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
    $scope.enterrepair= function () {
        
        $("#validatemessage").html("");
        var purpose=$("#purpose").val();
        var description=$("#description").val();
        var date=$("#date").val(); 
        var effort=$scope.Effort; 
        var cost=$("#cost").val();
        if ($routeParams.id) {
          var site_id=$routeParams.id;
        }else{
          var site_id=$("#site_id").val();

        }
        var verification_id=$("#verification_id").val();
        console.log("Effort is " + effort);

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

        var type = $("#type").val();
        var flow = $scope.Flow;
        var helmet_pfd = $scope.Helmet_pfd;
        var weather = $scope.Weather; 
        var witnesses=$scope.Witnesses; 
        var difficulty= $scope.Difficulty;
        var date=$("#date").val(); 
        if ($routeParams.id) {
          var site_id=$routeParams.id;
        }else{
          var site_id=$("#site_id").val();

        }
        var verification_id=$("#verification_id").val();
        console.log("helmet is " + helmet_pfd);        
        console.log("weather is " + weather);
        console.log("witnesses is " + witnesses);
        console.log("weather is " + weather);
        console.log("flow is " + flow);

    if(flow == "" || witnesses == "" || site_id == "")
    {

      $("#validatemessage").html("Enter the required fields");
    }
    else
    {

       var adddetails={};
           adddetails.type = type;
           adddetails.flow = flow;
           adddetails.helmet_pfd = helmet_pfd;
           adddetails.weather = weather;
           adddetails.witnesses = witnesses;
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
    $scope.enterverification = function () {
        
        $("#validatemessage").html("");
        var name_of_source=$("#name_of_source").val();
        var website=$("#website").val();
        var date_of_source=$("#date_of_source").val(); 
        var authority=$("#authority").val(); 
        console.log("name_of_source is " + name_of_source);

    if(name_of_source == "" || authority == "" )
    {

      $("#validatemessage").html("Enter the required fields");
    }
    else
    {

       var adddetails={};
           adddetails.name_of_source = name_of_source;
           adddetails.website = website;
           adddetails.date_of_source = date_of_source;
           adddetails.authority = authority;


    $http.post("/enterverification", adddetails)
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
});

angular.module('clientApp')
    .controller('mapCtrl',
    function ($scope, $location,$http, $window, $routeParams) {

      $scope.lat = $routeParams.lat;
      $scope.lon = $routeParams.lon;
      $scope.location =[$routeParams.lat,$routeParams.lon];
          $scope.gohome = function (){
      $location.path('/dashboard')

    };
      $scope.init = function(){
       console.log("init")
        console.log("Load script")
          var script = document.createElement('script');
          script.type = 'text/javascript';
          script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyCm_m-WpYgXhwSg-uGzCgP076IMdGWSnZo' +
              'callback=initialize';
          document.body.appendChild(script);
        // $window.onload = loadScript;
      }

     

});

angular.module('clientApp')
    .controller('queryCtrl',
    function ($scope, $location,$http) {
      $scope.items = [];
      $scope.siteTable = false;
      $scope.projectTable = false;
      $scope.repairTable = false;
      $scope.incidentTable = false;
      $scope.verificationTable = false;

      function resetTables(){

       $scope.siteTable = false;
        $scope.projectTable = false;
        $scope.repairTable = false;
        $scope.incidentTable = false;
        $scope.verificationTable = false;
      }
      $scope.gohome = function (){
      $location.path('/dashboard')

    };
      
      $scope.projectView = function(id){
          $location.path('/enterproject/'+ encodeURIComponent(id))
        }; 
      $scope.repairView = function(id){
          $location.path('/enterrepair/'+  encodeURIComponent(id))
        }; 
      $scope.incidentView = function(id){
          $location.path('/enterincident/'+encodeURIComponent(id))
        }; 
      $scope.mapView = function(lon,lat){
          console.log("mapView")
          $location.path('/map/'+encodeURIComponent(lon)+'/'+encodeURIComponent(lat))
      }; 
      $scope.getProjects = function(){

        $http.get("/projects").success(function(response){
          $scope.items = response.projects;
          console.log(response.projects)
        })
        resetTables();
        $scope.projectTable = true;
      }
      $scope.printItems = function(){

        console.log($scope.items)
      }
      $scope.getSites = function(){

        $http.get("/sites").success(function(response){
          $scope.items = response.sites;

          console.log("succesful response is "+JSON.stringify(response.sites[0]))
        }).error(function(response){
          console.log(response.sites[0])
        })
        resetTables();
        $scope.siteTable = true;

      }
      $scope.getSite = function(id){
          var site = id;
          console.log("site id is "+ id)
          $http.get("/site/" + encodeURIComponent(id)).success(function(response){
            $scope.items= response;
            console.log("response is" +response)
          })
          resetTables();
          $scope.siteTable = true;
        } 

      $scope.getRepairs = function(){

          $http.get("/repairs").success(function(response){
            $scope.items = response.repairs;
            console.log(response.repairs[0])
        })
          resetTables();
          $scope.repairTable = true;
      }

        $scope.getIncidents = function(){

          $http.get("/incidents").success(function(response){
            $scope.items = response.incidents;
            console.log(response.incidents[0])
          })
          resetTables();
          $scope.incidentTable = true;
        }
        $scope.getAllVerifications = function(){

          $http.get("/verifications").success(function(response){
            $scope.items = response.verifications;
            console.log("response is" + JSON.stringify(response.verifications))
          })
          resetTables();
          $scope.verificationTable = true;
        }  
        $scope.getVerification = function(id){
          var verification = id;

          $http.get("/verification/" + encodeURIComponent(id)).success(function(response){
            $scope.items= response;
            console.log("response is" +response)
          })
          resetTables();
          $scope.verificationTable = true;
        }     

});
// function loadScript (){
//          console.log("Load script")
//           var script = document.createElement('script');
//           script.type = 'text/javascript';
//           script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyCm_m-WpYgXhwSg-uGzCgP076IMdGWSnZo' +
//               'callback=initialize';
//           document.body.appendChild(script);
// }
// function initialize() {
//   console.log("initialize")
//   var mapOptions = {
//     zoom: 8,
//     center: new google.maps.LatLng(-34.397, 150.644)
//   };

//   var map = new google.maps.Map(document.getElementById('map-canvas'),
//       mapOptions);
// }
//set cookie for username
function setCookie(cname,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname+"="+cvalue+"; "+expires;
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) != -1) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}