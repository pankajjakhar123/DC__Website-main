import Assign from "./mybase";
var items = [
    {
      image: 'garvit',
      name: 'Garvit Chugh',
      count: 'PhD Scholar',
      des: 'Mobile and Pervasive Computing',
      // route: 'https://chughgarvit.github.io/',
    },
    {
      image: 'ana',
      name: 'Ananya Mondal',
      count: 'PhD Scholar',
      des: 'IoT, Sensing as a Software',
    },
    {
      image: 'osho',
      name: 'Osho',
      count: 'PhD Scholar',
      des: 'Next-gen vehicular network',
    },
    {
      image: 'kong',
      name: 'Kondagurle Sukitha',
      count: 'PhD Scholar',
      des: 'CPS Security',
    },
    {
      image: 'susmita',
      name: 'Susmita Mondal',
      count: 'PhD Scholar',
      des: 'Blockchain, Cryptography and Network Security',
    },
    {
      image: 'susmita',
      name: 'Susmita Mondal',
      count: 'PhD Scholar',
      des: 'Blockchain, Cryptography and Network Security',
    },
  ];
  
  var nameList = document.getElementById('nameList');
  var detailsPage = document.getElementById('detailsPage');
  
  items.forEach(function(item) {
    var listItem = document.createElement('li');
    var link = document.createElement('a');
    link.href = '#';
    link.textContent = item.name;
  
    link.onclick = function() {
        // Call BaseLayout function onNameClick when a name is clicked
        Assign.onNameClick(item);
        displayDetails(item);
      };
  
    listItem.appendChild(link);
    nameList.appendChild(listItem);
  });
  
  function displayDetails(item) {
    // Hide the name list
    nameList.style.display = 'none';
  
    // Display details of the selected item
    detailsPage.innerHTML = '';
  
    var heading = document.createElement('h2');
    heading.textContent = item.name;
  
    var countParagraph = document.createElement('p');
    countParagraph.textContent = 'Count: ' + item.count;
  
    var desParagraph = document.createElement('p');
    desParagraph.textContent = 'Description: ' + item.des;
  
    detailsPage.appendChild(heading);
    detailsPage.appendChild(countParagraph);
    detailsPage.appendChild(desParagraph);
  
    // Display the "Go Back" button
    var goBackButton = document.createElement('button');
    goBackButton.textContent = 'Go Back';
    goBackButton.onclick = function() {
      goBack();
    };
    detailsPage.appendChild(goBackButton);
  
    // Display the details page
    detailsPage.style.display = 'block';
  }
  
  function goBack() {
    // Show the name list
    nameList.style.display = 'block';
  
    // Hide the details page
    detailsPage.style.display = 'none';
  }
  