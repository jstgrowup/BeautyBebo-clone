let div = document.querySelector(".open-div");
document.getElementById("makeup").addEventListener("mousemove", displayLists);
document.getElementById("makeup").addEventListener("mouseout", () => {
  div.style.boxShadow = "none";
  div.innerHTML = null;
});


// for skins
document.getElementById("skin").addEventListener("mousemove", displaySkins);
document.getElementById("skin").addEventListener("mouseout", () => {
  div.style.boxShadow = "none";
  div.innerHTML = null;
});

// for hair
document.getElementById("hair").addEventListener("mousemove", displayHair);
document.getElementById("hair").addEventListener("mouseout", () => {
  div.style.boxShadow = "none";
  div.innerHTML = null;
});

// for personal care
document
  .getElementById("personal")
  .addEventListener("mousemove", displayPerosnal);
document.getElementById("personal").addEventListener("mouseout", () => {
  div.style.boxShadow = "none";
  div.innerHTML = null;
});

// for mom care
document.getElementById("mom").addEventListener("mousemove", displayMom);
document.getElementById("mom").addEventListener("mouseout", () => {
  div.style.boxShadow = "none";
  div.innerHTML = null;
});

// for fragnance
document.getElementById("frag").addEventListener("mousemove", displayFrag);
document.getElementById("frag").addEventListener("mouseout", () => {
  div.style.boxShadow = "none";
  div.innerHTML = null;
});

// for ayurveda
document.getElementById("aurveda").addEventListener("mousemove", displayAyur);
document.getElementById("aurveda").addEventListener("mouseout", () => {
  div.style.boxShadow = "none";
  div.innerHTML = null;
});

// for brand
document.getElementById("brand").addEventListener("mousemove", displayBrand);
document.getElementById("brand").addEventListener("mouseout", () => {
  div.style.boxShadow = "none";
  div.innerHTML = null;
});

function displayBrand() {
  div.innerHTML = null;
  div.style.boxShadow = "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px";
  div.style.justifyContent = "space-between";
  div.style.width = "85%";
  div.classList.add("column");

  let topDiv = document.createElement("div");
  topDiv.setAttribute("id", "topDiv");

  let h3 = document.createElement("h3");
  h3.innerText = "Top Brands";

  let btn = document.createElement("button");
  btn.innerText = "View All";
  btn.setAttribute("id", "topBtn");

  let mainDiv = document.createElement("div");
  mainDiv.setAttribute("id", "mainDiv");

  let row1 = document.createElement("div");
  row1.setAttribute("id", "row1");

  let row2 = document.createElement("div");
  row2.setAttribute("id", "row2");

  let rDiv1 = document.createElement("div");
  rDiv1.innerText = "LAKME";

  let rDiv2 = document.createElement("div");
  rDiv2.innerText = "L-OREAL-PARIS";

  let rDiv3 = document.createElement("div");
  rDiv3.innerText = "JOY";

  let rDiv4 = document.createElement("div");
  rDiv4.innerText = "AROMA";

  let rDiv5 = document.createElement("div");
  rDiv5.innerText = "MAGIC";

  let rDiv6 = document.createElement("div");
  rDiv6.innerText = "LOTUS";

  let r2Div1 = document.createElement("div");
  r2Div1.innerText = "HERBALS";

  let r2Div2 = document.createElement("div");
  r2Div2.innerText = "BIOTIQUE";

  let r2Div3 = document.createElement("div");
  r2Div3.innerText = "VLCC";

  let r2Div4 = document.createElement("div");
  r2Div4.innerText = "VEGA";

  let r2Div5 = document.createElement("div");
  r2Div5.innerText = "MAYBELLINE";

  let r2Div6 = document.createElement("div");
  r2Div6.innerText = "MAMAEARTH";

  topDiv.append(h3, btn);
  row1.append(rDiv1, rDiv2, rDiv3, rDiv4, rDiv5, rDiv6);
  row2.append(r2Div1, r2Div2, r2Div3, r2Div4, r2Div5, r2Div6);
  mainDiv.append(row1, row2);
  div.append(topDiv, mainDiv);
}

