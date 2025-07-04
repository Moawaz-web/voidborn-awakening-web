import React from 'react';

const characters = [
  {
    name: 'Elara Voss',
    description: 'Human Intelligence Commander – fierce, brilliant, burdened by her past.',
  },
  {
    name: 'Kael Threx',
    description: 'Hybrid warrior of the Nyari – psychic, powerful, carrying a glowing scar.',
  },
  {
    name: 'Varak\'Zin',
    description: 'Fallen warrior – source of the past chaos, enemy of peace.',
  },
  {
    name: 'Lioran Veyne',
    description: 'Leader of United Sectors – manipulator or savior?',
  },
];

const CharacterShowcase = () => {
  return (
    <section className="py-20 px-6 md:px-16 bg-black">
      <h2 className="text-4xl font-bold text-center mb-12">Main Characters</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {characters.map((char, idx) => (
          <div key={idx} className="bg-gray-900 p-6 rounded-2xl shadow-xl hover:scale-105 transform transition-all">
            <h3 className="text-2xl font-semibold mb-2">{char.name}</h3>
            <p className="text-gray-400">{char.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CharacterShowcase;
