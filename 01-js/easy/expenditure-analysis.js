/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {

  const ans = [];
  let obj = {}; // obj{category1 : p1, category2 : p2}

  for(let i=0;i<transactions.length;i++) {
    let category = transactions[i]["category"];
    if(obj[category] == undefined) {
      obj[category] = transactions[i].price;
    }else{
      obj[category] += transactions[i].price;
    }
  }

  for(let key in obj) {
    const temp = {
      category: key,
      totalSpent: obj[key]
    };
    ans.push(temp);
  }
  return ans;
}

module.exports = calculateTotalSpentByCategory;
