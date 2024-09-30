function add(x, y)						
{
	return x+y;
} 


function isPrime(num)
{
	let i, found=false;
	num=+num;
	for(i=2; i<=num/2; i++)
	{
		if(num%i===0) {
			found=true;
			break;
		}
	}
	return (found===true) ? false : true ;
	
}