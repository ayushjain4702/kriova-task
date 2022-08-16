import * as Joi from 'joi';
import {joiResolver} from '@hookform/resolvers/joi';

const signupSchema = Joi.object({
    email:Joi.string().email({
        minDomainSegments:2,
        tlds:{allow:["com","net"]}
    }).error((errors)=>{
         errors.forEach(err =>{
            if(err.code === 'string.empty'){
                err.message = 'Email is required feild';
            }
            else if(err.code ==='string.email'){
                err.message = 'Please enter a valid email';
            }
         })
        return errors
    }),

    password:Joi.string().pattern(new RegExp("^[a-zA-Z0-9@#]{3,30}$")).error((errors)=>{
        errors.forEach(err =>{
            if(err.code === 'string.empty'){
                err.message = 'Password is required feild';
            }
            else if(err.code === 'string.pattern.field'){
                err.message = 'Please enter a valid password'; 
            }
        })
        return errors
    }),


    repeat_password: Joi.string().required().valid(Joi.ref('password')).error((errors)=>{
        errors.forEach(err =>{
            if(err.code === 'string.empty'){
                err.message = 'Password is required feild';
            }
            else if(err.code === 'any.only'){
                err.message = 'Password and Repeat-Password do not match'; 
            }
        })
        return errors
    }),
});

export const signupResolver = joiResolver(signupSchema);