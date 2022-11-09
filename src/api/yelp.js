import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer GO8jCdihJiY04oJNv0B3o04iAfyZwZKPz0VvqpLb80DV-39wQj9I-TGlAT8CPXBpfQCiC4x3EbhBtv_BH6H5PNjqLcpaLIRJe4RWGGRvwL8tXsan2er7TzYwGA1rY3Yx'
  }
});
