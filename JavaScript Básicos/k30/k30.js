const tracks = [
  { title: 'Enter Sandman', genre: 'Metal' },
  { title: 'Back in Black', genre: 'Rock' },
  { title: 'Bohemian Rhapsody', genre: 'Rock' },
  { title: 'Blinding Lights', genre: 'Pop' },
  { title: 'Old Town Road', genre: 'Country' },
  { title: 'Smells Like Teen Spirit', genre: 'Grunge' },
  { title: 'Bad Guy', genre: 'Pop' },
  { title: 'Thunderstruck', genre: 'Rock' },
  { title: 'Hotel California', genre: 'Rock' },
  { title: 'Stairway to Heaven', genre: 'Rock' }
];

const cancionesGenero = {

}

for (cancion of tracks) {

  if (cancionesGenero.hasOwnProperty(cancion.genre)) {

    cancionesGenero[cancion.genre].push(cancion.title)
  } else {
    cancionesGenero[cancion.genre]= [cancion.title]
  }

}
console.log(cancionesGenero)