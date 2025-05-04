import http from 'k6/http';
import { check } from 'k6';

export let options = {
  vus: 10, // Số lượng virtual users (VU)
  duration: '30s', // Thời gian kiểm thử
};

export default function () {
  let res = http.get('https://ou.edu.vn/');  // URL của trang web bạn muốn kiểm thử
  check(res, {
    'is status 200': (r) => r.status === 200, // Kiểm tra xem phản hồi có status 200 không
  });
}
