let btn=document.querySelector(".content");
let screenContent=document.querySelector(".screen");

btn.addEventListener("click" , performOperation)

function performOperation(e){
    if(e.target.classList.contains("operations")){
        switch(e.target.innerText){
            case 'AC':
                screenContent.innerText=""; 
                break;
            case '=': 
                let result=eval(screenContent.innerText);
                if( result.toString().indexOf('.')!=-1){
                    result=result.toString().slice(0,result.toString().indexOf('.')+4);
                }
                screenContent.innerText=result;
                break;
            case '←':
                let result_2=eval(screenContent.innerText);
                if( result_2.toString().length!=0){

                    result_2=result_2.toString().slice(0,result_2.toString().length-1);
                }
                screenContent.innerText=result_2;
                break;
            default:
                screenContent.innerText+=e.target.innerText.toString();                                 
        }
    }
}