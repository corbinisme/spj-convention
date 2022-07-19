import React from "react";

import Home from './Home';
import Speakers from './Speakers';
import Travel from './Travel';
import Schedule from './Schedule';
import Covid from './Covid';
import Registration from './Registration';

import HeaderSpa from  "../components/HeaderSpa";
import Footer from  "../components/Footer";

class Single extends React.Component {
    //const [post, getPost] = useState([]);
    //const [page, setPage] = useState('Home');

    state = {
       page: this.props.page,
    }
        

    handleUpdate = (newtext) => {
        this.setState({ page: newtext })
    }

   

    render(){


    const p = this.props.page;
    console.log(this.state.page);

    const componentLookup = {
        home: Home,
        speakers: Speakers,
        registration: Registration,
        covid: Covid,
        travel: Travel,
        schedule: Schedule
    }

    const Comp = componentLookup[this.state.page.toLowerCase()];

    
    return (
        <>
        <HeaderSpa page={this.state.page} updateState={this.handleUpdate} />
        <div className="wrapper">
            <Comp  />
        </div>
        <Footer />
      </>
    );
    }
}

export default Single;