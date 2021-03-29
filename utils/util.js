function convertToCastString(casts){
  var castsjoin = "";
  for(let indx in casts){
    castsjoin = castsjoin + casts[indx].name + "/ ";
  }
  // 最后一个名字多出一个斜线，去掉
  return castsjoin.substring(0,castsjoin.length-2)
}

function converToCastInfos(casts){
  var castsArray = []
  for(var idx in casts){
    var cast = {
      img: casts[idx].avatars ? casts[idx].avatars.large :"",
      name: casts[idx].name
    }
    castsArray.push(cast);
  }
  return castsArray
}

export{
  convertToCastString,
  converToCastInfos
}