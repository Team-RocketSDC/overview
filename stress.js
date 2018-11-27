import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
  vus: 1000,
  duration: '10s',
  rps: 1000,
};

export default function () {
  http.get('http://localhost:9001/1');
  sleep(1);
};
