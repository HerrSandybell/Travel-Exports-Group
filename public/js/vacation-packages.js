const packagesList = [
  {
    Id: 101,
    packageName: " 5-nights in Marival Distinct Residences",
    packagedDescription: "This all-inclusive resort features multiple pools, restaurants and bars, a fitness centre the Marival Kids Club and the Melange World Spa. Each of the 169 spacious residences and villas feature a kitchen, marble bathrooms and upscale amenities.",
    packageStartDate: "2020-07-01",
    packageEndDate: "2020-09-30",
    packagePrice: 2000,
    imageFile: "Marival.jpg",
  },
  {
    Id: 102,
    packageName: "Carnival Freedom Cruise",
    packagedDescription: "If you’re looking for a cruise vacation that’s a little bit out of the way and a little bit out of the ordinary, make an Alaska cruise your first choice. From Gold Rush history to mountain majesty, Alaska is a natural wonder through and through, and the coastal panhandle region Carnival sails to is perhaps the most stunning. Alaska welcomes you with quaint seaside towns like Skagway and Ketchikan, and with glorious harbour vistas like the one found in Juneau. Cruising Alaska provides a first-row ticket to the best of nature, including fjords, wildlife and glaciers galore.",
    packageStartDate: "2020-08-01",
    packageEndDate: "2021-04-30",
    packagePrice: 1250,
    imageFile: "Carnival.jpg",
  },
  {
    Id: 103,
    packageName: " Royalton Bavaro",
    packagedDescription: "Escape to the shores of Punta Cana, to a vacation experience for families, couples, singles and guests of all ages at Royalton Bavaro. Discover Royalton's signature features in their elegantly styled suites, reservation free dining with chef curated menus, and hospitality together with unique programming for children and teens, including an onsite splash park, a fun-filled lazy river, and a Flowrider wave machine.",
    packageStartDate: "2020-07-01",
    packageEndDate: "2021-02-30",
    packagePrice: 900,
    imageFile: "Royalton.jpg",
  },
  {
    Id: 104,
    packageName: " 5-nights Koa Kea Hotel & Resort",
    packagedDescription: "Inspired by the spectacular sunsets, colourful native flowers and vibrant sea life of Kauai, Koa Kea Hotel & Resort captures the natural essence of luxury island adventure.",
    packageStartDate: "2020-08-30",
    packageEndDate: "2021-03-30",
    packagePrice: 850,
    imageFile: "koakea.jpg",
  },
  {
    Id: 105,
    packageName: "Conrad Bora Bora Nui Dinner Package",
    packagedDescription: "Conrad Bora Bora Nui offers an idyllic escape from the bustle of everyday life. Combining Polynesian tradition with state-of-the-art amenities, the resort allows guests to unwind and rejuvenate in style. ",
    packageStartDate: "2020-05-15",
    packageEndDate: "2020-12-10",
    packagePrice: 750,
    imageFile: "conrad.jpg",
  },
  {
    Id: 106,
    packageName: "Eastern Caribbean Cruise",
    packagedDescription: "Set sail on Carnival Cruise Line's newest ship, the Mardi Gras™. Check out the six new distinct onboard zones featuring brand-new experiences for spectacularly getting down to food, drink and fun. Mardi Gras is going to be full of fun new ways to spend your time, but definitely isn't leaving the fan favourites ashore. Plus, she will feature BOLT™, the first-ever rollercoaster at sea! Everybody can enjoy Mardi Gras, sailing in 2020 ",
    packageStartDate: "2020-07-10",
    packageEndDate: "2021-07-30",
    packagePrice: 999,
    imageFile: "eastern.jpg",
  },
];

const vacpackages = document.querySelector('.vacpackages');

packagesList.forEach((packagesList) => {
  console.log(packagesList);
  vacpackages.innerHTML += `
  
  <figure> 
        <figcaption> ${packagesList.packageName}</figcaption>
         <img src="http://localhost:3000/images/${packagesList.imageFile}" width="600" height="600">
        <figcaption> Description: ${packagesList.packagedDescription} </figcaption> 
        <figcaption> Package Starting Price($): ${packagesList.packagePrice} </figcaption>
        <figcaption> Book By: ${packagesList.packageStartDate} </figcaption>
        <figcaption> Valid Until: ${packagesList.packageEndDate} </figcaption>
	 </figure> `;

});







