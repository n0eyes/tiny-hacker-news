const THREAD_COLORS = [
  "#ff7f50", // 산호
  "#ffd700", // 골드
  "#00ced1", // 청록
  "#ff69b4", // 핫핑크
  "#1e90ff", // 닷져블루
  "#9370db", // 보라
];

const generateThreadColor = (depth: number): string => {
  return THREAD_COLORS[depth % THREAD_COLORS.length];
};

export { generateThreadColor, THREAD_COLORS };
