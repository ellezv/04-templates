var categoryArray = [];
var authorArray = [];



function makeCategoryArray(article){
  if ((categoryArray.indexOf(article.category)) === -1) {
    // console.log('category='+article.author);

    categoryArray.push(article.category);
  }
}

function makeAuthorArray(article){
  if ((authorArray.indexOf(article.author)) === -1) {
    // console.log('author= '+article.author);
    authorArray.push(article.author);
  }

}


ourLocalData.forEach(function(ele) {
  makeAuthorArray(ele);
  makeCategoryArray(ele);
  // $(#filters).appdn(Filter.toHtml());
});


function optionstoHtml(option){
  var source = $('#filter-template').html();
  var templateRender=Handlebars.compile(source);
  return templateRender(option);
}
listofCatObj = [];

categoryArray.forEach(function(a){
  obj = {};
  obj.category = a;
  listofCatObj.push(obj);
});


listofCatObj.forEach(function(a){
  $('#category-filter').append(optionstoHtml(a));
});
