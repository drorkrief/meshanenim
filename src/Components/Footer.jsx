export default function Footer() {
  const dates = new Date();
  return (
    <footer>
      <p className="text-center">Copyright &copy; {dates.getFullYear()}</p>
    </footer>
  );
}
