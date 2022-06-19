import { product, sortingData } from "./Data/productData.js";
import append from "./components/append.js";

let container = document.getElementById("product-list");
let category = document
  .getElementById("ctg")
  .addEventListener("click", showlist);
let skins = document
  .getElementById("skn")
  .addEventListener("click", displaySkin);
let price = document.getElementById("prc").addEventListener("click", showprice);
let brand = document
  .getElementById("brnd")
  .addEventListener("click", showbrand);
let forml = document
  .getElementById("forml")
  .addEventListener("click", showforml);
let count = 0;
let count1 = 0;
let count2 = 0;
let count3 = 0;
let count4 = 0;

let sorting = document.getElementById("sort").addEventListener("change", sort);

append(product.makeup, container);

let makeup = document.getElementById("makeup").addEventListener("click", () => {
  document.querySelector("#product-div>h2").innerText = "MAKEUP";
  append(product.makeup, container);
});

let skin = document.getElementById("skin").addEventListener("click", () => {
  document.querySelector("#product-div>h2").innerText = "SKIN";
  append(product.skin, container);
});

let hair = document.getElementById("hair").addEventListener("click", () => {
  document.querySelector("#product-div>h2").innerText = "HAIR";
  append(product.hair, container);
});

let personal = document
  .getElementById("personal")
  .addEventListener("click", () => {
    document.querySelector("#product-div>h2").innerText = "PERSONAL";
    append(product.personal, container);
  });

let mom = document.getElementById("mom").addEventListener("click", () => {
  document.querySelector("#product-div>h2").innerText = "MOM & BABY CARE";
  append(product.kids, container);
});

let fragrance = document
  .getElementById("frag")
  .addEventListener("click", () => {
    document.querySelector("#product-div>h2").innerText = "FRAGRANCE";
    append(product.perfume, container);
  });

let Ayurveda = document
  .getElementById("aurveda")
  .addEventListener("click", () => {
    document.querySelector("#product-div>h2").innerText = "AYURVEDA";
    append(product.ayurveda, container);
  });

//  some functions for sorting and sidebar
function sort() {
  let value = document.getElementById("sort").value;
  let text = document.querySelector("#product-div>h2").innerText;

  // sorting for every category
  if (text === "MAKEUP") {
    if (value === "htl") {
      product.makeup.sort((a, b) => {
        return +b.price - Number(a.price);
      });

      append(product.makeup, container);
    }

    if (value === "lth") {
      product.makeup.sort((a, b) => {
        return +a.price - Number(b.price);
      });

      append(product.makeup, container);
    }
  } else if (text === "SKIN") {
    if (value === "htl") {
      product.skin.sort((a, b) => {
        return +b.price - Number(a.price);
      });

      append(product.skin, container);
    }

    if (value === "lth") {
      product.skin.sort((a, b) => {
        return +a.price - Number(b.price);
      });

      append(product.skin, container);
    }
  } else if (text === "HAIR") {
    if (value === "htl") {
      product.hair.sort((a, b) => {
        return +b.price - Number(a.price);
      });

      append(product.hair, container);
    }

    if (value === "lth") {
      product.hair.sort((a, b) => {
        return +a.price - Number(b.price);
      });

      append(product.hair, container);
    }
  } else if (text === "PERSONAL") {
    if (value === "htl") {
      product.personal.sort((a, b) => {
        return +b.price - Number(a.price);
      });

      append(product.personal, container);
    }

    if (value === "lth") {
      product.personal.sort((a, b) => {
        return +a.price - Number(b.price);
      });

      append(product.personal, container);
    }
  } else if (text === "MOM & BABY CARE") {
    if (value === "htl") {
      product.kids.sort((a, b) => {
        return +b.price - Number(a.price);
      });

      append(product.kids, container);
    }

    if (value === "lth") {
      product.kids.sort((a, b) => {
        return +a.price - Number(b.price);
      });

      append(product.kids, container);
    }
  } else if (text === "FRAGRANCE") {
    if (value === "htl") {
      product.perfume.sort((a, b) => {
        return +b.price - Number(a.price);
      });

      append(product.perfume, container);
    }

    if (value === "lth") {
      product.perfume.sort((a, b) => {
        return +a.price - Number(b.price);
      });

      append(product.perfume, container);
    }
  } else if (text === "AYURVEDA") {
    if (value === "htl") {
      product.ayurveda.sort((a, b) => {
        return +b.price - Number(a.price);
      });

      append(product.ayurveda, container);
    }

    if (value === "lth") {
      product.ayurveda.sort((a, b) => {
        return +a.price - Number(b.price);
      });

      append(product.ayurveda, container);
    }
  }

  // sort by name
  if (value === "productName") {
    sortingData.sort((a, b) => {
      return a.title - b.title;
    });

    append(sortingData, container);
  }
}

