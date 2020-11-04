const express = require('express');
const app= express();
const mysql = require('mysql2');
const bodyParser = require('body-parser')
const cors = require('cors')

const  db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'rmp_new'
})

app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))



app.get('/api/get', function(req, res){

    const sqlSelect = "Select * from  application;"
    db.query(sqlSelect, function(err, result){

        if(err){
            console.log(err);
        }
        else{
            console.log(result);
            res.send(result);
           // res.send(JSON.stringify(result));
        }

        
    })

})

// app.post('/api/insert', function(req, res){


//     const movieName = req.body.movieName;
//     const movieReview = req.body.movieReview;

//     const sqlInsert = "Insert INTO Movie_Reviews (movieName, movieReview) VALUES (? , ?);"
//     db.query(sqlInsert, [movieName, movieReview], function(err, result){

//         if(err){
//             console.log(err);
//         }
//         else{
//             console.log(result);
//             res.send(result);
//         }

        
//     })
// })

app.post('/api/insert', function(req, res){


    const appName = req.body.appName;
    const appDomain = req.body.appDomain;
    const appSkillCat = req.body.appSkillCat;
    const appLifeCycle = req.body.appLifeCycle;
    console.log('In server Now');
    console.log(appName);
    console.log(appDomain);
    console.log(appSkillCat);
    console.log(appLifeCycle);

  //  const sqlInsert = "Insert INTO Movie_Reviews (movieName, movieReview) VALUES (? , ?);"
  const sqlInsert = "Insert INTO application (application_name, application_domain, application_skill_category, application_status) VALUES (? , ? , ? , ?);"
   
 // const sqlInsert = "INSERT INTO application (application_name, application_domain, application_skill_category, application_status) VALUES ('ABC', 'Automation Tools', 'Automation Tools', 'Inactive');"
  
      
    db.query(sqlInsert, [appName, appDomain, appSkillCat, appLifeCycle], function(err, result){
       

        if(err){
            console.log(err);
        }
        else{
            console.log(result);
            res.send(result);
        }

        
    })
})

app.delete('/api/delete/:movieName', function(req, res){


    const movieName = req.params.movieName;
    

    const sqlDelete = "Delete from  Movie_Reviews where movieName = ? ;"
    db.query(sqlDelete, movieName, function(err, result){

        if(err){
            console.log(err);
        }
        else{
            console.log(result);
            res.send(result);
        }

        
    })
})

app.put('/api/update', function(req, res){

    const appName = req.body.appName;
    const appDomain = req.body.appDomain;
    const appSkillCat = req.body.appSkillCat;
    const appLifeCycle = req.body.appLifeCycle;

    console.log('In server');
    console.log(appName);
    console.log(appDomain);
    console.log(appSkillCat);
    console.log(appLifeCycle);

   // const sqlUpdate = "Update set Movie_Reviews movieReview = ? where movieName = ?;"
    const sqlUpdate = "Update application set application_status = ? where application_name = ?;"
    // db.query(sqlUpdate, [appLifeCycle, appName], function(err, result){

    //     if(err){
    //         console.log(err);
    //     }
    //     else{
    //         console.log(result);
    //         res.send(result);
    //     }

        
    // })
})

app.listen(5000, function(){
    console.log('Server is running on port 5000');
});