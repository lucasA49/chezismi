export default function Hero() {
  return (
    <section
      className="h-[90vh] bg-cover bg-center flex items-center text-white"
      style={{ backgroundImage: "url('/images/hero.jpg')" }}
    >
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
          Chez nous, l'important c'est vous
        </h1>
        <p className="text-lg md:text-xl mb-8 opacity-90">
          Profitez de moments agréables dans un lieu chaleureux et élégant.
        </p>
        <a
          href="#"
          className="inline-block bg-pink-600 hover:bg-pink-700 duration-200 text-white font-semibold px-6 py-3 rounded-lg"
        >
          Réservez maintenant
        </a>
      </div>
    </section>
  );
}
