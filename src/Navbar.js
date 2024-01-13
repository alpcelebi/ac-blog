const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>AC-Blog</h1>
            <div className="links">
                <a href="/" >Anasayfa</a>
                <a href="/create" style={{
                    color:'#F66B0E',
                    backgroundColor :'#EFEFEF',
                    borderRadius: '8px'
                }}>Yeni Yazı</a>

            </div>
        </nav>
     );
}
 
export default Navbar;