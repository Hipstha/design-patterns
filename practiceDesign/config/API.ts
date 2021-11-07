import axios from 'axios';
import { Parsing } from '../helpers/Parsing';

export class API {

  constructor(
    path: string = 'https://pokeapi.co/api/v2'
  ) {
    this.path = path;
  }

  private path: string;

  protected axiosClient() {
    const axiosClient = axios.create({
      baseURL: this.path
    });
    return axiosClient;
  }

}