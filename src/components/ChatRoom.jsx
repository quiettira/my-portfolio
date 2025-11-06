"use client";
import { useState, useEffect, useRef } from "react";
import { auth, loginWithGoogle, logout, db } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import {
  collection,
  addDoc,
  onSnapshot,
  query,
  orderBy,
  serverTimestamp
} from "firebase/firestore";
import ShinyText from "./text/ShinyText";

export default function ChatRoom() {
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio, setAudio] = useState(null);
  const messagesContainerRef = useRef(null);
  const [authLoading, setAuthLoading] = useState(false);
  const [authError, setAuthError] = useState("");

  // Cek login
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => setUser(u));
    return () => unsub();
  }, []);

  // Ambil pesan real-time
  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("createdAt"));
    const unsub = onSnapshot(q, (snapshot) => {
      setMessages(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
    return () => unsub();
  }, []);

  // Auto-scroll to latest message
  useEffect(() => {
    const el = messagesContainerRef.current;
    if (!el) return;
    el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
  }, [messages]);

  // Setup musik
  useEffect(() => {
    const music = new Audio("/music/lofi.mp3"); // pastikan file ini ada di public/music/
    setAudio(music);
    return () => music.pause();
  }, []);

  const togglePlay = () => {
    if (!audio) return;
    if (isPlaying) audio.pause();
    else audio.play();
    setIsPlaying(!isPlaying);
  };

  // Kirim pesan
  const sendMessage = async (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    await addDoc(collection(db, "messages"), {
      text: message,
      uid: user?.uid || "anonymous",
      displayName: user?.displayName || "Guest",
      photoURL:
        user?.photoURL || "https://www.pngall.com/wp-content/uploads/5/Profile.png",
      createdAt: serverTimestamp()
    });
    setMessage("");
  };

  return (
    <section className="px-6 sm:px-8 md:px-12 mt-16 md:mt-24" id="Contact">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-4xl font-bold mb-2 text-white">
          Contact & Chat 💬
        </h2>
        <p className="text-base text-center text-gray-400 max-w-3xl mx-auto mb-6">
          Log in to chat in real-time, or reach out via the contact form.
        </p>

        {/* Dua kolom (Chat + Music Card) */}
        <div className="flex flex-col md:flex-row items-stretch gap-6">

          {/* Kolom Chat */}
          <div className="flex-1 bg-white/5 border border-white/10 p-4 sm:p-6 md:p-8 rounded-xl shadow-lg h-full min-h-[380px] flex flex-col">
            {/* Header user */}
            {user && (
              <div className="flex justify-between items-center mb-4 border-b border-white/10 pb-3">
                <div className="flex items-center gap-3">
                  <img
                    src={user.photoURL}
                    alt="avatar"
                    className="w-10 h-10 rounded-full"
                  />
                  <span className="text-white font-semibold">
                    {user.displayName}
                  </span>
                </div>
                <button
                  onClick={logout}
                  className="bg-white/10 border border-white/10 px-4 py-1 rounded-full text-white hover:bg-white/20"
                >
                  Logout
                </button>
              </div>
            )}

            {/* Area pesan */}
            <div ref={messagesContainerRef} className="overflow-y-auto h-[260px] sm:h-[300px] md:h-[340px] border border-white/10 p-3 pr-2 rounded-lg bg-white/5 mb-4 space-y-3 scroll-smooth">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex gap-2 ${
                    msg.uid === user?.uid
                      ? "justify-end"
                      : "justify-start"
                  }`}
                >
                  {msg.uid !== user?.uid && (
                    <img
                      src={
                        msg.photoURL ||
                        "https://www.pngall.com/wp-content/uploads/5/Profile.png"
                      }
                      alt="avatar"
                      className="w-8 h-8 rounded-full"
                    />
                  )}
                  <div
                    className={`p-3 rounded-lg max-w-[75%] shadow-sm ${
                      msg.uid === user?.uid
                        ? "bg-violet-600 text-white"
                        : "bg-white/10 text-white"
                    }`}
                  >
                    <div className="text-[10px] sm:text-xs opacity-70 mb-1">
                      {msg.displayName}
                    </div>
                    <div className="text-sm leading-5 break-words whitespace-pre-wrap">{msg.text}</div>
                  </div>
                  {msg.uid === user?.uid && (
                    <img
                      src={
                        msg.photoURL ||
                        "https://www.pngall.com/wp-content/uploads/5/Profile.png"
                      }
                      alt="avatar"
                      className="w-8 h-8 rounded-full"
                    />
                  )}
                </div>
              ))}
            </div>

            {/* Form login / kirim pesan */}
            {user ? (
              <form
                onSubmit={sendMessage}
                className="flex gap-2 flex-wrap sm:flex-nowrap w-full"
              >
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Ketik pesan..."
                  className="flex-1 min-w-0 p-2 rounded-lg bg-white/10 text-white border border-white/10 focus:outline-none focus:ring-2 focus:ring-violet-500"
                />
                <button
                  type="submit"
                  className="bg-violet-600 px-4 py-2 rounded-lg text-white hover:bg-violet-700 w-full sm:w-auto shadow-sm"
                >
                  Send
                </button>
              </form>
            ) : (
              <div className="flex flex-col items-center justify-center gap-4">
                <button
                  onClick={loginWithGoogle}
                  className="flex items-center gap-3 bg-white text-gray-800 px-5 py-2 rounded-full shadow hover:bg-gray-100 transition"
                >
                  <img
                    src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                    alt="Google logo"
                    className="w-5 h-5"
                  />
                  Login with Google
                </button>
                <p className="text-sm text-gray-400">
                  Login untuk mengirim pesan
                </p>
              </div>
            )}
          </div>

          {/* Kolom Music Card */}
          <div className="w-full md:w-1/3">
            <form
              action="https://formsubmit.co/yustiraaf@gmail.com"
              method="POST"
              className="bg-white/5 border border-white/10 backdrop-blur-sm p-8 w-full rounded-xl shadow-lg h-full min-h-[520px]"
              autoComplete="off"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="500"
              data-aos-once="true"
            >
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <label className="font-semibold text-white/90">Full Name</label>
                  <input
                    type="text"
                    name="Name"
                    placeholder="Input Name..."
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-violet-500/40"
                    required
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-semibold text-white/90">Email</label>
                  <input
                    type="email"
                    name="Email"
                    placeholder="Input Email..."
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-violet-500/40"
                    required
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="font-semibold text-white/90">Message</label>
                  <textarea
                    name="message"
                    id="message"
                    cols="45"
                    rows="7"
                    placeholder="Message..."
                    className="w-full h-32 bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/40 resize-none focus:outline-none focus:ring-2 focus:ring-violet-500/40"
                    required
                  ></textarea>
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="font-semibold bg-violet-600 hover:bg-violet-700 p-4 px-6 rounded-full w-full cursor-pointer border border-white/10 text-white transition-colors"
                  >
                    <ShinyText text="Send" disabled={false} speed={3} className="custom-class" />
                  </button>
                </div>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
