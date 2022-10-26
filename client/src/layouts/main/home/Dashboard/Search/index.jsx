import React, { useState }  from 'react'
import Collapse from '@mui/material/Collapse';
import './index.scss'

import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';

const Search = () => {
    const [searchAdvanced, setSearchAdvanced] = useState(false);

    const handleClick = () => {
        setSearchAdvanced(!searchAdvanced);
    };

    

    return (
    <div className="search_form_pro">
        <div className="search_group_wrap">
            <div className="group_insearch">
                <div className="group_block group_1 advance_normal">
                    <select name="option1" id="option_1">
                        <option data-link="bán" value="bán">Bán</option>
                        <option data-link="thuê" value="thue">Thuê</option>
                    </select>
                </div>
                <div className="group_block group_2 advance_normal">
                    <div className="wrap_option_search">
                        <div className="input-group search_form">		
                            <input type="text" name="query" value="" placeholder="Tìm dự án, biệt thự... " className="input-group-field st-default-search-input search-text tdq_input" autocomplete="off" />
                        </div>
                        <div className="action_pro" onClick={handleClick}>
                            <p><i className="fa fa-cogs"></i><span className="hidden-xs hidden-sm"><SettingsSuggestIcon sx={{position: 'relative', top: 3, mr: 1, fontSize: 18}} />&nbsp;Nâng cao</span></p>
                        </div>
                    </div>
                    <div className="button_search_sm">
                        <button className="delta_search"><span><i className="fa fa-search"></i><span className="hidden-xs hidden-sm">Tìm kiếm nhanh</span></span></button>
                    </div>
                </div>
                <Collapse in={searchAdvanced} timeout="auto" unmountOnExit>
                    <div className="advance_option offFunction">
                        <div className="option_ advance_1" >
                            <select name="category1" id="category1">
                                <option value="">Tỉnh/thành phố</option>
                                <option value="">Tỉnh/thành phố</option>
                                <option value="">Tỉnh/thành phố</option>
                                <option value="">Tỉnh/thành phố</option>
                                <option value="">Tỉnh/thành phố</option>
                            </select>
                        </div>
                        <div className="option_ advance_2">
                            <select className="subcat" id="category2" name="category2">
                                <option disabled="disabled" selected="selected">Quận/huyện</option>
                                <option disabled="disabled" selected="selected">Quận/huyện</option>
                                <option disabled="disabled" selected="selected">Quận/huyện</option>
                                <option disabled="disabled" selected="selected">Quận/huyện</option>
                            </select>
                        </div>
                        <div className="option_ advance_3">
                            <select className="subcat" id="category3" name="category3">
                                <option disabled="disabled" selected="selected">Kiểu dự án</option>
                                <option disabled="disabled" selected="selected">Kiểu dự án</option>
                                <option disabled="disabled" selected="selected">Kiểu dự án</option>
                                <option disabled="disabled" selected="selected">Kiểu dự án</option>
                            </select>
                        </div>
                        <div className="option_ advance_dientich">
                            <select name="category4" id="category4">
                                <option value="">Diện tích</option>
                                <option value="">Diện tích</option>
                                <option value="">Diện tích</option>
                                <option value="">Diện tích</option>
                            </select>
                        </div>
                    </div>
                </Collapse>
            </div>
        </div>
    </div> 
  )
}

export default Search