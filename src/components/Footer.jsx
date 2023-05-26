import '../styles/Footer.css'

function Footer () {
 const date = new Date().toLocaleDateString("hu")
  return (
    <div className="footer">
      {date}
    </div>
  )
}

export default Footer;