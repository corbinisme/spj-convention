import {useState,useEffect} from "react";
import axios from "axios";
import { Card, CardBody, CardTitle, CardHeader, Row, Col } from 'reactstrap';
import Banner from "../components/Banner";
import {Helmet} from "react-helmet";

export default function Presenters (){
    const [post, getPost] = useState([]);
    const speakerAPI = 'https://mediafest22.org/wp-json/wp/v2/posts';

    useEffect(() => {
        axios.get(speakerAPI)
          .then((response) => {

            let filters = response.data.filter(function(t){return t.categories.includes(22)})
            getPost(filters);
            window.scrollTo(0, 0);
            });
        }, []);
      

    return (
    <div className="container"> 
        <Banner title="Presenters" />
        
        <h2>Opening keynote
</h2>
<h3>Thursday, Oct. 27</h3>
        <div><p>
        For this keynote, each guest will speak individually in a 10-minute TED Talk format
on how journalism can better serve the communities they cover.
<br />
A moderated panel discussion will follow.</p>
        </div>
            
            {post.map((item) => {
                return (<Card key={item.id} className="mb-4">
                   
                    <CardBody >
                <Row>
                    <Col sm={3}>
                    <img src={item.qubely_featured_image_url.medium[0]}  alt={item.title.rendered}/>
                        
                    </Col>
                    <Col sm={9}>
                    <h3>{item.title.rendered}</h3>
                        <div dangerouslySetInnerHTML={{__html: item.content.rendered}} />

                    </Col>
                </Row>
                       
                    </CardBody>
                </Card>);
            })}
           
        
    </div>
    );
}