
const cards = document.querySelector('.cards');
const list = [];


fetch('directory.json')  //feed the required arguments, the URL 
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const companies = jsonObject['companies'];
        companies.forEach(displayCompanies);
    });

function displayCompanies(company) {
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let portrait = document.createElement('img');
    let name= document.createElement('h3');
    let address = document.createElement('h3');
    let phone = document.createElement('h4');
    let website = document.createElement('h5');
    let membership = document.createElement('p');

    portrait.setAttribute('src', company.image);
    portrait.setAttribute('alt', `Portrait of ${company.name}`);
    portrait.setAttribute('loading', 'lazy');
    h2.textContent = `${company.name}`;
    address.textContent = `${company.address}`;
    membership.textContent = `Membership: ${company.membership}`;
    website.textContent = `${company.website}`;
    phone.textContent = `${company.phone}`;

    card.appendChild(h2);
    card.appendChild(portrait);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(website);
    card.appendChild(membership);

    document.querySelector('div.cards').appendChild(card);
}