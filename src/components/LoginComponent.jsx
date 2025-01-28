import { useRef, useState } from "react"
import { signInWithEmailAndPassword , createUserWithEmailAndPassword , updateProfile, signInWithPopup } from "firebase/auth";
import {auth, googleAuthProvider} from '../utils/firebase'
import {Validation} from '../utils/validation'
import { useNavigate } from "react-router-dom";

const LoginComponent = ()=>{
    const [loginForm , setLoginform]= useState(false);
    const [loginMess , setLoginMess] = useState(null);
    const userEmail = useRef()
    const userPass = useRef()
    const userName = useRef()
    
    const navigate = useNavigate();

    const loginFn = ()=>{
        const mess = Validation(userEmail.current.value , userPass.current.value);
        setLoginMess(mess)
        if(mess) return;

        if(loginForm) {
            createUserWithEmailAndPassword(auth , userEmail?.current?.value,userPass?.current?.value)
            .then((userCredential)=> {
                const user = userCredential.user;
                updateProfile(auth.currentUser,{
                    displayName:userName.current.value,photoUrl:"https://example.com/jane-q-user/profile.jpg"
                }).then(()=>{
                    const {uid , email , displayName} = auth.currentUser;
                    const userInformation={
                        id:uid,email:email,name:displayName
                    }
                    localStorage.setItem("userInformation" , JSON.stringify(userInformation));
                    console.log(userInformation);
                    
                })
            })
            .catch((error)=>{
                const errorCode = error.code;
                const errorMessage = error.message;
                setLoginMess(errorMessage);
            });
        }
        else {
            signInWithEmailAndPassword(auth , userEmail.current.value , userPass.current.value)
            .then((userCredential)=>{
                const user = userCredential.user;
            })
            .catch((error)=>{
                const errorCode = error.code;
                const errorMess = error.message;
                setLoginMess("Passward Is Incorrect .....!")
            })
        }
        
    }

    const loginWithGoogle = async()=>{

        try{
            const res = await signInWithPopup(auth, googleAuthProvider);
            console.log(res);
            
            const userDetails = {
                displayName :res.user.displayName,
                email:res.user.email,
                uid:res.user?.uid,
                isLogIn:true,
                imageUrl:res.user?.photoURL
            }
            localStorage.setItem("userData" , JSON.stringify(userDetails));
            console.log(userDetails);
            navigate("/")

        }
        catch(err){
            console.log(err);
        }
    }

    return(
        <div className="w-[100%] bg-[#111827]  h-screen flex items-center justify-center">
            <div className="sm:w-[450px] w-[95%] bg-[#1F2937] p-8 border border-black rounded-xl flex flex-col gap-6">
                <p className="text-white sm:text-2xl text-xl font-bold text-center">Sign in to your account</p>
                {loginForm && 
                        <div className="flex gap-1 flex-col">
                        <label className="text-white" htmlFor="">Your Name</label>
                        <input ref={userName} type="text" className="bg-gray-200  outline-none rounded-md px-4 py-2" placeholder="Enter Your Email..."/>
                    </div>
                }
                <div className="flex gap-1 flex-col">
                    <label className="text-white" htmlFor="">Your Email</label>
                    <input ref={userEmail} type="email" className="bg-gray-200  outline-none rounded-md px-4 py-2" placeholder="Enter Your Email..."/>
                </div>
                <div className="flex gap-1 flex-col">
                    <label className="text-white" htmlFor="">Passward</label>
                    <input ref={userPass} type="password" className="bg-gray-200 outline-none rounded-md font-bold text-zxl px-4 py-2" placeholder=". . . . . ."/>
                </div>
                {loginMess && <p className="text-red-600 ">{loginMess}</p>}
                <button onClick={loginFn} className="bg-blue-500 hover:bg-blue-700 px-4 py-2 cursor-pointer text-white font-bold text-xl">{loginForm ? "Create a account" : "Sign in"}</button>
                <button onClick={loginWithGoogle} className="bg-blue-700 text-white hover:bg-orange-700 px-4 py-2 cursor-pointer font-bold text-xl ">Login With<span className="text-red-600 sm:text-2xl text-md font-bold"> G</span>oogle</button>
                <p className="text-white">{loginForm ? "Already Have a acount" : "Don’t have an account yet? "}<span onClick={()=> setLoginform(!loginForm)} className="text-blue-700 cursor-pointer"> {loginForm ? "Login Here" : "Sign up"}</span></p>
            </div>
        </div>

       
    )
}
export default LoginComponent