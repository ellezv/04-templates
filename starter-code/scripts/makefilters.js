function Filteroptions (categories, authors){
  this.categories =categories;
  this.authors = authors;
};

Filteroptions.prototype.toHtmlfilters = function(){
  var source = $('#filter-template').html();
  var templateRender=Handlebars.compile(source);
  return templateRender(this);
};

filters = new Filteroptions(categoryArray, authorArray);
$('#filters').append(filters.toHtmlfilters());
