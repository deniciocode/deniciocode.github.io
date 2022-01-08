new Vue({
  el: '#app',
  vuetify: new Vuetify(),
  data: {
    title: 'This is a track picker for ACC GT Series',
      tracks: [
        {
          title: 'Monza',
          length: '5.7',
          img: 'https://cdn.discordapp.com/attachments/826345100031819787/929131992505802872/Monza.JPG',
        },
        {
          title: 'Misano',
          length: '4.2',
          img: 'https://cdn.discordapp.com/attachments/826345100031819787/929131992275095623/Misano.JPG'
        },
        {
          title: 'Kyalami',
          length: '4.5',
          img: 'https://cdn.discordapp.com/attachments/826345100031819787/929131992023445544/Kyalami.JPG'
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
