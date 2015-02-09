  var nodemailer = require("nodemailer");

    // Create a SMTP transport object
  var transport = nodemailer.createTransport("SMTP", {
        service: 'Gmail',
        auth: {
            user: "esseasy@gmail.com",
            pass: "esssrs!234"
        }
    });

  var Sequelize = require('sequelize')
    , sequelize = new Sequelize('Whitewater', 'root', 'root', {
       define: {
                freezeTableName: true
               },
        dialect: "mysql", // or 'sqlite', 'postgres', 'mariadb'
        port:    3306, // or 5432 (for postgres)
      })
    , User = sequelize.define('profile', {
      name: Sequelize.STRING,
      username: Sequelize.STRING,
      email:Sequelize.STRING,
      password:Sequelize.STRING
      },
      {                
        timestamps: false
      })

    , Site = sequelize.define('Sites', {
      Site_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
      },
      Name: Sequelize.STRING(45),
      Water_source: Sequelize.STRING(45),
      Power_source: Sequelize.STRING(45),
      Latitude: Sequelize.DECIMAL(18,14),
      Longitude: Sequelize.DECIMAL(18,14),
      State: Sequelize.STRING(45),
      City: Sequelize.STRING(45),
      Country: Sequelize.STRING(45),
      Description: Sequelize.STRING(45),
      Owner: Sequelize.STRING(45),
      Date_completed: Sequelize.STRING(45)

      },
      {                
        timestamps: false,
      })

    , Project = sequelize.define('Projects', {
      Project_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
      },
      Purpose: Sequelize.STRING(45),
      Date_completed: Sequelize.DATE,
      Intended_type_of_craft: Sequelize.STRING(45),
      Max_difficulty: Sequelize.STRING(45),
      Min_difficulty: Sequelize.STRING(45),
      Engineer: Sequelize.STRING(45),
      Description: Sequelize.STRING(45),
      Design_cost: Sequelize.FLOAT,
      Construction_cost: Sequelize.FLOAT,
      Land_Easement_cost: Sequelize.FLOAT,
      Total_cost: Sequelize.FLOAT,
      Site_id: Sequelize.INTEGER,
      Verification_id: Sequelize.INTEGER
      },
      {                
        timestamps: false
      })
    , Repair = sequelize.define('Repairs', {
      Repair_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
      },
      Purpose: Sequelize.STRING(45),
      Description: Sequelize.STRING(45),
      Date: Sequelize.DATE,
      Effort: Sequelize.STRING(45),
      Cost: Sequelize.STRING(45),
      Site_id: Sequelize.INTEGER,
      Verification_id: Sequelize.INTEGER
      },
      {                
        timestamps: false
      })
    , Incident = sequelize.define('Incidents', {
      Incident_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
      },
      Type:Sequelize.STRING,
      Date: Sequelize.DATE,
      Flow: Sequelize.STRING,
      Helmet_pfd: Sequelize.STRING(45),
      Weather: Sequelize.STRING(45),
      Witnesses: Sequelize.STRING(45),
      Difficulty: Sequelize.STRING(45),
      Site_id: Sequelize.INTEGER,
      Verification_id: Sequelize.INTEGER
      },
      {                
        timestamps: false
      })
    , Verification = sequelize.define('Verifications', {
      Verification_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
      },
      Name_of_source: Sequelize.STRING(45),
      Website: Sequelize.STRING(45),
      Date_of_source: Sequelize.DATE,
      Authority: Sequelize.STRING(45)
      })

      sequelize
      .sync({ force: false })
      .complete(function(err) {
       if (!!err) {
         console.log('An error occurred while creating the table:', err)
       }
      }) 

      // var sequelize = new Sequelize('Whitewater', 'root', 'root', {
  
      //     dialect: "mysql", // or 'sqlite', 'postgres', 'mariadb'
      //     port:    3306, // or 5432 (for postgres)
      //   })

      // , Site= sequelize.define('sites', {
      //   name: Sequelize.STRING,
      //   username: Sequelize.STRING,
      //   email:Sequelize.STRING,
      //   password:Sequelize.STRING
      //               })
      //   sequelize
      //   .sync({ force: false })
      //   .complete(function(err) {
      //    if (!!err) {
      //      console.log('An error occurred while creating the table:', err)
      //    }
      //   }) 

  //submit site
  exports.submitSite = function(req,res){
    var  Name = req.body.name;
    var  Water_source = req.body.water_source;
    var  Power_source = req.body.power_source;
    var  Latitude = req.body.latitude;
    var  Longitude = req.body.longitude;
    var  State = req.body.state;
    var  City = req.body.city;
    var  Country = req.body.country;
    var  Description = req.body.description;
    var  Owner = req.body.owner;
    var  Date_completed = req.body.date_completed;

    // console.log(Name)
    // console.log(Latitude)
    // console.log(Longitude)
    // console.log(State)
    // console.log(City)
    // console.log(Country)
    // console.log(Description)
    // console.log(Owner)

    Site.create({
      Name: Name,
      Water_source: Water_source,
      Power_source: Power_source,
      Latitude: Latitude,
      Longitude: Longitude,
      State: State,
      City: City,
      Country: Country,
      Description: Description,
      Owner: Owner,
      Date_completed: Date_completed


    }).success(function(){
        res.send({status:"1"});
    }).error(function(err) { 
      
        res.send({status:"0"}); 
    });
  }
  exports.submitProject = function(req,res){
    var  Purpose = req.body.purpose;
    var  Date_completed = req.body.date_completed;
    var  Intended_type_of_craft = req.body.intended_type_of_craft;
    var  Max_difficulty = req.body.max_difficulty;
    var  Min_difficulty = req.body.min_difficulty;
    var  Engineer = req.body.engineer;
    var  Description = req.body.description;
    var  Design_cost = req.body.design_cost;
    var  Construction_cost = req.body.construction_cost;
    var  Land_Easement_cost = req.body.land_easement_cost;
    var  Total_cost = req.body.total_cost;
    var  Site_id = req.body.site_id;
    var  Verification_id = req.body.verification_id;

    Project.create({
      Purpose: Purpose,
      Date_completed: Date_completed,
      Intended_type_of_craft: Intended_type_of_craft,
      Max_difficulty: Max_difficulty,
      Min_difficulty: Min_difficulty,
      Engineer: Engineer,
      Description: Description,
      Design_cost: Design_cost,
      Construction_cost: Construction_cost,
      Land_Easement_cost: Land_Easement_cost,
      Total_cost: Total_cost,
      Site_id: Site_id,
      Verification_id: Verification_id

    }).success(function(){
        res.send({status:"1"});
    }).error(function(err) { 
      
        res.send({status:"0"}); 
    });
  }
  exports.submitRepair = function(req,res){
    var  Purpose = req.body.purpose;
    var  Description = req.body.description;
    var  Date = req.body.date;
    var  Effort = req.body.effort;
    var  Cost = req.body.cost;
    var  Site_id = req.body.site_id;
    var  Verification_id = req.body.verification_id;

    Repair.create({
      Purpose: Purpose,
      Description: Description,
      Date: Date,
      Effort: Effort,
      Cost: Cost,
      Site_id: Site_id,
      Verification_id: Verification_id

    }).success(function(){
        res.send({status:"1"});
    }).error(function(err) { 
      
        res.send({status:"0"}); 
    });
  }
    exports.submitIncident = function(req,res){
    var  Type = req.body.type;
    var  Flow = req.body.flow;
    var  Helmet_pfd = req.body.helmet_pfd;
    var  Weather = req.body.weather;
    var  Witnesses = req.body.witnesses;
    var  Difficulty = req.body.difficulty;
    var  Date = req.body.date;
    var  Site_id = req.body.site_id;
    var  Verification_id = req.body.verification_id;

    Incident.create({
      Type: Type,
      Flow: Flow,
      Helmet_pfd: Helmet_pfd,
      Weather: Weather,
      Witnesses: Witnesses,
      Difficulty: Difficulty,
      Date: Date,
      Site_id: Site_id,
      Verification_id: Verification_id

    }).success(function(){
        res.send({status:"1"});
    }).error(function(err) { 
      
        res.send({status:"0"}); 
    });
  }
  exports.submitVerification = function(req,res){
    var  Name_of_source = req.body.name_of_source;
    var  Website = req.body.website;
    var  Date_of_source = req.body.date_of_source;
    var  Authority = req.body.authority;


    Verification.create({
      Name_of_source: Name_of_source,
      Website: Website,
      Date_of_source: Date_of_source,
      Authority: Authority


    }).success(function(){
        res.send({status:"1"});
    }).error(function(err) { 
      
        res.send({status:"0"}); 
    });
  }

  exports.getAllProjects = function(req,res){

    Project.findAll()
      .success(function(results) {
        console.log("results are" +results)
        res.send({projects: results})

      })

  }
  exports.getAllSites = function(req,res){
    console.log("getAllSites");
    Site.findAll()
      .success(function(results) {
        console.log("success results are" +JSON.stringify(results))
        res.send({sites: results})

      }).error(function(error){
        console.log('error');
      })

  }
  exports.getSite = function(req,res){
    var id = req.params.id;
   // console.log("req.params.id id is "+id);
   // console.log("req.params "+ req.param);

    Site.find({where: {Site_id: id}})
      .success(function(result) {

        res.send({site: result})

      })

  }
  exports.getAllRepairs = function(req,res){

    Repair.findAll()
      .success(function(results) {

        res.send({repairs: results})

      })

  }
  exports.getAllIncidents = function(req,res){

    Incident.findAll()
      .success(function(results) {

        res.send({incidents: results})

      })

  }
  exports.getVerification = function(req,res){
    var id = req.params.id;
   // console.log("req.params.id id is "+id);
   // console.log("req.params "+ req.param);

    Verification.find({where: {Verification_id: id}})
      .success(function(result) {

        res.send({verification: result})

      })

  }
    exports.getAllVerifications = function(req,res){
    Verification.findAll()
      .success(function(result) {

        res.send({verifications: result})

      })

  }
  exports.getSites = function(req,res){
    var foundSites = [];
    for (var i = req.length - 1; i >= 0; i--) {

      Sites.find({where: {Site_id: req.id[i]}})
        .success(function(result) {
          foundSites.push(result)
          
        })
      };
      res.send({sites: foundSites})
  }
  //user signup
  exports.signup = function(req, res) {

    var name=req.body.name;
    var username=req.body.username;
    var email=req.body.email;
    var password=req.body.password;
     
    User.findAll({where:{email:email}}).success(function(results) {

         if(results.length > 0)
         {            
          res.send({status:"0"});
         }
         else
         {
          User
           .create({
                  name: name,
                  username: username,
                  email:email,
                  password:password
                 })
            res.send({status:"1"});
           }           
         })
    }

    //user signin
    exports.signin = function(req, res) {

      var email=req.body.email;
      var password=req.body.password;

         User.findAll({where:{email:email,password:password}}).success(function(results) {

          res.send({result:results.length,sessionname:results});
       })

    }
    
    //Forgot password
    exports.forgotpassword = function(req, res) {

      var forgotpasswordemail=req.body.forgotpasswordemail;
      var newpassword=req.body.newpassword;

       User.findAll({where:{email:forgotpasswordemail}}).success(function(results) {

         if(results.length == 0)
         {            
          res.send({status:"0"});
         }
         else
         {

        User.update(

         { password: newpassword },
         { where: { email : forgotpasswordemail } }    

       ).success(function() {

          var mailOptions = {
            from:"nodsem<ess@srsconsultinginc.com>",
            to:forgotpasswordemail, 
            subject: "new password", 
            html: "<b>Your password is reseted your new password is "+newpassword+"</b>" // html body    
                 }  
  
         transport.sendMail(mailOptions, function(error){
          if(error){
             console.log('Error occured');
             console.log(error.message);
            return;
          }
           console.log('Message sent successfully!');

          });
     
         res.send({status:"1"}); 
     
       }).error(function(err) { 
       console.log("Project update failed !");       
        });
          
       }                   
    })     
  }


  exports.changepassword = function(req, res) {

      var email=req.body.useremail;
      var password=req.body.userpassword;

      
       User.update(

         { password: password },
         { where: { email : email } }    

       ).success(function() {

         res.send(200); 
     
       }).error(function(err) { 
      
         res.send(400); 
        });

  }