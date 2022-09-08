import {useState,useEffect} from "react";
import axios from "axios";
import { Card, CardBody, CardTitle, CardHeader, Row, Col } from 'reactstrap';
import Banner from "../components/Banner";


export default function Woodward (){
    const [post, getPost] = useState([]);
    const speakerAPI = 'https://mediafest22.org/wp-json/wp/v2/posts?_embed&per_page=100';

    useEffect(() => {

        axios.get(speakerAPI)
          .then((response) => {

            let filters = response.data.filter(function(t){return t.categories.includes(30)})

            getPost(filters);
            window.scrollTo(0, 0);
            });
        }, []);
      

    return (
    <div className="presenters woodward"> 

        <h3>Friday, Oct. 28</h3>


            {post.map((item) => {
                return (<Card key={item.id} className="mb-4 presenter_card">
                   
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