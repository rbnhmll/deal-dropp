import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    searchResults: [
      {
        name: 'A book',
        url:
          'https://www.amazon.ca/Echo-2nd-Generation-Charcoal-Fabric/dp/B0749ZSPN7/ref=sr_1_1?ie=UTF8&qid=1515769286&sr=8-1&keywords=alexa',
        price: '7.99',
        imageSRC: 'http://lorempixel.com/400/400/',
      },
      {
        name: 'A movie',
        url:
          'https://www.amazon.ca/Echo-2nd-Generation-Charcoal-Fabric/dp/B0749ZSPN7/ref=sr_1_1?ie=UTF8&qid=1515769286&sr=8-1&keywords=alexa',
        price: '9.99',
        imageSRC: 'http://lorempixel.com/400/400/',
      },
      {
        name: 'A horse',
        url:
          'https://www.amazon.ca/Echo-2nd-Generation-Charcoal-Fabric/dp/B0749ZSPN7/ref=sr_1_1?ie=UTF8&qid=1515769286&sr=8-1&keywords=alexa',
        price: '10900.99',
        imageSRC: 'http://lorempixel.com/400/400/',
      },
    ],
    watchItems: [
      {
        name: 'Amazon Alexa',
        url:
          'https://www.amazon.ca/Echo-2nd-Generation-Charcoal-Fabric/dp/B0749ZSPN7/ref=sr_1_1?ie=UTF8&qid=1515769286&sr=8-1&keywords=alexa',
        price: '129.99',
        imageSRC: 'http://lorempixel.com/400/400/',
      },
      {
        name: 'Amazon Fire',
        url:
          'https://www.amazon.ca/Echo-2nd-Generation-Charcoal-Fabric/dp/B0749ZSPN7/ref=sr_1_1?ie=UTF8&qid=1515769286&sr=8-1&keywords=alexa',
        price: '99.99',
        imageSRC: 'http://lorempixel.com/400/400/',
      },
      {
        name: 'Amazon Echo',
        url:
          'https://www.amazon.ca/Echo-2nd-Generation-Charcoal-Fabric/dp/B0749ZSPN7/ref=sr_1_1?ie=UTF8&qid=1515769286&sr=8-1&keywords=alexa',
        price: '109.99',
        imageSRC: 'http://lorempixel.com/400/400/',
      },
    ],
    popularDropps: [
      {
        name: 'Amazon Alexa',
        url:
          'https://www.amazon.ca/Echo-2nd-Generation-Charcoal-Fabric/dp/B0749ZSPN7/ref=sr_1_1?ie=UTF8&qid=1515769286&sr=8-1&keywords=alexa',
        price: '129.99',
        imageSRC: 'http://lorempixel.com/400/400/',
      },
      {
        name: 'Amazon Fire',
        url:
          'https://www.amazon.ca/Echo-2nd-Generation-Charcoal-Fabric/dp/B0749ZSPN7/ref=sr_1_1?ie=UTF8&qid=1515769286&sr=8-1&keywords=alexa',
        price: '99.99',
        imageSRC: 'http://lorempixel.com/400/400/',
      },
      {
        name: 'Amazon Echo',
        url:
          'https://www.amazon.ca/Echo-2nd-Generation-Charcoal-Fabric/dp/B0749ZSPN7/ref=sr_1_1?ie=UTF8&qid=1515769286&sr=8-1&keywords=alexa',
        price: '109.99',
        imageSRC: 'http://lorempixel.com/400/400/',
      },
    ],
    recentDropps: [
      {
        name: 'Amazon Alexa',
        url:
          'https://www.amazon.ca/Echo-2nd-Generation-Charcoal-Fabric/dp/B0749ZSPN7/ref=sr_1_1?ie=UTF8&qid=1515769286&sr=8-1&keywords=alexa',
        price: '129.99',
        imageSRC: 'http://lorempixel.com/400/400/',
      },
      {
        name: 'Amazon Fire',
        url:
          'https://www.amazon.ca/Echo-2nd-Generation-Charcoal-Fabric/dp/B0749ZSPN7/ref=sr_1_1?ie=UTF8&qid=1515769286&sr=8-1&keywords=alexa',
        price: '99.99',
        imageSRC: 'http://lorempixel.com/400/400/',
      },
      {
        name: 'Amazon Echo',
        url:
          'https://www.amazon.ca/Echo-2nd-Generation-Charcoal-Fabric/dp/B0749ZSPN7/ref=sr_1_1?ie=UTF8&qid=1515769286&sr=8-1&keywords=alexa',
        price: '109.99',
        imageSRC: 'http://lorempixel.com/400/400/',
      },
    ],
  },
  getters: {},
  mutations: {},
});

export default store;
