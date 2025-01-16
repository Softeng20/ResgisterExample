var StudArr=[];
var StudID=0;

//Insert
document.getElementById("studForm").addEventListener("submit",function(e){
    e.preventDefault();
    //Get Data
    var Name=document.getElementById("Name").value;
    var Stage=document.getElementById("Stage").value;
    var SMS=document.getElementById("SMS").value;
  //Object
  var Stud={
id:++StudID,
n:Name,
st:Stage,
sm:SMS
};

//Array
StudArr.push(Stud);
displayStud();
this.reset();
})

//Display
function displayStud()
{
    var StudTabe=document.getElementById("StudTabe");
    StudTabe.innerHTML="";
    //Read from Object
    StudArr.forEach((Stud,index,array)=>{
var row=`
<tr>
<td>${index+1}</td>
<td>${Stud.n}</td>
<td>${Stud.st}</td>
<td>${Stud.sm}</td>
<td><button type="button" class="btn btn-warning" onclick="UpdateStud(${Stud.id})">Edit</button></td>
<td><button type="button" class="btn btn-danger" onclick="delStud(${Stud.id})">Delete</button></td>

</tr>
`
StudTabe.innerHTML+=row;

    })

}

//Delete
function delStud(id){
   StudArr= StudArr.filter(Stud=>Stud.id!=id);
    displayStud();
}
//Update
function UpdateStud(id){
const Stud=StudArr.find(Stud=>Stud.id==id);
 document.getElementById("Name").value=Stud.n;
 document.getElementById("Stage").value=Stud.st;
 document.getElementById("SMS").value==Stud.sm;

 document.querySelector("button[type='submit").textContent="Update";

 document.getElementById("studForm").addEventListener("submit",function(e){
    e.preventDefault();
    //Get Data
    Stud.n=document.getElementById("Name").value;
    Stud.st=document.getElementById("Stage").value;
    Stud.sm=document.getElementById("SMS").value;
    displayStud();
    this.reset();
    document.querySelector("button[type='submit").textContent="Insert";

 })


}