import { NavLink, Button } from 'reactstrap';
export default function Hero(props) {


    return (
        <div className="homepage_content mt-4 pt-4">
           <h2>#mediafest22</h2>
            <h3 className="text-bold text-center mb-4 mt-4">
                <span>The  </span>
                <a href="https://www.spj.org" target="_blank" rel="noreferrer noopener">
                Society of Professional Journalists</a>
                <span>, </span> 
                <a href="https://studentpress.org/acp/" target="_blank" rel="noreferrer noopener">Associated Collegiate Press</a> 
                <span> and </span> 
                <a href="http://www.collegemedia.org/" target="_blank" rel="noreferrer noopener">College Media Association</a> 
                <span> are pleased and excited to bring you </span>
                <a href="https://mediafest22.org/" target="_blank" rel="noreferrer noopener">MediaFest22</a>, 
        
        </h3>
        <h4 className="text-bold text-center">
            <span>at the </span>
            <a href="https://www.hyatt.com/en-US/group-booking/WASGH/G-SOPJ" target="_blank" rel="noreferrer noopener">Grand Hyatt Washington</a> 

            <span> in Washington, D.C., Oct. 27-30.</span>
        </h4>
        </div>

    );

}