function showlist() {
  count++;

  let div = document.getElementById("list");
  div.innerHTML = null;

  if (count % 2 === 0) {
    document.querySelector("#ctg>p>span").innerHTML = "+";
    div.innerHTML = null;
  } else {
    document.querySelector("#ctg>p>span").innerHTML = "&#8722;";

    let p1 = document.createElement("p");
    p1.innerText = "> Face";

    let p2 = document.createElement("p");
    p2.innerText = "> Eye";

    let p3 = document.createElement("p");
    p3.innerText = "> Lips";

    let p4 = document.createElement("p");
    p4.innerText = "> Nails";

    let p5 = document.createElement("p");
    p5.innerText = "> Toolbrushes";

    div.append(p1, p2, p3, p4, p5);
    // document.querySelector('#ctg').append(div)
  }
}

function displaySkin() {
  count1++;

  let div = document.querySelector("#skn>div");
  div.innerHTML = null;

  if (count1 % 2 === 0) {
    document.querySelector("#skn>p>span").innerHTML = "+";
    div.innerHTML = null;
  } else {
    document.querySelector("#skn>p>span").innerHTML = "&#8722;";

    let flied = document.createElement("fieldset");

    let div1 = document.createElement("div");
    let div2 = document.createElement("div");
    let div3 = document.createElement("div");
    let div4 = document.createElement("div");
    let div5 = document.createElement("div");
    let div6 = document.createElement("div");

    let input1 = document.createElement("input");
    input1.setAttribute("id", "cobination");
    input1.type = "checkbox";

    let label1 = document.createElement("label");
    label1.for = "cobination";
    label1.innerText = "Combination";
    div1.append(input1, label1);

    let input2 = document.createElement("input");
    input2.setAttribute("id", "dry");
    input2.type = "checkbox";

    let label2 = document.createElement("label");
    label2.for = "dry";
    label2.innerText = "Dry";
    div2.append(input2, label2);

    let input3 = document.createElement("input");
    input3.setAttribute("id", "normal");
    input3.type = "checkbox";

    let label3 = document.createElement("label");
    label3.for = "normal";
    label3.innerText = "Normal";
    div3.append(input3, label3);

    let input4 = document.createElement("input");
    input4.setAttribute("id", "oily");
    input4.type = "checkbox";

    let label4 = document.createElement("label");
    label4.for = "oily";
    label4.innerText = "Oily";
    div4.append(input4, label4);

    let input5 = document.createElement("input");
    input5.setAttribute("id", "sensitive");
    input5.type = "checkbox";

    let label5 = document.createElement("label");
    label5.for = "sensitive";
    label5.innerText = "Sensitive";
    div5.append(input5, label5);

    let input6 = document.createElement("input");
    input6.setAttribute("id", "all");
    input6.type = "checkbox";

    let label6 = document.createElement("label");
    label6.for = "all";
    label6.innerText = "All Skin Type";
    div6.append(input6, label6);

    flied.append(div1, div2, div3, div4, div5, div6);
    div.append(flied);
  }
}

function showprice() {
  count2++;

  let div = document.querySelector("#prc>div");
  div.innerHTML = null;

  if (count2 % 2 === 0) {
    document.querySelector("#prc>p>span").innerHTML = "+";
    div.innerHTML = null;
  } else {
    document.querySelector("#prc>p>span").innerHTML = "&#8722;";

    let flied = document.createElement("fieldset");

    let div1 = document.createElement("div");
    let div2 = document.createElement("div");
    let div3 = document.createElement("div");
    let div4 = document.createElement("div");

    let input1 = document.createElement("input");
    input1.setAttribute("id", "cobination");
    input1.type = "checkbox";

    let label1 = document.createElement("label");
    label1.for = "cobination";
    label1.innerText = "Below ₹1,000.00";
    div1.append(input1, label1);

    let input2 = document.createElement("input");
    input2.setAttribute("id", "dry");
    input2.type = "checkbox";

    let label2 = document.createElement("label");
    label2.for = "dry";
    label2.innerText = "₹1,000.00 - ₹2,000.00";
    div2.append(input2, label2);

    let input3 = document.createElement("input");
    input3.setAttribute("id", "normal");
    input3.type = "checkbox";

    let label3 = document.createElement("label");
    label3.for = "normal";
    label3.innerText = "2,000.00 - ₹3,000.00";
    div3.append(input3, label3);

    let input4 = document.createElement("input");
    input4.setAttribute("id", "oily");
    input4.type = "checkbox";

    let label4 = document.createElement("label");
    label4.for = "oily";
    label4.innerText = "3,000.00 and above";
    div4.append(input4, label4);

    flied.append(div1, div2, div3, div4);
    div.append(flied);
  }
}

