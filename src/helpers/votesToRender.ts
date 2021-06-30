// Takes a votes number input and returns a user friendly votes count
// Example input => 350, output => 350
// Example input => 3500, output => 3.5k
// Example input => 23110, output => 23.1k
export default function VotesToRender (count) {
  const inThousands = count.toString().length > 3;
  if (inThousands) {
    return Math.round(count * 0.001 * 10) / 10 + "k";
  }
  return count;
}
