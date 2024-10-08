
const navList  = document.getElementById('navbar__list');
const sections = document.querySelectorAll('section');

function createList(section) {
	const newList = document.createElement('li');
	newList.innerHTML = `<a href="#${section.getAttribute('id')}" class="menu__link">
	${section.getAttribute('data-nav')}</a>`;
	
	return newList;
}

function makeActive(item) {
	const current = document.querySelector('.active');
	if (current !== null) {
		current.classList.remove('active');
	}
	item.classList.add('active');
}

function createNav(navList, sections) {
	for(let section of sections) {
		const secList = createList(section);
		
		navList.appendChild(secList);
	}
}
createNav(navList, sections);

const navLinks = document.querySelectorAll('.menu__link');

function makeLinkActive(items) {
	for (let item of items) {
		item.addEventListener('click', function() {
			makeActive(item);
		});
	}
}
makeLinkActive(navLinks);

function activeWhenScroll(sections, navLinks) {
	const options = {
		root: null,
		rootMargin: '0px',
		threshold: 0.63,
	};
	
	for (let i = 0; i < sections.length; i++) {
	const observer = new IntersectionObserver(function(entries) {
		for(let entry of entries) {
			if(entry.isIntersecting) {
				navLinks[i].classList.add('active');
				sections[i].classList.add('your-active-class');
			} else {
				navLinks[i].classList.remove('active');
				sections[i].className = ' ';
			}
		}
	}, options);
	observer.observe(sections[i]);
	}
}
activeWhenScroll(sections, navLinks);	