function showbrand() {
  count3++;
  let div = document.querySelector("#brnd>div");
  div.innerHTML = null;

  if (count3 % 2 === 0) {
    document.querySelector("#brnd>p>span").innerHTML = "+";
    div.innerHTML = null;
  } else {
    document.querySelector("#brnd>p>span").innerHTML = "&#8722;";

    let flied = document.createElement("fieldset");

    let div1 = document.createElement("div");
    let div2 = document.createElement("div");
    let div3 = document.createElement("div");
    let div4 = document.createElement("div");
    let div5 = document.createElement("div");
    let div6 = document.createElement("div");
    let div7 = document.createElement("div");
    let div8 = document.createElement("div");
    let div9 = document.createElement("div");
    let div10 = document.createElement("div");

    let input1 = document.createElement("input");
    input1.setAttribute("id", "cobination");
    input1.type = "checkbox";

    let label1 = document.createElement("label");
    label1.for = "cobination";
    label1.innerText = "Lotus Organics";
    div1.append(input1, label1);

    let input2 = document.createElement("input");
    input2.setAttribute("id", "dry");
    input2.type = "checkbox";

    let label2 = document.createElement("label");
    label2.for = "dry";
    label2.innerText = "Blue Haven";
    div2.append(input2, label2);

    let input3 = document.createElement("input");
    input3.setAttribute("id", "normal");
    input3.type = "checkbox";

    let label3 = document.createElement("label");
    label3.for = "normal";
    label3.innerText = "Wow";
    div3.append(input3, label3);

    let input4 = document.createElement("input");
    input4.setAttribute("id", "oily");
    input4.type = "checkbox";

    let label4 = document.createElement("label");
    label4.for = "oily";
    label4.innerText = "Maybelline";
    div4.append(input4, label4);

    let input5 = document.createElement("input");
    input5.setAttribute("id", "sensitive");
    input5.type = "checkbox";

    let label5 = document.createElement("label");
    label5.for = "sensitive";
    label5.innerText = "LOreal Paris";
    div5.append(input5, label5);

    let input6 = document.createElement("input");
    input6.setAttribute("id", "all");
    input6.type = "checkbox";

    let label6 = document.createElement("label");
    label6.for = "all";
    label6.innerText = "Miss Claire";
    div6.append(input6, label6);

    let input7 = document.createElement("input");
    input7.setAttribute("id", "svn");
    input7.type = "checkbox";

    let label7 = document.createElement("label");
    label7.for = "svn";
    label7.innerText = "Himalaya";
    div7.append(input7, label7);

    let input8 = document.createElement("input");
    input8.setAttribute("id", "egt");
    input8.type = "checkbox";

    let label8 = document.createElement("label");
    label8.for = "egt";
    label8.innerText = "Lakeme";
    div8.append(input8, label8);

    let input9 = document.createElement("input");
    input9.setAttribute("id", "nine");
    input9.type = "checkbox";

    let label9 = document.createElement("label");
    label9.for = "nine";
    label9.innerText = "Mamaearth";
    div9.append(input9, label9);

    let input10 = document.createElement("input");
    input10.setAttribute("id", "ten");
    input10.type = "checkbox";

    let label10 = document.createElement("label");
    label10.for = "ten";
    label10.innerText = "O3+";
    div10.append(input10, label10);

    flied.append(div1, div2, div3, div4, div5, div6, div7, div8, div9, div10);
    div.append(flied);
  }
}

