import fs from 'fs';
export default {
  enrty : "./src/index.html",
  output : {
    path : './dist',
    //distrbute 준말로 보통 배포하는 파일을 모아두는 디레고리 구성이다 . 
    //이렇게 path key를 사용해야 한다면 , 일반적으로 fs 모듈을 사용해야한다.
  
  filename : './index.bundle.js'

   //* 파일명은 위와 같이 정적으로 만들어줄 수 있다.
   //정의된 파일이긴 하지만 엄연히 모듈처리되는 파일이기 때문에 필요에 따라서 [name],[hash],[chunkhash]등 사용 가능.
  },
}