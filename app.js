function grapeYard([arg1,arg2,arg3,arg4]){
  let area = parseInt(arg1);
  let areaWine = area * 0.4;
  let grapeKg = areaWine * parseFloat(arg2);
  let wine = grapeKg / 2.5;
  let wineNeeded = parseInt(arg3);
  let workers = parseInt(arg4);

  if(wineNeeded > wine){
    console.log('It will be a tough winter! More ' + Math.floor(wineNeeded - wine) + ' liters wine needed.');
  }
  else{
    console.log('Good harvest this year. Total wine:' + wine + " liters. " + Math.floor(wine-wineNeeded) + " liters left -> " +(wine-wineNeeded) / workers + " liters per person!");
  }

}

grapeYard([1500, 1.8, 425, 4]);