function showforml() {
  count4++;
  let div = document.querySelector("#forml>div");
  div.innerHTML = null;

  if (count4 % 2 === 0) {
    document.querySelector("#forml>p>span").innerHTML = "+";
    div.innerHTML = null;
  } else {
    document.querySelector("#forml>p>span").innerHTML = "&#8722;";

    let flied = document.createElement("fieldset");

    let div1 = document.createElement("div");
    let div2 = document.createElement("div");
    let div3 = document.createElement("div");
    let div4 = document.createElement("div");
    let div5 = document.createElement("div");
    let div6 = document.createElement("div");
    let div7 = document.createElement("div");
    let div8 = document.createElement("div");
    let div9 = document.createElement("div");
    let div10 = document.createElement("div");

    let input1 = document.createElement("input");
    input1.setAttribute("id", "cobination");
    input1.type = "checkbox";

    let label1 = document.createElement("label");
    label1.for = "cobination";
    label1.innerText = "Balm";
    div1.append(input1, label1);

    let input2 = document.createElement("input");
    input2.setAttribute("id", "dry");
    input2.type = "checkbox";

    let label2 = document.createElement("label");
    label2.for = "dry";
    label2.innerText = "Blush";
    div2.append(input2, label2);

    let input3 = document.createElement("input");
    input3.setAttribute("id", "normal");
    input3.type = "checkbox";

    let label3 = document.createElement("label");
    label3.for = "normal";
    label3.innerText = "Cleansing Milk";
    div3.append(input3, label3);

    let input4 = document.createElement("input");
    input4.setAttribute("id", "oily");
    input4.type = "checkbox";

    let label4 = document.createElement("label");
    label4.for = "oily";
    label4.innerText = "Cream";
    div4.append(input4, label4);

    let input5 = document.createElement("input");
    input5.setAttribute("id", "sensitive");
    input5.type = "checkbox";

    let label5 = document.createElement("label");
    label5.for = "sensitive";
    label5.innerText = "Eye Pad";
    div5.append(input5, label5);

    let input6 = document.createElement("input");
    input6.setAttribute("id", "all");
    input6.type = "checkbox";

    let label6 = document.createElement("label");
    label6.for = "all";
    label6.innerText = "Face Wash";
    div6.append(input6, label6);

    let input7 = document.createElement("input");
    input7.setAttribute("id", "svn");
    input7.type = "checkbox";

    let label7 = document.createElement("label");
    label7.for = "svn";
    label7.innerText = "Facial Kit";
    div7.append(input7, label7);

    let input8 = document.createElement("input");
    input8.setAttribute("id", "egt");
    input8.type = "checkbox";

    let label8 = document.createElement("label");
    label8.for = "egt";
    label8.innerText = "Powder";
    div8.append(input8, label8);

    let input9 = document.createElement("input");
    input9.setAttribute("id", "nine");
    input9.type = "checkbox";

    let label9 = document.createElement("label");
    label9.for = "nine";
    label9.innerText = "Kajal";
    div9.append(input9, label9);

    let input10 = document.createElement("input");
    input10.setAttribute("id", "ten");
    input10.type = "checkbox";

    let label10 = document.createElement("label");
    label10.for = "ten";
    label10.innerText = "Liner";
    div10.append(input10, label10);

    flied.append(div1, div2, div3, div4, div5, div6, div7, div8, div9, div10);
    div.append(flied);
  }
}

