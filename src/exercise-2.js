const getTheExactNumber = (numbers) => {
  // implement code here
  const sorted = numbers.sort(function(a,b){
    return(b-a);
  });
  return sorted.find(element => element % 3=== 0);
};

export default getTheExactNumber;