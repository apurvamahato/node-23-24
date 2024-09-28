const Student=require('../models/Student');
async function addStudent(req,res){
    try{
        //console.log(req.body);
        let student=new Student(req.body)
        await student.save();
      //  res.end("<h1> Data has been inserted is sucessfully.....")
      let students=await Student.find({});
      // res.send(students)
      res.render('studentlist',{
          students:students //...............ish me data rakha hai................
      })
    }catch(err){
        console.log("error",err)
    }
}

async function getStudents(req,res){
    try{
        let students=await Student.find({});
        // res.send(students)
        res.render('studentlist',{
            students:students //...............ish me data rakha hai................
        })
    }catch(err){
        console.log("error:- controler getstudents",err)
    }
}
async function getPageForEditStudent(req,res){
    try{//.......................yah id new page open krega .......................
        let id=req.params.id;
        let student=await Student.findOne({_id: id});
        //console.log(student);
        // res.send(student);
        res.render('studentforedit',{
            student: student
        })
    }catch(err){
        console.log(err)
    }
}
async function editStudent(req,res) {
    try {
        let id = req.params.id;
       // console.log(req.body,'req.body')
        let student = await Student.findOne({_id: id})
       // console.log(student);
        student.rollNo = req.body.rollNo;
        student.firstName = req.body.firstName;
      //  student.lastName = req.body.lastName;
        student.fatherName = req.body.fatherName;
        student.adharCard = req.body.adharCard;
        student.mobileNo = req.body.mobileNo;
        await student.save();
        let students=await Student.find({});
        // res.send(students)
        res.render('studentlist',{
            students:students //...............ish me data rakha hai................
        })
        //res.send("<h1> Student has been updated sucessfully....<h1>")
    }
    catch(err){
        console.log(err.message,'msg')
    }
}    
async function deleteStudent(req,res) {
    try{
        let id = req.params.id;
        console.log(id,'id')
        await Student.deleteOne({_id: id});
// res.end("<h1> Student has been deleted sucessfully....</h1>")
let students=await Student.find({});
// res.send(students)
res.render('studentlist',{
    students:students //...............ish me data rakha hai................
})
    }catch{

    }
    
}
module.exports={
    addStudent,
    getStudents,
    getPageForEditStudent,
    editStudent,
    deleteStudent
}