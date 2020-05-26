
document.querySelector(".gallerycontainer").innerHTML = 

"<a class='thumbnail' href='images/LisaKim1.jpg' rel='lightbox[roadtrip]'
title='Lisa and Alexia (<em>Belly Dance & Beyond</em>)'><img src= images/LisaKim1.gif'></a>"





danceGif = [
  'images/Lisa_Willie.jpg',
  'images/Lisa Performing.gif',
  'images/Lisa classic yellow fan.gif',
  'images/Manolo_Tanguillo2smll.gif',
  'images/LisaYellowcapesmll copy.gif',
  'images/CompaniaLisasmll copy.gif',
  'images/IMG_1003.gif',
];

let gifPlace = document.getElementById('thumbnail');

gifPlace.href = danceGif[0];

//   <div class="gallerycontainer" id="header">
//     <a class="thumbnail" href="#thumb"><img src= width="66px" height="100px"
//         border="0" /><span><img src= /><br />Dancing<i> Solea</i></span></a>

//     <a class="thumbnail" href="#thumb"><img src=" width="66px" height="100px"
//         border="0" /><span><img src="images/Lisa classic yellow fan.jpg" /></span></a>

//     <a class="thumbnail" href="#thumb">
//       <img src width="66px" height="100px" /><span
//         style="margin-left: -20px;"><img src="images/Manolo_Tanguillo2smll.jpg" /><br />1988: <i>Tanguillo</i>
//         with the great Manolo Rivera, Cami Hall, NYC</span></a>

//     <a class="thumbnail" href="#thumb"><img src=" width="66px" height="100px"
//         border="0" /><span style="background-image: none"><img
//           src="images/LisaYellowcapesmll.jpg" /><br /></span></a>

//     <a class="thumbnail" href="#thumb"><img src= width="66px" height="100px"
//         border="0" /><span><img src="images/CompaniaLisasmll.jpg" /><br />Compañia Folklorica Latina!
//         (1980's)</span></a>

//     <br />
//     <a class="thumbnail" href="#thumb"><img src= width="66px" height="100px"
//         border="0" /><span><img src="images/IMG_1003.jpg" /><br /></span></a>

//     <a class="thumbnail" href="#thumb"><img src="images/expressivesidebendsmll copy.gif" width="66px"
//         height="100px" border="0" /><span><img src="images/expressivesidebendsmll.jpg"><br /></span></a>

//     <a class="thumbnail" href="#thumb"><img src="images/snakecstume2.gif" width="66px" height="100px"
//         border="0" /><span><img src="images/snakecstume2.jpg" /><br /><i>"...en el jardin"</i> at Grounds for
//         Sculpture </span></a>

//     <a class="thumbnail" href="#thumb"><img src="images/LisaZapcostmesmll copy.gif" width="66px" height="100px"
//         border="0" /><span><img src="images/LisaZapcostmesmll.jpg" /><br /><i>Zapateado!</i></span></a>

//     <a class="thumbnail" href="#thumb"><img src="images/Lisa backbend after copy.gif" width="66px" height="100px"
//         border="0" /> <span style="background-image: none;"><img
//           src="images/Lisa backbend after.jpg" /><br /></span></a>

//     <br />
//     <a class="thumbnail" href="#thumb"><img src="images/LnclnCntrold copy.gif" width="66px" height="100px"
//         border="0" /><span><img src="images/LnclnCntrold.jpg" /><br />Lincoln Center Outdoors 1980's</span></a>

//     <a class="thumbnail" href="#thumb"><img src="images/Lisa_Orlando2smll.gif" width="66px" height="100px"
//         border="0" /><span style="background-image: none"><img
//           src="images/Lisa_Orlando_perfect.jpg" /><br />Dancing <i>Sevillanas</i> with the great Orlando
//         Romero</span>
//     </a>

//     <a class="thumbnail" href="#thumb"><img src="images/Lisa_OrlandoRomerosmll.gif" width="66px" height="100px"
//         border="0" /><span style="background-image: none;"><img
//           src="images/Lisa_OrlandoRomerosmll.jpg" /><br />Dancing <i>Guajiras</i> with Orlando Romero</span></a>

//     <a class="thumbnail" href="#thumb"><img src="images/BARBIES135 copy.gif" width="66px" height="100px"
//         border="0" /><span><img src="images/BARBIES135.jpg" /><br /><i>Guajiras</i> in white pants: Lisa's tribute
//         to the <br /> late Orlando Romero</span></a>

//     <a class="thumbnail" href="#thumb"><img src="images/LisaClavilitos.gif" width="66px" height="100px"
//         border="0" /><span><img src="images/LisaClavilitossmll.jpg" /><br />Singing<i> Clavelitos</i>
//         ("Carnations")</span></a>
//     <br />

//     <a class="thumbnail" href="#thumb"><img src="images/Lisa singing pose1 copy.gif" width="66px" height="100px"
//         border="0" /><span style="background-image: none"><img
//           src="images/Lisa singing pose1.jpg" /><br /></span></a>

//     <a class="thumbnail" href="#thumb"><img src="images/Lisa_BilliMarti_LatinHustle.gif" width="66px"
//         height="100px" border="0" /><span style="padding-right: 160px;"><img
//           src="images/Lisa_BilliMarti_LatinHustle.jpg" /><br />Take a break for <i>Latin Hustle!</i> In the 1980's
//         with partner <br />Billi Marti of La Compañia Folklorica Latina</span></a>

//     <a class="thumbnail" href="#thumb"><img src="images/Lisa_LuisVargas copy.gif" width="66px" height="100px"
//         border="0" /><span><img src="images/Lisa_LuisVargas.jpg" /><br />With famed cantaor Luis Vargas</span></a>

//     <a class="thumbnail" href="#thumb"><img src="images/Lisapicin_NYTimesDec2010smll.gif" width="66px"
//         height="100px" border="0" /><span><img src="images/Lisapicin_NYTimesDec2010smll.jpg" /><br />New York
//         TImes, Dec 2011</span></a>

//     <a class="thumbnail" href="#thumb"><img src="images/Lisaorigpubshotsmll.gif" width="66px" height="100px"
//         border="0" /><span><img src="images/Lisaorigpubshotsmll.jpg" /><br /></span></a>
