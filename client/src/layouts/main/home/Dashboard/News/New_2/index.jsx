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
                        <i className="fa fa-calendar-check"></i>&nbsp;{props.new.date}&nbsp;<span><TurnedInIcon sx={{fontSize: 18, position: 'relative', top: 3}} />&nbsp;2&nbsp; Bình luận</span>
                    </span>
                    <Stack sx={{width: '100%'}}>
                        <h3 className="h3">
                            <Link className="tag-a" href="#" title={props.new.title}>{props.new.title}</Link>
                        </h3>
                        <div className="post_author">
                            <div className="sharing_button">
                                <span><ShareIcon className="icon"></ShareIcon></span>
                                {/* <div className="social-media">
                                    <Link className="tag-a share-facebook" target="_blank" href="http://www.facebook.com/sharer.php?u=https://delta-platinum.mysapo.net/nhung-li-do-day-thu-hut-cua-du-an-chung-cu-new-city" title="Chia sẻ lên Facebook">
                                        <FacebookIcon className="icon"></FacebookIcon>
                                    </Link>
                                    <Link className="tag-a share-twitter" target="_blank" href="http://twitter.com/share?text=Nh%e1%bb%afngl%c3%addo%c4%91%e1%ba%a7ythuh%c3%batc%e1%bb%a7ad%e1%bb%b1%c3%a1nchungc%c6%b0NewCity&amp;url=https://delta-platinum.mysapo.net/nhung-li-do-day-thu-hut-cua-du-an-chung-cu-new-city"  title="Chia sẻ lên Twitter">
                                        <TwitterIcon className="icon"></TwitterIcon>
                                    </Link>
                                    <Link className="tag-a share-google" target="_blank" href="http://plus.google.com/share?url=https://delta-platinum.mysapo.net/nhung-li-do-day-thu-hut-cua-du-an-chung-cu-new-city"  title="+1">
                                        <GoogleIcon className="icon"></GoogleIcon>
                                    </Link>
                                </div> */}
                            </div>
                        </div>
                    </Stack>
                </div>
            </div>
        </div>
    );
}
