import React from 'react';
import Link from '@mui/material/Link';
import TurnedInIcon from '@mui/icons-material/TurnedIn';
import ShareIcon from '@mui/icons-material/Share';
import Stack from '@mui/material/Stack';

import './index.scss';

export default function New_2(props) {
    return (
        <div class="news-2">
            <div className="myblog">
                <div className="image-blog-left">
                    <Link className="tag-a" href="nhung-li-do-day-thu-hut-cua-du-an-chung-cu-new-city.html">
                        <img src={props.new.image} data-lazyload="//bizweb.dktcdn.net/thumb/1024x1024/100/336/794/articles/20180615142644-cd98.jpg?v=1540401640587" title="Những lí do đầy thu hút của dự án chung cư New City" alt={props.new.title} />
                    </Link>
                </div>	
                <div className="content_blog">
                    <span className="time_post">
                        <i className="fa fa-calendar-check"></i>&nbsp;{props.new.date}&nbsp;
                    </span>
                    <Stack sx={{width: '100%'}}>
                        <h3 className="h3">
                            <Link className="tag-a" href="#" title={props.new.title}>{props.new.title}</Link>
                        </h3>
                    </Stack>
                </div>
            </div>
        </div>
    );
}