function displayAyur() {
  div.innerHTML = null;
  div.classList.remove("column");
  div.style.boxShadow = "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px";
  div.style.justifyContent = "space-between";
  div.style.width = "85%";

  let div1 = document.createElement("div");

  let h4 = document.createElement("h4");
  h4.innerText = "NATURAL SKIN CARE";

  let p1 = document.createElement("p");
  p1.innerText = "Body Wash";

  let p2 = document.createElement("p");
  p2.innerText = "Body Lotion";

  let p3 = document.createElement("p");
  p3.innerText = "Cleansers";

  let p4 = document.createElement("p");
  p4.innerText = "Cream";

  let p5 = document.createElement("p");
  p5.innerText = "Eye Care";

  let p6 = document.createElement("p");
  p6.innerText = "Face Wash";

  let p7 = document.createElement("p");
  p7.innerText = "Gel";

  let p8 = document.createElement("p");
  p8.innerText = "Lip Care";

  let p9 = document.createElement("p");
  p9.innerText = "Mask";

  let p10 = document.createElement("p");
  p10.innerText = "Pack";

  let p11 = document.createElement("p");
  p11.innerText = "Scrub";

  let p12 = document.createElement("p");
  p12.innerText = "Sun Protection";

  div1.append(h4, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12);

  // div 2 started
  let div2 = document.createElement("div");

  let div2_h4 = document.createElement("h4");
  div2_h4.innerText = "NATURAL HAIR CARE";

  let div2_p1 = document.createElement("p");
  div2_p1.innerText = "Conditioner";

  let div2_p2 = document.createElement("p");
  div2_p2.innerText = "Hair Oils";

  let div2_p3 = document.createElement("p");
  div2_p3.innerText = "Hair Serum";

  let div2_p4 = document.createElement("p");
  div2_p4.innerText = "Hair Gel";

  let div2_p5 = document.createElement("p");
  div2_p5.innerText = "Shampoo";

  let img = document.createElement("img");
  img.src = "https://www.beautybebo.com/pub/media/mega-menu/ayurveda_cata.jpg";

  div2.append(div2_h4, div2_p1, div2_p2, div2_p3, div2_p3, div2_p4, div2_p5);
  div.append(div1, div2, img);
}

function displayFrag() {
  div.innerHTML = null;
  div.classList.remove("column");
  div.style.boxShadow = "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px";
  div.style.justifyContent = "center";
  div.style.width = "max-content";

  let div1 = document.createElement("div");

  let h4 = document.createElement("h4");
  h4.innerText = "PERFUMES";

  let p1 = document.createElement("p");
  p1.innerText = "Deodorants Roll Ons";

  let p2 = document.createElement("p");
  p2.innerText = "Body Mist/Spray";

  div1.append(h4, p1, p2);
  div.append(div1);
}

function displayMom() {
  div.innerHTML = null;
  div.style.boxShadow = "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px";
  div.style.justifyContent = "space-between";
  div.style.width = "85%";
  div.classList.remove("column");

  let div1 = document.createElement("div");

  let h4 = document.createElement("h4");
  h4.innerText = "BABY CARE";

  let p1 = document.createElement("p");
  p1.innerText = "Bath Time";

  let p2 = document.createElement("p");
  p2.innerText = "Diapers";

  let p3 = document.createElement("p");
  p3.innerText = "Lotions & Creams";

  let p4 = document.createElement("p");
  p4.innerText = "Oils";

  let p5 = document.createElement("p");
  p5.innerText = "Powder";

  let p6 = document.createElement("p");
  p6.innerText = "Shampoo";

  let p7 = document.createElement("p");
  p7.innerText = "Soaps";

  let p8 = document.createElement("p");
  p8.innerText = "Sterilizer & Cleaners";

  let p9 = document.createElement("p");
  p9.innerText = "Rash Cream";

  let p10 = document.createElement("p");
  p10.innerText = "Wipes";

  div1.append(h4, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10);

  // div 2 started
  let div2 = document.createElement("div");

  let div2_h4 = document.createElement("h4");
  div2_h4.innerText = "BATHING ACCESSORIES";

  let div2_p1 = document.createElement("p");
  div2_p1.innerText = "Bath Brushes";

  let div2_p2 = document.createElement("p");
  div2_p2.innerText = "Loofahs";

  let img = document.createElement("img");
  img.src = "https://www.beautybebo.com/pub/media/mega-menu/mom_baby_cata.jpg";

  div2.append(div2_h4, div2_p1, div2_p2);
  div.append(div1, div2, img);
}

