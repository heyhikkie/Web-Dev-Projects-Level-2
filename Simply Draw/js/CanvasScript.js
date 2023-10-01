var painting=false;
var ctx;

// object
var coord={x:0,y:0};


window.onbeforeunload=function(){
	return 'Changes you made may not be saved.';
};

window.onload=function(){

	// clear button
	document.getElementById('btnClear').addEventListener('click',function(){
	
		if(index==-1){
			return;
		}
		else{
			var c=confirm("Resetting canvas! 🧐🧐🧐");
			if(c==true){
				ctx.fillStyle='white';
				ctx.clearRect(0, 0, canvas.width, canvas.height);
				ctx.fillRect(0,0,canvas.width,canvas.height);
				restore_array=[];
				index=-1;
			}
			else{
				return false;
			}
		}		
	});

	function clearcanvas() {
		if(index<=-1){
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			return;
		}
		else{
			ctx.fillStyle='white';
			ctx.clearRect(0, 0, canvas.width, canvas.height);
				ctx.fillRect(0,0,canvas.width,canvas.height);
				restore_array=[];
				index=-1;
		}		
	}

	// color
	document.getElementById('colorChange').addEventListener('change',function(){
		ctx.strokeStyle=document.getElementById('colorChange').value;
	});

	// pen size
	document.getElementById('penSize').addEventListener('change',function(){
    	ctx.lineWidth=document.getElementById('penSize').value;
    });


	// pencil
	document.getElementById('btnPencil').addEventListener('change',function(){
    	ctx.lineWidth=document.getElementById('penSize').value;
    	ctx.strokeStyle=document.getElementById('colorChange').value;
    });


	// fill
	document.getElementById('btnBucket').addEventListener('click',function(){
		ctx.fillStyle=document.getElementById('colorChange').value;
		ctx.fillRect(0,0,canvas.width,canvas.height);
	});


	// eraser
	document.getElementById('btnEraser').addEventListener('click',function() {
		ctx.lineWidth=document.getElementById('penSize').value;
		// ctx.lineCap='butt';
		// ctx.lineCap='square';
		ctx.strokeStyle='white';
	});

	// undo
	document.getElementById('btnUndo').addEventListener('click',function(){
		undo_last();
	});

	// To create canvas
	const canvas=document.getElementById("myCanvas");
    ctx=canvas.getContext("2d");  

    // canvas height and width          
	ctx.canvas.width=window.innerWidth - 230;
	ctx.canvas.height=window.innerHeight - 70;


	// eventlisteners

	canvas.addEventListener('touchstart',startPos);
	canvas.addEventListener('touchmove',draw);
	canvas.addEventListener('touchend',endPos);

	canvas.addEventListener('mousedown',startPos);
	canvas.addEventListener('mouseup',endPos);
	canvas.addEventListener('mousemove',draw);
	canvas.addEventListener('mouseout',endPos);

	// styling line
	ctx.strokeStyle="black";
	ctx.lineJoin="round";
	ctx.lineWidth=1;
	ctx.lineCap='round';

	let restore_array=[];
	let index=-1;

	// coordinates of cursor
	function getPos(event){
		
		coord.x=event.pageX- canvas.offsetLeft;
		coord.y=event.pageY- canvas.offsetTop;
	}

	// called when mousedown
	function startPos(event) {
		painting=true;
		getPos(event);

		draw(event);
	}

	// called when mouseup
	function endPos(event){
		if(painting){

			ctx.closePath();
			painting=false;
		}
		if (event.type!='mouseout') {
			restore_array.push(ctx.getImageData(0,0,canvas.width,canvas.height));
			index+=1;
			console.log(restore_array);
		}		
	}

	// called when mousemoves
	function draw(event){

		//console.log(event.clientX+", "+event.clientY);

		//if not painting then return
		if (!painting) return;

		ctx.beginPath();
		ctx.moveTo(coord.x,coord.y);
		getPos(event);
		ctx.lineTo(coord.x,coord.y);
		ctx.stroke();
		
	}

	function undo_last(){
		if(index<=0){
			clearcanvas();
		}
		else{
			index--;
			restore_array.pop();
			ctx.putImageData(restore_array[index],0,0);
		}
	}
}
