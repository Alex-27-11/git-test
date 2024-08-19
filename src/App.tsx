// в 2х компонентах использовал инлайновые стили, знаю, что это не правильно, но стилизация там нужна минимальная

import { useState } from 'react'
import Body from './components/Body/Body'
import Header from './components/Head/Header'
import { ReposInterface } from './models/models'

function App() {
	const [data, setData] = useState<ReposInterface[] | null>(null);
	const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <>
		<Header setData={setData} setIsLoading={setIsLoading} />
		<Body data={data} isLoading={isLoading} />
    </>
  )
}

export default App
