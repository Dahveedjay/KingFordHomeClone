import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [content, setContent] = useState([
    { id: 1, header: 'Excellent & Trouble free', content: 'KingFord Homes is an outstanding company to work with, they are skilled listeners, with very in depth knowledge of the local markets, My wife and I wanted to properties, a commercial land and a fully detached home both serene location free from omonile wahala and they provided within a week. met and exceeded our expections, totally recommend', client: "Mr Dennis"},
    { id: 2, header: 'Smooth Transaction.', content: 'My wife and i have always had a dream of buying our own dream house in a safe and secure location. KingFord Homes with their skilled team helped make that dream a reality, the sale went smoothly and we just closed on an ideal new place we are excited to call home', client: 'Mr Uche Nnamdi' },
    { id: 3, header: 'In Short, Very Efficient', content: "I recently purchased a a house with KingFord Homes and while this can be a stressfull process, I felt 110% confident by partnering with them and their team. They were very candid, provided great feedback, helped explain clearly all the details, and managed the actual sale of the negotiation brilliantially", client:"Mrs. Shola Adebowale"  },
  ]);

  useEffect(() => {
    let counter = 0;
    const intervalId = setInterval(() => {
      const nextContent = content[(counter + 1) % 3];
      setContent([nextContent]);
      counter = (counter + 1) % 3;
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className='py-[100px]'>
      {content.map((item, index) => (
        <div className='text-center' key={item.id}>
        <h1 className='text-[45px] text-[#AB8151]'>  {item.header}</h1>
          <p className='w-[40%] text-[20px] m-[auto] leading-8 py-10'>{item.content}</p>
          <p className='text-[23]'>{item.client}</p>
          <p className='text-center'>Client</p>

          </div>
      ))}
    </div>
  );
}

export default MyComponent;