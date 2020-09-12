import React,{useState, useEffect} from 'react';
import "../sass/components/containerInfo.scss";
import MovieInfo from "./MovieInfo";
import Video from "./Video";
import Similar from "./Similar";
import Hero from "./Hero";
import TvInfo from "./TvInfo";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useParams } from "react-router-dom";
import {info} from "../service/index";

const ContainerInfo = () =>{

    const {id, type} = useParams();

    const [information, setInformation] = useState([]);
    useEffect(() => {
      axios.get(info.replace("[id]",id).replace("[type]", type))  
        .then(res => {
          setInformation(res.data);
        }).catch(error => console.log(error))
       
    },[]);
   
    return(
        <>
        <Hero background={information.backdrop_path}/>
        <Router>
            <div className="menu-container">
                <NavLink to={`/${id}/info`} exact activeClassName="selected" className="tab info">
                    INFO
                </NavLink>
                <NavLink to={`/${id}/reparto`} activeClassName="selected" className="tab vid">
                    REPARTO
                </NavLink>
                <NavLink to="/videos" exact activeClassName="selected" className="tab vid">
                    VIDEOS
                </NavLink>
                <NavLink to="/similar" exact activeClassName="selected" className="tab similar">
                    SIMILARES
                </NavLink>
                <Switch>
                    <Route exact path={`/${type}/${id}/info`} render={() => (
                       type === 'movie' ? <MovieInfo information={information} />:<TvInfo information={information} />
                        
                    )} />
                    {/* <Route path={`/:${id}/reparto`} render={(props) => (
                        // <Cast id={information.id} />
                    )}/> */}
                    <Route path="/videos" component={Video} />
                    <Route path="/similar" component={Similar} />
                </Switch>
            </div>
        </Router>
        </>
    )
}

export default ContainerInfo;