function displayPerosnal() {
  div.innerHTML = null;
  div.style.boxShadow = "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px";
  div.style.justifyContent = "space-between";
  div.style.width = "85%";
  div.classList.remove("column");

  let div1 = document.createElement("div");

  let h4 = document.createElement("h4");
  h4.innerText = "BATH & BODY";

  let p1 = document.createElement("p");
  p1.innerText = "Body Cleansers";

  let p2 = document.createElement("p");
  p2.innerText = "Body Massage Oil";

  let p3 = document.createElement("p");
  p3.innerText = "Body Wash";

  let p4 = document.createElement("p");
  p4.innerText = "Creams";

  let p5 = document.createElement("p");
  p5.innerText = "Essential Oils";

  let p6 = document.createElement("p");
  p6.innerText = "Foot Cream";

  let p7 = document.createElement("p");
  p7.innerText = "Scrubs & Exfoliants";

  let p8 = document.createElement("p");
  p8.innerText = "Ubtan & Face Packs";

  div1.append(h4, p1, p2, p3, p4, p5, p6, p7, p8);

  // div 2 started
  let div2 = document.createElement("div");

  let div2_h4 = document.createElement("h4");
  div2_h4.innerText = "BATHING ACCESSORIES";

  let div2_p1 = document.createElement("p");
  div2_p1.innerText = "Bath Brushes";

  let div2_p2 = document.createElement("p");
  div2_p2.innerText = "Loofahs";

  let div2_p3 = document.createElement("p");
  div2_p3.innerText = "Shower Caps";

  let div2_p4 = document.createElement("p");
  div2_p4.innerText = "Sponges";

  div2.append(div2_h4, div2_p1, div2_p2, div2_p3, div2_p3, div2_p4);

  let div3 = document.createElement("div");

  let div3_h4 = document.createElement("h4");
  div3_h4.innerText = "BATH & SHOWER";

  let div3_p1 = document.createElement("p");
  div3_p1.innerText = "Body Soaps";

  let div3_p2 = document.createElement("p");
  div3_p2.innerText = "Shower Gel";

  let img = document.createElement("img");
  img.src = "https://www.beautybebo.com/pub/media/mega-menu/personal_cata.jpg";

  div3.append(div3_h4, div3_p1, div3_p2);
  div.append(div1, div2, div3, img);
}

function displayHair() {
  div.innerHTML = null;
  div.style.boxShadow = "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px";
  div.style.justifyContent = "space-between";
  div.style.width = "85%";
  div.classList.remove("column");

  let div1 = document.createElement("div");

  let h4 = document.createElement("h4");
  h4.innerText = "HAIR CARE";

  let p1 = document.createElement("p");
  p1.innerText = "Color Protection";

  let p2 = document.createElement("p");
  p2.innerText = "Dandruff";

  let p3 = document.createElement("p");
  p3.innerText = "Dry Shampoo";

  let p4 = document.createElement("p");
  p4.innerText = "Gels & Waxes";

  let p5 = document.createElement("p");
  p5.innerText = "Hair Spray";

  let p6 = document.createElement("p");
  p6.innerText = "Hair Color/ Dye";

  let p7 = document.createElement("p");
  p7.innerText = "Hair Creams & Masks ";

  let p8 = document.createElement("p");
  p8.innerText = "Hair Styling";

  let p9 = document.createElement("p");
  p9.innerText = "Hairfall & Thinning";

  let p10 = document.createElement("p");
  p10.innerText = "Straighteners ";

  div1.append(h4, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10);

  // div 2 started
  let div2 = document.createElement("div");

  let div2_h4 = document.createElement("h4");
  div2_h4.innerText = "HAIR LOSS";

  let div2_p1 = document.createElement("p");
  div2_p1.innerText = "Conditioner";

  let div2_p2 = document.createElement("p");
  div2_p2.innerText = "Hair Oil";

  let div2_p3 = document.createElement("p");
  div2_p3.innerText = "Hair Serum";

  let div2_p4 = document.createElement("p");
  div2_p4.innerText = "Hair Growth Solutions";

  let div2_p5 = document.createElement("p");
  div2_p5.innerText = "Shampoo";

  let img = document.createElement("img");
  img.src = "https://www.beautybebo.com/pub/media/mega-menu/hair_cata.jpg";

  div2.append(div2_h4, div2_p1, div2_p2, div2_p3, div2_p3, div2_p4, div2_p5);
  div.append(div1, div2, img);
}

