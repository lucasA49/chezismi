import { NavLink } from "react-router-dom";
import { motion as Motion } from "framer-motion";

export default function CTA() {
  return (
    <Motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      viewport={{ once: true, amount: 0.3 }}
      className="relative w-full h-64 md:h-72 bg-cover bg-center rounded-xl overflow-hidden my-20"
      style={{ backgroundImage: "url('/images/cta-bg.jpg')" }}
    >

      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 flex flex-col md:flex-row justify-between items-center h-full px-8 md:px-16">

        {/* Texte */}
        <Motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.15,
            ease: "easeOut",
          }}
          viewport={{ once: true }}
          className="text-white text-center md:text-left"
        >
          <h2 className="text-3xl font-bold mb-2">Un renseignement ?</h2>
          <p className="text-lg font-medium">
            Vous souhaitez privatiser notre bar ? Contactez-nous
          </p>
        </Motion.div>

        {/* Bouton */}
        <Motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.25,
            ease: "easeOut",
          }}
          viewport={{ once: true }}
        >
          <NavLink
            to="/contact"
            className="mt-6 md:mt-0 bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-lg font-semibold text-lg shadow-lg transition-all hover:scale-[1.03]"
          >
            Réservez
          </NavLink>
        </Motion.div>

      </div>
    </Motion.section>
  );
}
