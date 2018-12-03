function divisaoQuociente(x, y){
	var quociente = 0;
	

	if (x==0){
		return quociente;
	}
	else if (y==0){
		console.log ("Error");
	}
	else if (x<y){
		console.log ("Tente um dividendo maior que o divisor")
	}
	else if (x>=y){
		while (x >= y){
			x = x - y;
			quociente++;
		}
		return quociente;
	}
}



function divisaoResto(x, y){
	var resto = 0;
	

	if (x==0){
		return divisaoQuociente(x, y);
	}
	else if (y==0){
		console.log ("Error");
	}
	else if (x<y){
		console.log ("Tente um dividendo maior que o divisor")
	}
	else if (x>=y){
		resto = x - divisaoQuociente(x, y)*y;
		return resto;
	}
		
}