function displaySkins() {
  div.innerHTML = null;
  div.style.boxShadow = "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px";
  div.style.justifyContent = "space-between";
  div.style.width = "85%";
  div.classList.remove("column");

  let div1 = document.createElement("div");

  let h4 = document.createElement("h4");
  h4.innerText = "EYE CARE";

  let p1 = document.createElement("p");
  p1.innerText = "Dark Circles";

  let p2 = document.createElement("p");
  p2.innerText = "Eye Contour Care";

  let p3 = document.createElement("p");
  p3.innerText = "Eye Cream";

  let p4 = document.createElement("p");
  p4.innerText = "Eye Masks";

  let p5 = document.createElement("p");
  p5.innerText = "Eye Serums";

  let p6 = document.createElement("p");
  p6.innerText = "Puffiness";

  let p7 = document.createElement("p");
  p7.innerText = "Under Eye Creams";

  let p8 = document.createElement("p");
  p8.innerText = "Under Eye Wrinkles";

  div1.append(h4, p1, p2, p3, p4, p5, p6, p7, p8);

  // div 2 started
  let div2 = document.createElement("div");

  let div2_h4 = document.createElement("h4");
  div2_h4.innerText = "FACE CARE";

  let div2_p1 = document.createElement("p");
  div2_p1.innerText = "Anti- Ageing Creams";

  let div2_p2 = document.createElement("p");
  div2_p2.innerText = "Bleach Creams";

  let div2_p3 = document.createElement("p");
  div2_p3.innerText = "Brightening Cream";

  let div2_p4 = document.createElement("p");
  div2_p4.innerText = "Face Wash";

  let div2_p5 = document.createElement("p");
  div2_p5.innerText = "Facial Wipes";

  let div2_p6 = document.createElement("p");
  div2_p6.innerText = "Face Oil";

  let div2_p7 = document.createElement("p");
  div2_p7.innerText = "Face Cleansers";

  let div2_p8 = document.createElement("p");
  div2_p8.innerText = "Facial Kits";

  let div2_p9 = document.createElement("p");
  div2_p9.innerText = "Face Tools";

  let div2_p10 = document.createElement("p");
  div2_p10.innerText = "Moisturizer";

  let div2_p11 = document.createElement("p");
  div2_p11.innerText = "Mask & Peels";

  let div2_p12 = document.createElement("p");
  div2_p12.innerText = "Serum";

  let div2_p13 = document.createElement("p");
  div2_p13.innerText = "Toner & Astringents";

  div2.append(
    div2_h4,
    div2_p1,
    div2_p2,
    div2_p3,
    div2_p3,
    div2_p4,
    div2_p5,
    div2_p6,
    div2_p7,
    div2_p8,
    div2_p9,
    div2_p10,
    div2_p11,
    div2_p12,
    div2_p13
  );

  // div 3 started
  let div3 = document.createElement("div");

  let div3_h4 = document.createElement("h4");
  div3_h4.innerText = "BODY CARE";

  let div3_p1 = document.createElement("p");
  div3_p1.innerText = "All Cream";

  let div3_p2 = document.createElement("p");
  div3_p2.innerText = "Body Moisturizers";

  let div3_p3 = document.createElement("p");
  div3_p3.innerText = "Body Toners";

  let div3_p4 = document.createElement("p");
  div3_p4.innerText = "Body Sun Care";

  let div3_p5 = document.createElement("p");
  div3_p5.innerText = "Brightening Lotion";

  let div3_p6 = document.createElement("p");
  div3_p6.innerText = "Dark Circles & Wrinkles";

  let div3_p7 = document.createElement("p");
  div3_p7.innerText = "Day Cream";

  let div3_p8 = document.createElement("p");
  div3_p8.innerText = "Foot Cream";

  let div3_p9 = document.createElement("p");
  div3_p9.innerText = "Hair Remover Cream";

  let div3_p10 = document.createElement("p");
  div3_p10.innerText = "Hand Creams";

  let div3_p11 = document.createElement("p");
  div3_p11.innerText = "Hands & Feet";

  let div3_p12 = document.createElement("p");
  div3_p12.innerText = "Kits & Combos";

  let div3_p13 = document.createElement("p");
  div3_p13.innerText = "Night Cream";

  let div3_p14 = document.createElement("p");
  div3_p14.innerText = "Neck Creams";

  let img1 = document.createElement("img");
  img1.src = "https://www.beautybebo.com/pub/media/mega-menu/SKIN_cATA.jpg";

  div3.append(
    div3_h4,
    div3_p1,
    div3_p2,
    div3_p3,
    div3_p3,
    div3_p4,
    div3_p5,
    div3_p6,
    div3_p7,
    div3_p8,
    div3_p9,
    div3_p10,
    div3_p11,
    div3_p12,
    div3_p13,
    div3_p14
  );

  div.append(div1, div2, div3, img1);
}

