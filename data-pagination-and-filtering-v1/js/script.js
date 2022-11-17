/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/



/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/

// This function will create and append the elements needed to display a page of nine students
function showPage(list, page) {
   let startIndex = (page * 9) - 9;
   let endIndex = page * 9;
   let studentList = document.querySelector('.student-list');
   studentList.innerHTML = '';
   for (let i = 0; i < list.length; i++) {
      if (i >= startIndex && i < endIndex) {
         let studentItem = `
         <li class="student-item cf">
          <div class="student-details">
            <img class="avatar" src="${list[i].picture.medium}" alt="Profile Picture">
            <h3>${list[i].name.title + '' + list[i].name.first + list[i].name.last}</h3>
            <span class="email">${list[i].email}</span>
          </div>
          <div class="joined-details">
            <span class="date">${list[i].registered.date}</span>
          </div>
        </li>
         `
         studentList.insertAdjacentHTML('beforeend', studentItem);
      }
      }
   }  

//This function will create and insert/append the elements needed for the pagination buttons

let linkList = document.querySelector('.link-list');
function addPagination(list) {
   let numOfPages = Math.ceil(list.length / 9);
   linkList.innerHTML = '';
   for (i = 1; i <= numOfPages; i++) {
      let button = `
         <li>
            <button type="button">${i}</button>
         </li>
      `
      linkList.insertAdjacentHTML('beforeend', button);
      }
   let firstButton = linkList.querySelector('button');
   firstButton.className = 'active';
   }

//This is an event listener for the link buttons created by the addPagination function.
//When a link button is clicked it loads the appropriate page and changes the class of the most recently clicked button to active
linkList.addEventListener('click', (e) => {
   let selectedButton = e.target;
   if (selectedButton.tagName === 'BUTTON') {
      let activeButton = linkList.querySelector('.active');
      activeButton.className = '';
      selectedButton.className = 'active';
      showPage(data, selectedButton.textContent);
   }

})

//Calling the functions created above
showPage(data, 1);
addPagination(data);