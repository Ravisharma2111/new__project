import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import './App.css';
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
import bitcoin from "./bitcoin.jpg";
import Table from "react-bootstrap/Table";
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
import './index.css'
import { SiTwitter } from "react-icons/si";
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
// import { MdOutlineEqualizer } from "react-icons/md";
// import { MdOutlineAccountBalanceWallet } from "react-icons/md";
// import { BsThreeDots } from "react-icons/bs";
import Card from "react-bootstrap/Card";
// import photo from "./faviconm.jpg";

import { MdExpandMore } from "react-icons/md";
import Footer from "./Footer";
import Header from "./Header";
import Section from "./Section";
// import { BiSearchAlt2 } from "react-icons/bi";

function App() {
  return (
    <div className="app1" >
    <Header/>
     <Section/>
      <div className="app2" >
        <Card  className="app3"  >
          <Card.Body  className="app4"   >
          <div className="app5"  >
            <Card.Title className="app6">
              {" "}
              Welcome to the Synchrony App{" "}
            </Card.Title>

            <Card.Subtitle className="mb-2 text-muted app7">
              Synchrony is an on-chain copy-trading and composable indexing
              protocol with a friendly Solana marketplace providing in-depth
              analytics to enable users to research other users wallets and
              their strategies.
             </Card.Subtitle>
            </div>
            <span  className="app8"  >
            <img alt="hello" src={bitcoin} className="app9" />
            </span>
          
         </Card.Body>
        </Card>
      </div>
      <div className="app10" >
      <input  className="app11"  class="icon-rtl"  placeholder="Search"/>
      </div>
      <div  className="app12"  >
        <Container
        className="app13" >
          <Table  className="app14" >
            <thead>
              <tr  className="app15"  >
                <th> Ranking </th>
                <th> Name</th>
                <th> Category </th>
                <th>Market Cap </th>
                <th> Performance 24H </th>
                <th> Twitter Followers </th>
                <th></th>
              </tr>
            </thead>
            <tbody className="app15">
              <tr>
                <td>1</td>
                <td>Launchpad Funding</td>
                <td>Thornton</td>
                <td>$998,588.00</td>
                <td> 8.78 </td>
                <td> 22,983  &nbsp; <SiTwitter/>   </td>

                <td>
                  <MdExpandMore />
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Launchpad Funding</td>
                <td>Thornton</td>
                <td>$998,588.00</td>
                <td> 8.78 </td>
                <td> 22,983  &nbsp; <SiTwitter/>  </td>
                <td>
                  <MdExpandMore />
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>Launchpad Funding</td>
                <td>Thornton</td>
                <td>$998,588.00</td>
                <td> 8.78 </td>
                <td> 22,983  &nbsp; <SiTwitter/>  </td>
                <td>
                  <MdExpandMore />
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>Launchpad Funding</td>
                <td>Thornton</td>
                <td>$998,588.00</td>
                <td> 8.78 </td>
                <td> 22,983  &nbsp; <SiTwitter/>  </td>
                <td>
                  <MdExpandMore />
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Launchpad Funding</td>
                <td>Thornton</td>
                <td>$998,588.00</td>
                <td> 8.78 </td>
                <td> 22,983  &nbsp; <SiTwitter/>  </td>
                <td>
                  <MdExpandMore />
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Launchpad Funding</td>
                <td>Thornton</td>
                <td>$998,588.00</td>
                <td> 8.78 </td>
                <td> 22,983  &nbsp; <SiTwitter/>  </td>
                <td>
                  <MdExpandMore />
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Launchpad Funding</td>
                <td>Thornton</td>
                <td>$998,588.00</td>
                <td> 8.78 </td>
                <td> 22,983  &nbsp; <SiTwitter/>  </td>
                <td>
                  <MdExpandMore />
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Launchpad Funding</td>
                <td>Thornton</td>
                <td>$998,588.00</td>
                <td> 8.78 </td>
                <td> 22,983  &nbsp; <SiTwitter/>  </td>
                <td>
                  <MdExpandMore />
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Launchpad Funding</td>
                <td>Thornton</td>
                <td>$998,588.00</td>
                <td> 8.78 </td>
                <td> 22,983  &nbsp; <SiTwitter/>  </td>
                <td>
                  <MdExpandMore />
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Launchpad Funding</td>
                <td>Thornton</td>
                <td>$998,588.00</td>
                <td> 8.78 </td>
                <td> 22,983  &nbsp; <SiTwitter/>  </td>
                <td>
                  <MdExpandMore />
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Launchpad Funding</td>
                <td>Thornton</td>
                <td>$998,588.00</td>
                <td> 8.78 </td>
                <td> 22,983  &nbsp; <SiTwitter/>  </td>
                <td>
                  <MdExpandMore />
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Launchpad Funding</td>
                <td>Thornton</td>
                <td>$998,588.00</td>
                <td> 8.78 </td>
                <td> 22,983  &nbsp; <SiTwitter/>  </td>
                <td>
                  <MdExpandMore />
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Launchpad Funding</td>
                <td>Thornton</td>
                <td>$998,588.00</td>
                <td> 8.78 </td>
                <td> 22,983  &nbsp; <SiTwitter/>  </td>
                <td>
                  <MdExpandMore />
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Launchpad Funding</td>
                <td>Thornton</td>
                <td>$998,588.00</td>
                <td> 8.78 </td>
                <td> 22,983  &nbsp; <SiTwitter/>  </td>
                <td>
                  <MdExpandMore />
                </td>
              </tr>
            </tbody>
          </Table>
        </Container>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
