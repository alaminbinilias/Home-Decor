 export const getDataLS = () => {
  const GetLocalStorage = localStorage.getItem("WishList");
  if (GetLocalStorage) {
    const ParseData = JSON.parse(GetLocalStorage);
    return ParseData;
  } else {
    return [];
  }
};

const setData = (data) => {
  const Data = getDataLS();
  //console.log(data);
  //console.log(data.id);
  let Isdata;
  {
    Isdata=Data.some(item=>item.id===data.id);
  }
  //console.log(Isdata);
  if (Isdata) {
    alert("This item is Exists in LocalStorage");
  } else {
    Data.push(data);
    localStorage.setItem("WishList", JSON.stringify(Data));
  }
};

 export const updateData=(id)=>{
  const getWishData=getDataLS();

  const filterData=getWishData.filter(item=>item.id!==id);

  //console.log(filterData)
  localStorage.setItem('WishList',JSON.stringify(filterData))

}

export default setData;
