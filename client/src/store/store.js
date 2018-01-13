import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    searchParams: {
      query: '',
      providers: [],
    },
    searchResults: [
      {
        name: 'A book',
        url:
          'https://www.amazon.ca/Echo-2nd-Generation-Charcoal-Fabric/dp/B0749ZSPN7/ref=sr_1_1?ie=UTF8&qid=1515769286&sr=8-1&keywords=alexa',
        price: '7.99',
        imageSRC: 'http://via.placeholder.com/400x400',
      },
      {
        name: 'A teddy',
        url:
          'https://www.amazon.ca/Echo-2nd-Generation-Charcoal-Fabric/dp/B0749ZSPN7/ref=sr_1_1?ie=UTF8&qid=1515769286&sr=8-1&keywords=alexa',
        price: '17.99',
        imageSRC: 'http://via.placeholder.com/400x400',
      },
      {
        name: 'A movie',
        url:
          'https://www.amazon.ca/Echo-2nd-Generation-Charcoal-Fabric/dp/B0749ZSPN7/ref=sr_1_1?ie=UTF8&qid=1515769286&sr=8-1&keywords=alexa',
        price: '9.99',
        imageSRC: 'http://via.placeholder.com/400x400',
      },
      {
        name: 'A Pony',
        url:
          'https://www.amazon.ca/Echo-2nd-Generation-Charcoal-Fabric/dp/B0749ZSPN7/ref=sr_1_1?ie=UTF8&qid=1515769286&sr=8-1&keywords=alexa',
        price: '10900.99',
        imageSRC: 'http://via.placeholder.com/400x400',
      },
    ],
    watchedItems: [
      {
        name: 'Amazon Alexa',
        url:
          'https://www.amazon.ca/Echo-2nd-Generation-Charcoal-Fabric/dp/B0749ZSPN7/ref=sr_1_1?ie=UTF8&qid=1515769286&sr=8-1&keywords=alexa',
        price: '129.99',
        imageSRC: 'http://via.placeholder.com/400x400',
      },
      {
        name: 'Amazon Fire',
        url:
          'https://www.amazon.ca/Echo-2nd-Generation-Charcoal-Fabric/dp/B0749ZSPN7/ref=sr_1_1?ie=UTF8&qid=1515769286&sr=8-1&keywords=alexa',
        price: '99.99',
        imageSRC: 'http://via.placeholder.com/400x400',
      },
      {
        name: 'Amazon Echo',
        url:
          'https://www.amazon.ca/Echo-2nd-Generation-Charcoal-Fabric/dp/B0749ZSPN7/ref=sr_1_1?ie=UTF8&qid=1515769286&sr=8-1&keywords=alexa',
        price: '109.99',
        imageSRC: 'http://via.placeholder.com/400x400',
      },
    ],
    popularDropps: [
      {
        name: 'Amazon Alexa',
        url:
          'https://www.amazon.ca/Echo-2nd-Generation-Charcoal-Fabric/dp/B0749ZSPN7/ref=sr_1_1?ie=UTF8&qid=1515769286&sr=8-1&keywords=alexa',
        price: '129.99',
        imageSRC: 'http://via.placeholder.com/400x400',
      },
      {
        name: 'Amazon Fire',
        url:
          'https://www.amazon.ca/Echo-2nd-Generation-Charcoal-Fabric/dp/B0749ZSPN7/ref=sr_1_1?ie=UTF8&qid=1515769286&sr=8-1&keywords=alexa',
        price: '99.99',
        imageSRC: 'http://via.placeholder.com/400x400',
      },
      {
        name: 'Amazon Echo',
        url:
          'https://www.amazon.ca/Echo-2nd-Generation-Charcoal-Fabric/dp/B0749ZSPN7/ref=sr_1_1?ie=UTF8&qid=1515769286&sr=8-1&keywords=alexa',
        price: '109.99',
        imageSRC: 'http://via.placeholder.com/400x400',
      },
    ],
    recentDropps: [
      {
        name: 'Amazon Alexa',
        url:
          'https://www.amazon.ca/Echo-2nd-Generation-Charcoal-Fabric/dp/B0749ZSPN7/ref=sr_1_1?ie=UTF8&qid=1515769286&sr=8-1&keywords=alexa',
        price: '129.99',
        imageSRC: 'http://via.placeholder.com/400x400',
      },
      {
        name: 'Amazon Fire',
        url:
          'https://www.amazon.ca/Echo-2nd-Generation-Charcoal-Fabric/dp/B0749ZSPN7/ref=sr_1_1?ie=UTF8&qid=1515769286&sr=8-1&keywords=alexa',
        price: '99.99',
        imageSRC: 'http://via.placeholder.com/400x400',
      },
      {
        name: 'Amazon Echo',
        url:
          'https://www.amazon.ca/Echo-2nd-Generation-Charcoal-Fabric/dp/B0749ZSPN7/ref=sr_1_1?ie=UTF8&qid=1515769286&sr=8-1&keywords=alexa',
        price: '109.99',
        imageSRC: 'http://via.placeholder.com/400x400',
      },
    ],
  },
  getters: {},
  mutations: {},
  actions: {},
});

export default store;
