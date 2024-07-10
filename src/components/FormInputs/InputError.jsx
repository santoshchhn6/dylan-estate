import { AnimatePresence, motion } from "framer-motion";
import { MdError } from "react-icons/md";

export const InputError = ({ children, isInvalid, inputError }) => {
  return (
    <div className="flex flex-col w-full gap-2">
      {children}
      <AnimatePresence mode="wait" initial={false}>
        {isInvalid && (
          <Error
            message={inputError?.error?.message}
            key={inputError?.error?.message}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

const Error = ({ message }) => {
  return (
    <motion.p
      className="w-fit flex items-center gap-1 px-2 font-semibold text-red-500 bg-red-100 rounded-md"
      {...framer_error}
    >
      <MdError />
      {message}
    </motion.p>
  );
};

const framer_error = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 10 },
  transition: { duration: 0.2 },
};
