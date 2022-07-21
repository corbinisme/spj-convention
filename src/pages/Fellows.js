import {useState,useEffect} from "react";
import axios from "axios";
import { Card, CardBody, CardTitle, CardHeader, Row, Col } from 'reactstrap';
import Banner from "../components/Banner";
import {Helmet} from "react-helmet";

export default function Fellows (){
    const [post, getPost] = useState([]);
    const speakerAPI = 'https://mediafest22.org/wp-json/wp/v2/posts';

    useEffect(() => {
        axios.get(speakerAPI)
          .then((response) => {

            let filters = response.data.filter(function(t){return t.categories.includes(7)})

            getPost(filters);
            window.scrollTo(0, 0);
            });
            
        }, []);
      
        
    return (
    <div className="container"> 
        <Banner title="2022 Fellows" />
        
        
            
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

                    <Helmet>
                        <meta charSet="utf-8" />
                        <title>MediaFest22 | Presenters</title>
                        <meta property="og:description" content="" />
                        <meta name="description" content="" />
                    </Helmet>
           
        
    </div>
    );
}