const people = [
  {
    name: 'Jane Cooper',
    title: 'Regional Paradigm Technician',
    role: 'Admin',
    email: 'janecooper@example.com',
    telephone: '+1-202-555-0170',
    imageUrl:
      'https://altered-prod-eu.s3.amazonaws.com/Art/CORE/CARDS/ALT_CORE_B_OR_21/UNIQUE/JPG/es_ES/5e2c588176ebcec99ffe427f12f05da1.jpg',
  },
  {
    name: 'Jane Cooper',
    title: 'Regional Paradigm Technician',
    role: 'Admin',
    email: 'janecooper@example.com',
    telephone: '+1-202-555-0170',
    imageUrl:
      'https://altered-prod-eu.s3.amazonaws.com/Art/CORE/CARDS/ALT_CORE_B_OR_21/UNIQUE/JPG/es_ES/5e2c588176ebcec99ffe427f12f05da1.jpg',
  },
  {
    name: 'Jane Cooper',
    title: 'Regional Paradigm Technician',
    role: 'Admin',
    email: 'janecooper@example.com',
    telephone: '+1-202-555-0170',
    imageUrl:
      'https://altered-prod-eu.s3.amazonaws.com/Art/CORE/CARDS/ALT_CORE_B_OR_21/UNIQUE/JPG/es_ES/5e2c588176ebcec99ffe427f12f05da1.jpg',
  },
  {
    name: 'Jane Cooper',
    title: 'Regional Paradigm Technician',
    role: 'Admin',
    email: 'janecooper@example.com',
    telephone: '+1-202-555-0170',
    imageUrl:
      'https://altered-prod-eu.s3.amazonaws.com/Art/CORE/CARDS/ALT_CORE_B_OR_21/UNIQUE/JPG/es_ES/5e2c588176ebcec99ffe427f12f05da1.jpg',
  },
]

export default function CardGrid() {
  return (
    <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {people.map((person) => (
        <li key={person.email} className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow">
          <img alt="" src={person.imageUrl} className="shrink-0 bg-gray-300 rounded-lg" />
         
        </li>
      ))}
    </ul>
  )
}
