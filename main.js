let n = Number(prompt("value of n? to find nth smallest number in an array"));

let arr = [12,34,45,-4,32,54,09,-98,67];

for(i=0;i<arr.length; i++){
   for(j=i+1; j<arr.length; j++){
       if(arr[i] > arr[j]){
	        temp = arr[j];
			arr[j] = arr[i];
			arr[i] = temp;
		 }
	 }
}
let small = arr[n-1];
console.log(`${n}-th smallest element of ${arr} is ${small}`);