var console = require('console');

module.exports.function = function selectOne (object) {
  console.log('object: '+object);
  var flag,object,random;
  if(object == undefined) {
    console.log('case: make one of two');
    random = Math.floor(Math.random() * (1 - 0)) + 0;
    if(random == 0) {
      flag = 'DO';
    } else {
      flag = 'DONT';
    }
  } else {
    console.log('object.length: ' + object.length);
    if(object.length == 1) {
      console.log('case: make one of two : 끝이 말까인 경우.');
      flag = 'withSuffix';
      random = Math.floor(Math.random() * (1 - 0)) + 0;
      if(object[0].length > 1 && object[0][object[0].length-1] == '까') {
        console.log('case: "까"인 경우.');
        object[0] = object[0].substr(0,object[0].length-1);
        console.log('object[0].subst(0,object[0].length-1): '+object[0]);
      }
      object[0] = deletingSuffix(object[0]);
      console.log('deletingSuffix(object[0]): '+object[0]);
      if(random == 0) {
       object[0] = object[0]+'지 않'; 
       console.log('object[0]+"지 않": '+object[0]);
      }
    } else {
      console.log('case: make one of Many');
      random = Math.floor(Math.random() * (object.length - 0)) + 0;
      flag = object[random];
      object = object[random];
    }
  }
  console.log('flag: '+flag);
  console.log('object: '+object);
  return {
    flag:flag,
    object:object,
  }
}

function deletingSuffix(string) {
  var result = string;
  if(result[result.length-1] == '을') {
    result = result.substr(0,result.length-1);
  } 
  else if(result[result.length-1] == '갈') {
    result = result.substr(0,result.length-1) + '가';
  }
  else if(result[result.length-1] == '날') {
    result = result.substr(0,result.length-1) + '나';
  }
  else if(result[result.length-1] == '를') {
    result = result.substr(0,result.length-1) + '르';
  }
  else if(result[result.length-1] == '릴') {
    result = result.substr(0,result.length-1) + '리';
  }
  else if(result[result.length-1] == '볼') {
    result = result.substr(0,result.length-1) + '보';
  }
  else if(result[result.length-1] == '살') {
    result = result.substr(0,result.length-1) + '사';
  }
  else if(result[result.length-1] == '올') {
    result = result.substr(0,result.length-1) + '오';
  }
  else if(result[result.length-1] == '울') {
    result = result.substr(0,result.length-1) + '우';
  }
  else if(result[result.length-1] == '잘') {
    result = result.substr(0,result.length-1) + '자';
  }
  else if(result[result.length-1] == '칠') {
    result = result.substr(0,result.length-1) + '치';
  }
  else if(result[result.length-1] == '탈') {
    result = result.substr(0,result.length-1) + '타';
  }
  else if(result[result.length-1] == '필') {
    result = result.substr(0,result.length-1) + '피';
  }
  else if(result[result.length-1] == '할') {
    result = result.substr(0,result.length-1) + '하';
  }
  return result;
}