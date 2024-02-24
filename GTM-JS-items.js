function(){
  var items = [];
  if({{DL - product_id}} === undefined){
    var itemlength = 0;
  } else {
    var itemlength = {{DL - product_id}}.length
  };
  var productVars = [{{DL - product_id}}, {{DL - product_name}}, {{DL - product_discount}}, {{DL - product_brand}}, {{DL - product_price}}, {{DL - product_quantity}}];
  var itemVars = ["item_id", "item_name","discount", "item_brand", "price", "quantity"];
  for(var i = 0; i < itemlength; i++){
    var item = {};
    for(var p = 0; p < productVars.length; p++){
      if(productVars[p]){
        item[itemVars[p]] = productVars[p][i];
      }
    }
    items.push(item);
  };
  return items;  
}
