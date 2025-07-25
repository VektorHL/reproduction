import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'


import { createVuetify } from "vuetify";

import "vuetify/styles";

import '@mdi/font/css/materialdesignicons.css';

import { aliases, mdi } from 'vuetify/iconsets/mdi';
import * as components from 'vuetify/components';


import * as directives from 'vuetify/directives';

const vuetify = createVuetify({
  components,
  directives,

  icons: {
    defaultSet: "mdi",
    aliases,
    sets: {
      mdi
    }
  },
  theme: {
    defaultTheme: 'light',
  },

});



const app = createApp(App)

app.use(vuetify);

app.mount('#app')


