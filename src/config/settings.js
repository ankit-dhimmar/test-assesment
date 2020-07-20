const settings = {
  apiKey: 'HuwyiejIYuayUiwcZAePpwmQNqCngFPDTgXXMtrQ',
  apiUrl: 'https://api.nasa.gov/neo/rest/v1/neo',
  endpoints: {
    info: (id) => `/${id}`,
    random: '/browse',
  },
};

export default settings;
