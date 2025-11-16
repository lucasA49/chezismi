export default function Occasions() {
  const items = [
    { title: "Anniversaires", img: "/images/anniversaire.jpg" },
    { title: "Pot de départ", img: "/images/pot.jpg" },
    { title: "Soirée entre amis", img: "/images/friends.jpg" },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {items.map((item, i) => (
          <div key={i} className="text-center">
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-56 object-cover rounded-xl shadow-lg"
            />
            <h3 className="text-2xl font-bold mt-4">{item.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
