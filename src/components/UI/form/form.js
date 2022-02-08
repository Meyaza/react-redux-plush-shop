import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { deleteAllItemFromCart } from '../../../redux/cart/reducer';
import { Button } from '../../button';
import { calcTotalPrice } from '../../utils';
import { Lodaer } from '../lodaer';
import './form.css'

const Form = ({items}) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [description, setDescription] = useState('')
    const [nameDirty, setNameDirty] = useState(false)
    const [emailDirty, setEmailDirty] = useState(false)
    const [nameError, setNameError] = useState('Имя не должен быть пустое')
    const [emailError, setEmailError] = useState('Емейл не должен быть пустым')
    const [formValid, setFormValid] = useState(false)
    const [isLoading, setIsLoading] = useState(false);

    useEffect( () => {
        if (emailError  || nameError) {
            setFormValid(false)
        } else {
            setFormValid(true)
        }
    }, [emailError, nameError])

    const history = useHistory();
    const dispath = useDispatch();

    const handleClick = async (e) =>  {
        e.preventDefault()
        const choise =  items.map (toy => toy.title)
        const total = calcTotalPrice(items)
        setIsLoading(true);
        await axios.post('http://localhost:8000/requests', {
            name,
            email,
            toy : choise,
            description,
            total,
        })
        setIsLoading(false);
        dispath(deleteAllItemFromCart())
        history.push("/push");
        }

        const blurHandle = (e) => {
            switch (e.target.name) {
                case 'name': 
                    setNameDirty(true)
                    break
                case 'email':
                    setEmailDirty(true)
                    break

                 default:
                        console.log( "Нет таких значений" );
                    
            }
        }

        const emailHandler = (e) => {
            setEmail(e.target.value)
            const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
            if(!re.test(String(e.target.value).toLowerCase())) {
                setEmailError('Неккоректный email')
            } else {
                setEmailError('')
            }
        }
        
        const nameHandler = (e) => {
            setName(e.target.value)
            if (e.target.value.length === 0) {
                setNameError('Поле пустое')
            } 
            else {
                setNameError('')
            }
        }



    return (
        isLoading
        ? <div className='load'><Lodaer/></div> 

        : 
        <form className='form'>
        {(nameDirty && nameError) && <div style={{color:'red'}}>{nameError}</div>}
        <input  className='form_input'
            name='name'
            value={name}
            onChange={e => nameHandler(e)}
            type='text'
            placeholder='Ваше имя'
            onBlur={e => blurHandle(e)}
        >
            
        </input> 
        {(emailDirty && emailError) && <div style={{color:'red'}}>{emailError}</div>}
        <input  className='form_input'
            name='email'
           value={email}
           onChange={e => emailHandler(e)}
           type='text'
           placeholder='Ваш email'
           onBlur={e => blurHandle(e)}
        >
        </input> 
   
        <textarea className='form_input'
           value={description}
           onChange={e => setDescription(e.target.value)}
           type='text'
           placeholder='Опишите ваши пожелания к игрушке(цвет, размер)'
        >
        </textarea> 
       
        <Button disabled={!formValid} onClick={handleClick}
        type='primary'
        >Сделать заказ</Button>
    </form>
    );
};

export default Form;