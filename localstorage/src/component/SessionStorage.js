import React,{useState} from 'react'

function SessionStorage() {

    const [name, setName] = useState('');
    const [pwd, setPwd] = useState('');
       
        const handle = () => {
            sessionStorage.setItem('Name', name);
            sessionStorage.setItem('Password', pwd);
            window.location.reload(false);     
        };
         const remove = () => {
            sessionStorage.removeItem('Name');
            sessionStorage.removeItem('Password');
            window.location.reload(false);     
         };
   
    return (
       <div className="App">
          <h1>Name of the user:</h1>
          <form onSubmit={handle}>
          <input
             placeholder="Name"
             value={name}
             onChange={(e) => setName(e.target.value)}
          />
          <h1>Password of the user:</h1>
          <input
             type="password"
             placeholder="Password"
             value={pwd}
             onChange={(e) => setPwd(e.target.value)}
          />
          <div>
             <button  >Done</button>
          </div>
          </form> 

          {sessionStorage.getItem('Name') && (
             <div>
                Name: <p>{sessionStorage.getItem('Name')}</p>
             </div>
          )}

          {sessionStorage.getItem('Password') && (
             <div>
                Password: <p>{sessionStorage.getItem('Password')}</p>
             </div>
          )}

          <div>
             <button onClick={remove}>Remove</button>
          </div>
       
       </div>
    );
  
}

export default SessionStorage