"use client";
import Link from "next/link";
import { useState } from "react";
import { 
  FaCheckCircle, 
  FaRocket, 
  FaGraduationCap, 
  FaLaptopCode, 
  FaMapMarkerAlt 
} from "react-icons/fa";


export default function MeetingScheduling() {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [meetingType, setMeetingType] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  
  const timeSlots = [
    "9:00 AM", "10:00 AM", "11:00 AM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM"
  ];

  const meetingTypes = [
    { id: "interview", label: "Job Interview Discussion", duration: "30 min" },
    { id: "project", label: "Project Collaboration", duration: "45 min" },
    { id: "mentorship", label: "Mentorship", duration: "30 min" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  if (formSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-purple-900 to-indigo-800 text-white flex items-center justify-center">
        <div className="max-w-2xl mx-auto text-center px-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
            <div className="flex justify-center text-6xl mb-4 text-green-400">
              <FaCheckCircle />
            </div>
            <h1 className="text-4xl font-bold mb-4">Meeting Scheduled!</h1>
            <div className="bg-green-500/20 border border-green-400 rounded-lg p-4 mb-6">
              <p className="text-lg mb-2">
                <strong>Type:</strong> {meetingTypes.find(t => t.id === meetingType)?.label}
              </p>
              <p className="text-lg mb-2">
                <strong>Date:</strong> {selectedDate}
              </p>
              <p className="text-lg">
                <strong>Time:</strong> {selectedTime}
              </p>
            </div>
            <p className="text-gray-300 mb-6">
              I&apos;ll send you a calendar invite and meeting link shortly. Looking forward to our conversation!
            </p>
            <Link 
              href="/" 
              className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg font-semibold transition-colors duration-300 inline-block"
            >
              Back to Portfolio
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 to-indigo-800 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4">Schedule a Meeting</h1>
            <p className="text-xl text-purple-200 max-w-2xl mx-auto">
              Let&apos;s connect! Choose a time that works for you and we can discuss opportunities, projects, or just chat about tech.
            </p>
          </div>

          {/* Route Demo Info */}
          <div className="bg-blue-500/20 border border-blue-400 rounded-lg p-4 mb-8 text-center">
            <p className="text-sm flex items-center justify-center gap-2">
              <FaRocket color="#60a5fa" />
              <strong>Next.js Routing Demo:</strong> This scheduling page exists at <code className="bg-black/30 px-2 py-1 rounded">/schedule-meeting</code> 
              because of the file: <code className="bg-black/30 px-2 py-1 rounded">src/app/schedule-meeting/page.tsx</code>
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column - Meeting Types */}
            <div>
              <h2 className="text-3xl font-semibold mb-6">What would you like to discuss?</h2>
              <div className="space-y-4">
                {meetingTypes.map((type) => (
                  <div 
                    key={type.id}
                    className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                      meetingType === type.id 
                        ? 'border-purple-400 bg-purple-500/20' 
                        : 'border-white/20 bg-white/5 hover:border-purple-400/50'
                    }`}
                    onClick={() => setMeetingType(type.id)}
                  >
                    <div className="flex justify-between items-center">
                      <h3 className="font-semibold text-lg">{type.label}</h3>
                      <span className="text-sm text-purple-200">{type.duration}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-white/5 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">About Me</h3>
                <div className="space-y-3 text-sm text-gray-300">
                  <p className="flex items-center gap-2">
                    <FaGraduationCap color="#a78bfa" />
                    Computer Science Student
                  </p>
                  <p className="flex items-center gap-2">
                    <FaLaptopCode color="#a78bfa" />
                    React, Next.js, Node.js Developer
                  </p>
                  <p className="flex items-center gap-2">
                    <FaRocket color="#a78bfa" />
                    Passionate about Web Development
                  </p>
                  <p className="flex items-center gap-2">
                    <FaMapMarkerAlt color="#a78bfa" />
                    Available for internships & projects
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Scheduling Form */}
            <div>
              <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
                <h2 className="text-2xl font-semibold mb-6">Select Date & Time</h2>
                
                {/* Date Selection */}
                <div className="mb-6">
                  <label className="block text-sm font-medium mb-3">Preferred Date</label>
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white focus:border-purple-400 focus:outline-none"
                    required
                  />
                </div>

                {/* Time Selection */}
                <div className="mb-6">
                  <label className="block text-sm font-medium mb-3">Available Times</label>
                  <div className="grid grid-cols-2 gap-3">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        type="button"
                        onClick={() => setSelectedTime(time)}
                        className={`p-3 rounded-lg border transition-all text-sm ${
                          selectedTime === time
                            ? 'border-purple-400 bg-purple-500/30'
                            : 'border-white/20 bg-white/5 hover:border-purple-400/50'
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Contact Info */}
                <div className="mb-6">
                  <label className="block text-sm font-medium mb-3">Your Email</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none"
                    required
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={!meetingType || !selectedDate || !selectedTime}
                  className="w-full bg-purple-600 hover:bg-purple-700 disabled:bg-gray-600 disabled:cursor-not-allowed px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
                >
                  Schedule Meeting
                </button>

                <div className="mt-4 text-center">
                  <Link 
                    href="/" 
                    className="text-purple-300 hover:text-white transition-colors text-sm"
                  >
                    ← Back to Portfolio
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}