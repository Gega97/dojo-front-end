const tasks = [
  {
    id: 1,
    name: "Tarea número 1",
    description: "Descripción de tarea 1",
    status: true,
  },
  {
    id: 2,
    name: "Tarea número 2",
    description: "Descripción de tarea 2",
    status: true,
  },
  {
    id: 3,
    name: "Tarea número 3",
    description: "Descripción de tarea 3",
    status: false,
  },
  {
    id: 4,
    name: "Tarea número 4",
    description: "Descripción de tarea 4",
    status: true,
  },
];

const user = [
  {
    name: "Gleiber",
    lastName: "Granado",
    tasks: [
      {
        _id: 1,
      },
      {
        _id: 2,
      },
    ],
    role: 1,
    company: {
      _id: 1,
      name: "Intelix",
    },
  },
  {
    name: "Humberto",
    lastName: "Paez",
    tasks: [
      {
        _id: 3,
      },
      {
        _id: 4,
      },
    ],
  },
];

export default tasks;
