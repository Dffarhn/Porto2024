import { motion } from "framer-motion";
import TimelineContent from "@mui/lab/TimelineContent";

const timelineVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export default function TimelineContentComponent({ title, content, images = [] }) {
  return (
    <TimelineContent>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={timelineVariants}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="bg-gray-800 text-white p-6 laptop:p-8 rounded-xl shadow-lg"
      >
        <h4 className="text-2xl font-bold mb-3">{title}</h4>
        <p className="text-lg leading-relaxed">{content}</p>
        {images.length > 0 && (
          <div className="flex gap-4 mt-5 justify-center">
            {images.map((src, index) => (
              <img key={index} className="h-12 w-12 laptop:h-16 laptop:w-16 rounded object-cover shadow-md" src={src} alt="" />
            ))}
          </div>
        )}
      </motion.div>
    </TimelineContent>
  );
}
