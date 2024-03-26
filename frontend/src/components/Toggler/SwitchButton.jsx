import React,{useState,useEffect} from 'react'
import './SwitchButton.css'
import { toast } from 'react-toastify';

const SwitchButton = () => {

    const getTheme = () => {
        return window.localStorage.getItem('theme') 
        ? window.localStorage.getItem('theme')
        : "light";
    }

    const [theme , setTheme] = useState(getTheme())

    const changeTheme = ()=>{
    toast("Theme Mode Changed");

        if(theme === 'dark'){
            setTheme('light');    
        }
        else{
            setTheme('dark');           
        }
        console.log(document.documentElement);
    }

    useEffect(()=>{
        if(theme === 'light'){
            document.documentElement.classList.remove('dark')
            document.documentElement.classList.add('light'); 
        }
        else{
            document.documentElement.classList.remove('light')
            document.documentElement.classList.add('dark');
        }
        localStorage.setItem('theme',theme)       

    },[theme]);

  return (
    <div className='themeContainer'>
        <input type="checkbox" id="switch" onClick={changeTheme}/><label for="switch" id='switchLabel'>Toggle</label>
    </div>
  )
}

export default SwitchButton