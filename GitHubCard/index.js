/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/


const cardCreator = (user) => {
  const newCard = document.createElement('div');
  const newCardImg = document.createElement('img');
  const newCardInfo = document.createElement('div');
  const newCardName = document.createElement('h2');
  const newCardUserName = document.createElement('h3');
  const newCardLocation = document.createElement('p');
  const newCardProfile = document.createElement('p');
  const newCardFollowers = document.createElement('p');
  const newCardFollowing = document.createElement('p');
  const newCardBio = document.createElement('p');

  newCard.classList.add('card');
  newCardName.classList.add('name');
  newCardUserName.classList.add('username');

  newCardImg.src = user.avatar_url;
  newCardName.textContent = user.name;
  newCardUserName.textContent = user.login;
  newCardLocation.textContent = `Location: ${user.location}`;
  newCardProfile.textContent = `Profile: ${user.url}`;
  newCardFollowers.textContent = `Followers: ${user.followers}`;
  newCardFollowing.textContent = `Following: ${user.following}`;
  newCardBio.textContent = `Bio: ${user.bio}`;


  newCard.appendChild(newCardImg);
  newCard.appendChild(newCardInfo);
  newCardInfo.appendChild(newCardName);
  newCardInfo.appendChild(newCardUserName);
  newCardInfo.appendChild(newCardLocation);
  newCardInfo.appendChild(newCardProfile);
  newCardInfo.appendChild(newCardFollowers);
  newCardInfo.appendChild(newCardFollowing);
  newCardInfo.appendChild(newCardBio);

  return newCard;
}

// entry point
entryPoint = document.querySelector('.cards');

// axios promise

axios.get('https://api.github.com/users/mahagold11')
  .then( response => {
    console.log('response', response.data);

    userCard = response.data;
    let newUserCard = cardCreator(userCard);
    entryPoint.appendChild(newUserCard);

  })
  .catch( err => {
    console.log('error')
})







/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [];


axios.get('https://api.github.com/users/bradzickafoose/followers')
  .then( response => {
    console.log('response', response);

    response.data.forEach( item => {
      entryPoint.appendChild(cardCreator(item))
    })

    // userCard = response.data;
    // let newUserCard = cardCreator(userCard);
    // entryPoint.appendChild(newUserCard);

  })
  .catch( err => {
    console.log('error')
})


/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
