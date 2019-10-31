const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

const myContent = {
  "cta": {
    "h1": "JS vs <br /> THE DOM",
    "button": "Fight",
    "img-src": "https://images.unsplash.com/photo-1552072092-7f9b8d63efcb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=960&q=70"
  },
  "main-content": {
    "middle-img-src":"https://images.unsplash.com/photo-1484575639045-6a7fb6632f8d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=960&q=70"
  }
}

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const navBar = document.querySelector('header nav');

let n = 0;
for (k in siteContent.nav){
  if(n < 6){
    navBar.querySelector('a:nth-child('+ (n+1) +')').textContent = `${siteContent['nav'][k]}`;
  }
  n++;
}

const homeLink = document.createElement('a');
homeLink.setAttribute('href', '#')
homeLink.textContent = 'Home';
document.querySelector('header nav').prepend(homeLink)

const SignUpLink = document.createElement('a');
SignUpLink.setAttribute('href', '#');
SignUpLink.textContent = 'Sign Up';
document.querySelector('header nav').append(SignUpLink)

const navLinks = navBar.querySelectorAll('a');
navLinks.forEach(el => {
  el.style.color = "green";
});

const cta = document.querySelector('.cta');
let ctaH1 = cta.querySelector('.cta-text h1').textContent = siteContent["cta"]["h1"];
let ctaBtn = cta.querySelector(' .cta-text button').textContent = siteContent["cta"]["button"];
let ctaImg = cta.querySelector('img').src = siteContent["cta"]["img-src"];

const mainContent = document.querySelector('.main-content');
let mainTopContent = mainContent.querySelector('.top-content');
let topContentH4 = mainTopContent.querySelector('div:first-child h4').textContent = siteContent["main-content"]["features-h4"];
let topContentP = mainTopContent.querySelector('div:first-child p').textContent =  siteContent["main-content"]["features-content"];

let topContentH42 = mainTopContent.querySelector('div:nth-child(2) h4').textContent = siteContent["main-content"]["about-h4"];
let topContentP2 = mainTopContent.querySelector('div:nth-child(2) p').textContent =  siteContent["main-content"]["about-content"];

let mainMiddleImg = mainContent.querySelector('.middle-img').setAttribute('src', siteContent["main-content"]["middle-img-src"]);

let mainBottomContent = mainContent.querySelector('.bottom-content');
let mainBottomFirst = mainBottomContent.querySelector('div:first-child');
let mainBottomFirstH4 = mainBottomFirst.querySelector('h4').textContent = siteContent['main-content']['services-h4'];
let mainBottomFirstP = mainBottomFirst.querySelector('p').textContent = siteContent['main-content']['services-content'];;


let mainBottomTwo = mainBottomContent.querySelector('div:nth-child(2)');
let mainBottomTwoH4 = mainBottomTwo.querySelector('h4').textContent = siteContent['main-content']['product-h4'];
let mainBottomTwoP = mainBottomTwo.querySelector('p').textContent = siteContent['main-content']['product-content'];;

let mainBottomLast = mainBottomContent.querySelector('div:last-child');
let mainBottomLastH4 = mainBottomLast.querySelector('h4').textContent = siteContent['main-content']['vision-h4'];
let mainBottomLastP = mainBottomLast.querySelector('p').textContent = siteContent['main-content']['vision-content'];

const contact = document.querySelector('.contact');
let contactTitle = contact.querySelector('h4:nth-child(1)').textContent = siteContent['contact']['contact-h4'];
let contactAddress = contact.querySelector('p:nth-of-type(1)').textContent = siteContent['contact']['address'];
let contactPhone = contact.querySelector('p:nth-last-child(2)').textContent = siteContent['contact']['phone'];
let contactEmail = contact.querySelector('p:last-child').textContent = siteContent['contact']['email'];

const footer = document.querySelector('footer p').textContent = siteContent['footer']['copyright'];

// Style Updates
const h4Select = document.querySelectorAll('h4');
h4Select.forEach(el => {
  el.style.textAlign = 'center';
});

document.querySelector('.top-content').style.flexDirection = "row-reverse";
document.querySelector('.bottom-content').style.flexDirection = "row-reverse";

document.querySelector('button').addEventListener('click', function(){
  document.querySelector('body').style.backgroundColor = "black";
  document.querySelector('body').style.color = "white";
  document.querySelector('.main-content').style.borderColor = "white";
  document.querySelector('#middle-img').setAttribute('src', myContent['main-content']['middle-img-src'])
  document.querySelector('#middle-img').style.width = "100%";

  document.querySelector('.top-content').style.flexDirection = "row";
  document.querySelector('.bottom-content').style.flexDirection = "row";

  const navLinks = navBar.querySelectorAll('a');
  navLinks.forEach(el => {
    el.style.color = "red";
  });

  let ctaH1 = cta.querySelector('.cta-text h1').innerHTML = myContent["cta"]["h1"];
  let ctaBtn = cta.querySelector(' .cta-text button').textContent = myContent["cta"]["button"];
  let ctaImg = cta.querySelector('img').src = myContent["cta"]["img-src"];
  document.querySelector('#cta-img').style.width = "50%";
  document.querySelector('#cta-img').style.height = "auto";
  document.querySelector('#cta-img').style.borderRadius = "100%";
  
})