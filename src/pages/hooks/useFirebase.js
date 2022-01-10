import  { useEffect, useState } from 'react';
import firebaseInitialization from '../Firebase/firebase.init';
import { getAuth,updateProfile,signInWithPopup, GoogleAuthProvider,onAuthStateChanged ,signOut,createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";



// callinng initialize firebase 
firebaseInitialization();
const auth = getAuth();
const googleProvider = new GoogleAuthProvider();

const useFirebase = () => {

    const [isLoading,setIsloading]=useState(true);
    const [user,setUser] =useState([]);
    const [error,setError] =useState('');
    const [admin,setAdmin]=useState(false);
   const  signInWithGoogle =(location,history) =>{
    setIsloading(true);
    signInWithPopup(auth, googleProvider)
    .then((result) => {
     
      const user = result.user;
      addUserToDb(user.email,user.displayName,'PUT')
      setError('');
      history.replace(location?.state?.from || '/home');
      
    })
    
    .catch((error) => {
      setError(error.message);
    })

    .finally(()=>setIsloading(false))
    }

    const logOut=()=>{
        setIsloading(true);
        signOut(auth)
        .then(()=>{
            setUser({})
        })
        .finally(()=>setIsloading(false))
    }

        useEffect(()=>{
        onAuthStateChanged(auth,user=>{
            if(user){
                setUser(user)
            }
            else{

            }
            setIsloading(false);
        });
            
    },[]);
    
    // handle resgistration 
    const registerNewUSer=(name,email,password,history,location)=>{
        setIsloading(true)
       createUserWithEmailAndPassword(auth, email, password)
       .then(result=>{
        const user= result.user
        console.log(user);
        setError('');

        // add new register name to firebase after creation
        const newUser={email,displayName: name};
        setUser(newUser);

        // add user to db by registration
        addUserToDb(email,name,'POST')

        // add new register name to firebase after creation
        updateProfile(auth.currentUser, {
            displayName: name,
          }).then(() => {
            
          }).catch((error) => {
            
          });

          history.push(location.state?.from || "/home")
      })
      .catch(error =>{
        setError(error.message)
      }) 
       .finally(()=>setIsloading(false))
           
      }

    //   handle old user login 
    const userLogin =(email,password)=>{
        setIsloading(true)
         return signInWithEmailAndPassword(auth, email, password)
         .finally(()=>setIsloading(false))
        
      }
    //   ADD New Registration User To DB
      const addUserToDb = (email,displayName,method)=>{
          const user = {email,displayName};
          fetch('https://daily-need.herokuapp.com/addUsers',{
              method:method,
              headers:{
                  'content-type':'application/json'
              },
              body:JSON.stringify(user)
          })
          .then()

      }

    //   ADMIN SET UP
    useEffect(()=>{
        fetch(`https://daily-need.herokuapp.com/addUsers/${user.email}`)
    .then(res=>res.json())
    .then(data=>setAdmin(data.Admin))
    },[user.email])
    

    return {
user,signInWithGoogle,logOut,isLoading,registerNewUSer,userLogin,error,addUserToDb,admin
    };
};

export default useFirebase;