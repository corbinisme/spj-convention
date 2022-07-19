import {useState,useEffect} from "react";
import axios from "axios";
import { Card, CardBody, CardTitle, CardHeader, Row, Col } from 'reactstrap';
import Banner from "../components/Banner";

export default function Speakers (){
    const [post, getPost] = useState([]);
    const speakerAPI = 'https://mediafest22.org/wp-json/wp/v2/posts';

    useEffect(() => {
        axios.get(speakerAPI)
          .then((response) => {
            console.log(response.data);
            getPost(response.data);
            });
        }, []);
      

    return (
    <div className="container"> 
        <Banner title="Speakers" />
        
        
            
            {post.map((item) => {
                return (<Card key={item.id} className="mb-4">
                   
                    <CardBody >
                <Row>
                    <Col sm={3}>
                    <img src={item.qubely_featured_image_url.medium[0]}  alt={item.title.rendered}/>
                        
                    </Col>
                    <Col sm={9}>
                    <h3>{item.title.rendered}</h3>
                        <div dangerouslySetInnerHTML={{__html: item.excerpt.rendered}} />

                    </Col>
                </Row>
                       
                    </CardBody>
                </Card>);
            })}
           
        
    </div>
    );
}