const racetracks = [
  {
    title: 'Donington Park',
    length: '7.0',
    img: 'https://cdn.discordapp.com/attachments/826345100031819787/948512891957563433/DoningtonPark.JPG',
  },
  {
    title: 'Laguna Seca',
    length: '5.8',
    img: 'https://cdn.discordapp.com/attachments/826345100031819787/948512892209201172/LagunaSeca.JPG'
  },
  {
    title: 'Brands Hatch',
    length: '5.8',
    img: 'https://cdn.discordapp.com/attachments/826345100031819787/948512892427329556/BrandsHatch.JPG'
  },
  {
    title: 'Zolder',
    length: '6.2',
    img: 'https://cdn.discordapp.com/attachments/826345100031819787/948512892670591036/Zolder.JPG'
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
