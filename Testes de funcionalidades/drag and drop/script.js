
/** help */
function log(message){
    console.log('> ' + message);
}



/** app */
const cards = document.querySelectorAll('.card');

const dropzones = document.querySelectorAll('.dropzone');

cards.forEach(card => {
    card.addEventListener('dragstart', dragstart)
    card.addEventListener('dragend', dragend)
})


function dragstart(){
    //log('> CARD: Start dragging')

    dropzones.forEach( dropzone => dropzone.classList.add('highlight'))

    this.classList.add('is-dragging')

}

function dragend(){

    //log('> CARD: Stop drag!')


    dropzones.forEach( dropzone => dropzone.classList.remove('highlight'))

    // this é o card
    this.classList.remove('is-dragging')
}


/** local onde vou soltar os cartoes */
dropzones.forEach(dropzone => {
    dropzone.addEventListener('dragenter', dragenter)
    dropzone.addEventListener('dragover', dragover)
    dropzone.addEventListener('dragleave', dragleave)

})

function dragenter(){
    // log('> DROPZONE: Enter in zone')
}

function dragover(){
    log('> DROPZONE: Over')

    // this é o dropzone
    this.classList.add('over')

    // pegue o cartao
    const cardBeingDragged = document.querySelector('.is-dragging')

    this.appendChild(cardBeingDragged)

}

function dragleave(){
    //log('> DROPZONE: Leave')
    this.classList.remove('over')
}

