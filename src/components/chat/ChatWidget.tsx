import { useState } from 'react'
import Button from '../ui/Button';
import { MessageCircle, X } from 'lucide-react';
import LiveChat from './LiveChat';

const ChatWidget = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
        <div className='fixed bottom-6 right-6 z-50'>
            <Button
            onClick={() => setIsOpen(!isOpen)}
            size={'lg'}
            className="rounded-full w-14 h-14 shadow-lg hover:shadow-xl transition-all duration-200 text-white"
            >
            {isOpen ? (
            <X className="h-6 w-6" />
            ) : (
                <MessageCircle className="h-6 w-6" />
            )}
            </Button>
        </div>

        {isOpen && (
        <div className="fixed bottom-24 right-6 z-40 w-80 shadow-2xl text-white">
          <LiveChat />
        </div>
      )}
    </div>
  )
}

export default ChatWidget