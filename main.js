var famousPeople = [
  {
    title: "Samurai",
    name: "Tomoe Gozen",
    bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
    lifespan: {
      birth: 1747,
      death: 1797
    }
  },
  {
    title: "Singer",
    name: "Jewel",
    bio: "Jewel Kilcher is an American singer-songwriter, guitarist, producer, actress, author and poet. She has received four Grammy Award nominations and, as of 2008, has sold over 30 million albums worldwide.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Jewel_2009.jpg/440px-Jewel_2009.jpg",
    lifespan: {
      birth: 1974,
      death: "----"
    }
  },
  {
    title: "Actress",
    name: "Jennifer Anniston",
    bio: "Jennifer Joanna Anistonmis an American actress, producer, and businesswoman. Aniston gained worldwide recognition for portraying Rachel Green on the popular television sitcom Friends (1994–2004), a role which earned her a Primetime Emmy Award, a Golden Globe Award, and a Screen Actors Guild Award. The character was widely popular during the airing of the series and was later recognized as one of the 100 greatest female characters in United States television.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/JenniferAnistonHWoFFeb2012.jpg/440px-JenniferAnistonHWoFFeb2012.jpg",
    lifespan: {
      birth: 1969,
      death: "----"
    }
  },
  {
    title: "Scientist, Inventor",
    name: "Thomas Edison",
    bio: "Thomas Alva Edison was an American inventor and businessman. He developed many devices that greatly influenced life around the world, including the phonograph, the motion picture camera, and the long-lasting, practical electric light bulb. Dubbed 'The Wizard of Menlo Park', he was one of the first inventors to apply the principles of mass production and large-scale teamwork to the process of invention, and because of that, he is often credited with the creation of the first industrial research laboratory.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Thomas_Edison2.jpg/440px-Thomas_Edison2.jpg",
    lifespan: {
      birth: 1847,
      death: 1931
    }
  },
  {
    title: "President, Politician",
    name: "Abraham Lincoln",
    bio: "Abraham Lincoln was an American politician and lawyer who served as the 16th President of the United States from March 1861 until his assassination in April 1865. Lincoln led the United States through its Civil War—its bloodiest war and its greatest moral, constitutional, and political crisis. In doing so, he preserved the Union, abolished slavery, strengthened the federal government, and modernized the economy.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Abraham_Lincoln_O-77_matte_collodion_print.jpg/440px-Abraham_Lincoln_O-77_matte_collodion_print.jpg",
    lifespan: {
      birth: 1847,
      death: 1931
    }
  },
  {
    title: "Religious Leader",
    name: "Pope Francis",
    bio: "Pope Francis is the 266th and current Pope of the Roman Catholic Church, a title he holds ex officio as Bishop of Rome, and Sovereign of the Vatican City. He chose Francis as his papal name in honor of Saint Francis of Assisi. Francis is the first Jesuit pope, the first from the Americas, the first from the Southern Hemisphere and the first non-European pope since the Syrian Gregory III, who died in 741.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Franciscus_in_2015.jpg/440px-Franciscus_in_2015.jpg",
    lifespan: {
      birth: 1936,
      death: "----"
    }
  }
];

var userInput = document.getElementById("user-input");
var cardContainer = document.getElementById("famous-container");
var famousBio = "";
var starsCards = document.getElementsByClassName("stars");

for (i = 0; i < famousPeople.length; i ++) {
  cardContainer.innerHTML +=
  `<div class="stars" id="famous-${i}">
  <p>${famousPeople[i].title}: ${famousPeople[i].name}</p>
  <img src="${famousPeople[i].image}" alt="title">
  <p id="bio-${i}">${famousPeople[i].bio}</p>
  </div>`

};


function editBioFocus () {
  for (var i = 0; i < starsCards.length; i++) {
  if (starsCards.item(i).classList.contains("selected")) {
    starsCards.item(i).classList.remove("selected")
  }
  var currentStar = document.getElementById(this.id);
  currentStar.classList.add("selected");
  famousBio = this.id.replace("famous-","bio-")
  userInput.focus();
  userInput.value = '';
}
}

for (var i = 0; i < starsCards.length; i++) {
  starsCards.item(i).addEventListener("click", editBioFocus);
}


function editBios (userInput) {
   document.getElementById(famousBio).innerHTML = userInput;
}

userInput.addEventListener("keyup", function() {
  editBios(userInput.value);
});