// subham start
let data = [
  {
    image:
      "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/2/7/277cf77missc00000081_1.jpg",
    title: "Miss Claire Eyelash Glue - Clear Tone",
    weight: "(50gm)",
    quantity: 1,
    id: "BBJ0003398",
    strikedOffPrice: "350.00",
    price: "322.00",
    discount: "8% Off",
    brand: "Miss Claire",
    discription: `Go long and strong in your lash-game with Miss Claire Eyelash Glue. Let’s get all your falsies in their place to slay all day long. This gentle eyelash adhesive is latex free, non-toxic and pH-balanced for safe use. It is waterproof and holds your eyelashes securely in place making them look natural and flawless. It features a handy bottle with an easy-to-use applicator and a formula that blends in seamlessly. Clear tone allows seamless bond between extension and natural lashes.
            MRP : 350
            Best Before : JAN 2024
            About the Brand: Presenting an entire colorful range of face, lips and eye cosmetics that enhance your beauty and amplify your daily make-up looks. Loved by makeup fans across India, Miss Claire cosmetics are of premier quality, trendy, affordable and are formulated using the finest ingredients that care for your skin. The products are manufactured in accordance with European Standards. Choose from a huge range of Miss Claire makeup and beauty products right from lipstick, bronzers, highlighters, foundation, eyeliners to concealers all available in highly pigmented formula and textures. Miss Claire makeup products are affordably priced, long lasting and suit all skin tones.
            Origin : Made In South Korea
            Name of Mfg / Importer / Brand: Eureka Cosmo Pvt. Ltd. Address of Mfg / Importer / Brand: Eureka Cosmo Pvt. Ltd. 13, Gokul Regency-Ii, Thakur Complex, Kandivali (E), Mumbai -400 101.`,
    productCategory: "Eyes",
    skinType: "All Skin Type",
    shades: "Peach Rose",
    multipleImages: [
      "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/2/7/277cf77missc00000081_1.jpg",
      "https://www.beautybebo.com/pub/media/catalog/produ…ae888adf23d57cf627ad/5/1/51ccwnye-ks._sl1094_.jpg",
    ],
    howToUse: `Step 1: Dot a thin layer of glue straight from the applicator along the band of the false lash from corner to corner.
Step 2: Wait 30 seconds for the adhesive to become sticky.
Step 3: Adhere the strip to your lash line and gently press it in place.
Step 4: Ensure the cap is secure post every use to avoid the glue from drying out.`,
  },
  {
    image:
      "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/3/6/3699c478906105612174-2.jpg",
    title: "Maybelline New York Fit Me Primer - Dewy+Smooth",
    weight: "(30ml)",
    quantity: 1,
    id: "BBJ0003397",
    strikedOffPrice: "549.00",
    price: "521.00",
    discount: "5% off",
    brand: "Maybelline",
    discription: `Go long and strong in your lash-game with Miss Claire Eyelash Glue. Let’s get all your falsies in their place to slay all day long. This gentle eyelash adhesive is latex free, non-toxic and pH-balanced for safe use. It is waterproof and holds your eyelashes securely in place making them look natural and flawless. It features a handy bottle with an easy-to-use applicator and a formula that blends in seamlessly. Clear tone allows seamless bond between extension and natural lashes.
            MRP : 350
            Best Before : JAN 2024
            About the Brand: Presenting an entire colorful range of face, lips and eye cosmetics that enhance your beauty and amplify your daily make-up looks. Loved by makeup fans across India, Miss Claire cosmetics are of premier quality, trendy, affordable and are formulated using the finest ingredients that care for your skin. The products are manufactured in accordance with European Standards. Choose from a huge range of Miss Claire makeup and beauty products right from lipstick, bronzers, highlighters, foundation, eyeliners to concealers all available in highly pigmented formula and textures. Miss Claire makeup products are affordably priced, long lasting and suit all skin tones.
            Origin : Made In South Korea
            Name of Mfg / Importer / Brand: Eureka Cosmo Pvt. Ltd. Address of Mfg / Importer / Brand: Eureka Cosmo Pvt. Ltd. 13, Gokul Regency-Ii, Thakur Complex, Kandivali (E), Mumbai -400 101.`,
    productCategory: "Eyes",
    skinType: "All Skin Type",
    shades: "Peach Rose",
    multipleImages: [
      "https://www.beautybebo.com/pub/media/catalog/product/cache/a19d5a96b74d37bf18297d1e71af48ed/5/b/5b990e16902395773146_3.jpg",
      "https://www.beautybebo.com/pub/media/catalog/product/cache/a19d5a96b74d37bf18297d1e71af48ed/5/b/5b990e16902395773146_2.jpg",
      "https://www.beautybebo.com/pub/media/catalog/product/cache/a19d5a96b74d37bf18297d1e71af48ed/5/b/5b990e16902395773146_4.jpg",
    ],
    howToUse: `Step 1: Dot a thin layer of glue straight from the applicator along the band of the false lash from corner to corner.
Step 2: Wait 30 seconds for the adhesive to become sticky.
Step 3: Adhere the strip to your lash line and gently press it in place.
Step 4: Ensure the cap is secure post every use to avoid the glue from drying out.`,
  },
  {
    image:
      "https://www.beautybebo.com/pub/media/catalog/product/cache/a19d5a96b74d37bf18297d1e71af48ed/6/9/6902395735908_0.jpg",
    title: "L Oreal Paris Infallible Full Wear Concealer",
    weight: "(15ml)",
    quantity: 1,
    id: "BBJ0003395",
    strikedOffPrice: "799.00",
    price: "735.00",
    discount: "8% Off",
    brand: "LOreal Paris",
    discription: `Go long and strong in your lash-game with Miss Claire Eyelash Glue. Let’s get all your falsies in their place to slay all day long. This gentle eyelash adhesive is latex free, non-toxic and pH-balanced for safe use. It is waterproof and holds your eyelashes securely in place making them look natural and flawless. It features a handy bottle with an easy-to-use applicator and a formula that blends in seamlessly. Clear tone allows seamless bond between extension and natural lashes.
            MRP : 350
            Best Before : JAN 2024
            About the Brand: Presenting an entire colorful range of face, lips and eye cosmetics that enhance your beauty and amplify your daily make-up looks. Loved by makeup fans across India, Miss Claire cosmetics are of premier quality, trendy, affordable and are formulated using the finest ingredients that care for your skin. The products are manufactured in accordance with European Standards. Choose from a huge range of Miss Claire makeup and beauty products right from lipstick, bronzers, highlighters, foundation, eyeliners to concealers all available in highly pigmented formula and textures. Miss Claire makeup products are affordably priced, long lasting and suit all skin tones.
            Origin : Made In South Korea
            Name of Mfg / Importer / Brand: Eureka Cosmo Pvt. Ltd. Address of Mfg / Importer / Brand: Eureka Cosmo Pvt. Ltd. 13, Gokul Regency-Ii, Thakur Complex, Kandivali (E), Mumbai -400 101.`,
    productCategory: "Eyes",
    skinType: "All Skin Type",
    shades: "Peach Rose",
    multipleImages: [
      "https://www.beautybebo.com/pub/media/catalog/product/cache/a19d5a96b74d37bf18297d1e71af48ed/6/9/6902395735908_0.jpg",
      "https://www.beautybebo.com/pub/media/catalog/product/cache/a19d5a96b74d37bf18297d1e71af48ed/a/2/a2860a56902395735908_1.jpg",
    ],
    howToUse: `Step 1: Dot a thin layer of glue straight from the applicator along the band of the false lash from corner to corner.
Step 2: Wait 30 seconds for the adhesive to become sticky.
Step 3: Adhere the strip to your lash line and gently press it in place.
Step 4: Ensure the cap is secure post every use to avoid the glue from drying out.`,
  },
  {
    image:
      "https://www.beautybebo.com/pub/media/catalog/product/cache/a19d5a96b74d37bf18297d1e71af48ed/5/1/51c18ra5qzs._sl1500_.jpg",
    title: "Faces Canada Ultime Pro Matte Play Eyeliner",
    weight: "(2.5ml)",
    quantity: 1,
    id: "BBJ0003393",
    strikedOffPrice: "649.00",
    price: "604.00",
    discount: "7% Off",
    brand: "Faces Canada",
    discription: `Go long and strong in your lash-game with Miss Claire Eyelash Glue. Let’s get all your falsies in their place to slay all day long. This gentle eyelash adhesive is latex free, non-toxic and pH-balanced for safe use. It is waterproof and holds your eyelashes securely in place making them look natural and flawless. It features a handy bottle with an easy-to-use applicator and a formula that blends in seamlessly. Clear tone allows seamless bond between extension and natural lashes.
            MRP : 350
            Best Before : JAN 2024
            About the Brand: Presenting an entire colorful range of face, lips and eye cosmetics that enhance your beauty and amplify your daily make-up looks. Loved by makeup fans across India, Miss Claire cosmetics are of premier quality, trendy, affordable and are formulated using the finest ingredients that care for your skin. The products are manufactured in accordance with European Standards. Choose from a huge range of Miss Claire makeup and beauty products right from lipstick, bronzers, highlighters, foundation, eyeliners to concealers all available in highly pigmented formula and textures. Miss Claire makeup products are affordably priced, long lasting and suit all skin tones.
            Origin : Made In South Korea
            Name of Mfg / Importer / Brand: Eureka Cosmo Pvt. Ltd. Address of Mfg / Importer / Brand: Eureka Cosmo Pvt. Ltd. 13, Gokul Regency-Ii, Thakur Complex, Kandivali (E), Mumbai -400 101.`,
    productCategory: "Eyes",
    skinType: "All Skin Type",
    shades: "Peach Rose",
    multipleImages: [
      "https://www.beautybebo.com/pub/media/catalog/product/cache/a19d5a96b74d37bf18297d1e71af48ed/5/1/51c18ra5qzs._sl1500_.jpg",
      "https://www.beautybebo.com/pub/media/catalog/product/cache/a19d5a96b74d37bf18297d1e71af48ed/6/1/61hxjstvins._sl1500_.jpg",
    ],
    howToUse: `Step 1: Dot a thin layer of glue straight from the applicator along the band of the false lash from corner to corner.
Step 2: Wait 30 seconds for the adhesive to become sticky.
Step 3: Adhere the strip to your lash line and gently press it in place.
Step 4: Ensure the cap is secure post every use to avoid the glue from drying out.`,
  },
  {
    image:
      "https://www.beautybebo.com/pub/media/catalog/product/cache/a19d5a96b74d37bf18297d1e71af48ed/1/2/122_1_2.jpg",
    title: "L Oreal Paris Infallible Lasting Primer",
    weight: "(30ml)",
    quantity: 1,
    id: "BBJ0003170",
    strikedOffPrice: "750.00",
    price: "690.00",
    discount: "8% Off",
    brand: "LOreal Paris",
    discription: `Go long and strong in your lash-game with Miss Claire Eyelash Glue. Let’s get all your falsies in their place to slay all day long. This gentle eyelash adhesive is latex free, non-toxic and pH-balanced for safe use. It is waterproof and holds your eyelashes securely in place making them look natural and flawless. It features a handy bottle with an easy-to-use applicator and a formula that blends in seamlessly. Clear tone allows seamless bond between extension and natural lashes.
            MRP : 350
            Best Before : JAN 2024
            About the Brand: Presenting an entire colorful range of face, lips and eye cosmetics that enhance your beauty and amplify your daily make-up looks. Loved by makeup fans across India, Miss Claire cosmetics are of premier quality, trendy, affordable and are formulated using the finest ingredients that care for your skin. The products are manufactured in accordance with European Standards. Choose from a huge range of Miss Claire makeup and beauty products right from lipstick, bronzers, highlighters, foundation, eyeliners to concealers all available in highly pigmented formula and textures. Miss Claire makeup products are affordably priced, long lasting and suit all skin tones.
            Origin : Made In South Korea
            Name of Mfg / Importer / Brand: Eureka Cosmo Pvt. Ltd. Address of Mfg / Importer / Brand: Eureka Cosmo Pvt. Ltd. 13, Gokul Regency-Ii, Thakur Complex, Kandivali (E), Mumbai -400 101.`,
    productCategory: "Eyes",
    skinType: "All Skin Type",
    shades: "Peach Rose",
    multipleImages: [
      "https://www.beautybebo.com/pub/media/catalog/product/cache/a19d5a96b74d37bf18297d1e71af48ed/1/2/122_1_2.jpg",
      "https://www.beautybebo.com/pub/media/catalog/product/cache/a19d5a96b74d37bf18297d1e71af48ed/1/2/123_1_2.jpg",
      "https://www.beautybebo.com/pub/media/catalog/product/cache/a19d5a96b74d37bf18297d1e71af48ed/1/2/124_1_1.jpg",
    ],
    howToUse: `Step 1: Dot a thin layer of glue straight from the applicator along the band of the false lash from corner to corner.
Step 2: Wait 30 seconds for the adhesive to become sticky.
Step 3: Adhere the strip to your lash line and gently press it in place.
Step 4: Ensure the cap is secure post every use to avoid the glue from drying out.`,
  },
  {
    image:
      "https://www.beautybebo.com/pub/media/catalog/product/cache/a19d5a96b74d37bf18297d1e71af48ed/s/w/sw126.jpg",
    title: "LOreal Paris Flash Cat Eye Eyeliner - Black",
    weight: "(0.6gm)",
    quantity: 1,
    id: "BBJ0002890",
    strikedOffPrice: "799.00",
    price: "751.00",
    discount: "6% Off",
    brand: "LOreal Paris",
    discription: `Go long and strong in your lash-game with Miss Claire Eyelash Glue. Let’s get all your falsies in their place to slay all day long. This gentle eyelash adhesive is latex free, non-toxic and pH-balanced for safe use. It is waterproof and holds your eyelashes securely in place making them look natural and flawless. It features a handy bottle with an easy-to-use applicator and a formula that blends in seamlessly. Clear tone allows seamless bond between extension and natural lashes.
            MRP : 350
            Best Before : JAN 2024
            About the Brand: Presenting an entire colorful range of face, lips and eye cosmetics that enhance your beauty and amplify your daily make-up looks. Loved by makeup fans across India, Miss Claire cosmetics are of premier quality, trendy, affordable and are formulated using the finest ingredients that care for your skin. The products are manufactured in accordance with European Standards. Choose from a huge range of Miss Claire makeup and beauty products right from lipstick, bronzers, highlighters, foundation, eyeliners to concealers all available in highly pigmented formula and textures. Miss Claire makeup products are affordably priced, long lasting and suit all skin tones.
            Origin : Made In South Korea
            Name of Mfg / Importer / Brand: Eureka Cosmo Pvt. Ltd. Address of Mfg / Importer / Brand: Eureka Cosmo Pvt. Ltd. 13, Gokul Regency-Ii, Thakur Complex, Kandivali (E), Mumbai -400 101.`,
    productCategory: "Eyes",
    skinType: "All Skin Type",
    shades: "Peach Rose",
    multipleImages: [
      "https://www.beautybebo.com/pub/media/catalog/product/cache/a19d5a96b74d37bf18297d1e71af48ed/s/w/sw126.jpg",
      "https://www.beautybebo.com/pub/media/catalog/product/cache/a19d5a96b74d37bf18297d1e71af48ed/s/w/sw127.jpg",
    ],
    howToUse: `Step 1: Dot a thin layer of glue straight from the applicator along the band of the false lash from corner to corner.
Step 2: Wait 30 seconds for the adhesive to become sticky.
Step 3: Adhere the strip to your lash line and gently press it in place.
Step 4: Ensure the cap is secure post every use to avoid the glue from drying out.`,
  },
  {
    image:
      "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/l/l/lll_1.jpg",
    title: "LOreal Paris Kajal Magique - Supreme Black",
    weight: "(.35gm)",
    quantity: 1,
    id: "BBJ0002876",
    strikedOffPrice: "290.00",
    price: "261.00",
    discount: "10% Off",
    brand: "LOreal Paris",
    discription: `Go long and strong in your lash-game with Miss Claire Eyelash Glue. Let’s get all your falsies in their place to slay all day long. This gentle eyelash adhesive is latex free, non-toxic and pH-balanced for safe use. It is waterproof and holds your eyelashes securely in place making them look natural and flawless. It features a handy bottle with an easy-to-use applicator and a formula that blends in seamlessly. Clear tone allows seamless bond between extension and natural lashes.
            MRP : 350
            Best Before : JAN 2024
            About the Brand: Presenting an entire colorful range of face, lips and eye cosmetics that enhance your beauty and amplify your daily make-up looks. Loved by makeup fans across India, Miss Claire cosmetics are of premier quality, trendy, affordable and are formulated using the finest ingredients that care for your skin. The products are manufactured in accordance with European Standards. Choose from a huge range of Miss Claire makeup and beauty products right from lipstick, bronzers, highlighters, foundation, eyeliners to concealers all available in highly pigmented formula and textures. Miss Claire makeup products are affordably priced, long lasting and suit all skin tones.
            Origin : Made In South Korea
            Name of Mfg / Importer / Brand: Eureka Cosmo Pvt. Ltd. Address of Mfg / Importer / Brand: Eureka Cosmo Pvt. Ltd. 13, Gokul Regency-Ii, Thakur Complex, Kandivali (E), Mumbai -400 101.`,
    productCategory: "Eyes",
    skinType: "All Skin Type",
    shades: "Peach Rose",
    multipleImages: [
      "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/l/l/lll_1.jpg",
      "https://www.beautybebo.com/pub/media/catalog/product/cache/a19d5a96b74d37bf18297d1e71af48ed/1/2/123_1_1.jpg",
      "https://www.beautybebo.com/pub/media/catalog/product/cache/a19d5a96b74d37bf18297d1e71af48ed/2/3/23_11.jpg",
    ],
    howToUse: `Step 1: Dot a thin layer of glue straight from the applicator along the band of the false lash from corner to corner.
Step 2: Wait 30 seconds for the adhesive to become sticky.
Step 3: Adhere the strip to your lash line and gently press it in place.
Step 4: Ensure the cap is secure post every use to avoid the glue from drying out.`,
  },]
  localStorage.setItem("cartData",JSON.stringify(data))
