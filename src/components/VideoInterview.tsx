
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Video, VideoOff, Mic, MicOff, Phone, PhoneOff } from 'lucide-react';

const VideoInterview = () => {
  const [isVideoOn, setIsVideoOn] = useState(true);
  const [isMicOn, setIsMicOn] = useState(true);
  const [isCallActive, setIsCallActive] = useState(false);

  const handleJoinCall = () => {
    setIsCallActive(!isCallActive);
  };

  return (
    <div className="h-full bg-slate-900 border-slate-700">
      <div className="border-b border-slate-700 px-4 py-3">
        <h3 className="text-lg font-semibold">Mock Interview</h3>
      </div>
      
      <div className="h-[calc(100%-60px)] relative">
        {!isCallActive ? (
          <div className="flex items-center justify-center h-full bg-slate-800">
            <div className="text-center">
              <div className="w-20 h-20 bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <Video className="w-8 h-8 text-slate-400" />
              </div>
              <p className="text-slate-400 mb-4">Ready to start your mock interview?</p>
              <Button 
                onClick={handleJoinCall}
                className="bg-blue-600 hover:bg-blue-700"
              >
                <Phone className="w-4 h-4 mr-2" />
                Join Interview
              </Button>
            </div>
          </div>
        ) : (
          <div className="h-full bg-slate-800 relative">
            {/* Simulated video feed */}
            <div className="w-full h-full bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 bg-slate-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">👨‍💻</span>
                </div>
                <p className="text-slate-300">Interviewer - Alex Chen</p>
                <p className="text-slate-500 text-sm">Senior Software Engineer</p>
              </div>
            </div>

            {/* Self video - picture in picture */}
            <div className="absolute bottom-4 right-4 w-32 h-24 bg-slate-700 rounded-lg border-2 border-slate-600 flex items-center justify-center">
              {isVideoOn ? (
                <div className="text-center">
                  <span className="text-xl">🙂</span>
                  <p className="text-xs text-slate-400 mt-1">You</p>
                </div>
              ) : (
                <VideoOff className="w-6 h-6 text-slate-400" />
              )}
            </div>

            {/* Controls */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
              <Button
                size="sm"
                variant={isMicOn ? "secondary" : "destructive"}
                onClick={() => setIsMicOn(!isMicOn)}
              >
                {isMicOn ? <Mic className="w-4 h-4" /> : <MicOff className="w-4 h-4" />}
              </Button>
              <Button
                size="sm"
                variant={isVideoOn ? "secondary" : "destructive"}
                onClick={() => setIsVideoOn(!isVideoOn)}
              >
                {isVideoOn ? <Video className="w-4 h-4" /> : <VideoOff className="w-4 h-4" />}
              </Button>
              <Button
                size="sm"
                variant="destructive"
                onClick={handleJoinCall}
              >
                <PhoneOff className="w-4 h-4" />
              </Button>
            </div>

            {/* Live indicator */}
            <div className="absolute top-4 left-4 flex items-center gap-2">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-red-500 font-medium">LIVE</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoInterview;
