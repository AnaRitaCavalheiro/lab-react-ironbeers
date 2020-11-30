import axios from 'axios';

class IronbeerService {
  constructor() {
    let service = axios.create({
      baseURL: `${process.env.IRONBEER_API}`,
    });
    this.service = service;
  }

  getAll() {
    return this.service.get('/ironbeer');
  }

  getBeer(id) {
    return this.service.get(`/ironbeer/${id}`);
  }
  addBeer(beer) {
    return this.service.post('/beer', beer);
  }
}

export default IronbeerService;