var prodData = JSON.parse(localStorage.getItem("cartData"));

const searchWrapper = document.querySelector(".search-input");
const inputBox = searchWrapper.querySelector(".search-input input");
const suggBox = searchWrapper.querySelector(".autocom-box");
const icon = searchWrapper.querySelector(".icon");
let linkTag = searchWrapper.querySelector("a");
let webLink = "";

// if user press any key and release
inputBox.onkeyup = function (e) {
  let userData = e.target.value; //user enetered product name
  let emptyArray = [];
  if (userData) {
    icon.onclick = function () {
      linkTag.setAttribute("href", webLink);
      linkTag.click();
    };
    emptyArray = prodData.filter((data) => {
      //filtering array value and user characters to lowercase and return only those words which are start with user enetered chars
      return data.title
        .toLocaleLowerCase()
        .startsWith(userData.toLocaleLowerCase());
    });
    emptyArray = emptyArray.map((data) => {
      // passing return data inside li tag
      return (data = "<li>" + data.title + "</li>");
    });
    searchWrapper.classList.add("active"); //show autocomplete box
    showSuggestions(emptyArray);
    let allList = suggBox.querySelectorAll("li");
    for (let i = 0; i < allList.length; i++) {
      //adding onclick attribute in all li tag
      allList[i].setAttribute("onclick", "select(this)");
    }
  } else {
    searchWrapper.classList.remove("active"); //hide autocomplete box
  }
};

function select(element) {
  let selectData = element.textContent;
  inputBox.value = selectData;
  icon.onclick = () => {
    var out = prodData.filter(function (el, i) {
      return el.title == selectData;
    });
    console.log(out);
    localStorage.setItem("searchedItem", JSON.stringify(out[0]));
    linkTag.setAttribute("href", webLink);
    linkTag.click();
  };
  searchWrapper.classList.remove("active");
}

function showSuggestions(list) {
  let listData;
  if (!list.length) {
    userValue = inputBox.value;
    listData = "<li>" + userValue + "</li>";
  } else {
    listData = list.join("");
  }
  suggBox.innerHTML = listData;
}
document.getElementById("cart-div").addEventListener("click",redi)
function redi(){
  window.location.href="/BB/BeautyBebo-clone/addCart.html"
}





let amnt = localStorage.getItem("totalamt");
dis(amnt);
function dis(amnt){
  
  if(amnt===null){
    document.getElementById("irfancart").innerText="0.0"
  }
  else{
     document.getElementById("irfancart").innerHTML = amnt;
}
  }

