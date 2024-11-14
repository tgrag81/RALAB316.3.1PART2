//Add from Assignment Menu Data Structure
var menuLinks = [
    {
        text: 'about',
        href: '/about'
    },
    {
        text: 'catalog',
        href: '/catalog'
    },
    {
        text: 'orders',
        href: '/orders'
    },
    {
        text: 'account',
        href: '/account'
    }
];
const topMenuEl = document.getElementById('top-menu');
menuLinks.forEach((link)=>{
    const linkEl = document.createElement('a');
    linkEl.setAttribute('href', link.href);
    linkEl.textContent = link.text;
    topMenuEl.appendChild(linkEl);
});
//Added after assigment instructions
const mainEl = document.querySelector('main');
mainEl.style.backgroundColor = 'var(--main-bg)';
mainEl.innerHTML = '<h1>DOM Manipulation</h1>';
mainEl.classList.add('.flex-ctr');
//Part 2: Creating a Menu Bar
//Next, create a blank menu bar that we can use to later add some interactivity to the page:
//Select and cache the <nav id="top-menu"> element in a variable named topMenuEl.
//Set the height of the topMenuEl element to be 100%.
//Set the background color of topMenuEl to the value stored in the --top-menu-bg CSS custom property.
//Add a class of flex-around to topMenuEl.
//Progress Check - Here's what the page should look like so far:
topMenuEl.style.height = '100%';
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';
topMenuEl.classList.add('flex-around');

//# sourceMappingURL=index.c36f364e.js.map
