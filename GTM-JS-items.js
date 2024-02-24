function(){
  var items = [];
  for(var i = 0; i < {{DL - product_id}}.length; i++){
    var item = {};
    item.item_id = {{DL - product_id}}[i];
    item.item_name = {{DL - product_name}}[i];
    item.discount = {{DL - product_discount}}[i];
    item.item_brand = {{DL - product_brand}}[i];
    item.price = {{DL - product_price}}[i];
    item.quantity = {{DL - product_quantity}}[i];
    items.push(item);
  };
  return items;  
}
