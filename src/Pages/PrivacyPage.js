import React, {useEffect} from 'react'
import {PrivacyWrapper, PrivacyLinesIMG, PrivacyTextDiv} from '../styles/PrivacyStyles';
import MediaQuery from 'react-responsive';
import VineyardLogo from '../media/VineyardLogo';
import { LogoContainer } from '../styles/MainStyles';

export const PrivacyPage = () => {

    useEffect(() => {
        document.title = 'Vineyard DAO Privacy Policy';
        window.scrollTo(0, 0);
      }, []);

  return (
    

    <PrivacyWrapper>
        <PrivacyLinesIMG src="https://lh3.googleusercontent.com/L3GBW9OrSASPjZ-La2jLHVmgQ8hyAxMA0rFoCPRXrRHKxiXqvmuYKjphFwp7cNBf1Nw=w2400"/>
        <LogoContainer><VineyardLogo/></LogoContainer >
        <PrivacyTextDiv>
                <MediaQuery maxWidth={480}>
                <div>
                <p>Vineyard DAO, we are committed to protecting<br/>
                the privacy and security of our customers and<br/>
                website visitors. This Privacy Policy explains our<br/>
                practices regarding the collection, use, and<br/>
                 disclosure of information that we collect<br/> 
                through our website and services.</p>
                </div>
                <div>
                <span>Information We Collect</span>
                </div>
                <div>
                <span>We collect information from you when you<br/>
                 use our website, services, or when you provide<br/>
                  information to us directly. This may include:</span>
               </div> 
               <div>
                <p>Personal information, such as your name, email<br/>
                 address, and phone number<br/> 
                 Demographic
                  information, such as your age and gender<br/>
                  
                Technical information, such as your IP address<br/>
                 and browser type<br/> 
                  Usage information, such as how you use our<br/> 
                   website and services<br/>
                 <br/>
                <span>How We Use Your Information</span></p>
                </div>
                <div>
                <span>We use the information we collect from you<br/>
                 to provide, maintain, and improve our website<br/>
                  and services. This may include:</span>
                </div>
                <div>
                    <p>
                        Communicating with you about your account<br/>
                         or our services<br/> 
                         Responding to your inquiries and requests.<br/> 
                        Sending you marketing and promotional<br/>
                         materials<br/> 
                        Improving the functionality and user<br/>
                         experience of our website and services<br/> 
                         Analyzing usage data to identify trends and<br/>
                          improve our services<br/>
                        <br/>
                        <span>
                        Disclosure of Your Information
                        </span>
                    </p>
                </div>
                <div>
                    <span>We will not sell or rent your personal<br/>
                     information to third parties. We may disclose<br/>
                      your information to third parties in the<br/>
                       following circumstances:</span>
                </div>
                <div>
                    <span>With your consent</span>
                    <p>
                    To service providers and partners who assist us<br/>
                     in providing our website and services<br/>
                    In connection with a merger, acquisition, or<br/>
                     other corporate reorganization<br/>
                    As required by law or to comply with legal<br/> process<br/>
                    <br/>
                    <span>Security</span>
                    </p>
                </div>
                <div>
                    <span>We take reasonable measures to protect your information
                     from unauthorized access, use, or<br/> 
                     disclosure. However, no security system is<br/>
                      impenetrable and we cannot guarantee<br/>  
                      the security of our systems 100%.</span>
                </div>
                <div>
                    <span>Changes to This Policy</span>
                </div>
                <div>
                    <p>
                    We may update this Privacy Policy from time to<br/>
                     time to reflect changes in our practices or to<br/>
                    comply with legal requirements. The most<br/>
                    current version of the policy will govern our use<br/>
                     of your information and will be available<br/> 
                    on our website.
                    </p>
                </div>
                </MediaQuery>
            <MediaQuery minWidth={481}>
                <div>
                <p>Vineyard DAO, we are committed to protecting the privacy and security of our customers and website visitors. This Privacy Policy explains our practices regarding the collection, use, and disclosure of information that we collect<br/> 
                through our website and services.</p>
                </div>
                <div>
                <span>Information We Collect</span>
                </div>
                <div>
                <span>We collect information from you when you use our website, services, or when you provide information to us directly. This may include:</span>
               </div> 
               <div>
                <p>Personal information, such as your name, email address, and phone number<br/>
                Demographic information, such as your age and gender<br/>
                Technical information, such as your IP address and browser type<br/>
                Usage information, such as how you use our website and services<br/>
                <br/>
                <span>How We Use Your Information</span>
                </p>
                </div>
                <div>
                <span>We use the information we collect from you to provide, maintain, and improve our website and services. This may include:</span>
                </div>
                <div>
                    <p>
                        Communicating with you about your account or our services<br/>
                        Responding to your inquiries and requests<br/>
                        Sending you marketing and promotional materials<br/>
                        Improving the functionality and user experience of our website and services<br/>
                        Analyzing usage data to identify trends and improve our services<br/>
                        <br/>
                        <span>Disclosure of Your Information<br/></span>
                    </p>
                </div>
                <div>
                    <span>We will not sell or rent your personal information to third parties. We may disclose your information to third parties in the following circumstances:</span>
                </div>
                <div>
                    <span>With your consent</span>
                    <p>
                    To service providers and partners who assist us in providing our website and services<br/>
                    In connection with a merger, acquisition, or other corporate reorganization<br/>
                    As required by law or to comply with legal process<br/>
                    <br/>
                    <span>Security</span>
                    </p>
                </div>
                <div>
                    <span>We take reasonable measures to protect your information from unauthorized access, use, or disclosure. However, no security system is impenetrable and we cannot guarantee the security of our systems 100%.</span>
                </div>
                <div>
                    <span>Changes to This Policy</span>
                </div>
                <div>
                    <p>
                    We may update this Privacy Policy from time to time to reflect changes in our practices or to comply with legal requirements. The most current version of the policy will govern our use of your information and will be available<br/> 
                    on our website.
                    </p>
                </div>
            </MediaQuery>
          
        </PrivacyTextDiv>
        
    </PrivacyWrapper>
  )
}
export default PrivacyPage;