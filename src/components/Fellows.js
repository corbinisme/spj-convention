import {useState,useEffect} from "react";
import axios from "axios";
import { Card, CardBody, CardTitle, CardHeader, Row, Col } from 'reactstrap';
import Banner from "../components/Banner";


export default function Fellows (){
    const [post, getPost] = useState([]);
    const speakerAPI = 'https://mediafest22.org/wp-json/wp/v2/posts?_embed&per_page=100&categories=7';

    useEffect(() => {

        axios.get(speakerAPI)
          .then((response) => {

            let filters = response.data.filter(function(t){return t.categories.includes(7)})

            getPost(filters);
            window.scrollTo(0, 0);
            });
        }, []);
      

    return (
    <div className="presenters woodward"> 

            <Card>
                <CardHeader>
                    <h3>2022 Fellows of the Society</h3>
                </CardHeader>
                <CardBody>
                    <div className="nv-content-wrap entry-content">
                        <p>The&nbsp;<a href="https://www.spj.org/index.asp" target="_blank" rel="noreferrer noopener">
                            <strong>Society of Professional Journalists</strong></a>&nbsp;recognizes&nbsp;<strong>Jerry Green, Roland Martin, John Quiñones, Clarissa Ward</strong>&nbsp;and&nbsp;<strong>Bill Whitaker</strong>&nbsp;as&nbsp;
                            <a href="https://www.spj.org/a-fellowsOTS.asp" target="_blank" rel="noreferrer noopener"><strong>Fellows of the Society</strong></a>, 
                            the highest professional honor awarded by SPJ, for extraordinary contribution to the profession of journalism.</p>

                        <p>The Fellows will be honored at SPJ's&nbsp;<a href="https://mediafest22.org/" target="_blank" rel="noreferrer noopener">
                            <strong>annual&nbsp;</strong></a>convention Oct. 27-30 in Washington, D.C. SPJ launched the Fellows of the Society program in 1948 and has named three or more Fellows every year since.</p>

                        <p>Read more about the Fellows <a href="https://www.spj.org/news.asp?ref=1880" target="_blank" rel="noreferrer noopener">here</a>.</p>
                    </div>
                    <div className="row p-4">
                    {post.map((item) => {
                        return (<Card key={item.id} className="mb-4 presenter_card col-sm-4">
                        
                            <CardBody >
                            <Row>
                                <Col sm={3}>
                                <img src={item.qubely_featured_image_url.medium[0]}  alt={item.title.rendered}/>
                                </Col>
                                <Col sm={9}>
                                <h3>{item.title.rendered}</h3>
                                    <div className="fellowEntry" dangerouslySetInnerHTML={{__html: item.content.rendered}} />

                                </Col>
                            </Row>
                            
                            </CardBody>
                        </Card>);
                    })}
                    </div>
            </CardBody>
           </Card>
    </div>
    );
}