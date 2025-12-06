import { motion } from "framer-motion";
import ButtonComponent from "./ui/ButtonComponent";
import CustomSquare from "./ui/CustomSquare";
import decoration from "../assets/imgs/decoration.png";
import phone from "../assets/imgs/phone.png";
import cup from "../assets/icons/cup.svg";
import users from "../assets/imgs/users.png";

function Hero() {
    const handleClick = () => {
    console.log("CTA clicked");
  };
  return (
    <div className="relative  lg:min-h-[calc(100vh-24vh)] flex flex-col lg:flex-row justify-between px-4 sm:px-6 md:px-16 lg:px-[90px] mt-8 sm:mt-10 lg:mt-[58px] gap-12 lg:gap-0">

      {/* Hero: left side */}
      <motion.div className="flex flex-col gap-2.5 lg:max-w-[50%] text-center lg:text-left"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}>
        <h3 className="text-3xl sm:text-4xl 2xl:text-5xl font-bold leading-[150%]">
          Your Next-Gen Smartphone&nbsp;
          <span className="lg:block text-indigo-accent">Starts Here</span>
        </h3>

        <p className="text-base sm:text-lg text-charcoal leading-[150%] max-w-full lg:max-w-[71%] mx-auto lg:mx-0">
          Experience bold designs, fast performance, and next-gen tech choose a phone that keeps up with your world.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-5 justify-center lg:justify-start">
          <ButtonComponent label="Get Started" onClick={handleClick}
            className="relative overflow-hidden bg-[linear-gradient(to_right,#6366F1,#3B82F6)] text-white px-7 py-3 shadow-lg shadow-indigo-500/30 transition-all duration-500 hover:brightness-110 before:absolute before:inset-0 before:bg-linear-to-r before:from-white/10 before:to-transparent before:-translate-x-full before:skew-x-12 hover:before:translate-x-[200%] before:transition-all before:duration-700"
          />
          <ButtonComponent label="Watch Demo" onClick={handleClick}
            className="px-7 py-3 text-slate-dark border border-slate-light transition-all duration-300 hover:text-indigo-600 hover:border-indigo-400 hover:shadow-lg hover:shadow-indigo-300/30"
          />
        </div>
      </motion.div>

      {/* Hero: right side */}
      <motion.div className="relative flex justify-center lg:block"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }} >
        <motion.div className="relative" animate={{ y: [0, -15, 0] }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "loop" }}>
          <CustomSquare className="w-[260px] sm:w-[260px] lg:w-[290px] aspect-260/250 bg-rose-lavender relative">
            <motion.img src={phone} alt="phone"
              className="absolute bottom-0 right-[10%] w-[200px] h-[280px] lg:w-[220px] lg:h-[310px]"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 120, delay: 0.3 }}
            />
          </CustomSquare>
        </motion.div>

        <motion.div className="hidden lg:block absolute -left-[80%] top-[100px] "
          whileHover={{ scale: 1.05}}
          transition={{ duration: 0.3 }}>
          <CustomSquare className="w-[145px] aspect-145/120 bg-pink-mist  border border-rose-lavender px-2 py-5 flex flex-col gap-2 before:content-[''] before:absolute before:top-1/2 before:right-[-59%] before:w-20 before:h-[3px] before:bg-[repeating-linear-gradient(to_right,#D2AEC7,#D2AEC7_6px,transparent_6px,transparent_12px)]">
            <div className="flex items-center justify-center gap-1">
              <img src={cup} alt="cup" />
              <span className="font-bold text-2xl">#1</span>
            </div>
            <span className="text-center text-[12px] text-charcoal">
              The best-selling phone of the year
            </span>
          </CustomSquare>
        </motion.div>

        <motion.div className="hidden lg:block absolute -left-[10%] top-[340px]"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <CustomSquare className="w-[130px] aspect-130/110 bg-[#96ABE2] border border-blue-brand px-2 py-3 flex flex-col gap-0.5 items-center before:content-[''] before:absolute before:top-1/2 before:right-[-62%] before:w-20 before:h-[3px] before:bg-[repeating-linear-gradient(to_right,#96ABE2,#96ABE2_6px,transparent_6px,transparent_12px)] after:content-[''] after:absolute after:-top-[60px] after:-right-[60%] after:w-[3px] after:h-29 after:bg-[repeating-linear-gradient(to_bottom,#96ABE2,#96ABE2_6px,transparent_6px,transparent_12px)]">
            <img src={users} alt="users" className="w-[70px] h-[35px]" />
            <span className="font-bold text-xl">+11M</span>
            <span className="text-[12px] text-charcoal">Satisfied Users</span>
          </CustomSquare>
        </motion.div>
      </motion.div>

      <img src={decoration} alt="decoration" className="absolute bottom-0 left-0 w-32 sm:w-40 lg:w-52 -z-1"/>
    </div>
  );
}

export default Hero;
