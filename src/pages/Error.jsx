import {useRouteError, Link} from 'react-router-dom'

const Error = () => {
  const error = useRouteError();
 if(error.status === 404){
  return<>
  <main className='grid min-h-[100vh] place-items-center px-8'>
   <div className='text-center'>
    <p className='text-9xl font-semibold text-primary'>404</p>
    <h1 className='mt-4 text-3xl font-bold tracking-tight sm:text-5xl'>
      page not found
    </h1>
    <p className='mt-6 text-lg leading-7'>
      Sorry, you in the wrong page
    </p>
   </div>
   <div className='mt-8'>
    <Link to='/' className='btn btn-secondary'>Go Home</Link>
   </div>
  </main>
  </>
 }
  return (
    <>
     <main className='grid min-h-[100vh] place-items-center px-8'>
      <h4 className='text-center text-3xl font-semibold'>There was an Error</h4>
     </main>
    </>
  )
}

export default Error