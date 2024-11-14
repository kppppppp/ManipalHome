import React from 'react';
import './css/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-top">
                <nav className="footer-nav">
                    <a href="#home">Home</a>
                    <a href="#about">About Us</a>
                    <a href="#online-manipal-plus">Online Manipal Plus</a>
                    <a href="#blogs">Blogs</a>
                    <a href="#placements">Placements</a>
                </nav>
                {/* <div className="footer-social">
                    <a href="#facebook">FB</a>
                    <a href="#instagram">IG</a>
                    <a href="#linkedin">LI</a>
                    <a href="#youtube">YT</a>
                </div> */}
            </div>
            <hr className="divider" />
            <div className="footer-main">
                <div className="footer-column">
                    <h4>Explore Our Institutions</h4>
                    <p>Manipal Academy of Higher Education</p>
                    <p>Manipal University Jaipur</p>
                    <p>Sikkim Manipal University</p>
                </div>
                <div className="footer-column">
                    <h4>Programs</h4>
                    <h5>Management</h5>
                    <p>Bachelor of Business Administration (BBA)</p>
                    <p>Online MBA Courses</p>
                    <p>Master of Business Administration (MBA for working professionals)</p>
                    <p>Master of Business Administration (MBA)</p>
                    <p>Master of Business Administration (MBA with Dual Specialization)</p>
                    <p>PGCP in Entrepreneurship & Innovation (PGCP E&I)</p>
                </div>
                <div className="footer-column">
                    <h5>Information Technology</h5>
                    <p>Master of Computer Applications (MCA) from Manipal Academy of Higher Education</p>
                    <p>Master of Computer Applications (MCA) from Sikkim Manipal University</p>
                    <p>Master of Computer Applications (MCA) from Manipal University Jaipur</p>
                    <p>Bachelor of Computer Applications (BCA) from Manipal University Jaipur</p>
                </div>
                <div className="footer-column">
                    <h5>Commerce</h5>
                    <p>Master of Commerce (MCOM) from Sikkim Manipal University</p>
                    <p>Master of Commerce (MCOM) from Manipal University Jaipur</p>
                    <p>Bachelor of Commerce (BCOM) from Sikkim Manipal University</p>
                    <p>Bachelor of Commerce (BCOM) from Manipal University Jaipur</p>
                </div>
                <div className="footer-column">
                    <h5>Data Science</h5>
                    <p>MSc in Data Science (MSC-DS)</p>
                </div>
                <div className="footer-column">
                    <h5>Business Analytics</h5>
                    <p>MSc in Business Analytics (MSC-BA)</p>
                    <p>PGCP in Business Analytics (PGCP BA)</p>
                </div>
                <div className="footer-column">
                    <h5>Media and Journalism</h5>
                    <p>Master of Arts in Journalism & Mass Communication (MA JMC)</p>
                </div>
                <div className="footer-column">
                    <h5>Supply Chain</h5>
                    <p>PGCP in Logistics and Supply Chain (PGCP LSC)</p>
                </div>
            </div>
            <hr className="divider" />
            <div className="footer-bottom">
                <p>Email: info@onlinemanipal.com</p>
                <p><a href="#help-center">Help Center</a></p>
            </div>
        </footer>
    );
};

export default Footer;
