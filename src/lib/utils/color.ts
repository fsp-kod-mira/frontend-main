const colors: string[] = [
  "#FF5733", // Red-Orange
  "#FF8D1A", // Bright Orange
  "#FFC300", // Bright Yellow
  "#DAF7A6", // Light Green
  "#C70039", // Red
  "#900C3F", // Dark Red
  "#581845", // Purple
  "#FF5733", // Red-Orange
  "#FF6F61", // Coral
  "#FFD700", // Gold
  "#FF69B4", // Hot Pink
  "#FF1493", // Deep Pink
  "#FF4500", // Orange Red
  "#FF6347", // Tomato
  "#FF7F50", // Coral
  "#FFA07A", // Light Salmon
  "#FFDAB9", // Peach Puff
  "#FFE4B5", // Moccasin
  "#FFFACD", // Lemon Chiffon
  "#E0FFFF", // Light Cyan
  "#40E0D0", // Turquoise
  "#00FFFF", // Aqua
  "#7FFFD4", // Aquamarine
  "#00CED1", // Dark Turquoise
  "#4682B4", // Steel Blue
  "#5F9EA0", // Cadet Blue
  "#6495ED", // Cornflower Blue
  "#1E90FF", // Dodger Blue
  "#4169E1", // Royal Blue
  "#0000FF", // Blue
  "#8A2BE2", // Blue Violet
];

export function selectColorFromHash(numbers: number[]): string {
  const hash = hashArray(numbers);
  const index = hash % colors.length;
  return colors[index];
}

function hashArray(numbers: number[]): number {
  let hash = 0;
  for (const num of numbers) {
    hash = (hash * 31 + num) % 1000000007;
  }
  return hash;
}
