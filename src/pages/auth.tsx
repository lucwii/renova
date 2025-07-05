import React, { useEffect, useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { useToast } from '../hooks/use-toast';
import { useNavigate } from 'react-router-dom';
import { ToastDescription } from '../components/ui/Toast';
import { CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card';
// import { Tabs, TabsContent, TabsList, TabsTrigger } from '@radix-ui/react-tabs';
import {Tabs, TabsContent, TabsList, TabsTrigger} from '../components/ui/tabs'
import Button from '../components/ui/Button';
import { Label } from '../components/ui/Label'
import { Input } from '../components/ui/Input';

const Auth = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const {signIn, signUp, user} = useAuth()
    const {toast} = useToast()
    const navigate = useNavigate()

    useEffect(() => {
      if (user) {
        navigate('/')
      }
    }, [user, navigate])

    const handleSignIn = async (e: React.FormEvent) => {
      e.preventDefault()
      setLoading(true)

      try{
        const {error} = await signIn(email, password)

        if (error) {
          toast({
            title: "Error signing in!",
            description: error.message,
            variant: 'destructive'
          });
        }
        else {
          toast({
            title: "Success",
            description: "You have been signed in successfully!"
          })
          navigate('/')
        }
      }
      catch (error) {
        toast({
          title: "Error",
          description: "An unexpected error occurred.",
          variant: "destructive",
        })
      }
      finally {
        setLoading(false)
      }
    }

    const handleSignUp = async (e: React.FormEvent) => {
      e.preventDefault()
      setLoading(true)

      try {
        const {error} = await signUp(email, password)

        if (error) {
          toast ({
            title: "Error creating account",
            description: error.message,
            variant: "destructive",
          })
        }
        else {
          toast ({
            title: "Account created!",
            description: "Please check your email to verify your account.",
          })
        }
      }
      catch (error) {
        toast({
          title: "Error",
          description: "An unexpected error occurred.",
          variant: "destructive",
        })
      }
      finally {
        setLoading(false)
      }
    }


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl text-center">Welcome to RENOVA</CardTitle>
          <CardDescription className='text-center'>
            Sign into your account or create a new one
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue='signin' className='w-full'>
            <TabsList className='w-full'>
              <TabsTrigger value='signin' className='w-full'>Sign In</TabsTrigger>
              <TabsTrigger value='signup' className='w-full'>Sign Up</TabsTrigger>
            </TabsList>
            <TabsContent value='signin'>
              <form onSubmit={handleSignIn} className='space-y-4'>
                <div className="space-y-2">
                  <Label>Email</Label>
                  <Input
                  id='signin-email'
                  type='email'
                  placeholder='Enter your email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required 
                  />
                </div>
                <div className="space-y-2">
                  <Label>Password</Label>
                  <Input 
                  id='signin-password'
                  type='password'
                  placeholder='Enter your password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  />
                </div>
                <Button
                type='submit'
                className='w-full bg-blue-900 hover:bg-blue-400 text-white transition duration-400'
                disabled={loading}
                >
                  {loading ? 'Signing In...' : 'Sign In'}
                </Button>
              </form>
            </TabsContent>
          </Tabs>
        </CardContent>
      </div>
    </div>
  )
}

export default Auth