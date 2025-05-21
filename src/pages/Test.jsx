import React, { useEffect, useState } from 'react'
import axi from '../utils/axios/Axios';

const Test = () => {
    const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axi.get('test');
        console.log(response);
        
        setData(response.data);
      } catch (error) {
        console.error('요청 실패:', error);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
    Test<br />
    결과: {data ? JSON.stringify(data) : '로딩 중...'}
  </div>
  )
}

export default Test