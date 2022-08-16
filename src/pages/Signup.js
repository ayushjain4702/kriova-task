import React from 'react';
import { Box } from '@chakra-ui/layout';
import { FormControl, FormLabel, FormErrorMessage, Input, Button, Text, Link } from '@chakra-ui/react';
import { Link as ReactRouterLink ,useNavigate} from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { signupResolver } from '../utils/validator/signupResolver';
import { auth } from '../utils/firebase/firebase';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useContext,useEffect } from 'react';
import { AuthContext } from '../components/AuthProvider';
import '../pages/Signup.css';

const Signup = () => {

  const { handleSubmit, register, formState: { errors, isSubmitting },setError,clearErrors} = useForm({resolver:signupResolver});

  const navigate = useNavigate();

  const {user} = useContext(AuthContext);

  const onSubmit = ({email,password}) => {

    clearErrors('API_ERROR')
    console.log(email,password);
    // auth.createUserWithEmailAndPassword(auth,email,password);
    createUserWithEmailAndPassword(auth, email, password)
    .then(()=>{
      navigate("/")
    })
    .catch((err)=>{
        setError('API_ERROR',{
          message:err.message   
        })
    })
  };

  useEffect(() => {
    if(user){
      navigate('/');
    }
   
  }, [user,navigate])



  return (
    <Box
      width='100%'
      minH='100vh'
      background='gray.200'
      display='flex'
      alignItems='center'
      justifyContent='center'
      className='box'>

      <h1>Kriova</h1>

      <Box className='box-in' width={{base:'90%',md:'40%',lg:'30%'}} shadow='lg' background='white' p={12} rounded={6}>
        <form onSubmit={handleSubmit(onSubmit)}>

        <FormControl >
            <FormLabel htmlFor='text'>Name</FormLabel>
            <Input type='text' name='text' placeholder='Enter your Name'  />  
          </FormControl>

          <FormControl isInvalid={errors.email}>
            <FormLabel htmlFor='email'>Email</FormLabel>
            <Input type='email' name='email' placeholder='Enter your email' {...register('email')} />
            <FormErrorMessage>{errors.email && errors.email.message}</FormErrorMessage>
          </FormControl>

          <FormControl mt={2} isInvalid={errors.password}>
            <FormLabel htmlFor='password'>Password</FormLabel>
            <Input type='password' name='password' placeholder='Enter your password'{...register('password')} />
            <FormErrorMessage>{errors.password && errors.password.message}</FormErrorMessage>
          </FormControl>

          <FormControl mt={2} isInvalid={errors.repeat_password}>
            <FormLabel htmlFor='repeat_password'>Repeat Password</FormLabel>
            <Input type='password' name='repeat_password' placeholder='Enter your password again'{...register('repeat_password')} />
            <FormErrorMessage>{errors.repeat_password && errors.repeat_password.message}</FormErrorMessage>
          </FormControl>

          <Box mt='5' color='red.500'>
            {errors.API_ERROR && errors.API_ERROR.message}
          </Box>

          <Button isLoading={isSubmitting} mt={4} colorScheme='messenger' type='submit' width='100%'>
            Sign up
          </Button>

          <Text textAlign='center' p='2' size='xs'>
            <Link as={ReactRouterLink} color='gray.500' to='/login'>
              Already registered ?
            </Link>
          </Text>
        </form>
      </Box>
    </Box>
  )
}

export default Signup;