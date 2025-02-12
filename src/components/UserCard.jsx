import "../styles/usercard.css";

export default function UserCard({ email, name, phone }) {
  return (
    <div className="userCard">
      <div className="username">👤 {name}</div>
      <div>📧{email}</div>
      <div>📞{phone}</div>
    </div>
  );
}
