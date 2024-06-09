function openModal(imageSrc) {
  const modal = document.getElementById('myModal')
  const modalImg = document.getElementById('modalImage')
  modal.style.display = 'block'
  modalImg.src = imageSrc
}

function closeModal() {
  const modal = document.getElementById('myModal')
  modal.style.display = 'none'
}

window.onclick = (e) => {
  const modal = document.getElementById('myModal')
  if (e.target == modal) {
    modal.style.display = 'none'
  }
}
