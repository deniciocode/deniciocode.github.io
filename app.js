const racetracks = [
  {
    title: 'Spa-Francorchamps',
    length: '7.0',
    img: 'https://cdn.discordapp.com/attachments/912445486877790238/943533510260559902/Spa.jpg',
  },
  {
    title: 'Suzuka',
    length: '5.8',
    img: 'https://cdn.discordapp.com/attachments/912445486877790238/943533510029897759/Suzuka.jpg'
  },
  {
    title: 'Paul Ricard',
    length: '5.8',
    img: 'https://cdn.discordapp.com/attachments/912445486877790238/943533510529007756/Paul_Ricard.jpg'
  },
  {
    title: 'Mount Panorama',
    length: '6.2',
    img: 'https://cdn.discordapp.com/attachments/912445486877790238/943533510742929438/Mount_Panorama.jpg'
  },
]
const app = Vue.createApp({
  el: '#app',
  beforeMount() {
    this.setTrackOnRandomSpots()
  },
  components: {
    "p-card": primevue.card,
    "p-button": primevue.button,
    'p-image': primevue.image,
    "p-inputnumber": primevue.inputnumber
  },
  data() {
    return {
      title: 'This is a track picker for ACC GT Series',
      randomRunner: 5,
      started: false,
      tracks: [],
    }
  },
  methods: {
    deleteRandomMap: function() {
      const indexToDelete = Math.floor(Math.random() * this.tracks.length);
      this.tracks.splice(indexToDelete, 1)
    },
    setTrackOnRandomSpots: function() {
      const len = racetracks.length
      let copyOfTracks = [...racetracks]
      this.tracks = []
      for (let i = 0; i < len; i++) {
        const indexToDelete = Math.floor(Math.random() * (len - i));
        let track = copyOfTracks.splice(indexToDelete, 1)
        this.tracks.push(track[0])
      }
    },
    repeatRandomSetup: function() {
      for (let i = 0; i < this.randomRunner; i++) {
        this.setTrackOnRandomSpots()
      }
      this.started = true;
    }
  }
})

app.use(primevue.config.default)
app.mount('#app')
