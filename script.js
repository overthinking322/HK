function showContent(id) {
	const sections = document.querySelectorAll('.wrapper')
	sections.forEach(section => (section.style.display = 'none'))
	document.getElementById(id).style.display = 'block'

	if (id === 'gallery') {
		loadGallery()
	}
}

function loadGallery() {
	const gallery = document.querySelector('.gallery-grid')
	if (gallery.children.length > 0) return

	for (let i = 1; i <= 20; i++) {
		const img = document.createElement('img')
		img.src = `jpg/hello_kitty${i}.jpg`
		img.alt = `Hello Kitty ${i}`
		gallery.appendChild(img)
	}
}
