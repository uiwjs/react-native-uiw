export default function createArray(number: any){
  if(number && typeof(number) == "number"){
      var array = [];
      for(var i = 0;i < number;i++){
          array.push(0);
      }
      return array;
  } else{
      return [];
  }
}