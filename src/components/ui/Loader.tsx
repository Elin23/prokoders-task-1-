
const Loader = () => {
  return (
    <div className="relative max-w-fit text-charcoal  italic font-semibold text-[50px]">
      <p className="relative z-10 overflow-hidden">
        <span className="loader-text">NEW-GEN</span>
      </p>
      <div className="absolute top-0 left-0 w-full h-1.5 rounded-sm bg-rose-lavender/60 filter blur-[10px] scan"></div>
      <div className="absolute top-0 left-0 w-full h-[5px] rounded-sm bg-pink-mist scan opacity-90 z-10"></div>

      <style>{`
        @keyframes scan {
          0%, 50% { top: 0px; }
          25%, 75% { top: 54px; }
        }
        .scan {
          animation: scan 2s infinite;
          position: absolute;
        }

        @keyframes cut {
          0%, 75% { clip-path: inset(0 0 0 0); }
          25% { clip-path: inset(100% 0 0 0); }
          50% { clip-path: inset(0 0 100% 0); }
        }
        .loader-text {
          display: inline-block;
          animation: cut 2s infinite;
          transition: 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .loader-text:hover {
          color: #fcffdf;
        }
      `}</style>
    </div>
  )
}

export default Loader
