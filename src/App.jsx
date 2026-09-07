import { useState } from 'react';
const user = {
  name: 'Buyers',
  imageUrl: 'https://images.unsplash.com/photo-1484980859177-5ac1249fda6f?q=80&w=929&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  imageSize: 90,
};



const products = [
  { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 },
];

const listItems = products.map(product =>
  <li key={product.id} className={`text-2xl list-inside ${product.isFruit ? 'text-green-700' : 'text-red-400'}`}>
    {product.title}
  </li>
);

function MyButton() {
  const [count, setCount] = useState(0);

  function increase() {
    if(count === 9) {
      alert("Thats too much!");
    } else {
      setCount(count + 1);
    }
  }

  function decrease() {
    if(count === 0) {
      alert("Thats not possible!");
    } else {
      setCount(count - 1);
    }
  }

  return (
    <div className='flex items-center gap-2'>
      <button onClick={increase} className="flex justify-center items-center bg-amber-300 rounded-2xl text-amber-950 h-9 w-9 hover:cursor-pointer active:bg-yellow-300">+</button>
      <div className="bg-amber-300 rounded-2xl text-amber-950 h-9 w-20 flex justify-center items-center text-center">{count}</div>
      <button onClick={decrease} className="flex justify-center items-center bg-amber-300 rounded-2xl text-amber-950 h-9 w-9 hover:cursor-pointer active:bg-yellow-300">-</button>
    </div>
  );
}

function App() {
  return (
    <>
      <div className="flex items-center justify-start gap-14 w-full bg-amber-200 pl-5">
        <img src={user.imageUrl} alt={'This is'+user.name} className="h-48 rounded-full" />
        <h1 className="font-medium text-5xl">Hello, {user.name}!</h1>
      </div>
      <div className="w-full bg-amber-300 pl-5">
        <p className='font-medium text-3xl text-amber-800'>Cart:</p>
        <ul className="list-disc pl-8">{listItems}</ul>
      </div>
      <div className="w-full h-14 flex justify-center gap-4 items-center bg-amber-500 rounded-md">
        <p className='font-medium text-2xl text-amber-800'>Item count</p>
        <MyButton />
      </div>
    </>
  )
}

export default App