function displayLists() {
  div.innerHTML = null;
  div.style.boxShadow = "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px";
  div.style.justifyContent = "space-between";
  div.style.width = "85%";
  div.classList.remove("column");

  let div1 = document.createElement("div");

  let h4 = document.createElement("h4");
  h4.innerText = "FACE";

  let p1 = document.createElement("p");
  p1.innerText = "BB Cream";

  let p2 = document.createElement("p");
  p2.innerText = "Blush";

  let p3 = document.createElement("p");
  p3.innerText = "Bronzer";

  let p4 = document.createElement("p");
  p4.innerText = "CC Cream";

  let p5 = document.createElement("p");
  p5.innerText = "Contour";

  let p6 = document.createElement("p");
  p6.innerText = "Concealer";

  let p7 = document.createElement("p");
  p7.innerText = "Compact & Powder";

  let p8 = document.createElement("p");
  p8.innerText = "Face Primer";

  let p9 = document.createElement("p");
  p9.innerText = "Foundation";

  let p10 = document.createElement("p");
  p10.innerText = "Highlighters";

  let p11 = document.createElement("p");
  p11.innerText = "Loose Powder";

  let p12 = document.createElement("p");
  p12.innerText = "Makeup Kits";

  let p13 = document.createElement("p");
  p13.innerText = "Makeup Remover";

  let p14 = document.createElement("p");
  p14.innerText = "Setting Spray";

  div1.append(h4, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14);

  // div 2 started
  let div2 = document.createElement("div");

  let div2_h4 = document.createElement("h4");
  div2_h4.innerText = "EYE";

  let div2_p1 = document.createElement("p");
  div2_p1.innerText = "Contact Lenses";

  let div2_p2 = document.createElement("p");
  div2_p2.innerText = "Eye Kit";

  let div2_p3 = document.createElement("p");
  div2_p3.innerText = "Eyeliner";

  let div2_p4 = document.createElement("p");
  div2_p4.innerText = "Eye Shadow";

  let div2_p5 = document.createElement("p");
  div2_p5.innerText = "Eye Primer";

  let div2_p6 = document.createElement("p");
  div2_p6.innerText = "Eye-Palettes";

  let div2_p7 = document.createElement("p");
  div2_p7.innerText = "Eye Makeup Remover";

  let div2_p8 = document.createElement("p");
  div2_p8.innerText = "Eye Brow Enhancers";

  let div2_p9 = document.createElement("p");
  div2_p9.innerText = "False Eyelashes";

  let div2_p10 = document.createElement("p");
  div2_p10.innerText = "Kajal";

  let div2_p11 = document.createElement("p");
  div2_p11.innerText = "Mascara";

  let div2_p12 = document.createElement("p");
  div2_p12.innerText = "Under Eye Concealer";

  div2.append(
    div2_h4,
    div2_p1,
    div2_p2,
    div2_p3,
    div2_p3,
    div2_p4,
    div2_p5,
    div2_p6,
    div2_p7,
    div2_p8,
    div2_p9,
    div2_p10,
    div2_p11,
    div2_p12
  );

  //  div 3 started
  let div3 = document.createElement("div");

  let div3_h4 = document.createElement("h4");
  div3_h4.innerText = "LIPS";

  let div3_p1 = document.createElement("p");
  div3_p1.innerText = "Lipstick";

  let div3_p2 = document.createElement("p");
  div3_p2.innerText = "Liquid Lipstick";

  let div3_p3 = document.createElement("p");
  div3_p3.innerText = "Lip Liner";

  let div3_p4 = document.createElement("p");
  div3_p4.innerText = "Lip Gloss";

  let div3_p5 = document.createElement("p");
  div3_p5.innerText = "Lip Balm";

  let div3_p6 = document.createElement("p");
  div3_p6.innerText = "Lip Crayon";

  let div3_p7 = document.createElement("p");
  div3_p7.innerText = "Lip Stain";

  let div3_p8 = document.createElement("p");
  div3_p8.innerText = "Lip Plumper";

  div3.append(
    div3_h4,
    div3_p1,
    div3_p2,
    div3_p3,
    div3_p4,
    div3_p5,
    div3_p5,
    div3_p6,
    div3_p7,
    div3_p8
  );

  // div 4 started
  let div4 = document.createElement("div");

  let div4_h4 = document.createElement("h4");
  div4_h4.innerText = "NAILS";

  let div4_p1 = document.createElement("p");
  div4_p1.innerText = "Manicure & Pedicure Kits";

  let div4_p2 = document.createElement("p");
  div4_p2.innerText = "Nail Polish";

  let div4_p3 = document.createElement("p");
  div4_p3.innerText = "Nail Care";

  let div4_p4 = document.createElement("p");
  div4_p4.innerText = "Nail Polish Sets";

  let div4_p5 = document.createElement("p");
  div4_p5.innerText = "Nail Art Kits";

  let div4_p6 = document.createElement("p");
  div4_p6.innerText = "Nail Polish Remover";

  div4.append(
    div4_h4,
    div4_p1,
    div4_p2,
    div4_p3,
    div4_p4,
    div4_p5,
    div4_p5,
    div4_p6
  );

  // div 5 started
  let div5 = document.createElement("div");

  let div5_h4 = document.createElement("h4");
  div5_h4.innerText = "TOOLS BRUSHES";

  let div5_p1 = document.createElement("p");
  div5_p1.innerText = "Blush Brush";

  let div5_p2 = document.createElement("p");
  div5_p2.innerText = "Eyelash Curlers";

  let div5_p3 = document.createElement("p");
  div5_p3.innerText = "Eye Brush";

  let div5_p4 = document.createElement("p");
  div5_p4.innerText = "Face Brush";

  let div5_p5 = document.createElement("p");
  div5_p5.innerText = "Lip Brush";

  let div5_p6 = document.createElement("p");
  div5_p6.innerText = "Makeup Pouches";

  let div5_p7 = document.createElement("p");
  div5_p7.innerText = "Mirrors";

  let div5_p8 = document.createElement("p");
  div5_p8.innerText = "Sponges & Applicators";

  let div5_p9 = document.createElement("p");
  div5_p9.innerText = "Sharpeners";

  let div5_p10 = document.createElement("p");
  div5_p10.innerText = "Tweezers";

  div5.append(
    div5_h4,
    div5_p1,
    div5_p2,
    div5_p3,
    div5_p3,
    div5_p4,
    div5_p5,
    div5_p6,
    div5_p7,
    div5_p8,
    div5_p9,
    div5_p10
  );
  div.append(div1, div2, div3, div4, div5);
}
