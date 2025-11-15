import React from 'react'
import { useState } from 'react'
import logo from "../../assets/logo.jpeg";

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const signupData = {
        name: '',
        username: '',
        password: ''
    }

const Login = () => {
    const [accout, toggleAccount] = useState('login');
    const [signup, setSignup] = useState(signupData);

    const toggleSignup = () => {
      toggleAccount(accout === 'login' ? 'signup' : 'login');
    }
    const onInputChange = (e) => {
      setSignup({...signup, [e.target.name]: e.target.value});
      
    }

  return (
     accout === 'login' ?
    <Card className="w-full max-w-sm p-4">
      <CardHeader>
        <img src={logo} alt="logo" className='m-6'/>
        <CardTitle className="text-lg m-auto">Login to your account</CardTitle>
      </CardHeader>

      <CardContent>
        <form className="space-y-4">
          <div className="grid gap-2">
            <Label htmlFor="text">Username</Label>
            <Input
              id="text"
              type="text"
              placeholder="Username"
              required 
              
            />
          </div>

          <div className="grid gap-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password">Password</Label>
              
            </div>
            <Input id="password" type="password" required />
          </div>
        </form>
      </CardContent>

      <CardFooter className="flex flex-col gap-2">
        <Button type="submit" className="w-full">
          Login
        </Button>
        <Button onClick={()=> toggleAccount()} variant="outline" className="w-full">
         Create and account
        </Button>
      </CardFooter>
    </Card>
    :
    <Card className="w-full max-w-sm p-4">
      <CardHeader>
        <img src={logo} alt="logo" className='m-6'/>
        <CardTitle className="text-lg m-auto">Login to your account</CardTitle>
      </CardHeader>

      <CardContent>
        <form className="space-y-4">
          <div className="grid gap-2">
            <Label htmlFor="text">Name</Label>
            <Input
              id="text"
              type="text"
              placeholder="Name"
              required name="name"
              onChange={(e)=>onInputChange(e)}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="text">Username</Label>
            <Input
              id="text"
              type="text"
              placeholder="Username"
              required name="username"
              onChange={(e)=>onInputChange(e)}
            />
          </div>

          <div className="grid gap-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password">Password</Label>
            </div>
            <Input name="password" id="password" type="password" required onChange={(e)=>onInputChange(e)} />
          </div>
        </form>
      </CardContent>

      <CardFooter className="flex flex-col gap-2">
        <Button type="submit" className="w-full">
          Signup
        </Button>
        <Button onClick={()=> toggleSignup()} variant="outline" className="w-full">
         Already have an account
        </Button>
      </CardFooter>
    </Card>

  )
}

export default Login
