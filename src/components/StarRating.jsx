export default function StarRating({ note }) {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(note)) {
      stars.push("★");
    } else {
      stars.push("☆");
    }
  }

  return (
    <div style={{ color: "gold", fontSize: "18px" }}>
      {stars.join(" ")}
    </div>
  );
}