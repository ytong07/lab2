// TODO: load the dataset 

//fetch the json file and store data into array "attractions"
let attractions;
fetch('attractions.json')
.then(response => response.json())
.then(data => {
    attractions = data;
    //console.log(attractions);
    filterData('all');//
  });

function filterData(category) { 
  let temp = attractions;
  if(category!='all'){
    temp = attractions.filter((callback)=>callback.Category == category);
  }
  let top = temp.sort((a, b) => b.Visitors - a.Visitors).slice(0,5)
  //console.log(temp);
  renderBarChart(top);
}

// TODO: Define an event listener for the dropdown menu
//       Call filterData with the selected category
let pick = document.querySelector('#attraction-category');
pick.addEventListener('change', (event) => {filterData(event.target.value);});