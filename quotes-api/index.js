const app=require('express')();
const bodyParser=require('body-parser')

const PORT=8080 
app.listen(
  PORT,
  ()=>console.log(`server is listening on the port ${PORT}`)

)

const nextbutton=document.getElementById('next-button')
const card=document.querySelector('.card .container')
nextbutton.addEventListener('click',async ()=>{
  const req=await fetch('https://dummyjson.com/quotes')
  const res=await req.json();
  const quote=req.quote;
  card.innerHTML='<h4><b>${quote}</b></h4>';
});
// fetch('https://dummyjson.com/quotes')
// .then(res => res.json())
// .then(console.log);
app.get('/here',(req,res)=>{



  res.send("here you are")

});
