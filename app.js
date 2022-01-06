new Vue({
  el: '#app',
  vuetify: new Vuetify(),
  data: {
    title: 'This is a track picker for ACC GT Series',
      tracks: [
        {
          title: 'Barcelona',
          length: '4.6',
          img: 'https://racetrackart.de/media/catalog/product/cache/1/thumbnail/960x/17f82f742ffe127f42dca9de82fb58b1/c/a/catalunya_spain_1024x768.jpg',
        },
        {
          title: 'Silverstone',
          length: '6.4',
          img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Circuit_Silverstone_2011.svg/1280px-Circuit_Silverstone_2011.svg.png'
        },
        {
          title: 'Nürburgring',
          length: '5.1',
          img: 'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Germany_Circuit.png.transform/9col/image.png'
        },
      ]
  },
  methods: {
    deleteRandomMap: function() {
      const indexToDelete = Math.floor(Math.random() * this.tracks.length);
      this.tracks.splice(indexToDelete, 1)
    }
  }
})
