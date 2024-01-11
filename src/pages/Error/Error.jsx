import { useNavigate } from "react-router-dom";

const Error = () => {
    const navigate = useNavigate();
    const handleGoBack=() => navigate('/')

    return (
        <>
        <div className='text-center h-screen flex flex-col justify-center'>
          <h1 className='text-6xl font-bold'>Error 404</h1>
          <h2 className='text-5xl font-bold'>NOT FOUND</h2>
          <button onClick={handleGoBack} className="btn btn-active btn-ghost">Go back</button>
        </div>

        </>
        
      );
};

export default Error;