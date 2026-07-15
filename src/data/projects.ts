import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "proj-bell-001",
    title: "Bell State Demo",
    description:
      "Create and visualize entangled Bell pairs using a two-qubit circuit.",
    qubits: 2,
    provider: "IBM Quantum",
    createdAt: "2026-01-12T10:00:00.000Z",
    updatedAt: "2026-06-20T09:15:00.000Z",
  },
  {
    id: "proj-grover-002",
    title: "Grover Search",
    description:
      "Prototype an amplitude-amplification search on a 3-qubit oracle.",
    qubits: 3,
    provider: "IBM Quantum",
    createdAt: "2026-02-08T14:20:00.000Z",
    updatedAt: "2026-05-10T14:42:00.000Z",
  },
  {
    id: "proj-teleport-003",
    title: "Quantum Teleportation",
    description: "Teleport an arbitrary qubit state using shared entanglement.",
    qubits: 3,
    provider: "AWS Braket",
    createdAt: "2026-03-01T09:45:00.000Z",
    updatedAt: "2026-04-02T11:03:00.000Z",
  },
  {
    id: "proj-deutsch-004",
    title: "Deutsch Algorithm",
    description:
      "Implementation and benchmarking of Deutsch's algorithm on 1 qubit.",
    qubits: 1,
    provider: "Rigetti",
    createdAt: "2026-03-15T08:30:00.000Z",
    updatedAt: "2026-03-18T08:30:00.000Z",
  },
  {
    id: "proj-shor-005",
    title: "Shor Algorithm",
    description:
      "Classical-quantum hybrid prototype for integer factorization.",
    qubits: 5,
    provider: "IBM Quantum",
    createdAt: "2026-01-25T16:00:00.000Z",
    updatedAt: "2026-02-01T16:20:00.000Z",
  },
];
