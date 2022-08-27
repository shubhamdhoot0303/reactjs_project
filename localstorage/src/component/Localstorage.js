import React,{useState} from 'react'

function Localstorage() {

    const [name, setName] = useState('');
    const [pwd, setPwd] = useState('');
       
        const handle = () => {
            localStorage.setItem('Name', name);
            localStorage.setItem('Password', pwd);
            window.location.reload(false);     
        };
         const remove = () => {
            localStorage.removeItem('Name');
            localStorage.removeItem('Password');
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

          {localStorage.getItem('Name') && (
             <div>
                Name: <p>{localStorage.getItem('Name')}</p>
             </div>
          )}

          {localStorage.getItem('Password') && (
             <div>
                Password: <p>{localStorage.getItem('Password')}</p>
             </div>
          )}

          <div>
             <button onClick={remove}>Remove</button>
          </div>
       
       </div>
    );
  
}

export default Localstorage