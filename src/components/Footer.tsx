const Footer = () => {
  const thisYear = new Date().getFullYear()
  return (
    <footer className="bg-black w-full text-white flex justify-center p-1 text-xs">
      <p>&copy; Copyright All Rights reserved <span>{thisYear}</span></p>
    </footer>
  )
}
export default Footer