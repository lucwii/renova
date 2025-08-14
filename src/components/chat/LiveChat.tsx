import React, { useEffect, useRef, useState } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { useToast } from '../../hooks/use-toast'
import { supabase } from '../../integrations/supabase/client'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/Card'
import { MessageCircle, Send } from 'lucide-react'
import { Input } from '../ui/Input'

interface Message {
    id: string,
    user_id: string,
    message: string,
    username: string | null,
    created_at: string
}

const LiveChat = () => {
    const [messages, setMessages] = useState<Message[]>([])
    const [newMessage, setNewMessage] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const {user} = useAuth()
    const {toast} = useToast()
    const messagesEndRef = useRef<HTMLDivElement>(null)

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({behavior:'smooth'})
    }

    useEffect(() => {
        scrollToBottom()
    }, [messages])

    useEffect(() => {
        const fetchMessages = async () => {
          const { data, error } = await supabase
            .from('messages')
            .select('*')
            .order('created_at', { ascending: true })
            .limit(50);
    
          if (error) {
            console.error('Error fetching messages:', error);
            toast({
              title: "Error",
              description: "Failed to load messages",
              variant: "destructive",
            });
            return;
          }
    
          setMessages(data || []);
        };
    
        fetchMessages();
      }, [toast]);

      useEffect(() => {
        const channel = supabase
          .channel('messages-channel')
          .on(
            'postgres_changes',
            {
              event: 'INSERT',
              schema: 'public',
              table: 'messages'
            },
            (payload) => {
              const newMessage = payload.new as Message;
              setMessages(prev => [...prev, newMessage]);
            }
          )
          .subscribe();
    
        return () => {
          supabase.removeChannel(channel);
        };
      }, []);

      const sendMessage = async (e: React.FormEvent) => {
        e.preventDefault()

        if(!user) {
            toast({
                title: "Authentication Required",
                description: "Please sign in to send messages",
                variant: "destructive"
            })
            return
        }

        if(!newMessage.trim()) return;

        setIsLoading(true)

        try {
            const {error} = await supabase
                .from("messages")
                .insert({
                    user_id: user.id,
                    message: newMessage.trim(),
                    username: user.email?.split("@")[0] || "Anonymous"
                })
            if (error) throw error

            setNewMessage("")
        } catch(error) {
            console.error("Error sending messages: ", error)
            toast({
                title: "Error",
                description: "Failed to send message",
                variant: "destructive"
            })
        } finally {
            setIsLoading(false)
        }
      }
      const formatTime = (timestamp: string) => {
        return new Date(timestamp).toLocaleTimeString([], { 
          hour: '2-digit', 
          minute: '2-digit' 
        });
      };
  return (
    <Card className='w-full max-w-md mx-auto h-96 flex flex-col'>
      <CardHeader className='pb-3'>
        <CardTitle className='flex items-center gap-2 text-lg'>
          <MessageCircle className='h-5 w-5' />
          Live Chat
        </CardTitle>
      </CardHeader>

      <CardContent className='flex flex-1 flex-col gap-3'>
        <div className="flex-1 overflow-y-auto space-y-2 max-h-64">
          {messages.map((message) => (
            <div key={message.id}
            className={`flex flex-col gap-1 ${
              message.user_id === user?.id ? 'items-end' : 'items-start'
            }`}>
              <div 
              key={message.id}
              className={`max-w-[80%] rounded-lg px-3 py-2 text-sm ${
                message.user_id === user?.id
                  ? 'bg-gray-100 text-black'
                  : 'bg-gray-200'
              }`}
              >
                <p className='break-words'>{message.message}</p>
              </div>
              <div className='flex items-center gap-2 text-xs text-gray-800'>
                <span>{message.username || 'Anonymous'}</span>
                <span>•</span>
                <span>{formatTime(message.created_at)}</span>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        <form action="" onSubmit={sendMessage} className='flex gap-2'>
          <Input 
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder={user ? "Type a message..." : "Sign in to chat"}
          disabled={!user || isLoading}
          />
          <Send className='h-4 w-4'/>
        </form>

        {!user && (
          <p className="text-xs text-center text-muted-foreground">
          Please sign in to participate in the chat
        </p>
        )}
      </CardContent>
    </Card>
  )
}

export default LiveChat