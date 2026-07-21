export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  text: string;
  createdAt: string;
}

const placeholderResponses = [
  "That sounds like a strong quantum idea. I can help you shape it into a circuit, explain the algorithm, or suggest an optimization.",
  "A useful next step is to map the circuit into qubits, gates, and measurement stages before running a simulation.",
  "Quantum computing often benefits from simplifying the circuit and reducing unnecessary entangling operations.",
  "I can help you reason through Bell states, Grover search, teleportation, or more advanced variational workflows.",
];

export const AIService = {
  sendMessage(message: string): Promise<ChatMessage> {
    const responseText =
      placeholderResponses[
        Math.floor(Math.random() * placeholderResponses.length)
      ];

    return Promise.resolve({
      id: `assistant-${Date.now()}`,
      role: "assistant",
      text: `${responseText}\n\nYou asked: “${message}”`,
      createdAt: new Date().toISOString(),
    });
  },
};

export default AIService;
