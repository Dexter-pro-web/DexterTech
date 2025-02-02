import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import '../styles/partner-logo.css'

function Partner_logo(){
    
      useEffect(() => {
        AOS.init({
          once: false,
          duration: 700,
          easing: "ease-in-out",
        });
      }, []);

    return(
        <div
        data-aos="zoom-in"
        data-aos-duration="50000"
        class="partners-section"
      >
        <h2>OUR PARTNERS</h2>
        <div class="logos-container">
          <img src="/logos/cisco.png" alt="Cisco" />
          <img src="/logos/hp.png" alt="HP" />
          <img src="/logos/dell.png" alt="Dell" />
          <img src="/logos/lenovo.png" alt="Lenovo" />
          <img src="/logos/fortinet.png" alt="Fortinet" />
          <img src="/logos/hitachi.png" alt="Hitachi" />
          <img src="/logos/huawei.png" alt="Huawei" />
          <img src="/logos/paloalto.png" alt="Palo Alto" />
          <img src="/logos/trelix.png" alt="Trellix" />
          <img src="/logos/citrix.png" alt="Citrix" />
          <img src="/logos/redhat.png" alt="Red Hat" />
          <img src="/logos/oracle.png" alt="Oracle" />
          <img src="/logos/microsoft.png" alt="Microsoft" />
        </div>
      </div>
    )
}

export default Partner_logo;