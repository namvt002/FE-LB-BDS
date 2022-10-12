import React from 'react';
import { Link } from 'react-router-dom';

import './index.scss';

export default function New_1(props) {
    return (
        <div className="itemblog">
            <div className="blog_index">
                <div className="myblog">
                    <div className="image-blog-left">
                        <Link className="tag-a" to={`/tin-tuc/${props.new?.seo}`} >
                            <img src={props.new.image} data-lazyload="//bizweb.dktcdn.net/thumb/1024x1024/100/336/794/articles/20180615142644-cd98.jpg?v=1540401640587" title="Những lí do đầy thu hút của dự án chung cư New City" alt={props.new.title} />
                        </Link>
                    </div>
                    <div className="content_blog">
                        <h3 className="h3">
                            <Link to={`/tin-tuc/${props.new?.seo}`} className="tag-a" title={props.new.title}>{props.new.title}</Link>
                        </h3>
                        <div className="summary_item_blog">
                            {props.new.detail}<Link to={`/tin-tuc/${props.new?.seo}`} className="tag-a" title="Đọc tiếp">Đọc tiếp</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
