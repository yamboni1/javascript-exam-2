const getCommonItems = (array1, array2) => {
  // implement code here
  return array1.filter(item => array2.includes(item));
};

export default getCommonItems;
