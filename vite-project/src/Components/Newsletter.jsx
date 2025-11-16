export default function Newsletter() {
  return (
    <section className="bg-gray-900 text-white py-16">
      <div className="max-w-2xl mx-auto px-6 text-center">

        <h2 className="text-3xl font-bold mb-4">
          Abonnez-vous à notre newsletter
        </h2>

        <p className="mb-6 opacity-80">
          Recevez nos soirées, événements et bons plans.
        </p>

        <form className="flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            placeholder="Votre email *"
            className="flex-1 px-4 py-3 rounded-lg text-black"
            required
          />
          <button
            type="submit"
            className="bg-pink-600 hover:bg-pink-700 px-6 py-3 rounded-lg font-semibold"
          >
            S’abonner
          </button>
        </form>

      </div>
    </section>
  );
}
